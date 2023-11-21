import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
    Box,
    Collapse,
    Container,
    Divider,
    Grid,
    IconButton,
    IconButtonProps,
    InputLabel,
    Typography,
    styled,
    useMediaQuery,
} from '@mui/material'
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
import TrackVesselSchedulesCard from '@/components/TrackVesselSchedulesCard'
import TrackResponseText from '@/components/TrackResponseText'
import FlagIcon from '@mui/icons-material/Flag'

interface VesselData {
    id: number
    port_of_loading: string
    port_of_discharge: string
    transit_days: string
    vessel_voyage: string
    docs_cut_off: string
    vgm_cut_off: string
    port_cargo_cutoff: string
    eta_pol: string
    etd_pol: string
    eta_pod: string
    is_direct: boolean
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

function PortInfo({ date, info, portName, portAddress }: { date: String; info: String; portName: String; portAddress: String }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Divider component='div' orientation='vertical'>
                <Image src={circularLocationIcon} alt='circular Location Icon' style={{ height: '2rem', width: '2rem' }} />
            </Divider>
            <Box sx={{ ml: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                        {date}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', textAlign: 'start', color: '#313131B2', ml: '1rem' }}>{info}</Typography>
                </Box>
                <Typography
                    variant='body1'
                    sx={{ textAlign: 'start', color: '#003A9B', fontWeight: 700, textTransform: 'capitalize', my: '0.5rem' }}
                >
                    {portName.toLowerCase()}
                </Typography>
                <Typography variant='body1' sx={{ textAlign: 'start', color: '#1B1B1F' }}>
                    {portAddress}
                </Typography>
            </Box>
        </Box>
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

    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const [vesselData, setVesselData] = useState<VesselData[]>([])

    useEffect(() => {
        async function fetchVesselData() {
            try {
                const response = await fetchDataFromApi(`api/vessel/?pol=${pol}&pod=${pod}&date=${dateValue}`)
                setVesselData(response)
            } catch (error) {
                console.error('Error in fetching vessel data: ', error)
            }
        }
        fetchVesselData()
    }, [])

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
                    <TrackVesselSchedulesCard onEmptyPage />
                </Container>
            </Box>

            {vesselData?.map((item) => (
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
                                        <PrimaryButton text='Book Now' />
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography sx={{ marginLeft: 'auto', mr: '0.5rem' }}>View Detail</Typography>
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
                                            <PrimaryButton text='Book Now' />
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
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography sx={{ marginLeft: 'auto', mr: '0.5rem' }}>View Detail</Typography>
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
                                info='ETD at POL'
                                portName={item?.port_of_loading}
                                portAddress='Adani Ports and SEZ'
                            />
                            <ShipLocation
                                lane='IGS (Service Lane)'
                                shipName={item?.vessel_voyage}
                                duration='11 Days 19 Hours'
                                doc={item?.docs_cut_off}
                                port={item?.port_cargo_cutoff}
                                inland='28-08-2023 00:00'
                                vgm={item?.vgm_cut_off}
                            />
                            <PortInfo
                                date={item?.eta_pod}
                                info=' ETD at POL'
                                portName={item?.port_of_discharge}
                                portAddress=' Adani Ports and SEZ'
                            />
                        </Collapse>
                    </Box>
                </Container>
            ))}
        </LayoutCentered>
    )
}

declare type ShipLocationProps = {
    lane: String
    duration: String
    shipName: String
    doc: String
    port: String
    inland: String
    vgm: String
}

function ShipLocation({ lane, duration, shipName, doc, port, inland, vgm }: ShipLocationProps) {
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
                    <Divider sx={{ my: '1rem' }} />
                    <Box>
                        <Typography variant='h6' sx={{ color: '#1B1B1F', fontSize: '1rem', mb: '0.8rem' }}>
                            Cut off
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={3}>
                                <TrackResponseText title='Doc' subtitle={doc} noMargin />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <TrackResponseText title='Inland' subtitle={inland} noMargin />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <TrackResponseText title='VGM' subtitle={vgm} noMargin />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <TrackResponseText title='Port' subtitle={port} noMargin />
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
                    <Divider orientation='vertical' flexItem />
                    <Box sx={{ width: '70%' }}>
                        <Typography variant='h6' sx={{ textAlign: 'start', color: '#1B1B1F', mx: '0.5rem', fontSize: '1rem' }}>
                            Cut off
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1rem' }}>
                            <TrackResponseText title='Doc' subtitle={doc} />
                            <TrackResponseText title='Inland' subtitle={inland} />
                            <TrackResponseText title='VGM' subtitle={vgm} />
                            <TrackResponseText title='Port' subtitle={port} />
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
