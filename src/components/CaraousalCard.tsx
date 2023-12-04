import React, { useState } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Fade, Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import cardBackground from '@/assets/carousel/card-background.png'

declare type CarouselCardProps = {
    coverImage: string | StaticImageData
    title?: string
    subtitle?: string
    footerImage: string | StaticImageData
    href?: string
}

export default function CarouselCard({ coverImage, title, subtitle, footerImage, href }: CarouselCardProps) {
    const theme = useTheme()
    const [coverCardVisible, setCoverCardVisible] = useState(true)

    const onMouseEnter = () => {
        setCoverCardVisible(false)
    }

    const onMouseOut = () => {
        setCoverCardVisible(true)
    }

    return (
        <Link href={href}>
            <Box sx={{ height: '24.5rem', width: '18.375rem', cursor: 'pointer' }}>
                <Fade in={coverCardVisible} timeout={500}>
                    <Box sx={{ position: 'relative' }} onMouseEnter={onMouseEnter}>
                        <Image
                            src={coverImage}
                            alt='card background'
                            style={{
                                width: '100%',
                                height: 'auto',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '22rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#00000040',
                                borderRadius: theme.spacing(1.125),
                            }}
                        >
                            <Typography variant='h6' textAlign='center' sx={{ m: theme.spacing(1), fontWeight: 600 }}>
                                {title}
                            </Typography>
                        </Box>
                    </Box>
                </Fade>

                <Fade in={!coverCardVisible} timeout={500}>
                    <Box sx={{ position: 'relative', height: '22rem' }} onMouseOut={onMouseOut}>
                        <Image
                            src={cardBackground}
                            alt='card background'
                            style={{
                                width: '100%',
                                height: 'auto',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        />
                        <Box
                            sx={{
                                p: theme.spacing(1),
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        >
                            <Typography variant='h6' sx={{ width: '90%' }}>
                                {title}
                            </Typography>
                            <Typography variant='body2' sx={{ mt: theme.spacing(1.125) }}>
                                {subtitle}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                p: theme.spacing(1),
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                            }}
                        >
                            <Image
                                src={footerImage}
                                alt='footer image'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    </Box>
                </Fade>
            </Box>
        </Link>
    )
}
