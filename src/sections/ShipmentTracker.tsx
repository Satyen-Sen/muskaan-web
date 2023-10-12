import React, { useState, useEffect } from 'react'
import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import ShipmentCard from '../components/ShipmentCard'
import PrimaryTextField from '../components/PrimaryTextField'
import { fetchDataFromApi } from '../api/api'

let currentDate = new Date()

interface Port {
    id: number
    name: string
}

export default function ShipmentTracker() {
    const theme = useTheme()
    const [originType, setOriginType] = useState('')
    const [destinationType, setDestinationType] = useState('')
    const [portList, setPortList] = useState<Port[]>([])
    const [vesselData, setVesselData] = useState([])

    const handleSetOrigin = (event: SelectChangeEvent) => {
        setOriginType(event.target.value as string)
    }

    const handleSetDestination = (event: SelectChangeEvent) => {
        setDestinationType(event.target.value as string)
    }

    const endpoint = 'api/port-list'

    useEffect(() => {
        fetchDataFromApi(endpoint)
            .then((data) => {
                console.log('API Data:', data)
                setPortList(data)
            })
            .catch((error) => {
                console.error('Error fetching port list:', error)
            })
    }, [])

    useEffect(() => {
        const secondEndpoint = 'api/vessel/?pol=1&pod=3&date=2023-09-10'

        fetchDataFromApi(secondEndpoint)
            .then((data) => {
                console.log('Second API Data:', data)
                setVesselData(data)
            })
            .catch((error) => {
                console.error('Error fetching vessel data:', error)
            })
    }, [])

    return (
        <Box sx={{ mx: theme.spacing(4) }}>
            <Container maxWidth='lg'>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={6}>
                        <ShipmentCard cardTitle='Track Shipment' submitButton='Track'>
                            <PrimaryTextField
                                label='Search'
                                placeholder='Enter Reference No. / Bill No. / container No.'
                                helperText=' Input multiple numbers, separated by spaces and commas.'
                                startIcon
                            />
                        </ShipmentCard>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <ShipmentCard
                            cardTitle='Track Schedules'
                            submitButton='Track'
                            datePicker={
                                <DatePicker
                                    defaultValue={dayjs(currentDate)}
                                    closeOnSelect
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: '2.4rem',
                                            width: '12rem',
                                            backgroundColor: '#0312251A',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            color: '#6D7987',
                                        },
                                    }}
                                    format='DD-MM-YYYY'
                                />
                            }
                        >
                            <Box sx={{ mb: theme.spacing(1) }}>
                                <InputLabel>Origin</InputLabel>
                                <FormControl fullWidth>
                                    <Select
                                        value={originType}
                                        onChange={handleSetOrigin}
                                        displayEmpty
                                        renderValue={
                                            originType !== ''
                                                ? () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          {originType}
                                                      </Typography>
                                                  )
                                                : () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          Select Origin Point
                                                      </Typography>
                                                  )
                                        }
                                    >
                                        <MenuItem value=''>
                                            <em>Select Location</em>
                                        </MenuItem>
                                        {portList.map((port) => (
                                            <MenuItem key={port.id} value={port.name}>
                                                {port.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ mb: theme.spacing(1) }}>
                                <InputLabel>Destination</InputLabel>
                                <FormControl fullWidth>
                                    <Select
                                        value={destinationType}
                                        onChange={handleSetDestination}
                                        displayEmpty
                                        renderValue={
                                            originType !== ''
                                                ? () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          {destinationType}
                                                      </Typography>
                                                  )
                                                : () => (
                                                      <Typography
                                                          textAlign='start'
                                                          sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}
                                                      >
                                                          Select Destination Point
                                                      </Typography>
                                                  )
                                        }
                                    >
                                        <MenuItem value=''>
                                            <em>Select Location</em>
                                        </MenuItem>
                                        {portList.map((port) => (
                                            <MenuItem key={port.id} value={port.name}>
                                                {port.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </ShipmentCard>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
