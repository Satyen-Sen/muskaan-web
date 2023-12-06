import React from 'react'
import Image from 'next/image'
import { Box, Divider, Typography } from '@mui/material'
import circularLocationIcon from '@/assets/icons/circular_location.png'

declare type ShipLocationProps = {
    date?: String
    info?: String
    portName?: String
    portAddress?: String
    date2?: String
    info2?: String
}

export default function PortInfo({ date, info, portName, portAddress, date2, info2 }: ShipLocationProps) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Divider component='div' orientation='vertical'>
                <Image src={circularLocationIcon} alt='circular Location Icon' style={{ height: '2rem', width: '2rem' }} />
            </Divider>
            <Box sx={{ ml: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {date}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', textAlign: 'start', color: '#313131B2', ml: '1rem' }}>{info}</Typography>
                </Box>
                <Typography
                    variant='body1'
                    sx={{ textAlign: 'start', color: '#003A9B', fontWeight: 700, textTransform: 'capitalize', my: '0.5rem' }}
                >
                    {portName?.toLowerCase()}
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                    {portAddress}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {date2}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', textAlign: 'start', color: '#313131B2', ml: '1rem' }}>{info2}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
