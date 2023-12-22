import React from 'react'
import Image from 'next/image'
import { Box, Divider, Tooltip, Typography, Zoom } from '@mui/material'
import location from '@/assets/images/locationPointer.png'

declare type MapPointerProps = {
    title: string
    description: string
    top: string
    left: string
}

export default function MapPointer({ title, description, top, left }: MapPointerProps) {
    return (
        <Tooltip
            title={
                <Box>
                    <Typography
                        variant='body1'
                        textAlign='start'
                        sx={{ fontWeight: 300, color: '#FFFFFF', lineHeight: '1.5rem', fontSize: '1.25rem' }}
                    >
                        {title}
                    </Typography>
                    <Divider sx={{ borderColor: '#FFFFFF40' }} />
                    <Typography variant='body1' textAlign='justify' sx={{ fontWeight: 300, lineHeight: '1.5rem', color: '#FFFFFF' }}>
                        {description}
                    </Typography>
                </Box>
            }
            TransitionComponent={Zoom}
            placement='top'
            arrow
        >
            <Image
                src={location}
                alt='location'
                style={{ position: 'absolute', height: '1.5rem', width: 'auto', top: top, left: left, cursor: 'pointer' }}
            />
        </Tooltip>
    )
}
