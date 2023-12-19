import React from 'react'
import type { StaticImageData } from 'next/image'
import HeaderSection from '../../sections/HeaderSection'
import FooterSection from '../../sections/FooterSection'
import { AppBar, Box, Container, Typography, useScrollTrigger } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MuskaanGroupHq from '../../components/MuskaanGroupHq'
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

declare type CompaniesLayoutProps = {
    image: string | StaticImageData
    mapSrc?: string
    title?: string
    subtitle?: string
    caption?: string
    address?: String
    telephoneNumber?: String
    emailId?: String
    companyName?: String
    children: React.ReactNode
    props?: Props
}

export default function CompaniesLayout({
    image,
    title,
    subtitle,
    caption,
    children,
    props,
    mapSrc,
    address,
    telephoneNumber,
    emailId,
    companyName,
}: CompaniesLayoutProps) {
    const theme = useTheme()
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props?.window ? props.window() : undefined,
    })

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position='fixed' style={{ backgroundColor: trigger ? '#003A9B' : '#003A9B40' }}>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box sx={{ backgroundColor: '#EFF6FF' }}>
                <HeaderSection image={image} title={title} subtitle={subtitle} caption={caption} />

                <Container maxWidth='xl' disableGutters>
                    {children}
                </Container>

                <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                    <Container maxWidth='xl' disableGutters>
                        <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', mt: '4rem', color: '#1B1B1F' }}>
                            {companyName || 'Contact Us'}
                        </Typography>
                        <MuskaanGroupHq address={address} mapSrc={mapSrc} telephoneNumber={telephoneNumber} emailId={emailId} />
                    </Container>
                </Box>
                <FooterSection />
            </Box>
        </React.Fragment>
    )
}
