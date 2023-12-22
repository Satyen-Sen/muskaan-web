import React from 'react'
import Image from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'
import map from '@/assets/images/map.webp'
import CompanyReachCard from '../components/CompanyReachCard'
import MapPointer from '@/components/fab/MapPointer'

export default function BusinessPresenceSection() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:699px)')
    const maxMode = useMediaQuery('(min-width:1700px)')

    return (
        <Box sx={{ mt: theme.spacing(4) }}>
            {mobileMode || maxMode ? (
                <Box sx={{ mx: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
                    <Container
                        maxWidth='md'
                        disableGutters
                        sx={{
                            mt: theme.spacing(8),
                            position: 'relative',
                        }}
                    >
                        <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(2) }}>
                            Our Reach
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='New Delhi, India'
                                    description='Muskan Container Lines Pvt Ltd, Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, New Delhi, Delhi - 110078 | Tel : +91 11 41587468 / 40687469'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Nhava Sheva, Mumbai'
                                    description='Muskan Container Lines Pvt Ltd, Office No.- 342, 3rd Floor, Sai Chambers, Sector - 11, CBD Belapur, Navi Mumbai - 400614 | Tel : 022-27560779, 022-41278794'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Chennai, India'
                                    description='Muskan Container Lines Pvt Ltd, Office 72/1, First floor, Shop No 3, Linghi Chetty street, Mannady, Chennai - 600001 | Tel : +91-4442642551'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Mundra, India'
                                    description='Muskan Container Lines Pvt Ltd, Office No.222, Second Floor, Manali Tower, Plot No.110, Sector 8, Kutch - 370201 | Tel : +91-2836231222'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Kolkata, India'
                                    description='Muskan Container Lines Pvt Ltd, Office - 26, 3rd Floor, C.R.Avenue, Kolkata, India - 700012 | Tel : +91 33-40619350'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Tuticorin, India'
                                    description='OLS Maritime Agencies,  No. 5-A/54, Caldwell Colony, 1st Cross Street, Tuticorin - 628008, Tamilnadu, India.'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Colombo, Srilanka'
                                    description='Royal Asia Shipping Co Pvt Ltd, No .200, George R De Silva Mawatha, Colombo - 13, Sri Lanka |  Tel : +94 714141734, +94 114 616337, +94 112 395922'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Singapore'
                                    description='Muskaan Shipping PTE LTD, 35 Selegie road, No. 09-02, Parklane Shopping Mall, Singapore - 188307 | Tel : +65-64921136'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Port Klang, Malaysia'
                                    description='Muskaan Shipping SDN BHD, No. 16-02, Centro Business Centre Suite, No.8 Jalan Batu Tiga Lama, Klang 41200, Malaysia | Tel : 00603-33418460/61 | Fax : 00603-33428462'
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
                                    title='Jakarta, Indonesia'
                                    description='PT Mitra Bintang Samudera, JL Kebon Bawang VII, No.25, Tanjung Priok, North Jakarta - 14320, Indonesia.'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Ho Chi Minh City, Vietnam'
                                    description='Collyer Shipping Co Ltd, Room A.3.09, Tower A, Millennium Office, 132 Ben Van Don, Ward 6, District 4,Ho Chi Minh City, Vietnam'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Haiphong City, Vietnam'
                                    description='Intercontinental Shipping Co Ltd, 14th Room, 7th Floor, Success Building, No. 3 Le Thanh Tong Street, Ngo Quyen District, Hai Phong City, Vietnam.'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Hongkong'
                                    description='Sea Legend Agency Co Ltd, 116/53 SSP Tower II, 15th Floor, Na Ranong Rd, Klongtoey, Bangkok - 10110, Thailand | Tel: 02-119-5268 (direct), 081-624-0354 | Fax :  02-119-5270'
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Qingdao, China'
                                    description='Qingdao Hi-Lander Logistics Co Ltd, Rm 1116, The Century Mansion, No.39, West Dong Hai Road, Qingdao, China. 266071'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Shanghai, China'
                                    description='Qingdao Hi-Lander Logistics Co Ltd,, RM2701, Financial Street Hailun Center, No.440 Hailun Road, Shanghai, China'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Ningbo, China'
                                    description='Qingdao Hi-Lander Logistics Co Ltd,, Room 1603, Portman Tower, No. 48 North Caihong Road, Ningbo, China'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Tianjin, China'
                                    description='Qingdao Hi-Lander Logistics Co Ltd, Room 1806, Tower C, City Center, Xikang Road, Heping District, Tianjin, China | Tel: 86-22-23393269'
                                />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Manila, Philippines'
                                    description='Ben Line Agencies Philippines Inc, Unit 701 A, 7th floor Tower A, Two E-com Center, Palm Coast Avenue, Mall of Asia Complex, Pasay City 1300, Philippines'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Seoul, South Korea'
                                    description='Ben Line Agencies Ltd, 7F, Bolim B/D, 65, Myeongdong-gil, Jung-gu, Seoul 04538, South Korea'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Karachi, Pakistan'
                                    description='Trans Orient Logistics Pvt LTD, 1 / 4–A, 2nd Floor Block 6, P.E.C.H.S, Shahrah-e-Faisal, Karachi, Pakistan.'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Tehran, Iran'
                                    description='Golden Gate Cargo Ltd, Unit 12, No.12, 4th Alley, Qaem magham Farahani Street, Tehran – Iran'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Muscat, Oman'
                                    description='Inchcape Shipping Services, Bait Al Reem, Building No. 81, 2nd Floor, Office 22, Way No : 3409, Al Khuwair, Muscat, Sultanate of Oman'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Kuwait City, Kuwait'
                                    description='Inchcape Shipping Services, Building # 800117, Block 1, Al Qibla Area Opposite Seif Palace, Arabian Gulf Street, Safat 13001, PO Box-78, Kuwait'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Basra, Iraq'
                                    description={`Sima Marine Shipping Company, Al-Jaza'er, Opposite Shanshal Mall, Hey Sana, Basra, Iraq`}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Dubai, UAE'
                                    description='Muskaan Shipping LLC, 701, 7th floor, Mohammed Noor Talib Bldg, Khaleed bin waleed Road, Near Royal Ascot Hotel, Dubai - 128160 | Office : +9714 3511215 | Fax : +9714 3511216'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Alexandria, Egypt'
                                    description='Inchcape Shipping Services, 127 El Horia Road, 3rd Floor, Office No. 304, Bab Shark, Flower Clock Square, Above Ahli United Bank, Alexandria, Egypt'
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
                    <Typography variant='h2' textAlign='center' sx={{ mb: theme.spacing(2) }}>
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
                    <MapPointer
                        top='34vw'
                        left='48vw'
                        title='New Delhi, India'
                        description='Muskan Container Lines Pvt Ltd, Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, New Delhi, Delhi - 110078 | Tel : +91 11 41587468 / 40687469'
                    />
                    <MapPointer
                        top='42vw'
                        left='43.6vw'
                        title='Nhava Sheva, Mumbai'
                        description='Muskan Container Lines Pvt Ltd, Office No.- 342, 3rd Floor, Sai Chambers, Sector - 11, CBD Belapur, Navi Mumbai - 400614 | Tel : 022-27560779, 022-41278794'
                    />
                    <MapPointer
                        top='38.5vw'
                        left='55vw'
                        title='Kolkata, India'
                        description='Muskan Container Lines Pvt Ltd, Office - 26, 3rd Floor, C.R.Avenue, Kolkata, India - 700012 | Tel : +91 33-40619350'
                    />
                    <MapPointer
                        top='38vw'
                        left='40vw'
                        title='Mundra, India'
                        description='Muskan Container Lines Pvt Ltd, Office No.222, Second Floor, Manali Tower, Plot No.110, Sector 8, Kutch - 370201 | Tel : +91-2836231222'
                    />
                    <MapPointer
                        top='47vw'
                        left='48.5vw'
                        title='Chennai, India'
                        description='Muskan Container Lines Pvt Ltd, Office 72/1, First floor, Shop No 3, Linghi Chetty street, Mannady, Chennai - 600001 | Tel : +91-4442642551'
                    />
                    <MapPointer
                        top='47vw'
                        left='48.5vw'
                        title='Tuticorin, India'
                        description='OLS Maritime Agencies,  No. 5-A/54, Caldwell Colony, 1st Cross Street, Tuticorin - 628008, Tamilnadu, India.'
                    />
                    <MapPointer
                        top='50.4vw'
                        left='50vw'
                        title='Colombo, Srilanka'
                        description='Royal Asia Shipping Co Pvt Ltd, No .200, George R De Silva Mawatha, Colombo - 13, Sri Lanka |  Tel : +94 714141734, +94 114 616337, +94 112 395922'
                    />
                    <MapPointer
                        top='38vw'
                        left='77vw'
                        title='Hongkong'
                        description='Sea Legend Agency Co Ltd, 116/53 SSP Tower II, 15th Floor, Na Ranong Rd, Klongtoey, Bangkok - 10110, Thailand | Tel: 02-119-5268 (direct), 081-624-0354 | Fax :  02-119-5270'
                    />
                    <MapPointer
                        top='47.5vw'
                        left='72vw'
                        title='Ho Chi Minh City, Vietnam'
                        description='Collyer Shipping Co Ltd, Room A.3.09, Tower A, Millennium Office, 132 Ben Van Don, Ward 6, District 4,Ho Chi Minh City, Vietnam'
                    />
                    <MapPointer
                        top='44vw'
                        left='72vw'
                        title='Haiphong City, Vietnam'
                        description='Intercontinental Shipping Co Ltd, 14th Room, 7th Floor, Success Building, No. 3 Le Thanh Tong Street, Ngo Quyen District, Hai Phong City, Vietnam.'
                    />
                    <MapPointer
                        top='43.5vw'
                        left='83.5vw'
                        title='Manila, Philippines'
                        description='Ben Line Agencies Philippines Inc, Unit 701 A, 7th floor Tower A, Two E-com Center, Palm Coast Avenue, Mall of Asia Complex, Pasay City 1300, Philippines'
                    />
                    <MapPointer
                        top='54.5vw'
                        left='69vw'
                        title='Singapore'
                        description='Muskaan Shipping PTE LTD, 35 Selegie road, No. 09-02, Parklane Shopping Mall, Singapore - 188307 | Tel : +65-64921136'
                    />
                    <MapPointer
                        top='62vw'
                        left='73.1vw'
                        title='Jakarta, Indonesia'
                        description='PT Mitra Bintang Samudera, JL Kebon Bawang VII, No.25, Tanjung Priok, North Jakarta - 14320, Indonesia.'
                    />
                    <MapPointer
                        top='52.5vw'
                        left='67.2vw'
                        title='Port Klang, Malaysia'
                        description='Muskaan Shipping SDN BHD, No. 16-02, Centro Business Centre Suite, No.8 Jalan Batu Tiga Lama, Klang 41200, Malaysia | Tel : 00603-33418460/61 | Fax : 00603-33428462'
                    />
                    <MapPointer
                        top='26vw'
                        left='79vw'
                        title='Qingdao, China'
                        description='Qingdao Hi-Lander Logistics Co Ltd, Rm 1116, The Century Mansion, No.39, West Dong Hai Road, Qingdao, China. 266071'
                    />
                    <MapPointer
                        top='31vw'
                        left='80vw'
                        title='Shanghai, China'
                        description='Qingdao Hi-Lander Logistics Co Ltd,, RM2701, Financial Street Hailun Center, No.440 Hailun Road, Shanghai, China'
                    />
                    <MapPointer
                        top='33vw'
                        left='81vw'
                        title='Ningbo, China'
                        description='Qingdao Hi-Lander Logistics Co Ltd,, Room 1603, Portman Tower, No. 48 North Caihong Road, Ningbo, China'
                    />
                    <MapPointer
                        top='22vw'
                        left='77.5vw'
                        title='Tianjin, China'
                        description='Qingdao Hi-Lander Logistics Co Ltd, Room 1806, Tower C, City Center, Xikang Road, Heping District, Tianjin, China | Tel: 86-22-23393269'
                    />
                    <MapPointer
                        top='25vw'
                        left='85.5vw'
                        title='Seoul, South Korea'
                        description='Ben Line Agencies Ltd, 7F, Bolim B/D, 65, Myeongdong-gil, Jung-gu, Seoul 04538, South Korea'
                    />
                    <MapPointer
                        top='36vw'
                        left='37.5vw'
                        title='Karachi, Pakistan'
                        description='Trans Orient Logistics Pvt LTD, 1 / 4–A, 2nd Floor Block 6, P.E.C.H.S, Shahrah-e-Faisal, Karachi, Pakistan.'
                    />
                    <MapPointer
                        top='28.5vw'
                        left='25vw'
                        title='Tehran, Iran'
                        description='Golden Gate Cargo Ltd, Unit 12, No.12, 4th Alley, Qaem magham Farahani Street, Tehran – Iran'
                    />
                    <MapPointer
                        top='40vw'
                        left='30vw'
                        title='Muscat, Oman'
                        description='Inchcape Shipping Services, Bait Al Reem, Building No. 81, 2nd Floor, Office 22, Way No : 3409, Al Khuwair, Muscat, Sultanate of Oman'
                    />
                    <MapPointer
                        top='34vw'
                        left='21vw'
                        title='Kuwait City, Kuwait'
                        description='Inchcape Shipping Services, Building # 800117, Block 1, Al Qibla Area Opposite Seif Palace, Arabian Gulf Street, Safat 13001, PO Box-78, Kuwait'
                    />
                    <MapPointer
                        top='32vw'
                        left='22vw'
                        title='Basra, Iraq'
                        description={`Sima Marine Shipping Company, Al-Jaza'er, Opposite Shanshal Mall, Hey Sana, Basra, Iraq`}
                    />
                    <MapPointer
                        top='38vw'
                        left='28.2vw'
                        title='Dubai, UAE'
                        description='Muskaan Shipping LLC, 701, 7th floor, Mohammed Noor Talib Bldg, Khaleed bin waleed Road, Near Royal Ascot Hotel, Dubai - 128160 | Office : +9714 3511215 | Fax : +9714 3511216'
                    />
                    <MapPointer
                        top='34vw'
                        left='11.5vw'
                        title='Alexandria, Egypt'
                        description='Inchcape Shipping Services, 127 El Horia Road, 3rd Floor, Office No. 304, Bab Shark, Flower Clock Square, Above Ahli United Bank, Alexandria, Egypt'
                    />
                </Container>
            )}
        </Box>
    )
}
