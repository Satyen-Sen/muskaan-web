// SelectOrigin.tsx
import React, { useState, useEffect } from 'react'
import { Autocomplete, InputLabel, Paper, TextField, Typography } from '@mui/material'
import { fetchDataFromApi } from '@/api/api'

interface Port {
    id: number
    name: string
}

interface SelectDestinationProps {
    onSelectDestination: (value: { id: number; name: string } | null) => void
}

export default function SelectDestination({ onSelectDestination }: SelectDestinationProps) {
    const [portList, setPortList] = useState<Port[]>([])

    useEffect(() => {
        const fetchPortList = async () => {
            try {
                const response = await fetchDataFromApi('api/port-list/')
                setPortList(response)
            } catch (error) {
                console.error('Error in fetching Port data: ', error)
            }
        }

        fetchPortList()
    }, [])

    return (
        <>
            <InputLabel>Destination</InputLabel>
            <Autocomplete
                disablePortal
                onChange={(event, value) => onSelectDestination(value)}
                PaperComponent={({ children }) => <Paper style={{ backgroundColor: '#194DA5' }}>{children}</Paper>}
                options={portList}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Select Origin Location'
                        size='small'
                        sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                    />
                )}
                renderOption={(props, option) => (
                    <Typography {...props} textAlign='start' sx={{ color: '#FFFFFF', fontWeight: 500, textTransform: 'capitalize' }}>
                        {option.name.toLowerCase()}
                    </Typography>
                )}
            />
        </>
    )
}
