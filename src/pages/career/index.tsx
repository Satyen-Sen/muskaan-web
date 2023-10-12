import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Layout from '../Layout'
import careerBackground from '../../assets/career/career-background.png'
// import { careerData } from '../../data/careerData'
// import JobCard from '../../components/career/JobCard'
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
                console.error('Error fetching job data:', error)
            }
        }
        fetchCareerData()
    }, [])

    return (
        <Layout image={careerBackground} title='Join Muskaan' subtitle='Unlock a World of Career Possibilities'>
            <Box sx={{ my: theme.spacing(3) }}>
                <Typography variant='h2' gutterBottom>
                    Interested? We are Hiring
                </Typography>
                <Typography variant='h6' sx={{ color: '#031225', textAlign: 'center' }}>
                    We're looking for amazing people to join our team. Check out our current job openings
                </Typography>
            </Box>
            <Grid container spacing={2} wrap='wrap'>
                {careerData.map((job) => (
                    <Grid item key={job.id} xs={6} sm={4}>
                        <Link href={`/career/${job.id}`}>
                            <Box sx={{ bgcolor: '#FFFFFF', padding: '2rem', borderRadius: '1.25rem', height: '100%' }}>
                                <Image
                                    src={job.image}
                                    alt='career image'
                                    style={{ width: '25%', height: 'auto', marginBottom: '1.5rem' }}
                                />
                                <Typography variant='h6' sx={{ color: '#313131', textAlign: 'center' }} gutterBottom>
                                    {job.title}
                                </Typography>
                                <Typography
                                    variant='body1'
                                    sx={{ color: 'rgba(49, 49, 49, 0.80)', marginBottom: '1rem' }}
                                >
                                    {job.description}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}
