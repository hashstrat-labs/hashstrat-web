
import { makeStyles, Box, Typography, Link } from "@material-ui/core"
import { Link as LinkRouter } from "react-router-dom"
import { Button, ButtonSecondary } from "../shared/Button"


interface ProductPreviewProps {
    children: React.ReactNode,
    emoji?: string | undefined,
    image?: string,
    title: string,
    layout: "layout1" | "layout2"
}



export const ProductPreview = ({ children, title, image, emoji, layout = "layout1" } : ProductPreviewProps) => {

    const layout1 = makeStyles( theme => ({

        container: {
            display: "grid",
            gap: theme.spacing(1),
            gridTemplateColumns: "2fr 3fr",

            height: "100%",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,

            [theme.breakpoints.down('sm')]: {
                gridTemplateColumns: "1fr 1fr",
            },

            [theme.breakpoints.down('xs')]: {
                marginTop: 10,
                gridTemplateColumns: "1fr",
                borderRadius: 20,
                border: "1px solid #E6E6E6",
                backgroundColor: theme.palette.type === 'light' ? '#F7F5E8' : '#3b3934',

            },
        },

        contentWrapper: {
            paddingLeft: 20,
         
            [theme.breakpoints.down('xs')]: {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },

        imageWrapper: {
            display: "grid",
            alignItems: "center",
            margin: "auto",
            borderRadius: 20,
        },
        image: {
            maxWidth: "100%",
            padding: 40,
            filter: theme.palette.type === 'light' ? "saturate(40%)" : "saturate(40%) brightness(0.8)",

            [theme.breakpoints.down('xs')]: {
                display: 'none'
            },
        },
        buttonWrapper: {
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center',
                display: 'none'
            },
        }
    }))


    const layout2 = makeStyles( theme => ({

        container: {
            display: "grid",
            gap: theme.spacing(1),
            gridTemplateColumns: "3fr 2fr",

            height: "100%",
            alignItems: "center",

            paddingLeft: 20,
            paddingRight: 20,

            [theme.breakpoints.down('sm')]: {
                gridTemplateColumns: "1fr 1fr",
            },

            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: "1fr",
                marginTop: 10,
                borderRadius: 20,
                border: "1px solid #E6E6E6",
                backgroundColor: theme.palette.type === 'light' ? '#EEF8F4' : '#3b3a3d',
            },
        },

        contentWrapper: {
            paddingRight: 20,
            [theme.breakpoints.down('xs')]: {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },

        imageWrapper: {
            display: "grid",
            alignItems: "center",
            margin: "auto",
            borderRadius: 20,
        },
        image: {
            maxWidth: "100%",
            padding: 40,
            filter: theme.palette.type === 'light' ? "saturate(40%)" : "saturate(40%) brightness(0.8)",
    
            [theme.breakpoints.down('xs')]: {
                display: 'none'
            },
        },
        buttonWrapper: {
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center',
                display: 'none'
            }
        }
    }))


    const classes = layout === "layout1" ? layout1() : layout2()

    return (
        <div className={classes.container}>

            { layout === "layout2" &&
                <Box className={classes.imageWrapper}>
                    <img src={image} className={classes.image} alt="" />
                </Box>
            }
            <Box className={classes.contentWrapper}>
                <Box pt={2} pb={2}>
                    <Typography variant="body1" color="primary"> {emoji} {title} </Typography>
                </Box>

                <Box pb={2}>
                {children} 
                </Box>

                <Box className={classes.buttonWrapper}>
                    <Link component={LinkRouter} to="https://app.hashstrat.com" style={{ textDecoration: 'none' }} >
                        <ButtonSecondary style={{ minWidth: 210 }} variant="outlined" color="primary" >Launch App</ButtonSecondary>
                    </Link>
                </Box>
            </Box>

            { image && layout === "layout1" &&
                <Box className={classes.imageWrapper}>
                    <img src={image} className={classes.image} alt="" /> 
                </Box>
            }
        </div>
    )
}
