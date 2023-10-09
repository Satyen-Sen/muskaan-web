import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { Box, Container, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Navbar from '../components/Navbar'
import { oswald } from '../styles/fonts'

declare type HeaderProps = {
    image: string | StaticImageData
    title?: string
    subtitle?: string
}

export default function HeaderSection({ image, title, subtitle }: HeaderProps) {
    const theme = useTheme()
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '42vw',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Image
                src={image}
                alt='cargo'
                style={{
                    width: '100%',
                    height: 'auto',
                    position: 'absolute',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    mt: theme.spacing(2),
                    mx: theme.spacing(4),
                }}
            >
                <Navbar />

                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h1' sx={{ mt: theme.spacing(4) }}>
                        {title}
                    </Typography>

                    <Typography
                        variant='h2'
                        sx={{
                            mt: theme.spacing(1.2),
                            fontFamily: oswald.style.fontFamily,
                            color: 'common.white',
                            fontWeight: 400,
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}
