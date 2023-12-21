import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { IconButton, Link, Tooltip, Zoom } from '@mui/material'

declare type FABProps = {
    href: string
    text: string
    icon: string | StaticImageData
}

export default function FloatingActionButton({ href, text, icon }: FABProps) {
    return (
        <Link href={href} underline='none' target='_blank' rel='noopener noreferrer'>
            <Tooltip title={text} TransitionComponent={Zoom} placement='left' arrow>
                <IconButton
                    sx={{
                        backgroundColor: '#E69B01',
                        '&:hover': { backgroundColor: '#E69B01BF' },
                        borderRadius: '8px 0 0 8px',
                        p: { xs: '1rem', sm: '0.5rem' },
                        my: '0.25rem',
                        boxShadow: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        width: '3rem',
                    }}
                >
                    <Image src={icon} alt='FAB icon' style={{ height: '1.5rem', width: 'auto', maxWidth: '1.8rem' }} />
                </IconButton>
            </Tooltip>
        </Link>
    )
}
