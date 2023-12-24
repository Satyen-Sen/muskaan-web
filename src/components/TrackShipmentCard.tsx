import React, { useState } from 'react'
import { Alert, Box, Slide, Snackbar, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import PrimaryTextField from './PrimaryTextField'

export default function TrackShipmentCard() {
    const theme = useTheme()
    const wideMode = useMediaQuery('(min-width:900px)')
    const mediumMode = useMediaQuery('(min-width:400px) and (max-width:899px)')
    const [searchText, setSearchText] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false)
    }

    const onSubmit = () => {
        if (searchText.trim() === '') {
            setSnackbarOpen(true)
        } else {
            const url = `shipment-status?track_data=${searchText}`
            const newTab = window.open(url, '_blank')
            if (newTab) {
                newTab.focus()
            }
            console.log(url)
        }
    }

    return (
        <Box
            sx={{
                backgroundColor: '#EFF6FF',
                height: '16.8rem',
                minWidth: wideMode ? '26rem' : mediumMode ? '30rem' : '26rem',
                borderRadius: '0px 8px 8px 8px',
                boxShadow: '4px 4px 4px 4px #00000023',
                padding: theme.spacing(1),
                position: 'relative',
            }}
        >
            <PrimaryTextField
                label='Search'
                placeholder='Enter Reference No. / Bill No. / container No.'
                helperText=' Input multiple numbers, separated by spaces and commas.'
                startIcon
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
            />

            <Box
                sx={{
                    position: 'absolute',
                    bottom: theme.spacing(1),
                    right: theme.spacing(1),
                }}
            >
                <PrimaryButton text='Track' onClick={onSubmit} />
            </Box>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                TransitionComponent={(props) => <Slide {...props} direction='right' />}
            >
                <Alert onClose={handleCloseSnackbar} severity='error'>
                    Search query can't be empty!
                </Alert>
            </Snackbar>
        </Box>
    )
}
