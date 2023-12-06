import React from 'react'
import { Box, Typography } from '@mui/material'

export default function TrackResponseText({ title, subtitle, noMargin }: { title?: String; subtitle?: String; noMargin?: boolean }) {
    return (
        <Box sx={{ mx: noMargin ? '0rem' : '0.5rem' }}>
            <Typography variant='subtitle2' sx={{ fontSize: '0.8rem', color: '#1B1B1F', fontWeight: 500 }}>
                {title}
            </Typography>
            <Typography
                variant='subtitle2'
                sx={{
                    color: '#1B1B1F',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                }}
            >
                {subtitle}
            </Typography>
        </Box>
    )
}
