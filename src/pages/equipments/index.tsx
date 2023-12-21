import React from 'react'
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material'
import HighCubeTab from '../../components/equipments/HighCubeTab'
import ReeferTab from '../../components/equipments/ReeferTab'
import OpenTopTab from '../../components/equipments/OpenTopTab'
import FlatRackTab from '../../components/equipments/FlatRackTab'
import Layout from '../Layout'
import equipmentsBg from '@/assets/equipments/equipments-bg.webp'

interface TabPanelProps {
    children?: React.ReactNode
    value: number
    index: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
    return <Box hidden={value !== index}>{value === index && <Box>{children}</Box>}</Box>
}

export default function Home() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const mobileMode = useMediaQuery('(max-width:599px)')
    const ultraMobileMode = useMediaQuery('(max-width:449px)')

    return (
        <Layout
            image={equipmentsBg}
            title={ultraMobileMode ? '' : 'Our Equipment'}
            subtitle={'Range of container types tailored\n to your shipping needs'}
            customHeight={mobileMode ? '48vw' : '42vw'}
            withTabs
            pageTitle='Equipments'
        >
            <Box sx={{ overflowX: 'auto' }}>
                <Tabs value={value} onChange={handleChange} variant='fullWidth'>
                    <Tab label='High Cube' sx={{ bgcolor: value === 0 ? '#003A9B' : '#FFFFFF' }} />
                    <Tab label='Reefer' sx={{ bgcolor: value === 1 ? '#003A9B' : '#FFFFFF' }} />
                    <Tab label='Open Top' sx={{ bgcolor: value === 2 ? '#003A9B' : '#FFFFFF' }} />
                    <Tab label='Flat Rack' sx={{ bgcolor: value === 3 ? '#003A9B' : '#FFFFFF' }} />
                </Tabs>
            </Box>

            <>
                <TabPanel value={value} index={0}>
                    <HighCubeTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ReeferTab />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <OpenTopTab />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <FlatRackTab />
                </TabPanel>
            </>
        </Layout>
    )
}
