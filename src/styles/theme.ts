import { createTheme } from '@mui/material/styles'
import { nunito, inter, oswald } from './fonts'

const theme = createTheme({
    spacing: (factor: number) => `${1 * factor}rem`,

    palette: {
        common: {
            white: '#FFFFFF',
            black: '#000000',
        },
        primary: {
            main: '#003A9B',
            light: '#194DA5',
        },
        secondary: {
            main: '#031225',
            dark: '#1B1B1F',
            light: '#EFF6FF',
        },
        background: {
            default: '#EFF6FF',
        },
    },

    typography: {
        htmlFontSize: 16,
        fontFamily: nunito.style.fontFamily,

        h1: {
            fontFamily: oswald.style.fontFamily,
            fontSize: '5.4rem',
            fontWeight: '600',
            lineHeight: '7.2rem',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        h2: {
            fontSize: '3rem',
            fontWeight: '600',
            lineHeight: '3.5rem',
            textAlign: 'start',
            color: '#031225',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: '600',
            lineHeight: '3.2rem',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        h4: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
            textAlign: 'center',
            color: '#FFFFFF',
        },
        h5: {
            fontSize: '1.375rem',
            fontWeight: '600',
            lineHeight: '1.875rem',
            color: '#FFFFFF',
        },
        h6: {
            fontSize: '1.125rem',
            lineHeight: '1.25rem',
            color: '#FFFFFF',
            textAlign: 'start',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: '1.25rem',
            color: '#031225B3',
            textAlign: 'center',
        },
        body2: {
            fontSize: '1rem',
            lineHeight: '1.125rem',
            color: '#FFFFFF',
            textAlign: 'justify',
            fontWeight: 300,
        },
        subtitle1: {
            fontSize: '1.5rem',
            color: '#FFFFFF',
            textAlign: 'start',
        },
        subtitle2: {
            fontSize: '1rem',
            color: '#031225',
            textAlign: 'start',
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1400,
            xl: 1800,
        },
    },

    components: {
        MuiInputLabel: {
            defaultProps: {
                style: {
                    color: '#003A9B',
                    marginBottom: '4px',
                    textAlign: 'start',
                    fontWeight: 500,
                },
            },
        },
        MuiLink: {
            defaultProps: {
                style: {
                    textDecoration: 'none',
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#194DA5',
                    borderRadius: '8px',
                },
            },
        },
        MuiMenuItem: {
            defaultProps: {
                style: {
                    color: '#FFFFFF',
                    fontWeight: 400,
                    textTransform: 'capitalize',
                },
            },
        },
        MuiPaper: {
            defaultProps: { elevation: 0 },
        },
        MuiTabs: {
            styleOverrides: { indicator: { display: 'none' } },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    // color: '#003A9B',
                    backgroundColor: '#FFFFFF',
                    fontSize: '1.25rem',
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: { backgroundColor: '#0312251A', borderRadius: '8px', height: '2.6rem', color: '#031225' },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '0.85rem',
                    color: '#FFFFFF',
                    // backgroundColor: '#003A9B',
                },
            },
        },
    },
})

export default theme
