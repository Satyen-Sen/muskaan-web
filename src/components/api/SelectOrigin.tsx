// SelectOrigin.tsx
import React, { useState, useEffect } from 'react'
import { Autocomplete, InputLabel, Paper, TextField, Typography } from '@mui/material'
import { fetchDataFromApi } from '@/api/api'

interface Port {
    id: number
    name: string
}

interface SelectOriginProps {
    onSelectOrigin: (value: { id: number; name: string } | null) => void
}

export default function SelectOrigin({ onSelectOrigin }: SelectOriginProps) {
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
            <InputLabel>Origin</InputLabel>
            <Autocomplete
                disablePortal
                onChange={(event, value) => onSelectOrigin(value)}
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
                    <Typography
                        {...props}
                        textAlign='start'
                        sx={{ color: '#FFFFFF', fontWeight: 500, textTransform: 'capitalize', my: { xs: '-0.5rem', sm: 0 } }}
                    >
                        {option.name.toLowerCase()}
                    </Typography>
                )}
            />
        </>
    )
}
