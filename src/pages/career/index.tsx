import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Layout from '../Layout'
import careerBackground from '../../assets/career/career-background.png'
import careerDefault from '../../assets/career/marketing.png'
import { fetchDataFromApi } from '../../api/api'

interface Career {
    id: number
    image: string | StaticImageData
    title: string
    description: string
}

export default function Home() {
    const theme = useTheme()
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
        <Layout image={careerBackground} title='Join Muskaan' subtitle='Unlock a World of Career Possibilities'>
            <Typography variant='h2' gutterBottom>
                Interested? We are Hiring
            </Typography>
            <Box sx={{ mb: theme.spacing(6) }}>
                <Typography variant='h6' sx={{ color: '#031225', textAlign: 'center' }}>
                    We're looking for amazing people to join our team.
                </Typography>
                <Typography variant='h6' sx={{ color: '#031225', textAlign: 'center' }}>
                    Check out our current job openings.
                </Typography>
            </Box>
            <Grid container spacing={2} wrap='wrap'>
                {careerData.map((job) => (
                    <Grid item key={job.id} xs={6} sm={4}>
                        <Link href={`/career/${job.id - 1}`}>
                            <Box sx={{ bgcolor: '#FFFFFF', padding: '2rem', borderRadius: '1.25rem', height: '100%' }}>
                                <Image
                                    src={job.image || careerDefault}
                                    alt='career image'
                                    style={{ width: '25%', height: 'auto', marginBottom: '1.5rem' }}
                                />
                                <Typography variant='h6' sx={{ color: '#313131', textAlign: 'center' }} gutterBottom>
                                    {job.title}
                                </Typography>
                                <div style={ellipsisStyles}>
                                    <Typography variant='body1' sx={{ color: 'rgba(49, 49, 49, 0.80)', my: '1rem' }}>
                                        <div dangerouslySetInnerHTML={{ __html: job?.description }} />
                                    </Typography>
                                </div>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}
