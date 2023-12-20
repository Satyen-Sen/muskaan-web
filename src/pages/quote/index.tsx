import React, { useState, useEffect } from 'react'
import { postDataToApi } from '../../api/api'
import {
    Box,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Slide,
    Snackbar,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import PrimaryTextField from '../../components/PrimaryTextField'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import SelectOrigin from '@/components/api/SelectOrigin'
import SelectDestination from '@/components/api/SelectDestination'

// date -picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import PrimaryButton from '@/components/PrimaryButton'
import LayoutHeaderLess from '../LayoutHeaderLess'

let currentDate = new Date()

interface Port {
    id: number
    name: string
}

export default function Home() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:599px)')

    const [containerType, setContainerType] = React.useState('')
    const [weightType, setWeightType] = React.useState('')
    const [containerCount, setContainerCount] = React.useState(0)

    const handleChange = (event: SelectChangeEvent) => {
        setContainerType(event.target.value as string)
    }
    const handleSetWeight = (event: SelectChangeEvent) => {
        setWeightType(event.target.value as string)
    }

    const increaseCount = () => {
        setContainerCount(containerCount + 1)
    }
    const decreaseCount = () => {
        if (containerCount > 0) {
            setContainerCount(containerCount - 1)
        }
    }
    const resetCount = () => {
        setContainerCount(0)
    }
    const onClick = () => {
        setOpen(true)
    }

    const [open, setOpen] = React.useState(false)

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const [originLocation, setOriginLocation] = useState<Port | null>(null)
    const [destinationLocation, setDestinationLocation] = useState<Port | null>(null)
    const originPort = originLocation?.id
    const destinationPort = destinationLocation?.id

    return (
        <LayoutHeaderLess>
            <Typography
                variant='h3'
                textAlign='start'
                sx={{
                    color: '#262626',
                    mt: theme.spacing(8),
                    mb: theme.spacing(2),
                    width: { sm: '40rem', md: '100%' },
                    mx: 'auto',
                }}
            >
                Booking Details
            </Typography>
            <Paper sx={{ borderRadius: '16px', p: theme.spacing(1), width: { sm: '40rem', md: '100%' }, mx: 'auto' }}>
                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600 }}>
                    Location Information
                </Typography>

                <Box sx={{ my: theme.spacing(1) }}>
                    <Grid container spacing={mobileMode ? 0 : 2}>
                        <Grid item xs={12} md={6}>
                            <SelectOrigin onSelectOrigin={setOriginLocation} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SelectDestination onSelectDestination={setDestinationLocation} />
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600, mt: theme.spacing(2) }}>
                    Container Details
                </Typography>

                <Box sx={{ my: theme.spacing(1) }}>
                    <Grid container spacing={mobileMode ? 0 : 2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ mb: theme.spacing(1) }}>
                                <InputLabel>Container Type</InputLabel>
                                <FormControl fullWidth>
                                    <Select
                                        value={containerType}
                                        onChange={handleChange}
                                        displayEmpty
                                        renderValue={
                                            containerType !== ''
                                                ? () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{
                                                              color: '#03122580',
                                                              fontWeight: 600,
                                                              ml: '-0.25rem',
                                                          }}
                                                      >
                                                          {containerType}
                                                      </Typography>
                                                  )
                                                : () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{
                                                              color: '#03122580',
                                                              fontWeight: 600,
                                                              ml: '-0.25rem',
                                                          }}
                                                      >
                                                          Select Container Type
                                                      </Typography>
                                                  )
                                        }
                                    >
                                        <MenuItem value=''>
                                            <em>Select Container Type</em>
                                        </MenuItem>
                                        <MenuItem value='20 GP High Cube'>20 GP High Cube</MenuItem>
                                        <MenuItem value='40 GP High Cube'>40 GP High Cube</MenuItem>
                                        <MenuItem value='40 HC High Cube'>40 HC High Cube</MenuItem>
                                        <MenuItem value='20 RH Reeger'>20 RH Reeger</MenuItem>
                                        <MenuItem value='40 RH Reeger'>40 RH Reeger</MenuItem>
                                        <MenuItem value='20 OH Open Top'>20 OH Open Top</MenuItem>
                                        <MenuItem value='20 OT Open Top'>20 OT Open Top</MenuItem>
                                        <MenuItem value='40 OT Open Top'>40 OT Open Top</MenuItem>
                                        <MenuItem value='20 FR Flat Rock'>20 FR Flat Rock</MenuItem>
                                        <MenuItem value='40 FR Flat Rock'>40 FR Flat Rock</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InputLabel>Container Quantity</InputLabel>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        backgroundColor: '#E5E7E9',
                                        borderRadius: '8px',
                                        height: '2.6rem',
                                        pt: '0.1rem',
                                        width: '85%',
                                        px: theme.spacing(0.5),
                                    }}
                                >
                                    <IconButton onClick={decreaseCount}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography sx={{ color: '#03122580', fontWeight: 600 }}>{containerCount}</Typography>
                                    <IconButton onClick={increaseCount}>
                                        <AddIcon />
                                    </IconButton>
                                </Box>

                                <IconButton onClick={resetCount}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} sx={{ mt: '0.5rem' }}>
                            <InputLabel>Weight per Container</InputLabel>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ backgroundColor: '#0312251A', borderRadius: '8px', width: '30%' }}>
                                    <TextField
                                        variant='standard'
                                        placeholder='Weight'
                                        InputProps={{ disableUnderline: true }}
                                        inputProps={{
                                            style: {
                                                padding: '0.5rem',
                                                textAlign: 'center',
                                            },
                                        }}
                                        sx={{ input: { color: '#031225', fontWeight: 600 } }}
                                    />
                                </Box>

                                <FormControl sx={{ width: '10rem' }}>
                                    <Select
                                        value={weightType}
                                        onChange={handleSetWeight}
                                        displayEmpty
                                        renderValue={
                                            weightType !== ''
                                                ? () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{
                                                              color: '#03122580',
                                                              fontWeight: 600,
                                                              ml: '-0.25rem',
                                                          }}
                                                      >
                                                          {weightType}
                                                      </Typography>
                                                  )
                                                : () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{
                                                              color: '#03122580',
                                                              fontWeight: 600,
                                                              ml: '-0.25rem',
                                                          }}
                                                      >
                                                          Select kg/lbs
                                                      </Typography>
                                                  )
                                        }
                                    >
                                        <MenuItem value=''>
                                            <em>Select Weight Type</em>
                                        </MenuItem>
                                        <MenuItem value='kg'>kg</MenuItem>
                                        <MenuItem value='lbs'>lbs</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600, mt: theme.spacing(2) }}>
                    Customer Status
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', my: theme.spacing(1) }}>
                    <FormControl>
                        {mobileMode ? (
                            <RadioGroup>
                                <FormControlLabel
                                    value='Price Ownere'
                                    control={<Radio />}
                                    label={
                                        <>
                                            <Typography variant='h6' sx={{ color: '#003A9B' }}>
                                                Price Owner
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: '#031225' }}>
                                                Booking as the price owner
                                            </Typography>
                                        </>
                                    }
                                />
                                <FormControlLabel
                                    value='Agent'
                                    control={<Radio />}
                                    label={
                                        <>
                                            <Typography variant='h6' sx={{ color: '#003A9B' }}>
                                                Agent
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: '#031225' }}>
                                                Booking on behalf of the price owner
                                            </Typography>
                                        </>
                                    }
                                />
                            </RadioGroup>
                        ) : (
                            <RadioGroup row>
                                <FormControlLabel
                                    value='Price Ownere'
                                    control={<Radio />}
                                    label={
                                        <>
                                            <Typography variant='h6' sx={{ color: '#003A9B' }}>
                                                Price Owner
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: '#031225' }}>
                                                Booking as the price owner
                                            </Typography>
                                        </>
                                    }
                                />
                                <FormControlLabel
                                    value='Agent'
                                    control={<Radio />}
                                    label={
                                        <>
                                            <Typography variant='h6' sx={{ color: '#003A9B' }}>
                                                Agent
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: '#031225' }}>
                                                Booking on behalf of the price owner
                                            </Typography>
                                        </>
                                    }
                                    sx={{ ml: theme.spacing(1) }}
                                />
                            </RadioGroup>
                        )}
                    </FormControl>
                </Box>

                <Box sx={{ mt: theme.spacing(2) }}>
                    <Grid container spacing={mobileMode ? 0 : 2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600 }}>
                                Cargo Type
                            </Typography>
                            <Box sx={{ mt: theme.spacing(0.5) }}>
                                <PrimaryTextField />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600 }}>
                                Date
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: theme.spacing(0.75) }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                                    <DatePicker
                                        defaultValue={dayjs(currentDate)}
                                        closeOnSelect
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                height: '2.4rem',
                                                width: mobileMode ? '9rem' : '12rem',
                                                backgroundColor: '#0312251A',
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                color: '#6D7987',
                                            },
                                        }}
                                        format='DD-MM-YYYY'
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: theme.spacing(1) }}>
                    <PrimaryButton text='Get Quote' onClick={onClick} />
                    <Snackbar
                        open={open}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        message='Quotation successfully Submitted'
                        action={
                            <IconButton size='small' color='inherit' onClick={handleClose}>
                                <CloseIcon fontSize='small' />
                            </IconButton>
                        }
                        TransitionComponent={(props) => <Slide {...props} direction='right' />}
                    />
                </Box>
            </Paper>
        </LayoutHeaderLess>
    )
}
