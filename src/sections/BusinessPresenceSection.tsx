import React from 'react'
import Image from 'next/image'
import { Box, Container, Divider, Grid, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'
import map from '@/assets/images/map.webp'
import map2 from '@/assets/images/map2.webp'
import CompanyReachCard from '../components/CompanyReachCard'

// import description from '@/assets/images/map-description.png'

// const MapDescription = () => {
//     const theme = useTheme()

//     return (
//         <Box sx={{ display: 'flex', position: 'relative' }}>
//             <Image
//                 src={description}
//                 alt="map description"
//                 style={{ width: '26.5vw', height: 'auto' }}
//             />
//             <Box sx={{ position: 'absolute', padding: theme.spacing(1) }}>
//                 <Typography variant="h6">India</Typography>
//                 <Divider
//                     sx={{ mt: theme.spacing(0.25), borderColor: '#FFFFFF80' }}
//                 />

//                 <Typography
//                     variant="body2"
//                     sx={{ mt: theme.spacing(1), fontWeight: 400 }}
//                 >
//                     New Delhi
//                 </Typography>
//                 <Typography variant="body2" sx={{ mt: theme.spacing(0.5) }}>
//                     Muskan Container Lines Pvt. Ltd. Muskan Tower, Plot no.83,
//                     Old Palam Rd, Shiv Park, kakrola Mor, New Delhi, Delhi
//                     110078 (T) +91 11 41587468/40687469
//                 </Typography>
//                 <Typography
//                     variant="body2"
//                     sx={{ mt: theme.spacing(1.25), fontWeight: 400 }}
//                 >
//                     Chennai
//                 </Typography>
//                 <Typography variant="body2" sx={{ mt: theme.spacing(0.5) }}>
//                     Muskan Container Lines Pvt. Ltd. #72/1,first floor, shop# 3,
//                     Linghi Chetty street, Mannady Chennai - 600001 Land Line :
//                     +91-44 42642551
//                 </Typography>
//             </Box>
//         </Box>
//     )
// }

const CompanyCard = ({ text, href }: { text: string; href: string }) => {
    const theme = useTheme()
    const [hovered, setHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#003A9B',
                borderRadius: '8px',
                width: '14rem',
                height: '6rem',
                px: theme.spacing(1),
                mx: 'auto',
                transition: 'box-shadow 0.4s, transform 0.2s', // Add a transition for transform
                transform: hovered ? 'scale(1.1)' : 'scale(1)', // Scale the card on hover
                boxShadow: hovered ? 5 : 0, // Add shadow on hover
                cursor: 'pointer',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={href}>
                <Typography variant='h4' sx={{ fontFamily: oswald.style.fontFamily }}>
                    {text}
                </Typography>
            </Link>
        </Box>
    )
}

const CompanyCardMobile = ({ text, href }: { text: string; href: string }) => {
    const theme = useTheme()
    const [hovered, setHovered] = React.useState(false)

    const onClick = () => {
        setHovered(true)
        setTimeout(() => {
            setHovered(false)
        }, 300)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#003A9B',
                borderRadius: '8px',
                width: '100%',
                height: '5rem',
                px: theme.spacing(1),
                mx: 'auto',
                mt: theme.spacing(1),
                transition: 'box-shadow 0.4s, transform 0.2s',
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
                boxShadow: hovered ? 5 : 0,
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <Link href={href}>
                <Typography variant='h4' sx={{ fontFamily: oswald.style.fontFamily }}>
                    {text}
                </Typography>
            </Link>
        </Box>
    )
}

export default function BusinessPresenceSection() {
    const theme = useTheme()
    const wideTabletMode = useMediaQuery('(max-width:999px)')
    const tabletMode = useMediaQuery('(max-width:899px)')
    const narrowTabletMode = useMediaQuery('(max-width:799px)')
    const mobileMode = useMediaQuery('(max-width:599px)')

    return (
        <>
            <Box sx={{ my: theme.spacing(6), mx: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
                <Container maxWidth='md' disableGutters>
                    <Typography variant='h2' textAlign='center' sx={{ fontFamily: oswald.style.fontFamily }}>
                        Our Network
                    </Typography>
                    {mobileMode ? (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                mt: theme.spacing(2),
                            }}
                        >
                            <CompanyCardMobile text='Muskan Containers line Pvt. Ltd.' href='/companies/container-lines' />
                            <CompanyCardMobile text='Muskan Logistics' href='/companies/logistics' />
                            <CompanyCardMobile text='Muskan Shipping PTE Ltd.' href='/companies/shipping-pte' />
                            <CompanyCardMobile text='Muskan Shipping SDN BHD' href='/companies/shipping-sdn-bhd' />
                            <CompanyCardMobile text='Muskan Shipping LLC' href='/companies/shipping-llc' />
                        </Box>
                    ) : (
                        <Box sx={{ mt: theme.spacing(3) }}>
                            <Grid container spacing={2}>
                                <Grid item sm={4} xs={6}>
                                    <CompanyCard text='Muskan Containers line Pvt. Ltd.' href='/companies/container-lines' />
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <CompanyCard text='Muskan Logistics' href='/companies/logistics' />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <CompanyCard text='Muskan Shipping PTE Ltd.' href='/companies/shipping-pte' />
                                </Grid>
                            </Grid>
                            <Container maxWidth='sm' disableGutters sx={{ mt: theme.spacing(4) }}>
                                <Grid
                                    container
                                    spacing={tabletMode ? 4 : 10}
                                    sx={{
                                        px: narrowTabletMode ? theme.spacing(8) : wideTabletMode ? theme.spacing(6) : theme.spacing(2),
                                    }}
                                >
                                    <Grid item xs={6}>
                                        <CompanyCard text='Muskan Shipping SDN BHD' href='/companies/shipping-sdn-bhd' />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <CompanyCard text='Muskan Shipping LLC' href='/companies/shipping-llc' />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                    )}
                </Container>

                {tabletMode ? (
                    <></>
                ) : (
                    <Container
                        maxWidth='xl'
                        disableGutters
                        sx={{
                            mt: theme.spacing(8),
                            position: 'relative',
                        }}
                    >
                        <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(4), fontFamily: oswald.style.fontFamily }}>
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
                        {/* <Box
                    sx={{
                        position: 'absolute',
                        right: '15vw',
                        top: '8vw',
                    }}
                >
                    <MapDescription />
                </Box> */}
                    </Container>
                )}
            </Box>
            {tabletMode ? (
                <Box sx={{ mx: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
                    <Container
                        maxWidth='md'
                        disableGutters
                        sx={{
                            my: theme.spacing(8),
                            position: 'relative',
                        }}
                    >
                        <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(2), fontFamily: oswald.style.fontFamily }}>
                            {' '}
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
                <></>
            )}
        </>
    )
}
