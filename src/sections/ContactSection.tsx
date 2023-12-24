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
        // Check if any field is empty
        const isAnyFieldEmpty = Object.values(formData).some((value) => value === '')

        if (isAnyFieldEmpty) {
            openErrorSnackbar('Please fill in all fields')
            return
        }

        try {
            const response = await postDataToApi('api/contact-us/', formData)
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
                phone: '',
                email: '',
                enquiry_type: 'General Enquiry',
                message: '',
            })
        } catch (error) {}
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
                    {/* <Typography variant='body2' sx={{ mt: theme.spacing(1), fontSize: '1.25rem' }}>
                        Our team would love to hear from you
                    </Typography> */}
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
                    <Box sx={{ overflow: 'hidden', borderRadius: '8px', width: 'fit-content', height: 'fit-content' }}>
                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} />
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
                        open={successSnackbar}
                        autoHideDuration={4000}
                        onClose={closeSuccessSnackbar}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        TransitionComponent={(props) => <Slide {...props} direction='right' />}
                    >
                        <MuiAlert elevation={6} variant='filled' severity='success'>
                            Your message has been sent successfully
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
            )}
        </Box>
    )
}
