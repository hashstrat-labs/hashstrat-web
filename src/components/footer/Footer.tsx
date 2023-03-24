import { Typography, makeStyles, Link, Box, useTheme } from "@material-ui/core"
import { Horizontal } from "../Layout"
import { Link as RouterLink } from "react-router-dom"

import { Socials } from "../Socials"

const useStyle = makeStyles( theme => ({
    footer: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        textAlign: "center",
        padding: theme.spacing(2)
    }
}))



export const Footer = () =>  {
    const classes = useStyle()
	const theme = useTheme();


    return (
        <footer className={classes.footer}>
            <Socials />
            <Typography variant="body2"> © 2023 HashStrat. All rights reserved </Typography>

            <Horizontal align="center"> 
                <Box>   
                    <Link component={RouterLink} to="/privacy" style={{ color: theme.palette.text.secondary, textDecoration: "underline" }}> Privacy Policy</Link>
                    &nbsp; &nbsp;
                    <Link component={RouterLink} to="/terms" style={{ color: theme.palette.text.secondary, textDecoration: "underline" }}> Terms of service </Link> 
                </Box>
            </Horizontal>

            <Typography variant='body2' color="textSecondary"> Version 0.7 (6cab55) </Typography>
        </footer>
    )
}