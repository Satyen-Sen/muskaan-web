import React from 'react'
import { AppProps } from 'next/app'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../styles/theme'
import '../styles/globals.css'
import FloatingActionButton from '@/components/fab/FloatingActionButton'

import tariffIcon from '../assets/fab/tariff.png'
import detentionTariffIcon from '../assets/fab/detention.png'
import feedbackIcon from '../assets/fab/feedback.png'

function MyApp(props: AppProps) {
    const { Component, pageProps } = props

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
            <Box sx={{ position: 'fixed', top: '40%', right: 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <FloatingActionButton
                        text='Tariff'
                        icon={tariffIcon}
                        href='https://docs.google.com/spreadsheets/d/e/2PACX-1vSS1CuAkXy_EKDk5WFSHoSADJ6p2Fkup2JItUT2K-YETsEeqQc46PstjpvUHoFvnHlWQYQXMmzX90Mt/pubhtml'
                    />
                    <FloatingActionButton
                        text='Detention Tariff'
                        icon={detentionTariffIcon}
                        href='https://docs.google.com/spreadsheets/d/e/2PACX-1vRv4Eesz9DGQfaAoB5FXtcV-fdXGbo64wQ0atFR_izQzeTtU7KC-V2v6S6h6S5ePbb6WbnvY2kliNsJ/pubhtml'
                    />
                    <FloatingActionButton text='Feedback' icon={feedbackIcon} href='https://forms.gle/Hg6gA1U5MyZ1A6hT7' />
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default MyApp
