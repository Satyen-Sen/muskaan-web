import React from 'react'
import Head from 'next/head'
import { useTheme } from '@mui/material/styles'
import { AppBar, Box, useMediaQuery, useScrollTrigger } from '@mui/material'
import HeroSection from '../sections/HeroSection'
import ServicesSection from '../sections/ServicesSection'
import ShippingSection from '../sections/ShippingSection'
import NetworkSection from '@/sections/NetworkSection'
import BusinessPresenceSection from '../sections/BusinessPresenceSection'
import ClienteleSection from '../sections/ClienteleSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import Navbar from '../components/Navbar'
import ShipmentTracker from '@/sections/ShipmentTracker'

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

export default function ElevateAppBar(props: Props) {
    const theme = useTheme()
    const desktopMode = useMediaQuery('(min-width:900px)')
    const tabletMode = useMediaQuery('(min-width:650px) and (max-width:899px)')
    const mobileMode = useMediaQuery('(min-width:500px) and (max-width:649px)')
    const SmallMobileMode = useMediaQuery('(max-width:499px)')
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? props.window() : undefined,
    })

    return (
        <>
            <Head>
                <title>Home | Muskan Group </title>
            </Head>
            <React.Fragment>
                <ElevationScroll {...props}>
                    <AppBar position='fixed' style={{ backgroundColor: trigger ? '#003A9B' : '#003A9B40' }}>
                        <Navbar />
                    </AppBar>
                </ElevationScroll>
                <Box sx={{ background: '#EFF6FF', width: '100vw' }}>
                    <HeroSection />

                    <Box
                        sx={{
                            position: 'relative',
                            top: desktopMode ? '-18vh' : tabletMode ? '-16vh' : mobileMode ? '-12vh' : SmallMobileMode ? '-9vh' : '0vh',
                            display: 'flex',
                            justifyContent: 'center',
                            mx: theme.spacing(2),
                        }}
                    >
                        <ShipmentTracker />
                    </Box>

                    <ServicesSection />
                    <ShippingSection />
                    <NetworkSection />
                    <BusinessPresenceSection />
                    <ClienteleSection />
                    <ContactSection />
                    <FooterSection />
                </Box>
            </React.Fragment>
        </>
    )
}
