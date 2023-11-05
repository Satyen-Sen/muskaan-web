import React, { useState } from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import TrackShipmentCard from '../components/TrackShipmentCard'
import TrackVesselSchedulesCard from '../components/TrackVesselSchedulesCard'

export default function ShipmentTracker() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')

    const [activeTab, setActiveTab] = useState(1)

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber)
    }

    return (
        <Box sx={{ mx: theme.spacing(4) }}>
            {tabletMode ? (
                <Container maxWidth='sm' disableGutters>
                    <Box sx={{ display: 'flex' }}>
                        <Box
                            sx={{
                                borderRadius: '16px 0px 0px 0px',
                                height: '3rem',
                                width: '12.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backgroundColor:
                                    activeTab === 1 ? theme.palette.secondary.light : theme.palette.primary.main,
                            }}
                            onClick={() => handleTabClick(1)}
                        >
                            <Typography
                                variant='h5'
                                sx={{
                                    color: activeTab === 1 ? theme.palette.primary.main : theme.palette.common.white,
                                }}
                            >
                                Track Shipment
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                borderRadius: '0px 16px 0px 0px',
                                height: '3rem',
                                width: '12.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backgroundColor:
                                    activeTab === 2 ? theme.palette.secondary.light : theme.palette.primary.main,
                            }}
                            onClick={() => handleTabClick(2)}
                        >
                            <Typography
                                variant='h5'
                                sx={{
                                    color: activeTab === 2 ? theme.palette.primary.main : theme.palette.common.white,
                                }}
                            >
                                Track Schedules
                            </Typography>
                        </Box>
                    </Box>
                    <>
                        {activeTab === 1 && <TrackShipmentCard />}
                        {activeTab === 2 && <TrackVesselSchedulesCard />}
                    </>
                </Container>
            ) : (
                <Container maxWidth='md'>
                    <Grid container spacing={2} sx={{ width: '100%' }}>
                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    borderRadius: '16px 16px 0px 0px',
                                    backgroundColor: 'primary.main',
                                    height: '2.5rem',
                                    width: '16rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant='h4'>Track Shipment</Typography>
                            </Box>
                            <TrackShipmentCard />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    borderRadius: '16px 16px 0px 0px',
                                    backgroundColor: 'primary.main',
                                    height: '2.5rem',
                                    width: '16rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant='h4'>Track Schedules</Typography>
                            </Box>
                            <TrackVesselSchedulesCard />
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Box>
    )
}
