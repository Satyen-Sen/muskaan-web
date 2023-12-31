import { Box, Typography, useMediaQuery } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import VisibilityTracker, { AnimationType } from '../VisibilityTracker'

export default function ServicesCard({ title, desc, image }: { title: String; desc: String; image: string | StaticImageData }) {
    const customMobileMode = useMediaQuery('(min-width:600px) and (max-width:649px)')

    const [hovered, setHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <Box
            sx={{
                position: 'relative',
                transition: 'transform 0.4s',
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
                maxWidth: '20rem',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image src={image} alt='' style={{ height: 'auto', width: '100%' }} />
            <Box sx={{ position: 'absolute', top: '0', left: '0', p: customMobileMode ? '1rem' : '1.25rem' }}>
                <Typography
                    variant='h6'
                    sx={{
                        textAlign: 'start',
                        my: customMobileMode ? '0rem' : '1rem',
                        mb: '1rem',
                        color: '#FFFFFF',
                        fontWeight: 600,
                    }}
                >
                    {title}
                </Typography>
                <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#FFFFFF', fontWeight: 300, fontSize: '0.75rem' }}>
                        {desc}
                    </Typography>
                    {title == 'Our Commitment' ? (
                        <Typography
                            component={'ul'}
                            textAlign={'start'}
                            variant='body1'
                            sx={{ color: '#FFFFFF', ml: '1.25rem', mt: '1rem' }}
                        >
                            {ourCommitments.map((item, index) => (
                                <Typography
                                    component={'li'}
                                    textAlign={'start'}
                                    variant='body1'
                                    sx={{ color: '#FFFFFF', mb: '0.5rem', fontWeight: 300, fontSize: '0.75rem' }}
                                    key={index}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Typography>
                    ) : (
                        <></>
                    )}
                </VisibilityTracker>
            </Box>
        </Box>
    )
}

const ourCommitments = ['Customer Loyalty.', ' Understand Customer Needs.', ' Excellence in Quality and Service.']
