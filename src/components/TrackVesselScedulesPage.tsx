import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, FormControl, InputLabel, MenuItem, PopoverVirtualElement, Select, Typography, useMediaQuery } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import { fetchDataFromApi } from '../api/api'

interface Port {
    id: number
    name: string
}

export default function TrackVesselScedulesPage() {
    const router = useRouter()
    const theme = useTheme()
    const wideMode = useMediaQuery('(min-width:900px)')
    const mediumMode = useMediaQuery('(min-width:400px) and (max-width:899px)')

    const [portList, setPortList] = useState<Port[]>([])
    const [originLocation, setOriginLocation] = useState('')
    const [destinationLocation, setDestinationLocation] = useState('')
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()))

    const handleSetOrigin = (event: SelectChangeEvent) => {
        const selectedId = event.target.value as string
        setOriginLocation(selectedId)
    }

    const handleSetDestination = (event: SelectChangeEvent) => {
        const selectedId = event.target.value as string
        setDestinationLocation(selectedId)
    }

    const handleDateChange = (value: dayjs.Dayjs | null) => {
        if (value !== null) {
            setSelectedDate(value)
        }
    }

    useEffect(() => {
        async function fetchPortList() {
            try {
                const response = await fetchDataFromApi('api/port-list/')
                setPortList(response)

                const { pol, pod, dateValue } = router.query

                if (pol && pod && typeof dateValue === 'string') {
                    const newOriginLocation = response.find((port: Port) => port.id === Number(pol))?.name || ''
                    const newDestinationLocation = response.find((port: Port) => port.id === Number(pod))?.name || ''
                    const newSelectedDate = dayjs(dateValue)

                    if (
                        newOriginLocation !== originLocation ||
                        newDestinationLocation !== destinationLocation ||
                        !newSelectedDate.isSame(selectedDate)
                    ) {
                        setOriginLocation(newOriginLocation)
                        setDestinationLocation(newDestinationLocation)
                        setSelectedDate(newSelectedDate)
                    }
                }
            } catch (error) {
                console.error('Error in fetching Port data: ', error)
            }
        }
        fetchPortList()
    }, [router.query, portList, originLocation, destinationLocation, selectedDate])

    const originPort = portList.find((port) => port.name === originLocation)
    const destinationPort = portList.find((port) => port.name === destinationLocation)

    const onSubmit = () => {
        const pol = originPort?.id
        const pod = destinationPort?.id
        const dateValue = selectedDate.format('YYYY-MM-DD')

        router.push({
            pathname: '/vessel-schedule',
            query: { pol, pod, dateValue },
        })
    }

    return (
        <Box
            sx={{
                backgroundColor: '#EFF6FF',
                height: '16.8rem',
                minWidth: wideMode ? '26rem' : mediumMode ? '30rem' : '26rem',
                borderRadius: '12px',
                boxShadow: '4px 4px 4px 4px #00000023',
                padding: theme.spacing(1),
                position: 'relative',
            }}
        >
            <Box sx={{ mb: theme.spacing(1) }}>
                <InputLabel>Origin</InputLabel>
                <FormControl fullWidth>
                    <Select
                        value={originLocation}
                        onChange={handleSetOrigin}
                        displayEmpty
                        renderValue={
                            originLocation !== ''
                                ? () => (
                                      <Typography textAlign='start' sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}>
                                          {originLocation}
                                      </Typography>
                                  )
                                : () => (
                                      <Typography textAlign='start' sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}>
                                          Select Origin Point
                                      </Typography>
                                  )
                        }
                    >
                        <MenuItem value=''>
                            <em>Select Location</em>
                        </MenuItem>
                        {portList.map((port: Port) => (
                            <MenuItem key={port.id} value={port.name}>
                                {port.name.toLowerCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ mb: theme.spacing(1) }}>
                <InputLabel>Destination</InputLabel>
                <FormControl fullWidth>
                    <Select
                        value={destinationLocation}
                        onChange={handleSetDestination}
                        displayEmpty
                        renderValue={
                            originLocation !== ''
                                ? () => (
                                      <Typography textAlign='start' sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}>
                                          {destinationLocation}
                                      </Typography>
                                  )
                                : () => (
                                      <Typography textAlign='start' sx={{ color: '#03122580', fontWeight: 600, ml: '-0.25rem' }}>
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
                                {port.name.toLowerCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: theme.spacing(1),
                    left: theme.spacing(1),
                }}
            >
                <InputLabel>Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                    <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
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
                </LocalizationProvider>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: theme.spacing(1),
                    right: theme.spacing(1),
                }}
            >
                <PrimaryButton text='Track' onClick={onSubmit} />
            </Box>
        </Box>
    )
}
