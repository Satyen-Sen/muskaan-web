import React, { useState } from 'react'
import { Box, IconButton, Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded'

const accordionLinks = [
    {
        id: 1,
        title: 'Companies',
        content: [
            { href: '/companies/container-lines', link: 'Muskan Container lines Pvt. Ltd.' },
            { href: '/companies/logistics', link: 'Muskan Logistics' },
            { href: '/companies/shipping-pte', link: 'Muskaan Shipping PTE Ltd.' },
            { href: '/companies/shipping-sdn-bhd', link: 'Muskaan Shipping SDN BHD' },
            { href: '/companies/shipping-llc', link: 'Muskaan Shipping LLC' },
        ],
    },
    {
        id: 2,
        title: 'Services',
        content: [
            { href: '/services/nvocc', link: 'NVOCC' },
            { href: '/services/transportation', link: 'Transportation' },
            { href: '/services/air-freight', link: 'Air Freight' },
            { href: '/services/multimodel', link: 'Multimodel Transportation' },
            { href: '/services/over-dimension', link: 'Over Dimension Cargo' },
            { href: '/services/project-cargo', link: 'Project Cargo' },
            { href: '/services/custom-clearance', link: 'Custom Clearance' },
            { href: '/services/lcl', link: 'LCL Consolidation Services' },
        ],
    },
    {
        id: 3,
        title: 'Tools',
        content: [
            { href: '/equipments', link: 'Equipments' },
            { href: '/track', link: 'Track Shipments' },
            { href: '/vessel-schedule', link: 'Search Vessel Schedules' },
            { href: '/quote', link: 'Quote' },
            { href: '/incoterms', link: 'Incoterms' },
        ],
    },
]

const otherLinks = [
    { id: 1, href: '/about', title: 'About Us' },
    { id: 1, href: '/contact', title: 'Contact Us' },
    { id: 1, href: '/career', title: 'Career' },
]

interface SidebarProps {
    open: boolean
    handleClose: () => void
}

const Sidebar = ({ open, handleClose }: SidebarProps) => {
    const theme = useTheme()
    const [isActive, setActive] = useState<number | null>(null)

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                right: open ? 0 : -280,
                width: 280,
                height: '100%',
                background: theme.palette.primary.main,
                transition: 'right 0.4s',
                zIndex: 2,
                boxShadow: 5,
                display: 'flex',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', p: theme.spacing(1), width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: theme.spacing(2), mt: theme.spacing(3) }}>
                    <Link href='/' sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/logo/logo.png' alt='logo' width='auto' height='48rem' />
                        <Typography variant='body1' sx={{ mx: theme.spacing(1), fontSize: '1.5rem', color: '#FFFFFF' }}>
                            Muskan Group
                        </Typography>
                    </Link>
                    <IconButton onClick={handleClose}>
                        <CloseRoundedIcon sx={{ color: '#FFFFFF' }} />
                    </IconButton>
                </Box>

                {accordionLinks.map((item) => (
                    <Box key={item.id} sx={{ mb: theme.spacing(0.5) }}>
                        <Box
                            onClick={() => setActive(isActive === item.id ? null : item.id)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                height: '3rem',
                                cursor: 'pointer',
                                px: theme.spacing(1),
                                backgroundColor: theme.palette.primary.light,
                                borderRadius: 1,
                            }}
                        >
                            <Typography variant='h6'>{item.title}</Typography>
                            {isActive === item.id ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                        </Box>
                        <Box
                            sx={{
                                maxHeight: isActive === item.id ? '500px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 1s ease-in-out', // Apply the transition here
                            }}
                        >
                            {isActive === item.id && (
                                <Box sx={{ my: theme.spacing(0.5) }}>
                                    {item.content.map((contentItem, index) => (
                                        <Box key={index} sx={{ display: 'flex', py: theme.spacing(0.5), px: theme.spacing(1) }}>
                                            <Link href={contentItem.href} sx={{ color: 'inherit' }}>
                                                {contentItem.link}
                                            </Link>
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    </Box>
                ))}

                {otherLinks.map((item) => (
                    <Link key={item.id} href={item.href} sx={{ mb: theme.spacing(0.5) }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '3rem',
                                px: theme.spacing(1),
                                backgroundColor: theme.palette.primary.light,
                                borderRadius: 1,
                            }}
                        >
                            <Typography variant='h6'>{item.title}</Typography>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default Sidebar
