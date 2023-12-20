import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, InputLabel, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PrimaryButton from './PrimaryButton'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import SelectOrigin from '@/components/api/SelectOrigin'
import SelectDestination from '@/components/api/SelectDestination'

let currentDate = new Date()

interface Port {
    id: number
    name: string
}

export default function TrackVesselSchedulesCard({ onEmptyPage }: { onEmptyPage?: boolean }) {
    const router = useRouter()
    const theme = useTheme()
    const wideMode = useMediaQuery('(min-width:900px)')
    const mediumMode = useMediaQuery('(min-width:400px) and (max-width:899px)')

    const [originLocation, setOriginLocation] = useState<Port | null>(null)
    const [destinationLocation, setDestinationLocation] = useState<Port | null>(null)
    const [selectedDate, setSelectedDate] = useState(dayjs(currentDate))

    const handleDateChange = (value: dayjs.Dayjs | null) => {
        if (value !== null) {
            setSelectedDate(value)
        }
    }

    const onSubmit = () => {
        const pol = originLocation?.id
        const pod = destinationLocation?.id
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
                borderRadius: onEmptyPage ? '12px' : '0px 8px 8px 8px',
                boxShadow: '4px 4px 4px 4px #00000023',
                padding: theme.spacing(1),
                position: 'relative',
            }}
        >
            <Box sx={{ mb: theme.spacing(1) }}>
                <SelectOrigin onSelectOrigin={setOriginLocation} />
            </Box>
            <Box sx={{ mb: theme.spacing(1) }}>
                <SelectDestination onSelectDestination={setDestinationLocation} />
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
