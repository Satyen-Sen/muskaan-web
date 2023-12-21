import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import type { StaticImageData } from 'next/image'
import { AppBar, Box, Container, Typography, useScrollTrigger, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Navbar from '../components/Navbar'
import FooterSection from '../sections/FooterSection'

interface Props {
    window?: () => Window
    children: React.ReactElement
}

function ElevationScroll(props: Props) {
    const { children, window } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}

declare type LayoutProps = {
    image: string | StaticImageData
    title?: string
    subtitle?: string
    withTabs?: boolean
    children: React.ReactNode
    pageTitle?: string
    props?: Props
}

export default function LayoutCentered({ image, title, children, pageTitle, props }: LayoutProps) {
    const theme = useTheme()
    const wideMobileMode = useMediaQuery('(max-width:699px)')
    const mobileMode = useMediaQuery('(max-width:499px)')
    const ultraMobileMode = useMediaQuery('(max-width:399px)')
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props?.window ? props.window() : undefined,
    })

    return (
        <>
            <Head>
                <title>{pageTitle} | Muskan Group </title>
            </Head>
            <React.Fragment>
                <ElevationScroll {...props}>
                    <AppBar position='fixed' style={{ backgroundColor: trigger ? '#003A9B' : '#003A9B40' }}>
                        <Navbar />
                    </AppBar>
                </ElevationScroll>
                <Box sx={{ backgroundColor: '#EFF6FF' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            height: '42vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image src={image} alt='header image' style={{ width: '100%', height: 'auto', position: 'absolute' }} />
                        <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
                            <Typography
                                variant='h1'
                                sx={{
                                    fontSize: ultraMobileMode ? '3.8rem' : mobileMode ? '4.2rem' : wideMobileMode ? '5rem' : '5.4rem',
                                    pt: mobileMode ? '3.5rem' : '0rem',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>
                    </Box>
                    <Container maxWidth='xl' disableGutters sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
                        {children}
                    </Container>
                    <FooterSection noMargin />
                </Box>
            </React.Fragment>
        </>
    )
}
