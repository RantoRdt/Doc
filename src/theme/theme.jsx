import { createTheme, ThemeProvider } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeStateContext } from './themeState'

const colors = {
    primary: '#087ea4',
    white: '#FFF',
    whitetext: "#CCC",
    black: '#333',

}

const getPalette = (dark) => {
    return dark ?
    {
        mode: "dark",
        primary: { main: colors.primary },
        container: { primary: colors.black,light: colors.black, dark: colors.white},
        text: { main: colors.whitetext, reverse: colors.black, light_: colors.white, primary: colors.primary }
        
    }:{
        mode: "light",
        primary: { main: colors.primary },
        container: { primary: colors.primary,light: colors.white, dark: colors.black},
        text: { main: colors.black, reverse: colors.whitetext, light_: colors.white, primary: colors.primary }
        
    }
}
const getTheme = dark => {
    return createTheme({
        palette: getPalette(dark),
        breakpoints: {
            values: {
                min: 0,
                xs: 300,
                sm: 600,
                md: 900,
            }
        },
        components: {
            MuiIcon: {
                styleOverrides:{
                    root: ({theme}) =>{ return{ color: theme.palette.text.main } }
                },
            },
            MuiIconButton:{
                styleOverrides: {
                    root: {
                        aspectRatio: '1/1',
                    }
                },
                variants: [
                    {
                        props: { variant: 'floating' },
                        style: ({theme}) =>{
                            return {
                                width: '45px', 
                                height: '45px',   
                                borderRadius: '50%',
                                color: theme.palette.text.main,
                                backgroundColor: theme.palette.container.light,
                                boxShadow: '1px 1px 2px 0px ' + theme.palette.container.dark,
                                '&:hover': { backgroundColor: theme.palette.container.light }
                            }
                        }
                    }

                ]
            },
            MuiStack: {
                styleOverrides: {
                    root: ({theme}) => {
                        return { background: theme.palette.container.light }
                    },
                },
                variants: [
                    {
                        props: { variant: 'all' },
                        style:({theme}) => { return{ height: '100vh', width: '100%', overflowY: 'scroll' }}
                    },
                    {
                        props: { variant: 'all-h' },
                        style:({theme}) => { return{ height: '100vh', overflowY: 'scroll' }}
                    }
                ]
            },   
            MuiTreeItem:{
                styleOverrides: {
                    root:({theme}) =>{ return {
                        "& *": {
                            color: theme.palette.text.main,
                        },
                        "& > *": { display: 'flex', flexDirection: 'row-reverse' },
                        "& > .MuiTreeItem-content.Mui-selected *": {
                            color: theme.palette.text.primary ,
                        },
                    }}
                },
                variants: [
                    {
                        props: { variant: 'parent' },
                        style: { "& > * > * > p": { fontWeight: 'bold' } }
                    }
                ]
            },
            MuiTypography:{
                styleOverrides:{
                    root: ({theme}) =>{ return{ color: theme.palette.text.main } },
                },
                variants: [
                    {
                        props: { variant: 'highlighted' }, 
                        style: ({theme}) => { return{
                            color: theme.palette.text.reverse,
                            backgroundColor: theme.palette.primary.main,
                            padding: '0 7px',
                            fontStyle: 'italic'
                        }}
                    }
                ]
            }
        }
    })
}
const WithThemeProvider = ({children}) => {
    const { isDark } = useContext(ThemeStateContext)
    return (
        <ThemeProvider theme={getTheme(isDark)}>
            {children}
        </ThemeProvider>
    )
}

export default WithThemeProvider
