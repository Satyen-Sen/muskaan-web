import React from 'react'
import { Box, Grid, InputLabel, Paper, Typography, useMediaQuery } from '@mui/material'

function CompanyInfo({ title, body }: { title: String; body: String }) {
    return (
        <Box sx={{ mb: '1rem' }}>
            <InputLabel>{title}</InputLabel>
            <Typography variant='subtitle2' sx={{ textAlign: 'start', mb: '0.5rem', color: '#1B1B1F' }}>
                {body}
            </Typography>
        </Box>
    )
}

function MuskaanGroupHq({
    mapSrc,
    address,
    telephoneNumber,
    emailId,
}: {
    mapSrc?: string
    address?: String
    telephoneNumber?: String
    emailId?: String
}) {
    const mobileMode = useMediaQuery('(max-width:599px)')
    const tabletMode = useMediaQuery('(max-width:899px)')
    return (
        <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} sm={6}>
                <iframe
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    src={
                        mapSrc ||
                        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.649568283086!2d77.0323327!3d28.6099033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051ab062a7cb%3A0xab32a433b878519!2sMUSKAN%20TOWER!5e0!3m2!1sen!2sin!4v1700825537131!5m2!1sen!2sin'
                    }
                    style={{
                        border: '0.3rem solid white',
                        borderRadius: '1.25rem',
                        width: '100%',
                        height: mobileMode ? '200px' : tabletMode ? '250px' : '275px',
                    }}
                ></iframe>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box>
                    <Typography variant='h3' textAlign='start' sx={{ mb: '1.5rem', color: '#1B1B1F' }}>
                        Muskan group of Companies
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <CompanyInfo
                                title='Registered Office'
                                body={address || 'Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor,NEW DELHI - 110078'}
                            />
                            <CompanyInfo title='Telephone No.' body={telephoneNumber || '011 41587468/40687469'} />
                        </Grid>
                        <Grid item xs={4}>
                            <CompanyInfo title='Email ID' body={emailId || 'info@mclpl.co.in'} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MuskaanGroupHq
