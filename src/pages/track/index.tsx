import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
    Box,
    Collapse,
    Container,
    Divider,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    useMediaQuery,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import 'dayjs/locale/en-gb'
import titleImg from '@/assets/images/cargo-ship-1.webp'
import shipIcon from '@/assets/icons/icons_cargo_ship.png'
import circularShipIcon from '@/assets/icons/circular_ship_icon.png'
import circularLocationIcon from '@/assets/icons/circular_location.png'
import PrimaryTextField from '@/components/PrimaryTextField'
import PrimaryButton from '@/components/PrimaryButton'
import downArrowIcon from '@/assets/icons/arrow_down_circle.png'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FlagIcon from '@mui/icons-material/Flag'
import LayoutCentered from '../LayoutCentered'
import TrackResponseText from '@/components/TrackResponseText'

const columns = [
    { id: 1, label: '', borderRadius: '12px 0 0 12px' },
    { id: 2, label: 'Location', borderRadius: '0' },
    { id: 3, label: 'Date & Time', borderRadius: '0' },
    { id: 4, label: 'Status Description', borderRadius: '0 12px 12px 0' },
]

const rows = [
    {
        id: 1,
        icon: circularLocationIcon,
        location: 'Mundra',
        date: '29-08-2023, 23:00',
        status: 'Empty Container release to shipper',
    },
    {
        id: 2,
        icon: circularShipIcon,
        location: 'Singapore',
        date: '12-09-2023, 17:00',
        status: 'Empty Container release to shipper',
    },
    { id: 3, icon: circularLocationIcon, location: 'Jebel Ali', date: '25-09-2023, 19:00', status: '' },
]

interface ExpandMoreProps {
    expand: boolean
    onClick: () => void
    children: React.ReactNode
}

const ExpandMore = ({ expand, onClick, children }: ExpandMoreProps) => {
    const theme = useTheme()

    return (
        <IconButton
            onClick={onClick}
            sx={{
                transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
                }),
            }}
        >
            {children}
        </IconButton>
    )
}

