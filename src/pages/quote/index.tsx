import React, { useState, ChangeEvent } from 'react'
import { postDataToApi } from '../../api/api'
import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    Paper,
    Slide,
    Snackbar,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { useTheme } from '@mui/material/styles'
import SelectOrigin from '@/components/api/SelectOrigin'
import SelectDestination from '@/components/api/SelectDestination'
import SelectSearch from '@/components/api/SelectSearch'
import PrimaryButton from '@/components/PrimaryButton'
import LayoutHeaderLess from '../LayoutHeaderLess'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
// date -picker
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

interface Port {
    id: number
    name: string
}

interface ContainerDetails {
    type: string | null
    size: string | null
    quantity: number | undefined
    weight: number | undefined
    unit: string | null
}

export default function Home() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:599px)')

    const [originLocation, setOriginLocation] = useState<Port | null>(null)
    const [destinationLocation, setDestinationLocation] = useState<Port | null>(null)
    const [isHazardous, setIsHazardous] = useState(false)
    const [isOOG, setIsOOG] = useState(false)
    const [isTCR, setIsTCR] = useState(false)
    const handleHazardous = (event: ChangeEvent<HTMLInputElement>) => {
        setIsHazardous(event.target.checked)
    }
    const handleOOG = (event: ChangeEvent<HTMLInputElement>) => {
        setIsOOG(event.target.checked)
    }
    const handleTCR = (event: ChangeEvent<HTMLInputElement>) => {
        setIsTCR(event.target.checked)
    }
    const [formData, setFormData] = useState({
        origin: null as Port | null,
        destination: null as Port | null,
        containerDetails: [
            {
                type: '',
                size: '',
                quantity: undefined,
                weight: undefined,
                unit: '',
            },
        ] as ContainerDetails[],
        customer_type: '',
        customer_name: '',
        email: '',
        commodity: '',
        is_haz: false as boolean,
        un_no: '',
        imco: '',
        package_group: '',
        psn: '',
        is_oog: false as boolean,
        length: '',
        breadth: '',
        height: '',
        is_temp: false as boolean,
        temp: '',
        ventilation: '',
        cargo_date: null as dayjs.Dayjs | null,
    })

    const handleFormChange = (field: keyof typeof formData, value: string | number | boolean | Port | null | dayjs.Dayjs) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }))
    }

    const handleContainerDetailsChange = (index: number, field: keyof ContainerDetails, value: string | null) => {
        setFormData((prevData) => {
            const newContainerDetails = [...prevData.containerDetails]
            newContainerDetails[index] = { ...newContainerDetails[index], [field]: value }
            return { ...prevData, containerDetails: newContainerDetails }
        })
    }

    const deleteContainerData = (index: number) => {
        if (index == 0) {
            setFormData((prevData) => {
                const newContainerDetails = [...prevData.containerDetails]
                newContainerDetails[index] = {
                    type: '',
                    size: '',
                    quantity: undefined,
                    weight: undefined,
                    unit: '',
                }
                return { ...prevData, containerDetails: newContainerDetails }
            })
        } else {
            setFormData((prevData) => {
                const newContainerDetails = [...prevData.containerDetails]
                newContainerDetails.pop()
                return { ...prevData, containerDetails: newContainerDetails }
            })
        }
    }

    const addMoreData = () => {
        setFormData((prevData) => {
            const newContainerDetails = [
                ...prevData.containerDetails,
                {
                    type: '',
                    size: '',
                    quantity: undefined,
                    weight: undefined,
                    unit: '',
                },
            ]
            return { ...prevData, containerDetails: newContainerDetails }
        })
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
            const updatedFormData = {
                ...formData,
                origin: originLocation?.id,
                destination: destinationLocation?.id,
                is_haz: isHazardous,
                is_oog: isOOG,
                is_temp: isTCR,
            }
            const response = await postDataToApi('api/quote-request/', updatedFormData)
            const responseData = await response.json()
            if (response.status === 200) {
                openSuccessSnackbar()
            } else {
                openErrorSnackbar(`Error : ${response.status}`)
            }
            console.log(responseData)
            setFormData({
                origin: null as Port | null,
                destination: null as Port | null,
                containerDetails: [
                    {
                        type: '',
                        size: '',
                        quantity: undefined,
                        weight: undefined,
                        unit: '',
                    },
                ] as ContainerDetails[],
                customer_type: '',
                customer_name: '',
                email: '',
                commodity: '',
                is_haz: false,
                un_no: '',
                imco: '',
                package_group: '',
                psn: '',
                is_oog: false,
                length: '',
                breadth: '',
                height: '',
                is_temp: false,
                temp: '',
                ventilation: '',
                cargo_date: null as dayjs.Dayjs | null,
            })
        } catch (error) {}
    }

    React.useEffect(() => {
        console.log('Type =>', typeof formData.customer_type)
        console.log('formData.customer_type', formData.customer_type)
    }, [formData.customer_type])
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
                Get Quote
            </Typography>

            <Paper sx={{ borderRadius: '16px', p: theme.spacing(1), width: { sm: '40rem', md: '100%' }, mx: 'auto' }}>
                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600 }}>
                    Location Information
                </Typography>

                <Box sx={{ my: theme.spacing(1) }}>
                    <Grid container spacing={mobileMode ? 1 : 2}>
                        <Grid item xs={12} md={6}>
                            <SelectOrigin onSelectOrigin={setOriginLocation} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SelectDestination onSelectDestination={setDestinationLocation} />
                        </Grid>
                    </Grid>
                </Box>

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#262626', fontWeight: 600, mt: theme.spacing(2), mb: theme.spacing(1) }}
                >
                    Container Details
                </Typography>
                {formData.containerDetails.map((container, index) => (
                    <Grid container spacing={mobileMode ? 1 : 2}>
                        <Grid item xs={6} md={2}>
                            <InputLabel>Container Size</InputLabel>
                            <SelectSearch
                                value={container.size}
                                onChange={(event, value) => handleContainerDetailsChange(index, 'size', value)}
                                options={['20', '40']}
                                placeholder='Select Size'
                            />
                        </Grid>

                        <Grid item xs={6} md={2}>
                            <InputLabel>Container Type</InputLabel>
                            <SelectSearch
                                value={container.type}
                                onChange={(event, value) => handleContainerDetailsChange(index, 'type', value)}
                                options={['RF', 'HD', 'TK', 'OT', 'FR', 'GP', 'HC']}
                                placeholder='Select Type'
                            />
                        </Grid>

                        <Grid item xs={6} md={2}>
                            <InputLabel>Container Quantity</InputLabel>
                            <Box sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}>
                                <TextField
                                    variant='standard'
                                    placeholder='Enter Quantity'
                                    InputProps={{ disableUnderline: true }}
                                    inputProps={{
                                        style: {
                                            padding: '0.5rem',
                                            paddingLeft: '0.75rem',
                                        },
                                    }}
                                    sx={{ input: { color: '#031225', fontWeight: 600 } }}
                                    fullWidth
                                    value={container.quantity}
                                    onChange={(event) => handleContainerDetailsChange(index, 'quantity', event.target.value)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={2}>
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
                                    value={container.weight}
                                    onChange={(event) => handleContainerDetailsChange(index, 'weight', event.target.value)}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={2}>
                            <InputLabel>Unit of Weight</InputLabel>
                            <SelectSearch
                                value={container.unit}
                                onChange={(event, value) => handleContainerDetailsChange(index, 'unit', value)}
                                options={['KG', 'LBS']}
                                placeholder='Select Unit'
                                capitalize
                            />
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography
                                variant='body1'
                                sx={{ color: '#003A9B', marginBottom: '4px', textAlign: 'center', fontWeight: 500 }}
                            >
                                Add New
                            </Typography>
                            <IconButton onClick={addMoreData}>
                                <AddCircleRoundedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} md={1}>
                            <Typography
                                variant='body1'
                                sx={{ color: '#003A9B', marginBottom: '4px', textAlign: 'center', fontWeight: 500 }}
                            >
                                Delete
                            </Typography>
                            <IconButton onClick={() => deleteContainerData(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                ))}

                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600, mt: theme.spacing(2) }}>
                    Customer Details
                </Typography>

                <Box sx={{ my: theme.spacing(1) }}>
                    <Grid container spacing={mobileMode ? 1 : 2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <InputLabel>Customer Name</InputLabel>
                            <TextField
                                sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                size='small'
                                placeholder='Enter Customer Name'
                                fullWidth
                                value={formData.customer_name}
                                onChange={(event) => handleFormChange('customer_name', event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <InputLabel>Customer Type</InputLabel>
                            <SelectSearch
                                value={formData.customer_type}
                                onChange={(event, value) => handleFormChange('customer_type', value)}
                                options={['FORWARDER', 'CUSTOM BROKER', 'SHIPPER', 'CONSIGNEE', 'TRANSPORTER']}
                                placeholder='Select Customer Type'
                                capitalize
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <InputLabel>Email Addresses</InputLabel>
                            <TextField
                                sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                size='small'
                                placeholder='You may enter multiple Email IDs separated by commas'
                                fullWidth
                                value={formData.email}
                                onChange={(event) => handleFormChange('email', event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant='h4' textAlign='start' sx={{ color: '#262626', fontWeight: 600, mt: theme.spacing(2) }}>
                    Cargo Details
                </Typography>

                <Box sx={{ mt: theme.spacing(1), mb: theme.spacing(2) }}>
                    <Grid container spacing={mobileMode ? 1 : 2}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Commodity</InputLabel>
                            <TextField
                                sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                size='small'
                                placeholder='Enter commodity of transport'
                                fullWidth
                                value={formData.commodity}
                                onChange={(event) => handleFormChange('commodity', event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Cargo Readyness Date</InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                                <DatePicker
                                    closeOnSelect
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: '2.8rem',
                                            width: '100%',
                                            backgroundColor: '#0312251A',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            color: '#6D7987',
                                        },
                                    }}
                                    format='DD-MM-YYYY'
                                    value={formData.cargo_date}
                                    onChange={(value) => handleFormChange('cargo_date', value)}
                                    slotProps={{ textField: { fullWidth: true } }}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: theme.spacing(0.5) }}>
                        <Grid container spacing={mobileMode ? 1 : 2}>
                            <Grid item xs={6} md={1.5}>
                                <InputLabel sx={{ visibility: 'hidden' }}>Hazardous</InputLabel>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={isHazardous} onChange={handleHazardous} />}
                                        label={<InputLabel>Hazardous</InputLabel>}
                                    />
                                </Box>
                            </Grid>
                            {isHazardous === true && (
                                <>
                                    <Grid item xs={6} md={2}>
                                        <InputLabel>UN No</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter UN No'
                                            fullWidth
                                            value={formData.un_no}
                                            onChange={(event) => handleFormChange('un_no', event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={2.5}>
                                        <InputLabel>IMCO</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter IMCO No. '
                                            fullWidth
                                            value={formData.imco}
                                            onChange={(event) => handleFormChange('imco', event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={6} md={3}>
                                        <InputLabel>PSN</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter PSN No. '
                                            fullWidth
                                            value={formData.psn}
                                            onChange={(event) => handleFormChange('psn', event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <InputLabel>Package Group</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter Package Group'
                                            fullWidth
                                            value={formData.package_group}
                                            onChange={(event) => handleFormChange('package_group', event.target.value)}
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>

                    <Box sx={{ mt: theme.spacing(0.5) }}>
                        <Grid container spacing={mobileMode ? 1 : 2}>
                            <Grid item xs={6} md={3}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', height: '100%' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={isOOG} onChange={handleOOG} />}
                                        label={<InputLabel>Over-Sized Cargo</InputLabel>}
                                    />
                                </Box>
                            </Grid>
                            {isOOG === true && (
                                <>
                                    <Grid item xs={6} md={3}>
                                        <InputLabel>Length</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter length in mm'
                                            fullWidth
                                            value={formData.length}
                                            onChange={(event) => handleFormChange('length', event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <InputLabel>Breadth</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter breadth in mm'
                                            fullWidth
                                            value={formData.breadth}
                                            onChange={(event) => handleFormChange('breadth', event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <InputLabel>Height</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter height in mm'
                                            fullWidth
                                            value={formData.height}
                                            onChange={(event) => handleFormChange('height', event.target.value)}
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>

                    <Box sx={{ mt: theme.spacing(0.5) }}>
                        <Grid container spacing={mobileMode ? 1 : 2}>
                            <Grid item xs={6} md={4}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'end', height: '100%' }}>
                                    <FormControlLabel
                                        control={<Checkbox checked={isTCR} onChange={handleTCR} />}
                                        label={<InputLabel>Temperarture Control Required</InputLabel>}
                                    />
                                </Box>
                            </Grid>

                            {isTCR === true && (
                                <>
                                    <Grid item xs={12} md={4}>
                                        <InputLabel>Temperature</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter Temperature in °C'
                                            fullWidth
                                            value={formData.temp}
                                            onChange={(event) => handleFormChange('temp', event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <InputLabel>Ventilation</InputLabel>
                                        <TextField
                                            sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                                            size='small'
                                            placeholder='Enter Percentage of Ventilation'
                                            fullWidth
                                            value={formData.ventilation}
                                            onChange={(event) => handleFormChange('ventilation', event.target.value)}
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: theme.spacing(1) }}>
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
