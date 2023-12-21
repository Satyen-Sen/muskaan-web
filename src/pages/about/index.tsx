import React from 'react'
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material'
import AboutTab from '../../components/about/AboutTab'
import CompaniesTab from '../../components/about/CompaniesTab'
import MissionAndVisionTab from '../../components/about/MissionAndVisionTab'
import Layout from '../Layout'
import aboutBackground from '@/assets/about/about-backgroud.webp'

interface TabPanelProps {
    children?: React.ReactNode
    value: number
    index: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
    return <div hidden={value !== index}>{value === index && <Box>{children}</Box>}</div>
}

export default function Home() {
    const mobileMode = useMediaQuery('(max-width:599px)')
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Layout
            image={aboutBackground}
            title='Muskan Group Of Companies'
            withTabs
            customHeight={mobileMode ? '45vw' : '35vw'}
            pageTitle='About'
        >
            <Tabs value={value} onChange={handleChange} variant='fullWidth'>
                <Tab label='About' sx={{ bgcolor: value === 0 ? '#003A9B' : '#FFFFFF' }} />
                <Tab label='Companies' sx={{ bgcolor: value === 1 ? '#003A9B' : '#FFFFFF' }} />
                <Tab label='Mission & Vision' sx={{ bgcolor: value === 2 ? '#003A9B' : '#FFFFFF' }} />
            </Tabs>

            <TabPanel value={value} index={0}>
                <AboutTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CompaniesTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MissionAndVisionTab />
            </TabPanel>
        </Layout>
    )
}
