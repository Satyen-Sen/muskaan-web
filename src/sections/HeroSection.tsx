import React, { useEffect } from 'react'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'

export default function HeroSection() {
    const theme = useTheme()
    const desktopMode = useMediaQuery('(min-width:800px)')
    const tabletMode = useMediaQuery('(min-width:600px) and (max-width:799px)')
    const mobileMode = useMediaQuery(' (min-width:450px) and (max-width:599px)')
    const ultraMobileMode = useMediaQuery(' (max-width:449px)')
    const smallMode = useMediaQuery('(max-width:399px)')

    useEffect(() => {
        const video = document.getElementById('video') as HTMLVideoElement | null
        if (video) {
            video.play().catch((error) => {
                console.error('Autoplay failed:', error)
            })
        }
    }, [])

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: smallMode ? '70vw' : '56vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <>
                <video
                    src='/video/container_terminal.webm'
                    muted
                    autoPlay
                    loop
                    id='video'
                    style={{
                        width: smallMode ? 'auto' : '100%',
                        height: smallMode ? '70vw' : 'auto',
                        position: 'absolute',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                />
            </>

            <Box
                sx={{
                    position: 'relative',
                    mt: theme.spacing(3),
                    mx: theme.spacing(ultraMobileMode ? 0 : mobileMode ? 2 : 4),
                }}
            >
                <Container
                    maxWidth='xl'
                    disableGutters
                    sx={{
                        height: '46vw',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant='h1'
                        sx={{
                            fontSize: desktopMode
                                ? '4.5rem'
                                : tabletMode
                                ? '3.8rem'
                                : mobileMode
                                ? '3rem'
                                : ultraMobileMode
                                ? '2rem'
                                : '0rem',
                            lineHeight: desktopMode
                                ? '6rem'
                                : tabletMode
                                ? '4.2rem'
                                : mobileMode
                                ? '3.5rem'
                                : ultraMobileMode
                                ? '2.2rem'
                                : '0rem',
                            whiteSpace: 'pre-line',
                        }}
                    >
                        Effortless Shipping {ultraMobileMode ? '&' : 'and'} Logistics
                    </Typography>

                    <Typography
                        variant='h2'
                        textAlign='center'
                        sx={{
                            mt: { xs: theme.spacing(1), sm: theme.spacing(2) },
                            fontFamily: oswald.style.fontFamily,
                            color: 'common.white',
                            fontWeight: 400,
                            fontSize: desktopMode
                                ? '3rem'
                                : tabletMode
                                ? '2.5rem'
                                : mobileMode
                                ? '2rem'
                                : ultraMobileMode
                                ? '1.5rem'
                                : '0rem',
                            lineHeight: desktopMode
                                ? '4rem'
                                : tabletMode
                                ? '3rem'
                                : mobileMode
                                ? '2rem'
                                : ultraMobileMode
                                ? '2rem'
                                : '0rem',
                        }}
                    >
                        Muskan Group Makes it Simple
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}
