import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Box, Collapse, Container, Divider, Grid, IconButton, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import 'dayjs/locale/en-gb'
import titleImg from '@/assets/images/cargo-ship-1.webp'
import shipIcon from '@/assets/icons/icons_cargo_ship.png'
import arrowRight from '@/assets/icons/arrow-right-big.png'
import switchIcon from '@/assets/icons/switch.png'
import leftArrowIcon from '@/assets/icons/ep_back.png'
import rightArrowIcon from '@/assets/icons/ep_back_right.png'
import downArrowIcon from '@/assets/icons/arrow_down_circle.png'
import PrimaryTextField from '@/components/PrimaryTextField'
import FooterSection from '@/sections/FooterSection'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import HeaderSection from '@/sections/HeaderSection'
import { DatePicker } from '@mui/x-date-pickers'
import circularShipBlackIcon from '@/assets/icons/circular_ship_icon_black.png'
import circularShipGreyIcon from '@/assets/icons/circular_ship_icon_grey.png'
import circularLocationIcon from '@/assets/icons/circular_location.png'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { fetchDataFromApi } from '@/api/api'
import LayoutCentered from '../LayoutCentered'
import TrackVesselScedulesPage from '@/components/TrackVesselScedulesPage'
import TrackResponseText from '@/components/TrackResponseText'
import FlagIcon from '@mui/icons-material/Flag'
import ShipLocation from '@/components/api/ShipLocation'
import PortInfo from '@/components/api/PortInfo'

interface TranshipmentPort {
    id: number
    port: string
    transit_days: number
    eta: string
    etd: string
    vessel: number
}

