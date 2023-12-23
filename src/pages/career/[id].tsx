import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { StaticImageData } from 'next/image'
import {
    Box,
    Typography,
    Grid,
    Paper,
    InputLabel,
    FormControl,
    Select,
    Slide,
    Snackbar,
    MenuItem,
    Container,
    useMediaQuery,
} from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import Layout from '../Layout'
import PrimaryTextField from '../../components/PrimaryTextField'
// import captcha from '@/assets/images/captcha.png'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import careerBackground from '@/assets/career/career-background.webp'
import { fetchDataFromApi, postDataToApi } from '../../api/api'
import ReCAPTCHA from 'react-google-recaptcha'

interface JobType {
    id: number
    image: string | StaticImageData
    title: string
    company: string
    location: string
    description: string
    qualification: string
    requirements: string
}

export default function JobDetail() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:449px)')
    const router = useRouter()

    const { id } = router.query
    // const jobId = id ? (Array.isArray(id) ? id[0] : id) : ''
    const jobId = id ? (Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10)) : 0

    const [careerData, setCareerData] = useState<JobType[] | null>(null)

    useEffect(() => {
        async function fetchCareerData() {
            try {
                const response = await fetchDataFromApi('api/job-list/')
                setCareerData(response)
            } catch (error) {
                console.error('Error in fetching job data: ', error)
            }
        }
        fetchCareerData()
    }, [id])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        current_salary: '',
        expected_salary: '',
        notice_period: '',
        reason: '',
        jobLocation: '',
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSelect = (event: SelectChangeEvent) => {
        setFormData({ ...formData, jobLocation: event.target.value })
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
            const response = await postDataToApi('api/job-create/', formData)
            const responseData = await response.json()
            if (response.status === 200) {
                openSuccessSnackbar()
            } else {
                openErrorSnackbar(`Error : ${response.status}`)
            }
            console.log(responseData)
            openSuccessSnackbar()
            setFormData({
                name: '',
                email: '',
                phone: '',
                current_salary: '',
                expected_salary: '',
                notice_period: '',
                reason: '',
                jobLocation: '',
            })
        } catch (error) {}
    }

    const jobData = careerData?.[jobId]

    return (
        <Layout
            image={careerBackground}
            title='Join Muskan'
            subtitle={mobileMode ? '' : 'Unlock a World of Career Possibilities'}
            withTabs
            pageTitle={jobData?.title}
        >
            <Box sx={{ px: { xs: theme.spacing(mobileMode ? 0 : 2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl'>
                    <Typography variant='h2' sx={{ mb: '1rem' }}>
                        {jobData?.title}
                    </Typography>

                    <Typography variant='subtitle2' textAlign='justify' sx={{ color: '#000000', fontWeight: 400 }}>
                        <div dangerouslySetInnerHTML={{ __html: jobData?.description || '' }} />
                    </Typography>

                    <Box sx={{ my: theme.spacing(3) }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography textAlign='start' variant='h4' sx={{ color: '#031225', mb: '1rem' }}>
                                    Key Responsibilities
                                </Typography>
                                <Typography
                                    variant='subtitle2'
                                    textAlign='justify'
                                    sx={{ color: '#031225', ml: '1.25rem', fontWeight: 300 }}
                                >
                                    <div dangerouslySetInnerHTML={{ __html: jobData?.requirements || '' }} />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography textAlign='start' variant='h4' sx={{ color: '#031225', mb: '1rem' }}>
                                    Qualifications
                                </Typography>
                                <Typography
                                    variant='subtitle2'
                                    textAlign='justify'
                                    sx={{ color: '#031225', ml: '1.25rem', fontWeight: 300 }}
                                >
                                    <div dangerouslySetInnerHTML={{ __html: jobData?.qualification || '' }} />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mt: '4rem', mb: '2rem' }}>
                        <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                            Fill the form
                        </Typography>
                    </Box>
                    <Paper sx={{ padding: '1rem', borderRadius: '16px' }}>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <PrimaryTextField
                                    label='Name'
                                    placeholder='Enter your name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <PrimaryTextField
                                    label='Email'
                                    placeholder='Enter your email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <PrimaryTextField
                                    label='Mobile Number'
                                    placeholder='Enter your contact number'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    startText
                                />
                                <PrimaryTextField label='Job Position' placeholder={jobData?.title} disabled />

                                <Box sx={{ mb: '1rem' }}>
                                    <InputLabel>Job Location</InputLabel>
                                    <FormControl fullWidth>
                                        <Select
                                            value={formData.jobLocation}
                                            onChange={handleSelect}
                                            displayEmpty
                                            renderValue={
                                                formData.jobLocation !== ''
                                                    ? () => (
                                                          <Typography
                                                              textAlign='start'
                                                              sx={{
                                                                  color: '#03122580',
                                                                  fontWeight: 600,
                                                                  ml: '-0.25rem',
                                                              }}
                                                          >
                                                              {formData.jobLocation}
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
                                                              Job Location
                                                          </Typography>
                                                      )
                                            }
                                        >
                                            <MenuItem value=''>
                                                <em>Select Location</em>
                                            </MenuItem>
                                            <MenuItem value='Delhi'>Delhi</MenuItem>
                                            <MenuItem value='Gujrat'>Gujrat</MenuItem>
                                            <MenuItem value='Mumbai'>Mumbai</MenuItem>
                                            <MenuItem value='Chennai'>Chennai</MenuItem>
                                            <MenuItem value='Kolkata'>kolkata</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <PrimaryTextField
                                    label='Current Salary (Monthly)'
                                    placeholder='Enter Current Salary'
                                    name='current_salary'
                                    value={formData.current_salary}
                                    onChange={handleInputChange}
                                />
                                <PrimaryTextField
                                    label='Expected Salary (Monthly)'
                                    placeholder='Enter Expected Salary'
                                    name='expected_salary'
                                    value={formData.expected_salary}
                                    onChange={handleInputChange}
                                />
                                <PrimaryTextField
                                    label='Availability / Notice Period'
                                    placeholder='Enter Current Notice Period'
                                    name='notice_period'
                                    value={formData.notice_period}
                                    onChange={handleInputChange}
                                />
                                <PrimaryTextField
                                    label='Reason for leaving current employment'
                                    placeholder='Enter your reason'
                                    name='reason'
                                    value={formData.reason}
                                    onChange={handleInputChange}
                                    multiline
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: theme.spacing(2) }}>
                            <Grid item sm={6} xs={12}>
                                <InputLabel> Upload CV</InputLabel>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PrimaryButton
                                        text='Choose File'
                                        onClick={() => {
                                            console.log('File Uploaded')
                                        }}
                                    />
                                    <Typography sx={{ marginLeft: '1rem' }}>No File Choosen</Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <PrimaryTextField label='Captcha' placeholder='Enter Captcha' />

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Image
                                    src={captcha}
                                    alt='reload'
                                    style={{ height: '2rem', width: 'auto', marginRight: '0.5rem' }}
                                />
                                        <IconButton>
                                            <Image src={reload} alt='reload' style={{ height: '1.5rem', width: 'auto' }} />
                                        </IconButton>
                                    </Box>
                                </Box> */}
                                <Box>
                                    <InputLabel>Captcha</InputLabel>
                                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} />
                                </Box>
                            </Grid>
                        </Grid>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'end',
                                my: theme.spacing(1),
                                alignItems: 'center',
                            }}
                        >
                            <SecondaryButton text='Cancel' />
                            <PrimaryButton text='Submit' onClick={handleFormSubmit} />
                        </Box>
                    </Paper>
                    <Snackbar
                        open={successSnackbar}
                        autoHideDuration={4000}
                        onClose={closeSuccessSnackbar}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        TransitionComponent={(props) => <Slide {...props} direction='right' />}
                    >
                        <MuiAlert elevation={6} variant='filled' severity='success'>
                            Form submitted successfully
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
                </Container>
            </Box>
        </Layout>
    )
}
