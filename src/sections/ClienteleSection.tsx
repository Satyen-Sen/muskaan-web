import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Container, IconButton, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { clientsData } from '../data/clientsData'
import prevIcon from '@/assets/icons/previous.webp'
import nextIcon from '@/assets/icons/next.webp'
import { oswald } from '@/styles/fonts'

export default function ClienteleSection() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:499px)')
    const narrowTabletMode = useMediaQuery('(max-width:749px)')
    const tabletMode = useMediaQuery('(max-width:849px)')

    const visibleIcons = narrowTabletMode ? 3 : 5
    const iconsLength = clientsData.length
    const [startIconIndex, setStartIconIndex] = useState(0)
    const [cardIndex, setCardIndex] = useState(Math.floor(iconsLength / 2))

    const handlePrev = () => {
        const newIndex = (startIconIndex - 1 + iconsLength) % iconsLength
        setStartIconIndex(newIndex)
        setCardIndex((cardIndex - 1 + iconsLength) % iconsLength)
    }

    const handleNext = () => {
        const newIndex = (startIconIndex + 1) % iconsLength
        setStartIconIndex(newIndex)
        setCardIndex((cardIndex + 1) % iconsLength)
    }

    return (
        <Box sx={{ mx: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
            {narrowTabletMode ? (
                <Container maxWidth='sm' disableGutters>
                    <Box sx={{ my: theme.spacing(2) }}>
                        <Typography variant={mobileMode ? 'h3' : 'h2'} textAlign='center' sx={{ color: '#081225' }}>
                            Appreciated by some of
                        </Typography>
                        <Typography variant={mobileMode ? 'h3' : 'h2'} textAlign='center' sx={{ color: '#081225' }}>
                            the best in industry
                        </Typography>
                    </Box>
                </Container>
            ) : (
                <>
                    {tabletMode ? (
                        <Box sx={{ my: theme.spacing(2) }}>
                            <Typography variant='h2' textAlign='center'>
                                Appreciated by some of the
                            </Typography>
                            <Typography variant='h2' textAlign='center'>
                                best in industry
                            </Typography>
                        </Box>
                    ) : (
                        <Typography
                            variant='h2'
                            textAlign='center'
                            sx={{ mb: theme.spacing(6), fontFamily: oswald.style.fontFamily, mt: '16rem' }}
                        >
                            Appreciated by some of the best in industry
                        </Typography>
                    )}
                </>
            )}
            <Container maxWidth='md' disableGutters sx={{ mb: theme.spacing(4), position: 'relative' }}>
                <Box
                    sx={{
                        my: theme.spacing(2),
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <IconButton onClick={handlePrev} sx={{ marginRight: theme.spacing(mobileMode ? 0 : narrowTabletMode ? 4 : 6) }}>
                        <Image src={prevIcon} alt='prevIcon' style={{ height: '2rem', width: 'auto' }} />
                    </IconButton>

                    {Array.from({ length: visibleIcons }).map((_, index) => {
                        const arrayIndex = (startIconIndex + index) % iconsLength
                        return (
                            <Box sx={{ height: '4rem', mx: '0.5rem', display: 'flex' }} key={arrayIndex}>
                                <img src={clientsData[arrayIndex].cardIcon} alt='client icon' width='auto' height='100%' />
                            </Box>
                        )
                    })}

                    <IconButton onClick={handleNext} sx={{ marginLeft: theme.spacing(mobileMode ? 0 : narrowTabletMode ? 4 : 6) }}>
                        <Image src={nextIcon} alt='nextIcon' style={{ height: '2rem', width: 'auto' }} />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
}
