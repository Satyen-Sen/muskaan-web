import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Container, IconButton, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { clientsData } from '../data/clientsData'
import ClienteleCard from '../components/ClienteleCard'
import clientBg from '@/assets/clients/client-bg.webp'
import clientBgSm from '@/assets/clients/client-bg-sm.png'
import prevIcon from '@/assets/icons/previous.webp'
import nextIcon from '@/assets/icons/next.webp'
import unileverImg from '@/assets/clients/Unilever-sm.webp'
import { oswald } from '@/styles/fonts'

export default function ClienteleSection() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:499px)')
    const wideMobileMode = useMediaQuery('(max-width:629px)')
    const narrowTabletMode = useMediaQuery('(max-width:749px)')
    const tabletMode = useMediaQuery('(max-width:849px)')
    const desktopMode = useMediaQuery('(max-width:1299px)')

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

    const changeCard = (index: number) => {
        const newIndex = (startIconIndex + index) % iconsLength
        setCardIndex(newIndex)
        if (index !== Math.floor(visibleIcons / 2)) {
            const difference = newIndex - Math.floor(visibleIcons / 2)
            setStartIconIndex((startIconIndex + difference + iconsLength) % iconsLength)
        }
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

                    {/* <Box sx={{ position: 'relative', height: wideMobileMode ? '42rem' : '45rem' }}>
                        {Array.from({ length: visibleIcons }).map((_, index) => {
                            const arrayIndex = (startIconIndex + index) % iconsLength
                            return (
                                <Box
                                    key={arrayIndex}
                                    sx={{
                                        backgroundColor: '#C1D2EC',
                                        borderRadius: '100px 100px 16px 16px',
                                        opacity: index === Math.floor(visibleIcons / 2) ? 1 : 0,
                                        transition: 'opacity 0.5s',
                                        position: 'absolute',
                                    }}
                                >
                                    <img src={clientsData[arrayIndex].cardSm} alt='client-img-sm' width='100%' height='auto' />
                                    <Box sx={{ p: theme.spacing(2) }}>
                                        <Typography variant='h2' sx={{ fontSize: '3rem', mb: theme.spacing(2) }}>
                                            {clientsData[arrayIndex].title}
                                        </Typography>
                                        <Typography
                                            variant='subtitle2'
                                            textAlign='justify'
                                            sx={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
                                        >
                                            {clientsData[arrayIndex].subtitle}
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box> */}
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

                    {/* <Container
                        maxWidth='md'
                        disableGutters
                        sx={{
                            my: theme.spacing(2),
                            position: 'relative',
                            height: desktopMode ? '45vw' : '34rem',
                        }}
                    >
                        <Image
                            src={clientBg}
                            alt='client-bg'
                            style={{
                                width: '100%',
                                height: 'auto',
                                paddingLeft: theme.spacing(8),
                                paddingTop: theme.spacing(2.5),
                            }}
                        />
                        {Array.from({ length: visibleIcons }).map((_, index) => {
                            const arrayIndex = (startIconIndex + index) % iconsLength
                            return (
                                <Box
                                    key={arrayIndex}
                                    sx={{
                                        opacity: index === Math.floor(visibleIcons / 2) ? 1 : 0,
                                        transition: 'opacity 0.5s',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        top: 0,
                                    }}
                                >
                                    <ClienteleCard
                                        cardImage={clientsData[arrayIndex].cardImage}
                                        cardIcon={clientsData[arrayIndex].cardIcon}
                                        title={clientsData[arrayIndex].title}
                                        subtitle={clientsData[arrayIndex].subtitle}
                                    />
                                </Box>
                            )
                        })}
                    </Container> */}
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
                            <Box sx={{ height: '4rem', display: 'flex' }} key={arrayIndex} onClick={() => changeCard(index)}>
                                <img
                                    src={clientsData[arrayIndex].cardIcon}
                                    alt='client icon'
                                    width='auto'
                                    height='100%'
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                />
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
