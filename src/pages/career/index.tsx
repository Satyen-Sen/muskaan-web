import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Typography, Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Layout from '../Layout'
import careerBackground from '@/assets/career/career-background.webp'
import careerDefault from '@/assets/career/marketing.png'
import PrimaryButton from '@/components/PrimaryButton'
import { fetchDataFromApi } from '../../api/api'

interface Career {
    id: number
    image: string | StaticImageData
    title: string
    description: string
}

export default function Home() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:449px)')
    const tabMode = useMediaQuery('(max-width:599px)')
    const [careerData, setCareerData] = useState<Career[]>([])

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
    }, [])

    const ellipsisStyles: React.CSSProperties = {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 5, // Limit to 5 lines
        textOverflow: 'ellipsis',
    }

    return (
        <Layout
            image={careerBackground}
            title='Join Muskan'
            subtitle={mobileMode ? '' : 'Unlock a World of Career Possibilities'}
            pageTitle='Career'
        >
            <Box sx={{ px: { xs: theme.spacing(mobileMode ? 0 : 2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Typography variant='h2' textAlign='center' gutterBottom sx={{ fontSize: tabMode ? '2.4rem' : '3rem' }}>
                    Interested? We are Hiring
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        color: '#031225',
                        textAlign: 'center',
                        whiteSpace: 'pre-line',
                        fontWeight: 400,
                        mb: theme.spacing(mobileMode ? 2 : tabMode ? 4 : 6),
                    }}
                >
                    {mobileMode
                        ? "We're looking for amazing people to join our team. Check out our current job openings."
                        : "We're looking for amazing people to join our team.\nCheck out our current job openings."}
                </Typography>

                <Grid container spacing={2} wrap='wrap'>
                    {careerData.map((job) => (
                        <Grid item key={job.id} xs={12} sm={6}>
                            <Link href={`/career/${job.id - 1}`}>
                                <Box
                                    sx={{
                                        bgcolor: '#FFFFFF',
                                        padding: '2rem',
                                        borderRadius: '1.25rem',
                                        height: '100%',
                                    }}
                                >
                                    <Image
                                        src={job.image || careerDefault}
                                        alt='career image'
                                        style={{ width: '25%', height: 'auto', marginBottom: '2rem' }}
                                    />
                                    <Typography variant='h6' sx={{ color: '#313131', textAlign: 'center', fontWeight: 600, mb: '1rem' }}>
                                        {job.title}
                                    </Typography>
                                    <div style={ellipsisStyles}>
                                        <Typography variant='body1' sx={{ color: 'rgba(49, 49, 49, 0.80)', mb: '1rem', fontWeight: 300 }}>
                                            <div dangerouslySetInnerHTML={{ __html: job?.description }} />
                                        </Typography>
                                    </div>
                                    <Box sx={{ mt: '2rem' }}>
                                        <Link href={`/career/${job.id - 1}`}>
                                            <PrimaryButton text='Apply Now' />
                                        </Link>
                                    </Box>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    )
}
