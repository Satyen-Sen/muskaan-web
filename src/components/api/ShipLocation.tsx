import React from 'react'
import Image from 'next/image'
import { Box, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import circularShipBlackIcon from '@/assets/icons/circular_ship_icon_black.png'
import circularShipGreyIcon from '@/assets/icons/circular_ship_icon_grey.png'
import TrackResponseText from '@/components/TrackResponseText'

declare type ShipLocationProps = {
    lane?: String
    duration?: String
    shipName?: String
    doc?: String
    port?: String
    inland?: String
    vgm?: String
}

export default function ShipLocation({ lane, duration, shipName, doc, port, inland, vgm }: ShipLocationProps) {
    const wideMobileMode = useMediaQuery('(max-width:699px)')
    const smallMobileMode = useMediaQuery('(max-width:599px)')

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', height: smallMobileMode ? '24rem' : wideMobileMode ? '18rem' : '12rem' }}>
            <Divider component='div' orientation='vertical' flexItem>
                <Image src={circularShipGreyIcon} alt='' style={{ height: '2rem', width: '2rem' }} />
            </Divider>
            {wideMobileMode ? (
                <Box sx={{ mx: '1rem', bgcolor: '#EFF6FF', width: '100%', p: '1rem', borderRadius: '12px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={circularShipBlackIcon} alt='' style={{ height: '2rem', width: '2rem' }} />
                        <Box sx={{ mx: '1rem' }}>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                                {lane}
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'start', fontWeight: 600, color: '#003A9B', my: '0.5rem' }}>
                                {shipName}
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                                {duration}
                            </Typography>
                        </Box>
                    </Box>
                    {doc && inland && vgm && port && <Divider sx={{ my: '1rem' }} />}
                    <Box>
                        {doc && (
                            <Typography variant='h6' sx={{ color: '#1B1B1F', fontSize: '1rem', mb: '0.8rem' }}>
                                Cut off
                            </Typography>
                        )}
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={3}>
                                {doc && <TrackResponseText title='Doc' subtitle={doc} noMargin />}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {inland && <TrackResponseText title='Inland' subtitle={inland} noMargin />}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {vgm && <TrackResponseText title='VGM' subtitle={vgm} noMargin />}
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                {port && <TrackResponseText title='Port' subtitle={port} noMargin />}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mx: '2rem',
                        bgcolor: '#EFF6FF',
                        width: '100%',
                        p: '1rem',
                        borderRadius: '12px',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={circularShipBlackIcon} alt='' style={{ height: '2rem', width: '2rem' }} />
                        <Box sx={{ mx: '1rem' }}>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                                {lane}
                            </Typography>
                            <Typography variant='h6' sx={{ textAlign: 'start', fontWeight: 600, color: '#003A9B', my: '0.5rem' }}>
                                {shipName}
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                                {duration}
                            </Typography>
                        </Box>
                    </Box>
                    {doc && inland && vgm && port && <Divider orientation='vertical' flexItem />}
                    <Box sx={{ width: '70%' }}>
                        {doc && (
                            <Typography variant='h6' sx={{ textAlign: 'start', color: '#1B1B1F', mx: '0.5rem', fontSize: '1rem' }}>
                                Cut off
                            </Typography>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1rem' }}>
                            {doc && <TrackResponseText title='Doc' subtitle={doc} />}
                            {inland && <TrackResponseText title='Inland' subtitle={inland} />}
                            {vgm && <TrackResponseText title='VGM' subtitle={vgm} />}
                            {port && <TrackResponseText title='Port' subtitle={port} />}
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
