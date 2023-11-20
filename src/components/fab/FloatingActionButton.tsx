import React, { useEffect, useState } from 'react'
import { Box, Fade, Link, Typography } from '@mui/material'

export default function FloatingActionButton({ href, text }: { href: string; text: string }) {
    const [trigger, setTrigger] = useState(false)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTrigger(true)
        }, 1000)
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <Fade in={trigger}>
            <Link href={href} underline='none'>
                <Box
                    sx={{
                        backgroundColor: '#E69B01',
                        borderRadius: '16px 0 0 16px',
                        p: '1rem 0.5rem 1rem 0.75rem',
                        my: '1rem',
                        boxShadow: 5,
                    }}
                >
                    <Typography variant='h6' sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed', whiteSpace: 'nowrap' }}>
                        {text}
                    </Typography>
                </Box>
            </Link>
        </Fade>
    )
}
