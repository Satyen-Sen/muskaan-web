import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Container, IconButton, Menu, MenuItem, Typography, useMediaQuery, Link as MUILink } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PrimaryButton from './PrimaryButton'
import Sidebar from './Sidebar'
import logo from '@/assets/logo.png'
import Link from 'next/link'

export default function Navbar() {
    const [companiesMenu, setCompaniesMenu] = useState<null | HTMLElement>(null)
    const [servicesMenu, setServicesMenu] = useState<null | HTMLElement>(null)
    const [toolsMenu, setToolsMenu] = useState<null | HTMLElement>(null)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const theme = useTheme()
    const openCompaniesMenu = Boolean(companiesMenu)
    const openServicesMenu = Boolean(servicesMenu)
    const openToolsMenu = Boolean(toolsMenu)

    const handleCompaniesMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCompaniesMenu(event.currentTarget)
    }
    const closeCompaniesMenu = () => {
        setCompaniesMenu(null)
    }
    const handleServicesMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setServicesMenu(event.currentTarget)
    }
    const closeServicesMenu = () => {
        setServicesMenu(null)
    }
    const handleToolsMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setToolsMenu(event.currentTarget)
    }
    const closeToolsMenu = () => {
        setToolsMenu(null)
    }

    const tabletMode = useMediaQuery('(max-width:899px)')
    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraSmallMode = useMediaQuery('(max-width:399px)')

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }
    const handleSidebarClose = () => {
        setSidebarOpen(false)
    }

    return (
        <Container
            disableGutters
            maxWidth='xl'
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                my: theme.spacing(1),
                px: mobileMode ? theme.spacing(2) : theme.spacing(4),
            }}
        >
            <Box sx={{ '& a': { display: 'flex', alignItems: 'center' } }}>
                <Link href='/'>
                    <img src='/assets/logo.png' alt='logo' width='auto' height='48rem' />

                    {ultraSmallMode ? (
                        <></>
                    ) : (
                        <Box>
                            <Typography variant='body1' sx={{ mx: theme.spacing(1), fontSize: '1.5rem', color: '#FFFFFF' }}>
                                Muskan Group
                            </Typography>
                            {/* <Typography variant='body1' sx={{ mx: theme.spacing(1), fontSize: '1rem', color: '#FFFFFF' }}>
                            of Companies
                        </Typography> */}
                        </Box>
                    )}
                </Link>
            </Box>

            {tabletMode ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MUILink href='http://app.muskan-group.com/' sx={{ mr: theme.spacing(1.25) }}>
                        <PrimaryButton text='Login' light width='6rem' height='2rem' />
                    </MUILink>
                    <IconButton onClick={handleSidebarToggle}>
                        <MenuRoundedIcon sx={{ color: '#FFFFFF' }} />
                    </IconButton>
                    <Sidebar open={sidebarOpen} handleClose={handleSidebarClose} />
                </Box>
            ) : (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Box sx={{ cursor: 'pointer' }}>
                            <Typography
                                variant='subtitle2'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem', color: '#FFFFFF' }}
                                onClick={handleCompaniesMenu}
                            >
                                Companies
                                {companiesMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu
                            anchorEl={companiesMenu}
                            open={openCompaniesMenu}
                            onClose={closeCompaniesMenu}
                            sx={{ '& a': { color: 'inherit' } }}
                        >
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/container-lines'>Muskan Container lines Pvt. Ltd.</Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/logistics'>Muskan Logistics</Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/shipping-pte'>Muskaan Shipping PTE Ltd.</Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/shipping-sdn-bhd'>Muskaan Shipping SDN BHD</Link>
                            </MenuItem>
                            <MenuItem onClick={closeCompaniesMenu}>
                                <Link href='/companies/shipping-llc'>Muskaan Shipping LLC</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box>
                        <Box sx={{ cursor: 'pointer', ml: theme.spacing(1.5) }}>
                            <Typography
                                variant='subtitle2'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem', color: '#FFFFFF' }}
                                onClick={handleServicesMenu}
                            >
                                Services
                                {servicesMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu
                            anchorEl={servicesMenu}
                            open={openServicesMenu}
                            onClose={closeServicesMenu}
                            sx={{ '& a': { color: 'inherit' } }}
                        >
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/nvocc'>NVOCC</Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/transportation'>Transportation</Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/air-freight'>Air Freight</Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/multimodel'>Multimodel-Transportation</Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/over-dimension'>Over Dimension Cargo</Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/project-cargo'>Project Cargo</Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/custom-clearance'>Custom Clearance</Link>
                            </MenuItem>
                            <MenuItem onClick={closeServicesMenu}>
                                <Link href='/services/lcl'>LCL Consolidation Services</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Link href='/about'>
                        <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#FFFFFF' }}>
                            About Us
                        </Typography>
                    </Link>

                    <Link href='/contact'>
                        <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#FFFFFF' }}>
                            Contact Us
                        </Typography>
                    </Link>

                    <Link href='/career'>
                        <Typography variant='subtitle2' sx={{ ml: theme.spacing(1.5), color: '#FFFFFF' }}>
                            Career
                        </Typography>
                    </Link>

                    <Box>
                        <Box sx={{ cursor: 'pointer', ml: theme.spacing(1.5) }}>
                            <Typography
                                variant='subtitle2'
                                sx={{ display: 'flex', alignItems: 'center', lineHeight: '3rem', color: '#FFFFFF' }}
                                onClick={handleToolsMenu}
                            >
                                Tools
                                {toolsMenu ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
                            </Typography>
                        </Box>

                        <Menu anchorEl={toolsMenu} open={openToolsMenu} onClose={closeToolsMenu}>
                            <MenuItem onClick={closeToolsMenu} sx={{ '& a': { color: 'inherit' } }}>
                                <Link href='/equipments'>Equipments</Link>
                            </MenuItem>

                            <MenuItem onClick={closeToolsMenu} sx={{ '& a': { color: 'inherit' } }}>
                                <Link href='/track'>Track Shipments</Link>
                            </MenuItem>
                            <MenuItem onClick={closeToolsMenu} sx={{ '& a': { color: 'inherit' } }}>
                                <Link href='/vessel-schedule'>Search Vessel Schedules</Link>
                            </MenuItem>

                            <MenuItem onClick={closeToolsMenu} sx={{ '& a': { color: 'inherit' } }}>
                                <Link href='/quote'>Quote</Link>
                            </MenuItem>
                            <MenuItem onClick={closeToolsMenu} sx={{ '& a': { color: 'inherit' } }}>
                                <Link href='/incoterms'>Incoterms</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ mx: theme.spacing(1.5) }}>
                        <MUILink href='http://app.muskan-group.com/'>
                            <PrimaryButton text='Login' light width='8rem' height='2rem' />
                        </MUILink>
                    </Box>
                </Box>
            )}
        </Container>
    )
}
