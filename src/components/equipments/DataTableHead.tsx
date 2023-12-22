import React from 'react'
import { Typography, Table, TableRow, TableCell } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function DataTableHead({ lessRows }: { lessRows?: boolean }) {
    const theme = useTheme()

    return (
        <Table sx={{ width: '18rem' }}>
            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell colSpan={2}>
                    <Typography variant='h4' sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden', textAlign: 'center' }} noWrap>
                        Head
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            py: theme.spacing(0.5),
                            borderRadius: '40px',
                            textAlign: 'center',
                        }}
                        noWrap
                    >
                        Internal Dimensions
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                        Length
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                        Width
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                        Height
                    </Typography>
                </TableCell>
            </TableRow>

            {lessRows ? (
                <></>
            ) : (
                <>
                    <TableRow sx={{ height: '4.6rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '40px',
                                    textAlign: 'center',
                                    py: theme.spacing(0.5),
                                }}
                                noWrap
                            >
                                Door Opening
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                                Width
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                                Height
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            borderRadius: '40px',
                            textAlign: 'center',
                            py: theme.spacing(0.5),
                        }}
                        noWrap
                    >
                        Weight
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                        Max Gross
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                        Tare Weight (excl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                        Tare Weight (incl. machinery)
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography variant='subtitle2' sx={{ color: '#000000', fontWeight: 600, textAlign: 'center' }} noWrap>
                        Max Payload
                    </Typography>
                </TableCell>
            </TableRow>

            <TableRow sx={{ height: '4.6rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{
                            color: '#003A9B',
                            fontWeight: 600,
                            backgroundColor: '#FFFFFF',
                            borderRadius: '40px',
                            textAlign: 'center',
                            py: theme.spacing(0.5),
                        }}
                        noWrap
                    >
                        Max Point of Load
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow sx={{ height: '4rem' }}>
                <TableCell>
                    <Typography
                        variant='subtitle2'
                        sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden', textAlign: 'center' }}
                        noWrap
                    >
                        values
                    </Typography>
                </TableCell>
            </TableRow>

            {lessRows ? (
                <></>
            ) : (
                <>
                    <TableRow sx={{ height: '4.6rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{
                                    color: '#003A9B',
                                    fontWeight: 600,
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '40px',
                                    textAlign: 'center',
                                    py: theme.spacing(0.5),
                                }}
                                noWrap
                            >
                                Internal Capacity
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ height: '4rem' }}>
                        <TableCell>
                            <Typography
                                variant='subtitle2'
                                sx={{ color: '#000000', fontWeight: 600, visibility: 'hidden', textAlign: 'center' }}
                                noWrap
                            >
                                values
                            </Typography>
                        </TableCell>
                    </TableRow>
                </>
            )}
        </Table>
    )
}
