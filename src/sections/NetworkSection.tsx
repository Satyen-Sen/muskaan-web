import React from 'react'
import Image from 'next/image'
import { Box, Container, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { networkData } from '../data/networkData'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'

export default function NetworkSection() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:749px)')
    const mobileMode = useMediaQuery('(max-width:549px)')

    return (
        <Box sx={{ my: theme.spacing(6), mx: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
            <Container maxWidth='md' disableGutters>
                <Typography variant='h2' textAlign='center'>
                    Our Network
                </Typography>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Keyboard, Navigation, Pagination]}
                    className='mySwiper'
                >
                    {networkData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link href={item.href} underline='none' target='_blank' rel='noopener noreferrer'>
                                {tabletMode ? (
                                    <Box sx={{ my: theme.spacing(2), mx: theme.spacing(1), position: 'relative', cursor: 'pointer' }}>
                                        <Image
                                            src={item.smBg}
                                            alt='sm-bg'
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))',
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '48vw',
                                                left: 0,
                                                // width: '95%',
                                                pl: theme.spacing(2),
                                                pr: theme.spacing(2),
                                            }}
                                        >
                                            <Typography
                                                variant='subtitle2'
                                                sx={{ fontWeight: 600, fontSize: mobileMode ? '1.4rem' : '2rem' }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant='subtitle2'
                                                textAlign='justify'
                                                className='ellipsis-8-lines'
                                                sx={{ fontSize: mobileMode ? '1rem' : '1.5rem', mt: theme.spacing(1) }}
                                            >
                                                {item.subtitle}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box sx={{ my: theme.spacing(2), mx: theme.spacing(1), position: 'relative', cursor: 'pointer' }}>
                                        <Image
                                            src={item.background}
                                            alt='client-bg'
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.5))',
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                right: '4rem',
                                                width: '50%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                    <Image src={item.flag} alt='card image' style={{ height: '5rem', width: 'auto' }} />
                                                </Box>
                                                <Typography
                                                    variant='subtitle2'
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '1.75rem',
                                                        mt: theme.spacing(1.5),
                                                        mb: theme.spacing(1),
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography variant='subtitle2' textAlign='justify' className='ellipsis-8-lines'>
                                                    {item.subtitle}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                )}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    )
}
