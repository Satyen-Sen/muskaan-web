import React, { useState, useEffect } from 'react'
import { Box, Container, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { servicesData } from '../data/servicesData'
import Image from 'next/image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'

export default function ServicesSectionMobile() {
    const theme = useTheme()
    const smallMobileMode = useMediaQuery('(max-width:349px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const tabletMode = useMediaQuery('(max-width:999px)')
    const dynamicHeight = smallMobileMode ? '76vw' : mobileMode ? '42vw' : tabletMode ? '27vw' : '22vw'

    return (
        <Container disableGutters maxWidth='lg'>
            <Swiper
                slidesPerView={2}
                spaceBetween={0}
                loop={true}
                speed={1500}
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
                breakpoints={{
                    100: { slidesPerView: 1 },
                    350: { slidesPerView: 2 },
                    600: { slidesPerView: 3 },
                }}
                navigation={true}
                modules={[Autoplay, Keyboard, Navigation, Pagination]}
                className='mySwiper'
            >
                {servicesData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link href={item.link}>
                            <Box
                                sx={{
                                    scrollSnapAlign: 'start',
                                    width: dynamicHeight,
                                    height: dynamicHeight,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: smallMobileMode ? '1rem' : '0rem',
                                }}
                            >
                                <Image
                                    src={item.horizontalCard}
                                    alt='card background'
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                                <Typography
                                    variant='h6'
                                    textAlign='center'
                                    sx={{ p: theme.spacing(1), position: 'absolute', fontWeight: 600 }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}
