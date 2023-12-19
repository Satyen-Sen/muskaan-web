import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { oswald } from '../styles/fonts'
import VisibilityTracker, { AnimationType } from '@/components/VisibilityTracker'

declare type HeaderProps = {
    image?: string | StaticImageData
    title?: string
    subtitle?: string
    customHeight?: string
    caption?: string
}

export default function HeaderSection({ image, title, subtitle, caption, customHeight }: HeaderProps) {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:749px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraMobileMode = useMediaQuery('(max-width:399px)')

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: customHeight ? customHeight : mobileMode ? '56vw' : '42vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {image ? (
                <Image
                    src={image}
                    alt='cargo'
                    style={{
                        width: mobileMode ? 'auto' : '100%',
                        height: mobileMode ? '50vw' : 'auto',
                        position: 'absolute',
                    }}
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/loader/about.png'
                />
            ) : (
                <></>
            )}

            <Box
                sx={{
                    position: 'relative',
                    mt: theme.spacing(2),
                    mx: { xs: theme.spacing(0), sm: theme.spacing(4) },
                }}
            >
                <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={2000}>
                    <Container maxWidth='xl' disableGutters>
                        <Typography
                            variant='h1'
                            sx={{
                                mt: theme.spacing(mobileMode ? 6 : 8),
                                fontSize: ultraMobileMode ? '1.8rem' : mobileMode ? '2.4rem' : tabletMode ? '3rem' : '4.5rem',
                                whiteSpace: 'pre-line',
                                lineHeight: ultraMobileMode ? '2.2rem' : mobileMode ? '3rem' : tabletMode ? '3.8rem' : '6.2rem',
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant='h2'
                            textAlign='center'
                            sx={{
                                mt: theme.spacing(1.25),
                                fontFamily: oswald.style.fontFamily,
                                color: 'common.white',
                                fontWeight: 400,
                                whiteSpace: 'pre-line',
                                fontSize: ultraMobileMode ? '1.6rem' : mobileMode ? '2rem' : tabletMode ? '2.3rem' : '3rem',
                                lineHeight: ultraMobileMode ? '1.8rem' : mobileMode ? '2.4rem' : tabletMode ? '2.8rem' : '3.5rem',
                            }}
                        >
                            {subtitle}
                        </Typography>
                        <Typography
                            variant='h2'
                            textAlign='center'
                            sx={{
                                mt: theme.spacing(1),
                                fontFamily: oswald.style.fontFamily,
                                color: 'common.white',
                                fontWeight: 400,
                                fontSize: ultraMobileMode ? '1rem' : mobileMode ? '1.25rem' : tabletMode ? '1.75rem' : '2.25rem',
                                lineHeight: ultraMobileMode ? '1.25rem' : mobileMode ? '1.5rem' : tabletMode ? '2rem' : '2.5rem',
                            }}
                        >
                            {caption}
                        </Typography>
                    </Container>
                </VisibilityTracker>
            </Box>
        </Box>
    )
}
