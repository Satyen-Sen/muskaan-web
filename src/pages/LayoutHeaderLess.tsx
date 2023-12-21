import React from 'react'
import Head from 'next/head'
import FooterSection from '../sections/FooterSection'
import { AppBar, Box, Container, useScrollTrigger } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Navbar from '../components/Navbar'

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

export default function LayoutHeaderLess({ pageTitle, children, props }: { pageTitle?: string; children: React.ReactNode; props?: Props }) {
    const theme = useTheme()

    return (
        <>
            <Head>
                <title>{pageTitle} | Muskan Group </title>
            </Head>
            <React.Fragment>
                <ElevationScroll {...props}>
                    <AppBar>
                        <Navbar />
                    </AppBar>
                </ElevationScroll>
                <Box sx={{ backgroundColor: '#EFF6FF', mx: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
                    <Container maxWidth='xl' disableGutters>
                        {children}
                    </Container>
                </Box>
                <FooterSection />
            </React.Fragment>
        </>
    )
}
