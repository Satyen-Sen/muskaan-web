import React from 'react'
import type { StaticImageData } from 'next/image'
import HeaderSection from '../../sections/HeaderSection'
import FooterSection from '../../sections/FooterSection'
import { AppBar, Box, Container, useScrollTrigger, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ServicesCards from '../../components/services/ServicesCards'
import Navbar from '../../components/Navbar'

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

declare type ServicesLayoutProps = {
    image: string | StaticImageData
    title?: string
    subtitle?: string
    children: React.ReactNode
    props?: Props
}

export default function ServicesLayout({ image, title, subtitle, children, props }: ServicesLayoutProps) {
    const theme = useTheme()

    const ultraMobileMode = useMediaQuery('(max-width:449px)')
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props?.window ? props.window() : undefined,
    })

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
            <AppBar position='fixed' style={{ backgroundColor: trigger ? '#003A9B' : 'transparent' }}>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box sx={{ backgroundColor: '#EFF6FF' }}>
                <HeaderSection image={image} title={ultraMobileMode ? '' : title} subtitle={subtitle} />
                <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                    <Container maxWidth='xl' disableGutters>
                        {children}
                    </Container>
                </Box>
                <ServicesCards />
                <FooterSection />
            </Box>
        </React.Fragment>
    )
}
