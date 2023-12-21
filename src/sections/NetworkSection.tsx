import React from 'react'
import Image from 'next/image'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { networkData } from '../data/networkData'
import { oswald } from '@/styles/fonts'
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
                <Typography variant='h2' textAlign='center' sx={{ fontFamily: oswald.style.fontFamily }}>
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
                            {tabletMode ? (
                                <Box sx={{ my: theme.spacing(2), mx: theme.spacing(1), position: 'relative' }}>
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
                                            width: '100%',
                                            px: theme.spacing(2),
                                        }}
                                    >
                                        <Typography variant='subtitle2' sx={{ fontWeight: 600, fontSize: mobileMode ? '1.4rem' : '2rem' }}>
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
                                <Box sx={{ my: theme.spacing(2), mx: theme.spacing(1), position: 'relative' }}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    )
}

{
    /* <Box sx={{ position: 'relative', height: wideMobileMode ? '42rem' : '45rem' }}>
                        {Array.from({ length: visibleIcons }).map((_, index) => {
                            const arrayIndex = (startIconIndex + index) % iconsLength
                            return (
                                <Box
                                    key={arrayIndex}
                                    sx={{
                                        backgroundColor: '#C1D2EC',
                                        borderRadius: '100px 100px 16px 16px',
                                        opacity: index === Math.floor(visibleIcons / 2) ? 1 : 0,
                                        transition: 'opacity 0.5s',
                                        position: 'absolute',
                                    }}
                                >
                                    <img src={clientsData[arrayIndex].cardSm} alt='client-img-sm' width='100%' height='auto' />
                                    <Box sx={{ p: theme.spacing(2) }}>
                                        <Typography variant='h2' sx={{ fontSize: '3rem', mb: theme.spacing(2) }}>
                                            {clientsData[arrayIndex].title}
                                        </Typography>
                                        <Typography
                                            variant='subtitle2'
                                            textAlign='justify'
                                            sx={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
                                        >
                                            {clientsData[arrayIndex].subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box> */
}

{
    /* <Container
                        maxWidth='md'
                        disableGutters
                        sx={{
                            my: theme.spacing(2),
                            position: 'relative',
                            height: desktopMode ? '45vw' : '34rem',
                        }}
                    >
                        <Image
                            src={clientBg}
                            alt='client-bg'
                            style={{
                                width: '100%',
                                height: 'auto',
                                paddingLeft: theme.spacing(8),
                                paddingTop: theme.spacing(2.5),
                            }}
                        />
                        {Array.from({ length: visibleIcons }).map((_, index) => {
                            const arrayIndex = (startIconIndex + index) % iconsLength
                            return (
                                <Box
                                    key={arrayIndex}
                                    sx={{
                                        opacity: index === Math.floor(visibleIcons / 2) ? 1 : 0,
                                        transition: 'opacity 0.5s',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        top: 0,
                                    }}
                                >
                                    <ClienteleCard
                                        cardImage={clientsData[arrayIndex].cardImage}
                                        cardIcon={clientsData[arrayIndex].cardIcon}
                                        title={clientsData[arrayIndex].title}
                                        subtitle={clientsData[arrayIndex].subtitle}
                                    />
                                </Box>
                            )
                        })}
                    </Container> */
}
