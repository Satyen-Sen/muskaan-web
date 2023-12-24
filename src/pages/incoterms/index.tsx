import React from 'react'
import Image from 'next/image'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import titleImg from '@/assets/images/incotermsTitle.webp'
import incotermsImg from '@/assets/images/incoterms.webp'
import LayoutCentered from '../LayoutCentered'

const BulletList = ({ text }: { text: string }) => {
    const theme = useTheme()
    return (
        <Typography
            variant='body1'
            textAlign='justify'
            sx={{ color: '#031225', fontWeight: 500, my: theme.spacing(1), pl: theme.spacing(1.5) }}
        >
            <ul>
                <li>{text}</li>
            </ul>
        </Typography>
    )
}

export default function Home() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:849px)')
    const mobileMode = useMediaQuery('(max-width:499px)')

    return (
        <LayoutCentered image={titleImg} title='Incoterms' pageTitle='Incoterms' customHeight='35vw'>
            <Box sx={{ my: theme.spacing(3), mx: { xs: 0, sm: theme.spacing(1), md: theme.spacing(8) } }}>
                <Typography
                    variant={mobileMode ? 'h4' : tabletMode ? 'h3' : 'h2'}
                    textAlign='justify'
                    sx={{ color: '#031225', fontWeight: 600 }}
                >
                    An overview of Incoterms® 2020 for 11 Terms, 7 for any mode of transport.
                </Typography>

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    EXW – Ex-Works or Ex-Warehouse
                </Typography>
                <BulletList
                    text='Ex works is when the seller places the goods at the disposal of the buyer at the seller’s premises or at another named place
                (i.e., works, factory, warehouse, etc.).'
                />
                <BulletList text='The seller does not need to load the goods on any collecting vehicle. Nor does it need to clear them for export, where such clearance is applicable.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    FCA – Free Carrier
                </Typography>
                <BulletList text='The seller delivers the goods to the carrier or another person nominated by the buyer at the seller’s premises or another named place.' />
                <BulletList text='The parties are well advised to specify as explicitly as possible the point within the named place of delivery, as the risk passes to the buyer at that point.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    FAS – Free Alongside Ship
                </Typography>
                <BulletList text='The seller delivers when the goods are placed alongside the vessel (e.g., on a quay or a barge) nominated by the buyer at the named port of shipment.' />
                <BulletList text='The risk of loss of or damage to the goods passes when the products are alongside the ship. The buyer bears all costs from that moment onwards.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    FOB – Free On Board
                </Typography>
                <BulletList text='The seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment or procures the goods already so delivered.' />
                <BulletList text='The risk of loss of or damage to the goods passes when the products are on board the vessel. The buyer bears all costs from that moment onwards.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    CFR – Cost and Freight
                </Typography>
                <BulletList text='The seller delivers the goods on board the vessel or procures the goods already so delivered.' />
                <BulletList text='The risk of loss of or damage to the goods passes when the products are on board the vessel.' />
                <BulletList text='The seller must contract for and pay the costs and freight necessary to bring the goods to the named port of destination.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    CIF – Cost, Insurance and Freight
                </Typography>
                <BulletList text='The seller delivers the goods on board the vessel or procures the goods already so delivered. The risk of loss of or damage to the goods passes when the products are on the ship.' />
                <BulletList text='The seller must contract for and pay the costs and freight necessary to bring the goods to the named port of destination.' />
                <BulletList text='The seller also contracts for insurance cover against the buyer’s risk of loss of or damage to the goods during the carriage.' />
                <BulletList text='The buyer should note that under CIF the seller is required to obtain insurance only on minimum cover. Should the buyer wish to have more insurance protection, it will need either to agree as much expressly with the seller or to make its own extra insurance arrangements.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    CPT – Carriage Paid To
                </Typography>
                <BulletList text='The seller delivers the goods to the carrier or another person nominated by the seller at an agreed place (if any such site is agreed between parties).' />
                <BulletList text='The seller must contract for and pay the costs of carriage necessary to bring the goods to the named place of destination.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    CIP – Carriage And Insurance Paid To
                </Typography>
                <BulletList text='The seller has the same responsibilities as CPT, but they also contract for insurance cover against the buyer’s risk of loss of or damage to the goods during the carriage.' />
                <BulletList text='The buyer should note that under CIP the seller is required to obtain insurance only on minimum cover. Should the buyer wish to have more insurance protection, it will need either to agree as much expressly with the seller or to make its own extra insurance arrangements.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    DAP – Delivered At Place
                </Typography>
                <BulletList text='The seller delivers when the goods are placed at the disposal of the buyer on the arriving means of transport ready for unloading at the named place of destination.' />
                <BulletList text='The seller bears all risks involved in bringing the goods to the named place.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    DPU – Delivered At Place Unloaded (replaces Incoterm® 2010 DAT)
                </Typography>
                <BulletList text='DPU replaces the former Incoterm® DAT (Delivered At Terminal). The seller delivers when the goods, once unloaded are placed at the disposal of the buyer at a named place of destination.' />
                <BulletList text='The seller bears all risks involved in bringing the goods to, and unloading them at the named place of destination.' />

                <Typography
                    variant='h4'
                    textAlign='start'
                    sx={{ color: '#031225', fontWeight: 600, mt: theme.spacing(3), fontSize: mobileMode ? '1.125rem' : '1.5rem' }}
                >
                    DDP – Delivered Duty Paid
                </Typography>
                <BulletList text='The seller delivers the goods when the goods are placed at the disposal of the buyer, cleared for import on the arriving means of transport ready for unloading at the named place of destination.' />
                <BulletList text='The seller bears all the costs and risks involved in bringing the goods to the place of destination. They must clear the products not only for export but also for import, to pay any duty for both export and import and to carry out all customs formalities.' />

                <Box sx={{ mt: theme.spacing(4), mb: theme.spacing(2) }}>
                    <Image src={incotermsImg} alt='incotermsImg' style={{ width: '100%', height: 'auto' }} />
                </Box>
            </Box>
        </LayoutCentered>
    )
}
