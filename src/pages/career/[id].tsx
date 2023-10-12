import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Typography, Grid, Paper, IconButton, InputLabel, FormControl, Select, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import Layout from '../Layout'
import PrimaryTextField from '../../components/PrimaryTextField'
import captcha from '../../assets/images/captcha.png'
import reload from '../../assets/icons/loop.png'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import careerBackground from '../../assets/career/career-background.png'
import { fetchDataFromApi, postDataToApi } from '../../api/api'

type careerDataType = {
    id: number
    title: string
    info: string
    banner: string | StaticImageData
    responsibilities: string[]
    qualifications: string[]
}

interface JobDetailProps {
    job: careerDataType | undefined
}

const careerData: careerDataType[] = []

export default function JobDetail({ job }: JobDetailProps) {
    const theme = useTheme()
    const router = useRouter()
    const { id } = router.query
    const [enquiryType, setEnquiryType] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setEnquiryType(event.target.value as string)
    }

    const handleFormSubmit = async () => {
        const formData = {
            name: 'John Doe',
            phone: '+91-8010180777',
            email: 'johndoe@example.com',
            current_salary: '$60,000',
            expected_salary: '$70,000',
            notice_period: '2 weeks',
            reason: 'I am interested in this position',
        }
        try {
            const response = await postDataToApi('api/job-create/', formData)
            console.log('Form submitted successfully:', response)
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
    }

    return (
        <Layout image={careerBackground} title='Join Muskaan' subtitle='Unlock a World of Career Possibilities'>
            <Typography variant='h2' align='left'>
                {job?.title}
            </Typography>
            <Grid container spacing={4} alignItems='center'>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h6' sx={{ color: '#000000', lineHeight: '1.5rem' }}>
                        {job?.info}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Image
                        src={job?.banner ?? '../../assets/career/bl_officer_lg.png'}
                        alt='banner'
                        style={{ height: 'auto', width: '100%' }}
                    />
                </Grid>
            </Grid>
            <Box sx={{ my: theme.spacing(3) }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography textAlign='start' variant='h3' sx={{ color: '#031225', marginBottom: '1rem' }}>
                            Key Responsibilities
                        </Typography>
                        <Typography
                            component='ul'
                            textAlign='start'
                            variant='body1'
                            sx={{ color: '#031225', ml: '1.25rem' }}
                        >
                            {job?.responsibilities.map((item, index) => (
                                <Typography
                                    component='li'
                                    textAlign='start'
                                    variant='body1'
                                    sx={{ color: '#031225', mb: '1rem' }}
                                    key={index}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography textAlign='start' variant='h3' sx={{ color: '#031225', marginBottom: '1rem' }}>
                            Qualifications
                        </Typography>
                        <Typography
                            component='ul'
                            textAlign='start'
                            variant='body1'
                            sx={{ color: '#031225', ml: '1.25rem' }}
                        >
                            {job?.qualifications.map((item, index) => (
                                <Typography
                                    component='li'
                                    textAlign='start'
                                    variant='body1'
                                    sx={{ color: '#031225', mb: '1rem' }}
                                    key={index}
                                >
                                    {item}
                                </Typography>
                            ))}
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
                        <PrimaryTextField label='Name' placeholder='Enter your name' />
                        <PrimaryTextField label='Email' placeholder='Enter your email' />
                        <PrimaryTextField label='Mobile Number' placeholder='Enter your contact number' startText />
                        <PrimaryTextField label='Job Position' placeholder='Job Position' disabled />

                        <Box sx={{ mb: '1rem' }}>
                            <InputLabel>Job Location</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    value={enquiryType}
                                    onChange={handleChange}
                                    displayEmpty
                                    renderValue={
                                        enquiryType !== ''
                                            ? () => (
                                                  <Typography
                                                      textAlign='start'
                                                      sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                  >
                                                      {enquiryType}
                                                  </Typography>
                                              )
                                            : () => (
                                                  <Typography
                                                      textAlign='start'
                                                      sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                  >
                                                      Job Location
                                                  </Typography>
                                              )
                                    }
                                >
                                    <MenuItem value=''>
                                        <em>Select Location</em>
                                    </MenuItem>
                                    <MenuItem value='delhi'>Delhi</MenuItem>
                                    <MenuItem value='gujrat'>Gujrat</MenuItem>
                                    <MenuItem value='mumbai'>Mumbai</MenuItem>
                                    <MenuItem value='chennai'>Chennai</MenuItem>
                                    <MenuItem value='kolkata'>kolkata</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <PrimaryTextField label='Current Salary (Monthly)' placeholder='Enter Current Salary' />
                        <PrimaryTextField label='Expected Salary (Monthly)' placeholder='Enter Expected Salary' />
                        <PrimaryTextField
                            label='Availability / Notice Period'
                            placeholder='Enter Current Notice Period'
                        />
                        <PrimaryTextField label='Reason for leaving' placeholder='Enter your reason' multiline />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mb: theme.spacing(2) }}>
                    <Grid item sm={6} xs={12}>
                        <InputLabel> Upload CV</InputLabel>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PrimaryButton text='Choose File' />
                            <Typography sx={{ marginLeft: '1rem' }}>No File Choosen</Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'end', my: theme.spacing(1), alignItems: 'center' }}>
                    <SecondaryButton text='Cancel' />
                    <PrimaryButton text='Submit' onClick={handleFormSubmit} />
                </Box>
            </Paper>
        </Layout>
    )
}
