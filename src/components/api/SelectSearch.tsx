import React from 'react'
import { Autocomplete, Paper, TextField, Typography } from '@mui/material'

interface SelectSearchProps {
    value: string | null
    onChange: (event: React.ChangeEvent<{}>, newValue: string | null) => void
    options: string[]
    placeholder: string
    capitalize?: boolean
}

export default function SelectSearch({ value, onChange, options, placeholder, capitalize }: SelectSearchProps) {
    return (
        <Autocomplete
            value={value}
            onChange={onChange}
            options={options}
            PaperComponent={({ children }) => <Paper style={{ backgroundColor: '#194DA5' }}>{children}</Paper>}
            renderInput={(params) => (
                <TextField
                    {...params}
                    sx={{ backgroundColor: '#0312251A', borderRadius: '8px' }}
                    size='small'
                    placeholder={placeholder}
                    fullWidth
                />
            )}
            renderOption={(props, option) => (
                <Typography {...props} textAlign='start' sx={{ color: '#FFFFFF', fontWeight: 500, textTransform: 'capitalize' }}>
                    {capitalize ? option.toLowerCase() : option}
                </Typography>
            )}
        />
    )
}