export default function Home() {
    const ShortMode = useMediaQuery('(min-width:700px) and (max-width:849px)')
    const tabletMode = useMediaQuery('(max-width:799px)')
    const wideMobileMode = useMediaQuery('(max-width:699px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const smallMobileMode = useMediaQuery('(max-width:499px)')
    const ultraMobileMode = useMediaQuery('(max-width:449px)')

    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const [shipmentData, setShipmentData] = useState([1, 2, 3])

    return (
        <LayoutCentered image={titleImg} title={ultraMobileMode ? 'Track' : 'Track Shipments'} pageTitle='Track Shipments'>
            <Box sx={{ mx: ultraMobileMode ? '0rem' : mobileMode ? '2rem' : wideMobileMode ? '4rem' : '6rem' }}>
                <Box
                    sx={{
                        position: 'relative',
                        height: ultraMobileMode ? '12rem' : mobileMode ? '9rem' : tabletMode ? '6rem' : 0,
                    }}
                >
                    {mobileMode ? (
                        <Container
                            maxWidth='sm'
                            disableGutters
                            sx={{
                                p: '1rem',
                                backgroundColor: '#EFF6FF',
                                borderRadius: '12px',
                                position: 'absolute',
                                top: ultraMobileMode ? '1rem' : '-3rem',
                                boxShadow: 4,
                            }}
                        >
                            <PrimaryTextField label='Search' placeholder='Enter Reference No. / Bill No. / container No.' startIcon />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <PrimaryButton text='Search' width='8rem' />
                            </Box>
                        </Container>
                    ) : (
                        <Container
                            maxWidth='lg'
                            disableGutters
                            sx={{
                                p: '1rem',
                                pb: '1.5rem',
                                backgroundColor: '#EFF6FF',
                                borderRadius: '12px',
                                position: 'relative',
                                top: tabletMode ? '-3rem' : '-9rem',
                                display: 'flex',
                                alignItems: 'flex-end',
                                boxShadow: 3,
                            }}
                        >
                            <Box sx={{ width: '100%', mr: '1rem' }}>
                                <PrimaryTextField
                                    label='Search'
                                    placeholder='Enter Reference No. / Bill No. / container No.'
                                    startIcon
                                    noBottomPadding
                                />
                            </Box>
                            <PrimaryButton text='Search' width='8rem' height='2.6rem' />
                        </Container>
                    )}
                </Box>
            </Box>

            {shipmentData.length > 0 && (
                <Box sx={{ my: '2rem' }}>
                    <Typography
                        variant='h3'
                        sx={{
                            textAlign: 'start',
                            color: '#1B1B1F',
                            fontSize: smallMobileMode ? '1.5rem' : '2rem',
                            fontWeight: 600,
                        }}
                    >
                        Container Number: MEDU1650929
                    </Typography>
                    <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: '12px', p: '1.25rem', mt: '1rem' }}>
                        {wideMobileMode ? (
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <LocationOnIcon />
                                        <TrackResponseText title={ShortMode ? 'POL' : 'Port of Loading'} subtitle='Mundra' />
                                    </Box>

                                    <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />
                                    <Image src={shipIcon} alt='shipIcon' style={{ height: '2rem', width: 'auto' }} />
                                    <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />

                                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <FlagIcon />
                                        <TrackResponseText title={ShortMode ? 'POD' : 'Port Of Discharge'} subtitle='Jebel Ali' />
                                    </Box>
                                </Box>

                                <Divider sx={{ mt: '1rem', mb: smallMobileMode ? '1.5rem' : '1rem' }} />

                                {smallMobileMode ? (
                                    <Grid container spacing={1} justifyContent='space-between' alignItems='center'>
                                        <Grid item xs={6}>
                                            <TrackResponseText title='Vessel/Voyage' subtitle='SHIMIN 015E' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TrackResponseText title='Cargo Type' subtitle='Consolidated Cargo' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TrackResponseText title='Current Location' subtitle='Singapore' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TrackResponseText title='Container Type' subtitle='40 GP Standard' />
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <TrackResponseText title='Vessel/Voyage' subtitle='SHIMIN 015E' />
                                        <TrackResponseText title='Cargo Type' subtitle='Consolidated Cargo' />
                                        <TrackResponseText title='Current Location' subtitle='Singapore' />
                                        <TrackResponseText title='Container Type' subtitle='40 GP Standard' />
                                    </Box>
                                )}
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
                                    <Typography
                                        sx={{
                                            fontSize: '0.8rem',
                                            marginLeft: 'auto',
                                            mr: '0.5rem',
                                            color: '#003A9B',
                                        }}
                                    >
                                        Status Detail
                                    </Typography>
                                    <ExpandMore expand={expanded} onClick={handleExpandClick}>
                                        <Image src={downArrowIcon} alt='' style={{ height: 'auto', width: '1.25rem' }} />
                                    </ExpandMore>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '40%',
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <LocationOnIcon />
                                        <TrackResponseText title={ShortMode ? 'POL' : 'Port of Loading'} subtitle='Mundra' />
                                    </Box>

                                    <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />
                                    <Image src={shipIcon} alt='shipIcon' style={{ height: '2rem', width: 'auto' }} />
                                    <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />

                                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <FlagIcon />
                                        <TrackResponseText title={ShortMode ? 'POD' : 'Port Of Discharge'} subtitle='Jebel Ali' />
                                    </Box>
                                </Box>

                                <Divider orientation='vertical' flexItem sx={{ mx: '1rem', borderColor: '#929292' }} />

                                <Box sx={{ width: '56%' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <TrackResponseText title='Vessel/Voyage' subtitle='SHIMIN 015E' />
                                        <TrackResponseText title='Cargo Type' subtitle='Consolidated Cargo' />
                                        <TrackResponseText title={ShortMode ? 'Location' : 'Current Location'} subtitle='Singapore' />
                                        <TrackResponseText title='Container Type' subtitle='40 GP Standard' />
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '0.8rem',
                                                marginLeft: 'auto',
                                                mr: '0.5rem',
                                                color: '#003A9B',
                                            }}
                                        >
                                            Status Detail
                                        </Typography>
                                        <ExpandMore expand={expanded} onClick={handleExpandClick}>
                                            <Image src={downArrowIcon} alt='' style={{ height: 'auto', width: '1.25rem' }} />
                                        </ExpandMore>
                                    </Box>
                                </Box>
                            </Box>
                        )}

                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                            <Divider sx={{ my: '1.5rem', borderColor: '#929292' }} />
                            <TableContainer sx={{ overflowX: 'auto' }}>
                                <Table sx={{ minWidth: 480 }}>
                                    <TableRow>
                                        {columns.map((column) => {
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    sx={{
                                                        borderRadius: column.borderRadius,
                                                        backgroundColor: '#EFF6FF',
                                                    }}
                                                >
                                                    <Typography
                                                        variant='subtitle2'
                                                        textAlign='center'
                                                        sx={{ color: '#003A9B', fontWeight: 600 }}
                                                    >
                                                        {column.label}
                                                    </Typography>
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>

                                    <TableBody>
                                        {rows.map((row, index) => {
                                            return (
                                                <TableRow
                                                    style={{
                                                        borderRadius: '12px',
                                                    }}
                                                    key={index}
                                                >
                                                    <TableCell align='left'>
                                                        <Image src={row.icon} alt='' style={{ height: '2rem', width: '2rem' }} />
                                                    </TableCell>
                                                    <TableCell align='center'>{row.location}</TableCell>
                                                    <TableCell align='center'>{row.date}</TableCell>
                                                    <TableCell align='center'>{row.status ? row.status : 'Not yet reached'}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Collapse>
                    </Box>
                </Box>
            )}
        </LayoutCentered>
    )
}
