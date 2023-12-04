import Image from 'next/image'
import { Box, Container, Grid, InputLabel, Slide, Snackbar, Typography, useMediaQuery } from '@mui/material'
import contactbackground from '@/assets/images/contact-background.webp'
// import contactBgSm from '@/assets/images/contact-bg-sm.png'
import contactImage from '@/assets/images/contact-img.webp'
import { useTheme } from '@mui/material/styles'
import SecondaryTextField from '../components/SecondaryTextField'
import PrimaryButton from '../components/PrimaryButton'
import { postDataToApi } from '../api/api'
import MuiAlert from '@mui/material/Alert'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactSection() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:849px)')
    const wideMode = useMediaQuery('(min-width:1300px)')

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        enquiry_type: 'General Enquiry',
        message: '',
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
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
            openSnackbar('Your message sent successfully')
            // Reset form fields after successful submission
            setFormData({
                name: '',
                phone: '',
                email: '',
                enquiry_type: 'General Enquiry',
                message: '',
            })
        } catch (error) {
            console.error('Error submitting the form:', error)
            openSnackbar('Form Submission Unsuccessful')
        }
    }
    return (
        <Box sx={{ mx: { xs: theme.spacing(2), sm: theme.spacing(4) }, mt: theme.spacing(12) }}>
            {tabletMode ? (
                <Container
                    maxWidth='sm'
                    disableGutters
                    sx={{
                        p: theme.spacing(2),
                        borderRadius: theme.spacing(1.5),
                        backgroundColor: theme.palette.primary.main,
                    }}
                >
                    <Image src={contactImage} alt='contact image' style={{ width: '100%', height: 'auto' }} />

                    <Typography variant='h3' textAlign='start' sx={{ mt: theme.spacing(4), fontSize: '2.5rem' }}>
                        Get in touch
                    </Typography>
                    <Typography variant='body2' sx={{ mt: theme.spacing(1), fontSize: '1.25rem' }}>
                        Our team would love to hear from you
                    </Typography>
                    <Box sx={{ my: theme.spacing(1) }}>
                        <SecondaryTextField placeholder='Enter your name' name='name' value={formData.name} onChange={handleInputChange} />
                        <SecondaryTextField
                            placeholder='Enter email address'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <SecondaryTextField
                            placeholder='Enter contact number'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <SecondaryTextField
                            placeholder='Enter your message'
                            multiline={true}
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </Box>

                    <Box sx={{ display: 'flex' }}>
                        <PrimaryButton text='Submit' light onClick={handleFormSubmit} />
                    </Box>
                </Container>
            ) : (
                <Container maxWidth='md' disableGutters sx={{ position: 'relative' }}>
                    <Image src={contactbackground} alt='contact background' style={{ width: '100%', height: 'auto' }} />

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '56%',
                            height: '100%',
                            py: theme.spacing(1.5),
                            px: theme.spacing(4),
                        }}
                    >
                        <Typography variant='h3' textAlign='start'>
                            Get in touch
                        </Typography>
                        {/* <Typography variant='body2' sx={{ mt: theme.spacing(0.5) }}>
                            Our team would love to hear from you
                        </Typography> */}
                        <Box sx={{ my: theme.spacing(1.5) }}>
                            <SecondaryTextField
                                placeholder='Enter your name'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                            />

                            <Grid container spacing={0.8}>
                                <Grid item xs={6}>
                                    <SecondaryTextField
                                        placeholder='Enter email address'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <SecondaryTextField
                                        placeholder='Enter phone number'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                            </Grid>

                            <SecondaryTextField
                                placeholder='Enter your message'
                                name='message'
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                            <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: 'fit-content', height: 'fit-content' }}>
                                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} />
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex' }}>
                            <PrimaryButton text='Submit' light onClick={handleFormSubmit} />
                        </Box>
                    </Box>
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
                </Container>
            )}
        </Box>
    )
}
