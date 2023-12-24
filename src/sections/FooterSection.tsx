import Image from 'next/image'
import { Box, Container, Divider, Grid, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import facebook from '@/assets/icons/facebook.png'
import linkedIn from '@/assets/icons/linkedin.png'
import twitter from '@/assets/icons/twitter.png'
// import instagram from '@/assets/icons/instagram.png'
import address from '@/assets/icons/address.png'
import email from '@/assets/icons/email.png'
import phone from '@/assets/icons/phone.png'
import arrowRight from '@/assets/icons/arrow-right.png'
import SecondaryTextField from '../components/SecondaryTextField'
import CircleIcon from '@mui/icons-material/Circle'
import GoogleTranslate from '@/api/GoogleTranslate'

export default function FooterSection({ noMargin }: { noMargin?: boolean }) {
    const theme = useTheme()
    const narrowTabletMode = useMediaQuery('(max-width:749px)')
    const mobileMode = useMediaQuery('(max-width:599px)')

    return (
        <Box sx={{ backgroundColor: '#003A9B', mt: noMargin ? 0 : theme.spacing(4) }}>
            {mobileMode ? (
                <Box sx={{ mx: { xs: theme.spacing(2), sm: theme.spacing(4) }, pt: theme.spacing(4) }}>
                    <Link href='/'>
                        <img src='/logo/logo.png' alt='logo' width='auto' height='3rem' style={{ marginRight: 'auto' }} />
                    </Link>
                    <Typography variant='h6' textAlign='center' sx={{ my: theme.spacing(1) }}>
                        Muskan Group of Companies
                    </Typography>

                    <Box sx={{ mx: 'auto' }}>
                        <Link href='https://www.facebook.com/muskangroupofcompanies' target='_blank' rel='noopener noreferrer'>
                            <Image src={facebook} alt='facebook' style={{ height: '1.5rem', width: 'auto', margin: '1rem' }} />
                        </Link>
                        <Link href='https://www.linkedin.com/company/muskan-group-of-companies' target='_blank' rel='noopener noreferrer'>
                            <Image src={linkedIn} alt='linkedin' style={{ height: '1.5rem', width: 'auto', margin: '1rem' }} />
                        </Link>
                        <Link href='https://twitter.com/MuskanGroup1' target='_blank' rel='noopener noreferrer'>
                            <Image src={twitter} alt='twitter' style={{ height: '1.5rem', width: 'auto', margin: '1rem' }} />
                        </Link>
                        {/* <Link href='/' target='_blank' rel='noopener noreferrer'>
                            <Image
                                src={instagram}
                                alt='instagram'
                                style={{ height: '1.5rem', width: 'auto', margin: '1rem' }}
                            />
                        </Link> */}
                    </Box>

                    <Divider sx={{ my: theme.spacing(0.5), borderColor: '#FFFFFF80' }} />
                    <Typography variant='h6' sx={{ mb: theme.spacing(1), mt: theme.spacing(1.5) }}>
                        Reach Us Out
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'start' }}>
                        <Image src={address} alt='logo' style={{ height: '1.125rem', width: 'auto', marginRight: '1rem' }} />
                        <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', textAlign: 'start', fontSize: '0.9rem' }}>
                            Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, NEW DELHI - 110078
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            my: '1rem',
                        }}
                    >
                        <Image src={phone} alt='logo' style={{ height: '1rem', width: 'auto', marginRight: '1rem' }} />
                        <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', textAlign: 'start', fontSize: '0.9rem' }}>
                            011 41587468/40687469
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: theme.spacing(2) }}>
                        <Image src={email} alt='logo' style={{ height: '1rem', width: 'auto', marginRight: '1rem' }} />
                        <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', textAlign: 'start', fontSize: '0.9rem' }}>
                            info@mclpl.co.in
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{ my: theme.spacing(1) }}>
                        Quick Links
                    </Typography>

                    <Link href='/about'>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                About Us
                            </Typography>
                            <Image src={arrowRight} alt='link' style={{ height: '0.75rem', width: 'auto', marginLeft: '1rem' }} />
                        </Box>
                    </Link>

                    <Link href='/career'>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: theme.spacing(0.5) }}>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                Career
                            </Typography>
                            <Image src={arrowRight} alt='link' style={{ height: '0.75rem', width: 'auto', marginLeft: '1rem' }} />
                        </Box>
                    </Link>

                    <Link href='/contact'>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                Contact Us
                            </Typography>
                            <Image src={arrowRight} alt='link' style={{ height: '0.75rem', width: 'auto', marginLeft: '1rem' }} />
                        </Box>
                    </Link>

                    <Link href='/#services'>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: theme.spacing(0.5) }}>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                Services
                            </Typography>
                            <Image src={arrowRight} alt='link' style={{ height: '0.75rem', width: 'auto', marginLeft: '1rem' }} />
                        </Box>
                    </Link>

                    <Link href='/downloads'>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                Useful Downloads
                            </Typography>
                            <Image src={arrowRight} alt='link' style={{ height: '0.75rem', width: 'auto', marginLeft: '1rem' }} />
                        </Box>
                    </Link>
                    <Typography variant='h6' sx={{ mt: theme.spacing(2), mb: theme.spacing(0.75) }}>
                        Subscribe Us
                    </Typography>
                    <Typography variant='body2' sx={{ fontSize: '0.9rem', mb: theme.spacing(1) }}>
                        Subscribe to our newsletter and never miss our latest news and promotions.
                    </Typography>
                    <SecondaryTextField placeholder='Enter your mail id' endButton />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: theme.spacing(1) }}>
                        <Link href='/'>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                <CircleIcon sx={{ fontSize: '0.5rem', mr: theme.spacing(0.5) }} />
                                Privacy Policy
                            </Typography>
                        </Link>
                        <Link href='/sitemap.xml' target='_blank' rel='noopener noreferrer'>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                <CircleIcon sx={{ fontSize: '0.5rem', mr: theme.spacing(0.5) }} />
                                Site Map
                            </Typography>
                        </Link>
                        <Link href='/'>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', fontSize: '0.9rem' }}>
                                <CircleIcon sx={{ fontSize: '0.5rem', mr: theme.spacing(0.5) }} />
                                Terms & Conditions
                            </Typography>
                        </Link>
                    </Box>

                    <Divider sx={{ mt: theme.spacing(2), borderColor: '#FFFFFF80' }} />
                    <Typography variant='body2' textAlign='end' sx={{ py: theme.spacing(2) }}>
                        © 2023 Copyright: Muskan Group
                    </Typography>
                </Box>
            ) : narrowTabletMode ? (
                <Box sx={{ mx: theme.spacing(4), pt: theme.spacing(4) }}>
                    <Grid container spacing={2}>
                        <Grid item sm={6}>
                            <Link href='/'>
                                <img src='/logo/logo.png' alt='logo' width='auto' height='3rem' style={{ marginRight: 'auto' }} />
                            </Link>
                            <Typography variant='h6' textAlign='center' sx={{ my: theme.spacing(1) }}>
                                Muskan Group of Companies
                            </Typography>

                            <Box sx={{ mx: 'auto' }}>
                                <Link href='https://www.facebook.com/muskangroupofcompanies' target='_blank' rel='noopener noreferrer'>
                                    <Image
                                        src={facebook}
                                        alt='facebook'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link>
                                <Link
                                    href='https://www.linkedin.com/company/muskan-group-of-companies'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        src={linkedIn}
                                        alt='linkedin'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link>
                                <Link href='https://twitter.com/MuskanGroup1' target='_blank' rel='noopener noreferrer'>
                                    <Image
                                        src={twitter}
                                        alt='twitter'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link>
                                {/* <Link href='/' target='_blank' rel='noopener noreferrer'>
                                    <Image
                                        src={instagram}
                                        alt='instagram'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link> */}
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant='h6' sx={{ mb: '1rem', fontWeight: 600 }}>
                                Reach Us Out
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'start' }}>
                                <Image
                                    src={address}
                                    alt='logo'
                                    style={{
                                        height: '1rem',
                                        width: 'auto',
                                        marginRight: '1rem',
                                    }}
                                />
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontWeight: 300,
                                        color: '#FFFFFF',
                                        textAlign: 'start',
                                        fontSize: '0.75rem',
                                    }}
                                >
                                    Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, NEW DELHI - 110078
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    my: '1rem',
                                }}
                            >
                                <Image
                                    src={phone}
                                    alt='logo'
                                    style={{
                                        height: '1rem',
                                        width: 'auto',
                                        marginRight: '1rem',
                                    }}
                                />
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontWeight: 300,
                                        color: '#FFFFFF',
                                        textAlign: 'start',
                                        fontSize: '0.75rem',
                                    }}
                                >
                                    011 41587468/40687469
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Image
                                    src={email}
                                    alt='logo'
                                    style={{
                                        height: '1rem',
                                        width: 'auto',
                                        marginRight: '1rem',
                                    }}
                                />
                                <Typography
                                    variant='body1'
                                    sx={{
                                        fontWeight: 300,
                                        color: '#FFFFFF',
                                        textAlign: 'start',
                                        fontSize: '0.75rem',
                                    }}
                                >
                                    info@mclpl.co.in
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant='h6' textAlign='center' sx={{ mb: '1rem', fontWeight: 600 }}>
                                Quick Links
                            </Typography>

                            <Link href='/about'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        About Us
                                    </Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/career'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mt: '0.5rem',
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Career
                                    </Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/contact'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mt: '0.5rem',
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Contact Us
                                    </Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/#services'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mt: '0.5rem',
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Services
                                    </Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>

                            <Link href='/downloads'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: '0.5rem',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Useful Downloads
                                    </Typography>
                                    <Image
                                        src={arrowRight}
                                        alt='link'
                                        style={{
                                            height: '0.75rem',
                                            width: 'auto',
                                            marginLeft: '1rem',
                                        }}
                                    />
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant='h6' sx={{ mb: '1rem', fontWeight: 600 }}>
                                Subscribe Us
                            </Typography>
                            <Typography variant='body1' sx={{ fontWeight: 300, color: '#FFFFFF', textAlign: 'start', fontSize: '0.75rem' }}>
                                Subscribe to our newsletter and never miss our latest news and promotions.
                            </Typography>
                            <Box sx={{ my: '1rem' }}>
                                <SecondaryTextField placeholder='Enter your mail id' endButton />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Link href='/'>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        <CircleIcon sx={{ fontSize: '0.5rem', mr: theme.spacing(0.25) }} />
                                        Privacy Policy
                                    </Typography>
                                </Link>
                                <Link href='/sitemap.xml' target='_blank' rel='noopener noreferrer'>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        <CircleIcon sx={{ fontSize: '0.5rem', mr: theme.spacing(0.25) }} />
                                        Site Map
                                    </Typography>
                                </Link>
                                <Link href='/'>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        <CircleIcon sx={{ fontSize: '0.5rem', mr: theme.spacing(0.25) }} />
                                        Terms & Conditions
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider
                        sx={{
                            mt: theme.spacing(1),
                            borderColor: '#FFFFFF80',
                        }}
                    />
                    <Typography variant='body2' textAlign='end' sx={{ py: theme.spacing(2) }}>
                        © 2023 Copyright: Muskan-Group of Companies
                    </Typography>
                </Box>
            ) : (
                <Box sx={{ mx: theme.spacing(4), pt: theme.spacing(4) }}>
                    <Container maxWidth='xl' disableGutters>
                        <Grid container spacing={4}>
                            <Grid item sm={3}>
                                <Link href='/'>
                                    <img src='/logo/logo.png' alt='logo' width='auto' height='3rem' style={{ marginRight: 'auto' }} />
                                </Link>
                                <Typography
                                    variant='h6'
                                    textAlign='center'
                                    sx={{
                                        my: theme.spacing(1),
                                    }}
                                >
                                    Muskan Group of Companies
                                </Typography>

                                <Box sx={{ mx: 'auto' }}>
                                    <Link href='https://www.facebook.com/muskangroupofcompanies' target='_blank' rel='noopener noreferrer'>
                                        <Image
                                            src={facebook}
                                            alt='facebook'
                                            style={{
                                                height: '1.5rem',
                                                width: 'auto',
                                                margin: '1rem',
                                            }}
                                        />
                                    </Link>
                                    <Link
                                        href='https://www.linkedin.com/company/muskan-group-of-companies'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Image
                                            src={linkedIn}
                                            alt='linkedin'
                                            style={{
                                                height: '1.5rem',
                                                width: 'auto',
                                                margin: '1rem',
                                            }}
                                        />
                                    </Link>
                                    <Link href='https://twitter.com/MuskanGroup1' target='_blank' rel='noopener noreferrer'>
                                        <Image
                                            src={twitter}
                                            alt='twitter'
                                            style={{
                                                height: '1.5rem',
                                                width: 'auto',
                                                margin: '1rem',
                                            }}
                                        />
                                    </Link>
                                    {/* <Link href='/' target='_blank' rel='noopener noreferrer'>
                                    <Image
                                        src={instagram}
                                        alt='instagram'
                                        style={{
                                            height: '1.5rem',
                                            width: 'auto',
                                            margin: '1rem',
                                        }}
                                    />
                                </Link> */}
                                </Box>
                                <Box sx={{ px: '3.4rem' }}>
                                    <GoogleTranslate />
                                </Box>
                            </Grid>

                            <Grid item sm={3}>
                                <Typography variant='h6' sx={{ mb: '1rem', fontWeight: 600 }}>
                                    Reach Us Out
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'start' }}>
                                    <Image
                                        src={address}
                                        alt='logo'
                                        style={{
                                            height: '1rem',
                                            width: 'auto',
                                            marginRight: '1rem',
                                        }}
                                    />
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Muskan Tower, Plot no.83, Old Palam Rd, Shiv Park, kakrola Mor, NEW DELHI - 110078
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        my: '1rem',
                                    }}
                                >
                                    <Image
                                        src={phone}
                                        alt='logo'
                                        style={{
                                            height: '1rem',
                                            width: 'auto',
                                            marginRight: '1rem',
                                        }}
                                    />
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        011 41587468/40687469
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Image
                                        src={email}
                                        alt='logo'
                                        style={{
                                            height: '1rem',
                                            width: 'auto',
                                            marginRight: '1rem',
                                        }}
                                    />
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        info@mclpl.co.in
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item sm={2}>
                                <Typography variant='h6' sx={{ mb: '1rem', fontWeight: 600 }}>
                                    Quick Links
                                </Typography>

                                <Link href='/about'>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontWeight: 300,
                                                color: '#FFFFFF',
                                                textAlign: 'start',
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            About Us
                                        </Typography>
                                        <Image
                                            src={arrowRight}
                                            alt='link'
                                            style={{
                                                height: '0.75rem',
                                                width: 'auto',
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Box>
                                </Link>

                                <Link href='/career'>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mt: '1rem',
                                        }}
                                    >
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontWeight: 300,
                                                color: '#FFFFFF',
                                                textAlign: 'start',
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            Career
                                        </Typography>
                                        <Image
                                            src={arrowRight}
                                            alt='link'
                                            style={{
                                                height: '0.75rem',
                                                width: 'auto',
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Box>
                                </Link>

                                <Link href='/contact'>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mt: '1rem',
                                        }}
                                    >
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontWeight: 300,
                                                color: '#FFFFFF',
                                                textAlign: 'start',
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            Contact Us
                                        </Typography>
                                        <Image
                                            src={arrowRight}
                                            alt='link'
                                            style={{
                                                height: '0.75rem',
                                                width: 'auto',
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Box>
                                </Link>

                                <Link href='/#services'>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mt: '1rem',
                                        }}
                                    >
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontWeight: 300,
                                                color: '#FFFFFF',
                                                textAlign: 'start',
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            Services
                                        </Typography>
                                        <Image
                                            src={arrowRight}
                                            alt='link'
                                            style={{
                                                height: '0.75rem',
                                                width: 'auto',
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Box>
                                </Link>

                                <Link href='/downloads'>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mt: '1rem',
                                        }}
                                    >
                                        <Typography
                                            variant='body1'
                                            sx={{
                                                fontWeight: 300,
                                                color: '#FFFFFF',
                                                textAlign: 'start',
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            Useful Downloads
                                        </Typography>
                                        <Image
                                            src={arrowRight}
                                            alt='link'
                                            style={{
                                                height: '0.75rem',
                                                width: 'auto',
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Box>
                                </Link>
                            </Grid>

                            <Grid item sm={4}>
                                <Typography variant='h6' sx={{ mb: '1rem', fontWeight: 600 }}>
                                    Subscribe Us
                                </Typography>
                                <Typography
                                    variant='body1'
                                    sx={{ fontWeight: 300, color: '#FFFFFF', textAlign: 'start', fontSize: '0.75rem' }}
                                >
                                    Subscribe to our newsletter and never miss our latest news and promotions.
                                </Typography>
                                <Box sx={{ my: '1rem' }}>
                                    <SecondaryTextField placeholder='Enter your mail id' endButton />
                                </Box>
                                <Typography
                                    variant='body1'
                                    sx={{ fontWeight: 300, color: '#FFFFFF', textAlign: 'start', fontSize: '0.75rem' }}
                                >
                                    Privacy Policy
                                </Typography>
                                <Link href='/sitemap.xml' target='_blank' rel='noopener noreferrer'>
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            fontWeight: 300,
                                            color: '#FFFFFF',
                                            textAlign: 'start',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Site Map
                                    </Typography>
                                </Link>
                                <Typography
                                    variant='body1'
                                    sx={{ fontWeight: 300, color: '#FFFFFF', textAlign: 'start', fontSize: '0.75rem' }}
                                >
                                    Terms & Conditions
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider
                            sx={{
                                mt: theme.spacing(1),
                                borderColor: '#FFFFFF80',
                            }}
                        />
                        <Typography variant='body2' textAlign='end' sx={{ py: theme.spacing(2) }}>
                            © 2023 Copyright: Muskan Group of Companies
                        </Typography>
                    </Container>
                </Box>
            )}
        </Box>
    )
}
