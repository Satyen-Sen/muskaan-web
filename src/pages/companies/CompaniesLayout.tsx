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
    title?: string
    subtitle?: string
    children: React.ReactNode
    props?: Props
}

export default function CompaniesLayout({ image, title, subtitle, children, props }: CompaniesLayoutProps) {
    const theme = useTheme()

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar>
                    <Navbar />
                </AppBar>
            </ElevationScroll>
            <Box sx={{ backgroundColor: '#EFF6FF' }}>
                <HeaderSection image={image} title={title} subtitle={subtitle} />

                <Container maxWidth='xl' disableGutters>
                    {children}
                </Container>

                <Box sx={{ px: theme.spacing(12) }}>
                    <Container maxWidth='xl' disableGutters>
                        <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', mt: '4rem', color: '#1B1B1F' }}>
                            Contact Us
                        </Typography>
                        <MuskaanGroupHq />
                    </Container>
                </Box>
                <FooterSection />
            </Box>
        </React.Fragment>
    )
}
