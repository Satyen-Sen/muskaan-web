import React from 'react'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { servicesData } from '../data/servicesData'
import CarouselCard from '../components/CaraousalCard'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import ServicesSectionMobile from './ServicesSectionMobile'
import { oswald } from '@/styles/fonts'

export default function ServicesSection() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')

    return (
        <Box
            sx={{ mt: tabletMode ? theme.spacing(0) : theme.spacing(4), px: { xs: theme.spacing(2), sm: theme.spacing(4) } }}
            id='services'
        >
            <Container disableGutters maxWidth='xl'>
                <Typography variant='h2' textAlign='center' sx={{ fontFamily: oswald.style.fontFamily }}>
                    Our Services
                </Typography>

                {tabletMode ? (
                    <Box>
                        <ServicesSectionMobile />
                    </Box>
                ) : (
                    <Box sx={{ my: theme.spacing(6) }}>
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
                            breakpoints={{
                                765: { slidesPerView: 3 },
                                1000: { slidesPerView: 4 },
                            }}
                            navigation={true}
                            modules={[Autoplay, Keyboard, Navigation, Pagination]}
                            className='mySwiper'
                        >
                            {servicesData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <CarouselCard
                                            coverImage={item.coverImage}
                                            footerImage={item.footerImage}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            href={item.link}
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                )}
            </Container>
        </Box>
    )
}
