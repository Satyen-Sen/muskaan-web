import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'
import map from '@/assets/images/map.webp'
import CompanyReachCard from '../components/CompanyReachCard'

export default function BusinessPresenceSection() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')

    return (
        <Box sx={{ mt: theme.spacing(4) }}>
            {tabletMode ? (
                <Box sx={{ mx: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
                    <Container
                        maxWidth='md'
                        disableGutters
                        sx={{
                            mt: theme.spacing(8),
                            position: 'relative',
                        }}
                    >
                        <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(2), fontFamily: oswald.style.fontFamily }}>
                            Our Reach
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='New Delhi'
                                    description='Muskan Container Lines Pvt Ltd, Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, New Delhi, Delhi - 110078 | Tel : +91 11 41587468 / 40687469'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Mumbai'
                                    description='Muskan Container Lines Pvt Ltd, Office No.- 342, 3rd Floor, Sai Chambers, Sector - 11, CBD Belapur, Navi Mumbai - 400614 | Tel : 022-27560779, 022-41278794'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Chennai'
                                    description='Muskan Container Lines Pvt Ltd, Office 72/1, First floor, Shop No 3, Linghi Chetty street, Mannady, George Town, Chennai - 600001 | Tel : +91-4442642551'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Mundra'
                                    description='Muskan Container Lines Pvt Ltd, Office No.222, Second Floor, Manali Tower, Plot No.110, Sector 8, Gandhidham - 370201 | Tel : +91-2836231222'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Kolkata'
                                    description='Muskan Container Lines Pvt Ltd, Office - 26, 3rd Floor, C.R.Avenue, Kolkata, India - 700012 | Tel : +91 33-40619350'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Singapore'
                                    description='Muskan Shipping PTE LTD, 35 Selegie road, #09-02, Parklane Shopping Mall, Singapore - 188307 | Tel : +65-64921136'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Bangkok, Thailand'
                                    description='Sea Legend Agency Co Ltd, 116/53 SSP Tower II, 15th Floor, Na Ranong Rd, Klongtoey, Bangkok - 10110, Thailand | Tel: 02-119-5268 (direct), 081-624-0354 | Fax :  02-119-5270'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Dubai, UAE'
                                    description='Muskan Shipping LLC, 701, 7th floor, Mohammed Noor Talib Bldg, Khaleed bin waleed Road, Near Royal Ascot Hotel, Dubai - 128160 | Office : +9714 3511215 | Fax : +9714 3511216'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Port Klang, Malaysia'
                                    description='Muskan Shipping SDN BHD, #16-02, Centro Business Centre Suite, No.8 Jalan Batu Tiga Lama, Klang 41200, Malaysia | Tel : 00603-33418460/61 | Fax : 00603-33428462'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Colombo, Srilanka'
                                    description='Muskan Shipping Co Pvt Ltd, #200, George R De Silva Mawatha, Colombo - 13, Sri Lanka |  Tel : +94 714141734, +94 114 616337, +94 112 395922'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Tianjin, China'
                                    description='Hi-Lander Logistics Co Ltd, Room 1806, Tower C, City Center, Xikang Road, Heping District, Tianjin, China | Tel: 86-22-23393269'
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            ) : (
                <Container
                    maxWidth='xl'
                    disableGutters
                    sx={{
                        mt: theme.spacing(8),
                        position: 'relative',
                    }}
                >
                    <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(4) }}>
                        Our Reach
                    </Typography>
                    <Image
                        src={map}
                        alt='map'
                        style={{
                            width: '100%',
                            height: 'auto',
                            position: 'relative',
                        }}
                    />
                </Container>
            )}
        </Box>
    )
}
