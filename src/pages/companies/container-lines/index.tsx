import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import ServicesCards from '../../../components/services/ServicesCards'
import containerLinesBg from '@/assets/companies/container-lines-bg.webp'
import branchesMap from '@/assets/companies/branches-map.webp'
import insulatedContainer from '@/assets/companies/muskan_conatiners/insulated_containers.png'
import openTopContainer from '@/assets/companies/muskan_conatiners/open_to_containers.png'
import bulkContainer from '@/assets/companies/muskan_conatiners/bult-containers.png'
import tankContainer from '@/assets/companies/muskan_conatiners/tank-containers.png'
import { OfficeLoactionIndia, OfficeLoactionInternational } from '../../../data/companiesData'
import StatisticsCard from '@/components/companies/StatisticsCard'
import CustomText from '@/components/companies/CustomText'
import CompanyReachCard from '../../../components/CompanyReachCard'
import ProcessCards from '@/components/companies/ProcessCards'

export default function Home() {
    const theme = useTheme()
    const tabletMode = useMediaQuery('(max-width:899px)')

    return (
        <CompaniesLayout image={containerLinesBg} title={'Muskan Container Lines\nPvt Ltd.'}>
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h2' sx={{ mb: '1rem' }}>
                        About Us
                    </Typography>
                    <CustomText text='Muskan Container Lines Pvt. Ltd. is a prominent Indian container operator, boasting the largest container fleet in India and the Indian subcontinent. With a unique track record in efficient fleet management across more than 300,000 routes domestically and internationally, we specialize in door-to-door integrated transportation and logistics solutions. These capabilities enable us to deliver container cargo to various destinations in India, the CIS, Europe, or Asia, using both in-house transportation assets and strategic partner collaborations. Our network of offices throughout the Indian subcontinent is seamlessly connected through a unified information system, ensuring efficient operations.' />
                    <Grid container spacing={2} sx={{ mb: '1rem', mt: '0.5rem', width: '100%' }}>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign={'start'} variant='h5' sx={{ fontWeight: 600, color: '#031225', marginBottom: '1rem' }}>
                                Offices in India
                            </Typography>
                            <Typography component={'ul'} textAlign={'start'} variant='subtitle2' sx={{ color: '#031225', ml: '1.25rem' }}>
                                {OfficeLoactionIndia.map((item, index) => (
                                    <Typography
                                        component={'li'}
                                        textAlign={'start'}
                                        variant='subtitle2'
                                        sx={{ color: '#031225', mb: '1rem', fontWeight: 300 }}
                                        key={index}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography textAlign={'start'} variant='h5' sx={{ fontWeight: 600, color: '#031225', marginBottom: '1rem' }}>
                                International offices
                            </Typography>
                            <Typography component={'ul'} textAlign={'start'} variant='subtitle2' sx={{ color: '#031225', ml: '1.25rem' }}>
                                {OfficeLoactionInternational.map((item, index) => (
                                    <Typography
                                        component={'li'}
                                        textAlign={'start'}
                                        variant='subtitle2'
                                        sx={{ color: '#031225', mb: '1rem', fontWeight: 300 }}
                                        key={index}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography paragraph variant='subtitle2' sx={{ color: '#031225', fontWeight: '300', textAlign: 'justify' }}>
                        Shipping cargo often requires specialized containers to ensure safe and efficient transportation. Our company
                        provides a variety of specialized containers tailored to different cargo needs. These include:
                    </Typography>
                    <Grid container spacing={1} sx={{ my: '4rem' }}>
                        <Grid item xs={12} sm={6}>
                            <ContainerType
                                title='Insulated Containers'
                                desc='Ideal for perishable goods, these containers maintain precise temperatures, keeping your cargo fresh.'
                                image={insulatedContainer}
                            />
                            <ContainerType
                                title='Bulk Containers'
                                desc='Perfect for transporting large quantities of loose cargo, such as grains or minerals.'
                                image={bulkContainer}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ContainerType
                                title='Open Top Containers'
                                desc='Designed for oversize cargo, these containers have removable tops for easy loading and unloading.'
                                image={openTopContainer}
                            />
                            <ContainerType
                                title='Tank Containers'
                                desc='Specifically designed for liquid and chemical cargo, ensuring safe containment and transport.'
                                image={tankContainer}
                            />
                        </Grid>
                    </Grid>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '2rem', color: '#1B1B1F' }}>
                        Statistics
                    </Typography>
                    <StatisticsCard exporterRank={16} importerRank={10} tradeBalanceRank={136} totalTradeAmtList={totalTradeAmtList} />
                </Container>
            </Box>
            <ProcessCards />
            <ServicesCards companiesPage />
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', my: '2rem', color: '#1B1B1F' }}>
                        Our Branches
                    </Typography>
                    {tabletMode ? (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='New Delhi'
                                    description='Muskan Container Lines Pvt Ltd, Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, New Delhi, Delhi - 110078 | Tel : +91 11 41587468 / 40687469'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Mumbai'
                                    description='Muskan Container Lines Pvt Ltd, Office No.- 342, 3rd Floor, Sai Chambers, Sector - 11, CBD Belapur, Navi Mumbai - 400614 | Tel : 022-27560779, 022-41278794'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Chennai'
                                    description='Muskan Container Lines Pvt Ltd, Office 72/1, First floor, Shop No 3, Linghi Chetty street, Mannady, George Town, Chennai - 600001 | Tel : +91-4442642551'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Mundra, Gujrat'
                                    description='Muskan Container Lines Pvt Ltd, Office No.222, Second Floor, Manali Tower, Plot No.110, Sector 8, Gandhidham - 370201 | Tel : +91-2836231222'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CompanyReachCard
                                    title='Kolkata'
                                    description='Muskan Container Lines Pvt Ltd, Office - 26, 3rd Floor, C.R.Avenue, Kolkata, India - 700012 | Tel : +91 33-40619350'
                                />
                            </Grid>
                        </Grid>
                    ) : (
                        <Box sx={{ mb: '6rem' }}>
                            <Grid container spacing={2}>
                                <Grid item sm={4} xs={6}>
                                    <AddressCard
                                        companyLoc='New Delhi'
                                        address='Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, NEW DELHI - 110078'
                                    />
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <AddressCard
                                        companyLoc='Gujarat'
                                        address='Office No. 222, 2nd Floor, Manali Tower, Plot No. 110, Sector No. 8, Behind Oslo Circle, Sector 8, Gandhidham, Gujarat 370203'
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <AddressCard
                                        companyLoc='Navi Mumbai'
                                        address='Office No. 323, 3rd Floor, Skylark Building, Plot No. 63, Sector 11, Belapur CBD, Navi Mumbai - 400614'
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <AddressCard
                                        companyLoc='Chennai'
                                        address='72/1,first floor, shop no 3, Linghi Chetty street, Mannady Chennai - 600001'
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <AddressCard
                                        companyLoc='Kolkata'
                                        address='Cabin No. 13 & 14 , 3rd Floor, 26, Chittaranjan Avenue, Kolkata -700012'
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                    {tabletMode ? <></> : <Image src={branchesMap} alt='branches' style={{ width: '40rem', height: 'auto' }} />}
                </Container>
            </Box>
        </CompaniesLayout>
    )
}

function ContainerType({ image, title, desc }: { image: string | StaticImageData; title: String; desc: String }) {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    return (
        <Box sx={{ mb: '2rem' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Grid container alignItems='center'>
                <Grid item xs={4}>
                    <Image
                        src={image}
                        alt=''
                        style={{
                            height: 'auto',
                            width: '75%',
                            transition: 'transform 0.4s',
                            transform: hovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h4' textAlign={'start'} sx={{ fontWeight: 600, color: '#031225', marginBottom: '0.5rem' }}>
                        {title}
                    </Typography>
                    <Typography variant='subtitle2' textAlign={'start'} sx={{ color: '#031225', marginBottom: '1rem', fontWeight: 300 }}>
                        {desc}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

function AddressCard({ companyLoc, address }: { companyLoc: String; address: String }) {
    return (
        <Box sx={{}}>
            <Typography variant='h5' sx={{ textAlign: 'start', mb: '0.5rem', color: '#031225', fontWeight: 500 }}>
                {companyLoc}
            </Typography>
            <Typography variant='subtitle2' sx={{ textAlign: 'start', color: '#031225', fontWeight: 300, fontSize: '0.75rem' }}>
                {address}
            </Typography>
        </Box>
    )
}
const totalTradeAmtList = ['$394,813,673,347', '$570,402,004,491', '$175,588,331,144', '22.45%', '26.92%']
