import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import FooterSection from '../../sections/FooterSection'
import { useTheme } from '@mui/material/styles'
import downloadIcon from '@/assets/icons/download.png'
import { fetchDataFromApi } from '../../api/api'

type DownloadDataType = {
    id: number
    title: string
    description: string
    file: string
}

export default function Home() {
    const theme = useTheme()
    const [downloadData, setDowloadData] = useState<DownloadDataType[]>([])

    useEffect(() => {
        async function fetchDownloadData() {
            try {
                const response = await fetchDataFromApi('api/useful-downloads/')
                setDowloadData(response)
            } catch (error) {
                console.error('Error in fetching job data: ', error)
            }
        }
        fetchDownloadData()
    }, [])

    return (
        <>
            <Head>
                <title>Useful Downloads | Muskan Group </title>
            </Head>
            <Box>
                <Box
                    sx={{
                        px: theme.spacing(2),
                        py: theme.spacing(0.5),
                        backgroundColor: '#003A9B',
                    }}
                >
                    <Navbar />
                </Box>
                <Box sx={{ mx: theme.spacing(6) }}>
                    <Container maxWidth='xl' disableGutters>
                        <Box sx={{ my: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant='h2' sx={{ color: '#003A9B' }}>
                                Useful Downloads
                            </Typography>
                            <Box sx={{ bgcolor: '#339966', height: '0.25rem', borderRadius: '2rem', width: '23rem' }}> </Box>
                            <Typography variant='h4' sx={{ color: '#313131', mt: '1.5rem', whiteSpace: 'pre-line' }}>
                                {
                                    'Explore a curated collection of resources that empower your decisions\nand enrich your understanding. From expert insights to informative\n guides, your journey of discovery awaits'
                                }
                            </Typography>
                        </Box>

                        <Grid container spacing={2} wrap='wrap'>
                            {downloadData.map((item) => (
                                <Grid item xs={12} sm={4} key={item.id}>
                                    <Box sx={{ bgcolor: '#FFFFFF', padding: '1rem', borderRadius: '1.1rem', height: '100%' }}>
                                        <Typography
                                            variant='h6'
                                            sx={{ color: '#313131', mb: '0.5rem', textAlign: 'start', fontWeight: 600 }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                color: ' rgba(49, 49, 49, 0.80)',
                                                textAlign: 'start',
                                                mb: '1.5rem',
                                                width: '80%',
                                            }}
                                        >
                                            {item.description || 'Manuals explaining different shipping options, carriers, and rates'}
                                        </Typography>
                                        <Link href={item.file}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography variant='h6' sx={{ color: '#313131', fontWeight: 600 }}>
                                                    Downloads
                                                </Typography>
                                                <Image
                                                    src={downloadIcon}
                                                    alt=''
                                                    style={{ width: '1.25rem', height: 'auto', marginLeft: '0.75rem' }}
                                                />
                                            </Box>
                                        </Link>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
                <FooterSection />
            </Box>
        </>
    )
}
