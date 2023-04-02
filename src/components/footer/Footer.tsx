import { Typography, makeStyles, Link, Box, useTheme, Divider } from "@material-ui/core"
import { Horizontal } from "../Layout"
import { Link as RouterLink } from "react-router-dom"

import { Socials } from "../Socials"

import logoLight from "../img/logo-light.png"
import logoDark from "../img/logo-dark.png"


const useStyle = makeStyles( theme => ({
    container: {
        // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundColor: theme.palette.type === 'light' ? '#FAFAFA' : '#111',
    },
    footer: {
        maxWidth: 1600,
        margin: 'auto',

        paddingLeft: 60,
        paddingRight: 60,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 10,
            paddingRight: 10,
        },
    },
    logoAndSocials: {
        margin: "auto", 
        display: "flex", 
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center", 
        alignContent:"center", 
        justifyItems: "center",
        justifyContent: "space-between", 
    },

    logo: {
        [theme.breakpoints.down('xs')]: {
            margin: "auto",
            paddingBottom: 20,
        },
    }

}))


export const Footer = () =>  {
    const classes = useStyle()
	const theme = useTheme();

	const lightMode = theme.palette.type === 'light'
	const logoImg = lightMode ? logoLight : logoDark


    return (
        <footer className={classes.container}>

            <Divider variant="fullWidth" style={{ marginTop: 0, marginBottom: 20 }}/>

            <Box className={classes.footer}>

                <Box className={classes.logoAndSocials}>
                    <Box className={classes.logo} >
                        <img src={logoImg} style={{ width: 220 }} alt="logo" />
                        <Typography variant="body2"> © 2023 HashStrat. All rights reserved </Typography>
                    </Box>
                    <Box className={classes.logo}>
                        <Socials />
                    </Box>
                </Box>
            </Box>

            <Divider variant="fullWidth" style={{ marginTop: 20, marginBottom: 20 }}/>

            <Horizontal align="center"> 
                <Box>   
                    <Link component={RouterLink} to="/privacy" style={{ color: theme.palette.text.secondary, textDecoration: "underline" }}> Privacy Policy </Link>
                    &nbsp; &nbsp;
                    <Link component={RouterLink} to="/terms" style={{ color: theme.palette.text.secondary, textDecoration: "underline" }}> Terms of service </Link> 
                </Box>
            </Horizontal>

            <Divider variant="fullWidth" style={{ marginTop: 20, marginBottom: 0 }}/>
        </footer>
    )
}