import { Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { companiesTabData } from '../../data/aboutData'
import CompanyInfoCard from './CompanyInfoCard'
import VisibilityTracker, { AnimationType } from '../VisibilityTracker'

export default function CompaniesTab() {
    const theme = useTheme()

    return (
        <Box sx={{ mx: theme.spacing(12), mb: theme.spacing(6) }}>
            <Box>
                <Typography variant='h2' textAlign='start' sx={{ mt: theme.spacing(4), mb: theme.spacing(2) }}>
                    India
                </Typography>
                <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={2000}>
                {companiesTabData.map((item, index) =>
                    item.country == 'INDIA' ? (
                        <CompanyInfoCard des={item.des} coverImage={item.image} title={item.name} key={index} />
                    ) : (
                        <></>
                    )
                )}
                </VisibilityTracker>
            </Box>
            <Box>
                <Typography variant='h2' textAlign='start' sx={{ mt: theme.spacing(8), mb: theme.spacing(2) }}>
                    Overseas
                </Typography>
                <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={2000}>
                {companiesTabData.map((item, index) =>
                    item.country != 'INDIA' ? (
                        <CompanyInfoCard des={item.des} coverImage={item.image} title={item.name} key={index} />
                    ) : (
                        <></>
                    )
                )}
                </VisibilityTracker>
            </Box>
        </Box>
    )
}
