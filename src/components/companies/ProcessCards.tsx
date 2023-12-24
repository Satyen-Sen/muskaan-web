import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import processBanner from '@/assets/companies/process-banner.webp'
import processBannerTab from '@/assets/companies/processBannerTab.webp'
import processWideBannerMobile from '@/assets/companies/processBannerWideMobile.webp'
import processBannerMobile from '@/assets/companies/processBannerMobile.webp'
import { ProcessData } from '@/data/companiesData'
import VisibilityTracker, { AnimationType, CollapseOrientation } from '@/components/VisibilityTracker'

export default function ProcessCards() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')
    const wideMobileMode = useMediaQuery('(max-width:629px)')
    const mobileMode = useMediaQuery('(max-width:459px)')
    const [hoveredImage, setHoveredImage] = useState(null)

    const handleMouseEnter = (index: any) => {
        setHoveredImage(index)
    }

    const handleMouseLeave = () => {
        setHoveredImage(null)
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Image
                src={
                    mobileMode
                        ? processBannerMobile
                        : wideMobileMode
                        ? processWideBannerMobile
                        : tabletMode
                        ? processBannerTab
                        : processBanner
                }
                alt='process banner'
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    mx: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) },
                }}
            >
                <Box sx={{ my: 'auto' }}>
                    <Typography variant='h3' sx={{ my: '2rem' }}>
                        Process
                    </Typography>
                    <VisibilityTracker
                        animationType={AnimationType.COLLAPSE}
                        collapseOrientation={CollapseOrientation.VERTICAL}
                        timeout={1500}
                    >
                        <Grid container spacing={mobileMode ? 1 : 2}>
                            {ProcessData.map((item, index) => (
                                <Grid item xs={6} sm={tabletMode ? 6 : 3}>
                                    <Box
                                        sx={{
                                            bgcolor: '#FFFFFF',
                                            borderRadius: '1rem',
                                            padding: '1.25rem',
                                            transition: 'transform 0.4s',
                                            height: '100%',
                                            transform: hoveredImage === index ? 'scale(1.1)' : 'scale(1)',
                                        }}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Image
                                            src={item.image}
                                            alt='card image'
                                            style={{
                                                width: 'auto',
                                                height: wideMobileMode ? '3rem' : '4rem',
                                            }}
                                        />
                                        <Typography variant='h6' textAlign='center' sx={{ fontWeight: 600, color: '#031225', my: '1rem' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant='body1'
                                            textAlign='center'
                                            className='ellipsis-10-lines'
                                            sx={{ color: '#031225', fontWeight: 300 }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </VisibilityTracker>
                </Box>
            </Box>
        </Box>
    )
}
