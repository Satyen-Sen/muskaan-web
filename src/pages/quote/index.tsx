import React, { useState, useEffect, ChangeEvent } from 'react'
import { postDataToApi } from '../../api/api'
import { Box, Grid, IconButton, InputLabel, Paper, Slide, Snackbar, TextField, Typography, useMediaQuery } from '@mui/material'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { useTheme } from '@mui/material/styles'
import PrimaryTextField from '../../components/PrimaryTextField'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import SelectOrigin from '@/components/api/SelectOrigin'
import SelectDestination from '@/components/api/SelectDestination'
import SelectSearch from '@/components/api/SelectSearch'

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

    const [originLocation, setOriginLocation] = useState<Port | null>(null)
    const [destinationLocation, setDestinationLocation] = useState<Port | null>(null)
    const [containerSize, setContainerSize] = useState<string | null>('')
    const [containerType, setContainerType] = useState<string | null>('')
    const [containerCount, setContainerCount] = useState(0)
    const [weightValue, setWeightValue] = useState<number | undefined>(undefined)
    const [weightType, setWeightType] = useState<string | null>('')
    const [customerType, setCustomerType] = useState<string | null>('')
    const [cxName, setCxName] = useState<string>('')
    const [emailList, setEmailList] = useState<string>('')
    const [commodity, setCommodity] = useState<string>('')
    const [isHazardous, setIsHazardous] = useState(false)
    const [unCode, setUnCode] = useState<string>('')
    const [imcoCode, setImcoCode] = useState<string>('')
    const [packageGroup, setPackageGroup] = useState<string>('')
    const [psnCode, setPsnCode] = useState<string>('')
    const [isOOG, setIsOOG] = useState(false)
    const [length, setLength] = useState<string>('')
    const [breadth, setBreadth] = useState<string>('')
    const [height, setHeight] = useState<string>('')
    const [isTCR, setIsTCR] = useState(false)
    const [temp, setTemp] = useState<string>('')
    const [ventilation, setVentilation] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState(dayjs(currentDate))

    const decreaseContainerQuantity = () => {
        if (containerCount > 0) setContainerCount(containerCount - 1)
    }
    const handleHazardous = (event: ChangeEvent<HTMLInputElement>) => {
        setIsHazardous(event.target.checked)
    }
    const handleOOG = (event: ChangeEvent<HTMLInputElement>) => {
        setIsOOG(event.target.checked)
    }
    const handleTCR = (event: ChangeEvent<HTMLInputElement>) => {
        setIsTCR(event.target.checked)
    }
    const handleDateChange = (value: dayjs.Dayjs | null) => {
        if (value !== null) {
            setSelectedDate(value)
        }
    }

    const formData = {
        origin: originLocation?.id,
        destination: destinationLocation?.id,
        container_details: [
            {
                type: containerSize,
                size: containerType,
                quantity: containerCount,
                weight: weightValue,
                unit: weightType,
            },
        ],
        customer_type: customerType,
        customer_name: cxName,
        email: emailList,
        commodity: commodity,
        is_haz: isHazardous,
        un_no: isHazardous ? unCode : null,
        imco: isHazardous ? imcoCode : null,
        package_group: isHazardous ? packageGroup : null,
        psn: isHazardous ? psnCode : null,
        is_oog: isOOG,
        length: isOOG ? length : null,
        breadth: isOOG ? breadth : null,
        height: isOOG ? height : null,
        is_temp: isTCR,
        temp: isTCR ? temp : null,
        ventilation: isTCR ? ventilation : null,
        cargo_date: selectedDate,
    }

    const [successSnackbar, setSuccessSnackbar] = useState(false)
    const [errorSnackbar, setErrorSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const openSuccessSnackbar = () => {
        setSuccessSnackbar(true)
    }
    const openErrorSnackbar = (message: string) => {
        setSnackbarMessage(message)
        setErrorSnackbar(true)
    }
    const closeSuccessSnackbar = () => {
        setSuccessSnackbar(false)
    }
    const closeErrorSnackbar = () => {
        setErrorSnackbar(false)
    }

    const handleFormSubmit = async () => {
        try {
            const response = await postDataToApi('api/quote-request/', formData)
            openSuccessSnackbar()
            // form reset
            setOriginLocation(null)
            setDestinationLocation(null)
            setContainerSize('')
            setContainerType('')
            setWeightValue(undefined)
            setWeightType('')
            setCustomerType('')
            setCxName('')
            setEmailList('')
            setCommodity('')
            setIsHazardous(false)
            setUnCode('')
            setImcoCode('')
            setPsnCode('')
            setPackageGroup('')
            setIsOOG(false)
            setLength('')
            setBreadth('')
            setHeight('')
            setIsTCR(false)
            setTemp('')
            setVentilation('')
            setSelectedDate(dayjs(currentDate))
        } catch (error) {
            // openErrorSnackbar(error as string)
            openErrorSnackbar(JSON.stringify(error))
        }
    }

    return (
        <LayoutHeaderLess pageTitle='Send Your Quotation'>
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
                        <Grid item xs={12} sm={6} md={3}>
                            <InputLabel>Container Size</InputLabel>
                            <SelectSearch
                                value={containerSize}
                                onChange={(event, newValue) => setContainerSize(newValue)}
                                options={['20', '40']}
                                placeholder='Select Container Size'
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ mb: theme.spacing(1) }}>
                                <InputLabel>Container Type</InputLabel>
                                <SelectSearch
                                    value={containerType}
                                    onChange={(event, newValue) => setContainerType(newValue)}
                                    options={['RF', 'HD', 'TK', 'OT', 'FR', 'GP', 'HC']}
                                    placeholder='Select Container Type'
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
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
                                    <IconButton onClick={decreaseContainerQuantity}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography sx={{ color: '#03122580', fontWeight: 600 }}>{containerCount}</Typography>
                                    <IconButton onClick={() => setContainerCount(containerCount + 1)}>
                                        <AddIcon />
                                    </IconButton>
                                </Box>

                                <IconButton onClick={() => setContainerCount(0)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={1.75}>
                            <InputLabel> Container Weight</InputLabel>
                            <Box sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}>
                                <TextField
                                    variant='standard'
                                    placeholder='Enter Weight'
                                    InputProps={{ disableUnderline: true }}
                                    inputProps={{
                                        style: {
                                            padding: '0.5rem',
                                            paddingLeft: '0.75rem',
                                        },
                                    }}
                                    sx={{ input: { color: '#031225', fontWeight: 600 } }}
                                    fullWidth
                                    value={weightValue}
                                    onChange={(event) => setWeightValue(Number(event.target.value))}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2.25}>
                            <InputLabel>Unit of Weight</InputLabel>
                            <SelectSearch
                                value={weightType}
                                onChange={(event, newValue) => setWeightType(newValue)}
                                options={['KG', 'LBS']}
                                placeholder='Select Unit'
                                capitalize
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600, mt: theme.spacing(2) }}>
                    Customer Details
                </Typography>

                <Box sx={{ my: theme.spacing(1) }}>
                    <Grid container spacing={mobileMode ? 0 : 2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <InputLabel>Customer Name</InputLabel>
                            <TextField
                                sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                size='small'
                                placeholder='Enter Customer Name'
                                fullWidth
                                value={cxName}
                                onChange={(event) => setCxName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InputLabel>Customer Type</InputLabel>
                            <SelectSearch
                                value={customerType}
                                onChange={(event, newValue) => setCustomerType(newValue)}
                                options={['FORWARDER', 'CUSTOM BROKER', 'SHIPPER', 'CONSIGNEE', 'TRANSPORTER']}
                                placeholder='Select Customer Type'
                                capitalize
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Email Addresses</InputLabel>
                            <TextField
                                sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                size='small'
                                placeholder='You may enter multiple Email IDs separated by commas'
                                fullWidth
                                value={emailList}
                                onChange={(event) => setEmailList(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600, mt: theme.spacing(2) }}>
                    Cargo Details
                </Typography>

                <Box sx={{ mt: theme.spacing(1), mb: theme.spacing(2) }}>
                    <Grid container spacing={mobileMode ? 0 : 2}>
                        <Grid item xs={9} sm={6}>
                            <InputLabel>Commodity</InputLabel>
                            <TextField
                                sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                size='small'
                                placeholder='Enter commodity of transport'
                                fullWidth
                                value={commodity}
                                onChange={(event) => setCommodity(event.target.value)}
                            />
                        </Grid>

                        <Grid item xs={6} md={isOOG && isTCR ? 6 : isOOG || isTCR ? 3 : 1.5}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', height: '100%' }}>
                                <FormControlLabel
                                    control={<Checkbox checked={isHazardous} onChange={handleHazardous} />}
                                    label={<InputLabel>Hazardous</InputLabel>}
                                />
                            </Box>
                        </Grid>

                        {isOOG ? (
                            <></>
                        ) : (
                            <Grid item xs={6} md={2}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', height: '100%' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={isOOG} onChange={handleOOG} />}
                                        label={<InputLabel>Over-Sized Cargo</InputLabel>}
                                    />
                                </Box>
                            </Grid>
                        )}

                        {isTCR ? (
                            <></>
                        ) : (
                            <Grid item xs={6} md={isOOG ? 3 : 2.5}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', height: '100%' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={isTCR} onChange={handleTCR} />}
                                        label={<InputLabel>{isOOG || isTCR ? 'Temperarture' : 'Temp'} Control Required</InputLabel>}
                                    />
                                </Box>
                            </Grid>
                        )}

                        {isHazardous === true && (
                            <>
                                <Grid item xs={6} sm={6} md={3}>
                                    <InputLabel>UN No</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter UN No'
                                        fullWidth
                                        value={unCode}
                                        onChange={(event) => setUnCode(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={3}>
                                    <InputLabel>IMCO</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter IMCO No. '
                                        fullWidth
                                        value={imcoCode}
                                        onChange={(event) => setImcoCode(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={3}>
                                    <InputLabel>Package Group</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter Package Group'
                                        fullWidth
                                        value={packageGroup}
                                        onChange={(event) => setPackageGroup(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6} md={3}>
                                    <InputLabel>PSN</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter PSN No. '
                                        fullWidth
                                        value={psnCode}
                                        onChange={(event) => setPsnCode(event.target.value)}
                                    />
                                </Grid>
                            </>
                        )}

                        {isOOG === true && (
                            <>
                                <Grid item xs={6} sm={3}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', height: '100%' }}>
                                        <FormControlLabel
                                            control={<Checkbox checked={isOOG} onChange={handleOOG} />}
                                            label={<InputLabel>Over-Sized Cargo</InputLabel>}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel>Length</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter length in mm'
                                        fullWidth
                                        value={length}
                                        onChange={(event) => setLength(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel>Breadth</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter breadth in mm'
                                        fullWidth
                                        value={breadth}
                                        onChange={(event) => setBreadth(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <InputLabel>Height</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter height in mm'
                                        fullWidth
                                        value={height}
                                        onChange={(event) => setHeight(event.target.value)}
                                    />
                                </Grid>
                            </>
                        )}

                        {isTCR === true && (
                            <>
                                <Grid item xs={6} md={4}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', height: '100%' }}>
                                        <FormControlLabel
                                            control={<Checkbox checked={isTCR} onChange={handleTCR} />}
                                            label={<InputLabel>Temperarture Control Required</InputLabel>}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <InputLabel>Temperature</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter Temperature in °C'
                                        fullWidth
                                        value={temp}
                                        onChange={(event) => setTemp(event.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <InputLabel>Ventilation</InputLabel>
                                    <TextField
                                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                        size='small'
                                        placeholder='Enter Percentage of Ventilation'
                                        fullWidth
                                        value={ventilation}
                                        onChange={(event) => setVentilation(event.target.value)}
                                    />
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', my: theme.spacing(1) }}>
                    <Box>
                        <InputLabel>Cargo Readyness Date</InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                            <DatePicker
                                closeOnSelect
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '2.4rem',
                                        width: '20rem',
                                        backgroundColor: '#0312251A',
                                        borderRadius: '8px',
                                        fontSize: '1rem',
                                        color: '#6D7987',
                                    },
                                }}
                                format='DD-MM-YYYY'
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </LocalizationProvider>
                    </Box>
                    <PrimaryButton text='Get Quote' onClick={handleFormSubmit} />
                </Box>
                <Snackbar
                    open={successSnackbar}
                    autoHideDuration={4000}
                    onClose={closeSuccessSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    TransitionComponent={(props) => <Slide {...props} direction='right' />}
                >
                    <MuiAlert elevation={6} variant='filled' severity='success'>
                        Quotation submitted successfully
                    </MuiAlert>
                </Snackbar>
                <Snackbar
                    open={errorSnackbar}
                    autoHideDuration={4000}
                    onClose={closeErrorSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    TransitionComponent={(props) => <Slide {...props} direction='right' />}
                >
                    <MuiAlert elevation={6} variant='filled' severity='error'>
                        {snackbarMessage}
                    </MuiAlert>
                </Snackbar>
            </Paper>
        </LayoutHeaderLess>
    )
}
