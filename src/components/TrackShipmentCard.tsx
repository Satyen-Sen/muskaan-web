import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Link, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import PrimaryTextField from './PrimaryTextField'

export default function TrackShipmentCard() {
    const theme = useTheme()
    const router = useRouter()
    const wideMode = useMediaQuery('(min-width:900px)')
    const mediumMode = useMediaQuery('(min-width:400px) and (max-width:899px)')
    const SmallMode = useMediaQuery('(max-width:399px)')

    const [searchText, setSearchText] = useState('')

    const onSubmit = () => {
        const url = 'https://old.muskan-group.com/shipment-status?track_data=' + searchText
        router.push(url)
        console.log(url)
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
        </Box>
    )
}