interface VesselData {
    id: number
    port_of_loading: string
    port_of_discharge: string
    transit_days: string
    transhipment_ports?: TranshipmentPort[]
    vessel_voyage: string
    docs_cut_off: string
    vgm_cut_off: string
    port_cargo_cutoff: string
    eta_pol: string
    etd_pol: string
    eta_pod: string
    is_direct: boolean
    port_address?: string
}

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
    const router = useRouter()
    const { pol, pod, dateValue } = router.query

    const ShortMode = useMediaQuery('(min-width:700px) and (max-width:839px)')
    const wideMobileMode = useMediaQuery('(max-width:699px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraMobileMode = useMediaQuery('(max-width:449px)')
    const verySmallMode = useMediaQuery('(max-width:399px)')

    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const [vesselData, setVesselData] = useState<VesselData[]>([])

    useEffect(() => {
        async function fetchVesselData() {
            try {
                const response = await fetchDataFromApi(`api/vessel/?pol=${pol}&pod=${pod}&date=${dateValue}`)
                setVesselData(response)
                setExpanded(false)
            } catch (error) {
                console.error('Error in fetching vessel data: ', error)
            }
        }
        fetchVesselData()
    }, [pol, pod, dateValue])

    return (
        <LayoutCentered image={titleImg} title={ultraMobileMode ? 'Schedules' : 'Vessel Schedules'}>
            <Box
                sx={{
                    position: 'relative',
                    height: ultraMobileMode ? '19rem' : mobileMode ? '14rem' : '12rem',
                    mx: ultraMobileMode ? '0rem' : mobileMode ? '2rem' : wideMobileMode ? '4rem' : '6rem',
                    borderRadius: '12px',
                }}
            >
                <Container
                    maxWidth='lg'
                    disableGutters
                    sx={{
                        position: 'relative',
                        top: ultraMobileMode ? '2rem' : mobileMode ? '-3rem' : '-6rem',
                    }}
                >
                    <TrackVesselScedulesPage />
                </Container>
            </Box>
            {vesselData.length === 0 ? (
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h4' sx={{ textAlign: 'center', color: '#003A9B', py: '4rem' }}>
                        No results found. Please try a different search.
                    </Typography>
                </Container>
            ) : (
                vesselData?.map((item) => (
                    <Container maxWidth='xl' disableGutters key={item.id} sx={{ mt: '2rem' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant='h3'
                                sx={{
                                    textAlign: 'start',
                                    color: '#1B1B1F',
                                    textTransform: 'capitalize',
                                    fontSize: mobileMode ? '1.25rem' : wideMobileMode ? '1.75rem' : '2rem',
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 1,
                                }}
                            >
                                {item?.port_of_loading.toLowerCase()}
                                <Image
                                    src={arrowRight}
                                    alt=''
                                    style={{
                                        height: 'auto',
                                        width: mobileMode ? '2rem' : wideMobileMode ? '2.5rem' : '3rem',
                                        margin: ultraMobileMode ? '0rem 1rem' : '0rem 2rem',
                                    }}
                                />
                                {item?.port_of_discharge.toLowerCase()}
                            </Typography>
                        </Box>

                        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                                Total: {'02'} Results
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={leftArrowIcon} alt='' style={{ height: 'auto', width: '1.25rem' }} />
                                <Typography
                                    variant='body1'
                                    sx={{ textAlign: 'start', color: '#1B1B1F', mx: '1.25rem' }}
                                >
                                    Previous Page
                                </Typography>
                                <Typography
                                    variant='body1'
                                    sx={{ textAlign: 'start', color: '#1B1B1F', mx: '1.25rem' }}
                                >
                                    Next Page
                                </Typography>
                                <Image src={rightArrowIcon} alt='' style={{ height: 'auto', width: '1.25rem' }} />
                            </Box>
                        </Box> */}

                        <Box sx={{ bgcolor: '#FFFFFF', borderRadius: '12px', p: '1rem', my: '1rem' }}>
                            <>
                                {wideMobileMode ? (
                                    <Box>
                                        <Typography variant='body1' sx={{ textAlign: 'center', color: '#003A9B' }}>
                                            {item?.transit_days} Days
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                my: '0.5rem',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '12rem' }}>
                                                <LocationOnIcon />
                                                <TrackResponseText
                                                    title={verySmallMode ? 'POL' : 'Port of Loading'}
                                                    subtitle={item?.port_of_loading.toLowerCase()}
                                                />
                                            </Box>

                                            {verySmallMode ? (
                                                <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />
                                            ) : (
                                                <>
                                                    <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />
                                                    <Image src={shipIcon} alt='shipIcon' style={{ height: '2rem', width: 'auto' }} />
                                                    <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />
                                                </>
                                            )}
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '12rem' }}>
                                                <FlagIcon />
                                                <TrackResponseText
                                                    title={verySmallMode ? 'POD' : 'Port Of Discharge'}
                                                    subtitle={item?.port_of_discharge.toLowerCase()}
                                                />
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                bgcolor: '#003A9B33',
                                                borderRadius: '1.25rem',
                                                p: '0.25rem',
                                                margin: 'auto',
                                                width: '5rem',
                                                alignSelf: 'center',
                                            }}
                                        >
                                            <Typography variant='body1' sx={{ textAlign: 'center', color: '#003A9B' }}>
                                                {item?.is_direct == true ? 'Direct' : 'Indirect'}
                                            </Typography>
                                        </Box>
                                        <Divider sx={{ mt: '1rem', mb: '1rem' }} />
                                        <Grid container spacing={1} justifyContent='space-between' alignItems='center'>
                                            <Grid item xs={6}>
                                                <TrackResponseText title='Vessel/Voyage' subtitle={item?.vessel_voyage} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TrackResponseText title='Service Lane' subtitle='NCI' />
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1.5rem' }}>
                                            <Link href='/quote'>
                                                <PrimaryButton text='Book Now' />
                                            </Link>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ marginLeft: 'auto', mr: '0.5rem' }}>View Details</Typography>
                                                <ExpandMore expand={expanded} onClick={handleExpandClick}>
                                                    <Image src={downArrowIcon} alt='' style={{ height: 'auto', width: '1.25rem' }} />
                                                </ExpandMore>
                                            </Box>
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ width: '50%' }}>
                                            <Typography variant='body1' sx={{ textAlign: 'center', color: '#003A9B' }}>
                                                {item?.transit_days} Days
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    my: '0.5rem',
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '10rem' }}>
                                                    <LocationOnIcon />
                                                    <TrackResponseText
                                                        title={ShortMode ? 'POL' : 'Port of Loading'}
                                                        subtitle={item?.port_of_loading.toLowerCase()}
                                                    />
                                                </Box>
                                                <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />
                                                <Image src={shipIcon} alt='shipIcon' style={{ height: '2rem', width: 'auto' }} />
                                                <Divider sx={{ border: '1px dashed #929292', width: '10%' }} />
                                                <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '10rem' }}>
                                                    <FlagIcon />
                                                    <TrackResponseText
                                                        title={ShortMode ? 'POD' : 'Port Of Discharge'}
                                                        subtitle={item?.port_of_discharge.toLowerCase()}
                                                    />
                                                </Box>
                                            </Box>
                                            <Box
                                                sx={{
                                                    bgcolor: '#003A9B33',
                                                    borderRadius: '1.25rem',
                                                    p: '0.25rem',
                                                    margin: 'auto',
                                                    width: '5rem',
                                                    alignSelf: 'center',
                                                }}
                                            >
                                                <Typography variant='body1' sx={{ textAlign: 'center', color: '#003A9B' }}>
                                                    {item?.is_direct == true ? 'Direct' : 'Indirect'}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Divider orientation='vertical' flexItem />

                                        <Box sx={{ width: '44%' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Link href='/quote'>
                                                    <PrimaryButton text='Book Now' />
                                                </Link>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    maxWidth: ShortMode ? '80%' : '70%',
                                                    my: '1rem',
                                                }}
                                            >
                                                <TrackResponseText title='Vessel/Voyage' subtitle={item?.vessel_voyage} />
                                                <TrackResponseText title='Service Lane' subtitle='NCI' />
                                            </Box>
                                            <Box
                                                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                                onClick={handleExpandClick}
                                            >
                                                <Typography sx={{ marginLeft: 'auto', mr: '0.5rem' }}>View Details</Typography>
                                                <ExpandMore expand={expanded} onClick={handleExpandClick}>
                                                    <Image src={downArrowIcon} alt='' style={{ height: 'auto', width: '1.25rem' }} />
                                                </ExpandMore>
                                            </Box>
                                        </Box>
                                    </Box>
                                )}
                            </>

                            <Collapse in={expanded} timeout='auto' unmountOnExit>
                                <Divider sx={{ my: '2rem', borderColor: '#929292' }} />
                                <PortInfo
                                    date={item?.eta_pol}
                                    info={`ETD at ${item?.port_of_loading}`}
                                    portName={item?.port_of_loading}
                                    portAddress={item?.port_address || 'Adani Ports & SEZ'}
                                />
                                <ShipLocation
                                    lane='IGS (Service Lane)'
                                    shipName={item?.vessel_voyage}
                                    duration={`${item?.transit_days} Days`}
                                    doc={item?.docs_cut_off}
                                    port={item?.port_cargo_cutoff}
                                    inland='28-08-2023 00:00'
                                    vgm={item?.vgm_cut_off}
                                />

                                {item.transhipment_ports &&
                                    item.transhipment_ports.length > 0 &&
                                    item.transhipment_ports.map((port) => (
                                        <div key={port.id}>
                                            <PortInfo
                                                date={port?.eta}
                                                info={`Arrival at ${port.port}`}
                                                portName={port?.port}
                                                portAddress={item?.port_address}
                                                date2={port?.etd}
                                                info2={`Estimated Time of Departure`}
                                            />
                                            <ShipLocation
                                                lane='IGS (Service Lane)'
                                                shipName={item?.vessel_voyage}
                                                duration={`${port.transit_days} days`}
                                            />
                                        </div>
                                    ))}
                                <PortInfo
                                    date={item?.eta_pod}
                                    info={`ETD at ${item?.port_of_discharge}`}
                                    portName={item?.port_of_discharge}
                                    portAddress={item?.port_address || 'PSA Corporation Ltd'}
                                />
                            </Collapse>
                        </Box>
                    </Container>
                ))
            )}
        </LayoutCentered>
    )
}
