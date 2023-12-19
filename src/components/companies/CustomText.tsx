import { Typography } from '@mui/material'

export default function CustomText({ text }: { text: String }) {
    return (
        <Typography paragraph variant='subtitle2' textAlign='justify' sx={{ color: '#031225', fontWeight: 400, whiteSpace: 'pre-line' }}>
            {text}
        </Typography>
    )
}
