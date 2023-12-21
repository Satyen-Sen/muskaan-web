import React, { useState } from 'react'
import Image from 'next/image'
import {
    Box,
    Grid,
    Typography,
    IconButton,
    InputLabel,
    Paper,
    FormControl,
    Select,
    MenuItem,
    useMediaQuery,
    Snackbar,
    Slide,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import Layout from '../Layout'
import contactBackground from '@/assets/contact/contact-background.webp'
import PrimaryTextField from '../../components/PrimaryTextField'
import reload from '@/assets/icons/loop.png'
import PrimaryButton from '../../components/PrimaryButton'
import MuskaanGroupHq from '../../components/MuskaanGroupHq'
import phoneIcon from '@/assets/icons/phone_color.svg'
import { postDataToApi } from '../../api/api'
import MuiAlert from '@mui/material/Alert'
import ReCAPTCHA from 'react-google-recaptcha'

function AddressCard({ companyLoc, address, phone }: { companyLoc: String; address: String; phone: String }) {
    return (
        <Box>
            <Typography variant='h4' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F', fontWeight: 400 }}>
                {companyLoc}
            </Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'start', mb: '0.5rem', color: '#1B1B1F' }}>
                {address}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    src={phoneIcon}
                    alt='logo'
                    style={{
                        height: '0.75rem',
                        width: 'auto',
                        marginRight: '0.5rem',
                    }}
                />
                <Typography variant='subtitle2' sx={{ textAlign: 'start', fontWeight: 300, fontSize: '0.75rem' }}>
                    {phone}
                </Typography>
            </Box>
        </Box>
    )
}

export default function Home() {
    const mobileMode = useMediaQuery('(max-width:449px)')
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        enquiry_type: '',
        message: '',
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSelect = (event: SelectChangeEvent) => {
        setFormData({ ...formData, enquiry_type: event.target.value })
    }

    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const openSnackbar = (message: string) => {
        setSnackbarMessage(message)
        setSnackbarOpen(true)
    }
    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }
    const handleFormSubmit = async () => {
        // Check if any field is empty
        const isAnyFieldEmpty = Object.values(formData).some((value) => value === '')

        if (isAnyFieldEmpty) {
            openSnackbar('Please fill in all fields')
            return
        }

        try {
            const response = await postDataToApi('api/contact-us/', formData)
            console.log('Form submitted successfully:', response)
            openSnackbar('Your message has been sent successfully')
            // Reset form fields after successful submission
            setFormData({
                name: '',
                phone: '',
                email: '',
                enquiry_type: '',
                message: '',
            })
        } catch (error) {
            console.error('Error submitting the form:', error)
            openSnackbar('Form Submission Unsuccessful')
        }
    }

    return (
        <Layout
            image={contactBackground}
            title="Let's Talk"
            subtitle={mobileMode ? '' : 'We would love to deliver your goods'}
            pageTitle='Contact'
        >
            <Box sx={{ mx: { xs: 0, sm: '1rem', md: '9rem' }, my: '2rem' }}>
                <MuskaanGroupHq />

                <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', mb: '2rem', color: '#1B1B1F' }}>
                    Overseas Branches
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='Singapore'
                            address='60 Kaki Bukit Place #02-13Suites 3 Eunos Techpark, Singapore 415979'
                            phone='+65 64921136'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='Malaysia'
                            address='Centro Business CentreSuite #16-02, level 16,No.8 Jalan Batu Tiga Lama,Klang 41200 Selangor, Malaysia'
                            phone='+603-33418460/61'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='Dubai'
                            address='Mohammed Noor Talib Bldg.,701, 7th floor, Khaleed bin waleed Road Opp.Royal Ascot Hotel Burdubai,PO Box : - 128160 Dubai'
                            phone='+97143511215'
                        />
                    </Grid>
                </Grid>

                <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', mb: '2rem', color: '#1B1B1F' }}>
                    India Branches
                </Typography>
                <Grid container spacing={2} sx={{}}>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='New Delhi'
                            address='Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, NEW DELHI - 110078'
                            phone='011-41587468'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='Gujarat'
                            address='Office No. 222, 2nd Floor, Manali Tower, Plot No. 110, Sector No. 8, Behind Oslo Circle, Sector 8, Gandhidham, Gujarat 370203'
                            phone='011-41587468'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='Navi Mumbai'
                            address='Office No. 323, 3rd Floor, Skylark Building, Plot No. 63, Sector 11, Belapur CBD, Navi Mumbai - 400614'
                            phone='011-41587468'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='Chennai'
                            address='72/1,first floor, shop no 3, Linghi Chetty street, Mannady Chennai - 600001'
                            phone='011-41587468'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <AddressCard
                            companyLoc='Kolkata'
                            address='Cabin No. 13 & 14 , 3rd Floor, 26, Chittaranjan Avenue, Kolkata -700012'
                            phone='011-41587468'
                        />
                    </Grid>
                </Grid>

                <Box sx={{ mt: '4rem', mb: '2rem' }}>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        Write to Us
                    </Typography>
                    <Typography variant='body1' textAlign='start' sx={{ color: '#031225' }}>
                        We'd love to hear from you
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
                                label='Message'
                                placeholder='Enter your message'
                                name='message'
                                multiline
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <PrimaryTextField
                                label='Mobile Number'
                                name='phone'
                                placeholder='Enter your contact number'
                                value={formData.phone}
                                onChange={handleInputChange}
                            />

                            <Box sx={{ mb: '1rem' }}>
                                <InputLabel>Enquiry Type</InputLabel>
                                <FormControl fullWidth>
                                    <Select
                                        value={formData.enquiry_type}
                                        onChange={handleSelect}
                                        displayEmpty
                                        renderValue={
                                            formData.enquiry_type !== ''
                                                ? () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          {formData.enquiry_type}
                                                      </Typography>
                                                  )
                                                : () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          Please select an enquiry type
                                                      </Typography>
                                                  )
                                        }
                                    >
                                        <MenuItem value=''>
                                            <em>Please select an enquiry type</em>
                                        </MenuItem>
                                        <MenuItem value='General Enquiry'>General Enquiry</MenuItem>
                                        <MenuItem value='Feedback'>Feedback</MenuItem>
                                        <MenuItem value='Claims'>Claims</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <PrimaryTextField
                                    label='Captcha'
                                    placeholder='Enter Captcha'
                                    value={formData.captcha}
                                    name='captcha'
                                    onChange={handleInputChange}
                                />

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Image src={captcha} alt='reload' style={{ height: '2rem', width: 'auto', marginRight: '0.5rem' }} />
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
                    <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem' }}>
                        <PrimaryButton text='Submit' onClick={handleFormSubmit} />
                    </Box>
                </Paper>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={4000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    TransitionComponent={(props) => <Slide {...props} direction='right' />}
                >
                    <MuiAlert elevation={6} variant='filled' severity='success'>
                        {snackbarMessage}
                    </MuiAlert>
                </Snackbar>
            </Box>
        </Layout>
    )
}
