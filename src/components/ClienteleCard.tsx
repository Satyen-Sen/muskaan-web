import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

declare type ClienteleCardProps = {
    cardImage: string
    cardIcon: string
    title?: string
    subtitle?: string
}

export default function ClienteleCard({ cardImage, cardIcon, title, subtitle }: ClienteleCardProps) {
    const theme = useTheme()

    return (
        <Grid container alignItems='center'>
            <Grid item xs={4.2}>
                <img src={cardImage} alt='card image' width='100%' height='auto' />
            </Grid>
            <Grid item xs={7.8} sx={{ px: theme.spacing(5), pt: theme.spacing(4) }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img src={cardIcon} alt='card image' height='4rem' width='auto' />
                </Box>
                <Typography
                    variant='subtitle2'
                    sx={{
                        fontWeight: 600,
                        fontSize: '2.5rem',
                        mt: theme.spacing(2),
                        mb: theme.spacing(1),
                    }}
                >
                    {title}
                </Typography>
                <Typography variant='subtitle2' textAlign='justify'>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    )
}
