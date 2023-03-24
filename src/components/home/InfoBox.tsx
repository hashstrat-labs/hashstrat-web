
import { makeStyles, Box, Typography } from "@material-ui/core"

interface InfoBoxProps {
    children: React.ReactNode,
    emoji?: string | undefined,
    image?: string,
    title: string,
    layout: "layout1" |  "layout2" | "layout3"
    paletteIndex?: number | undefined
}


const backgroundColors = ['#E3EDD6', '#E3DEEC', '#F4E5D0', '#F5EED4', '#C8D9DF']
const backgroundColorsDark = ['#3c4235', '#3b3a3d', '#49322e', '#3b3934', '#2b4853']

export const InfoBox = ({ children, title, image, emoji,  paletteIndex, layout = "layout1" } : InfoBoxProps) => {


    const backGroundColor = (paletteIndex: number | undefined, theme: any) : string => {
        if (paletteIndex == undefined) return ''
        return theme.palette.type === 'light' ? backgroundColors[paletteIndex] : backgroundColorsDark[paletteIndex]
    }


    const layout1 = makeStyles( theme => ({
        container: {

            padding: theme.spacing(2),
            margin: 10,
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: backGroundColor(paletteIndex, theme),
            border: paletteIndex !== undefined ?  "" : "1px solid #aaa",
            
            [theme.breakpoints.down('lg')]: {
                display: "grid",
                gap: theme.spacing(1),
                gridTemplateColumns: "1fr 3fr",
            },

            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: "1fr",
                gap: theme.spacing(1),
            },
        },
        image: {
            maxWidth: 120,
            margin: "auto",
            [theme.breakpoints.down('xs')]: {
                margin: "auto",
            },
        }
    }))

    const layout2 = makeStyles( theme => ({
        container: {

            minHeight: 420,
            padding: theme.spacing(2),
            margin: 10,
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: backGroundColor(paletteIndex, theme),
            
            [theme.breakpoints.down('lg')]: {
                display: "grid",
                gap: theme.spacing(1),
                gridTemplateColumns: "1fr",
            },
        },
        image: {
            maxWidth: 120,
            margin: "auto",
            filter: theme.palette.type === 'light' ? "grayscale(0.6)" : "grayscale(0.6)",

            [theme.breakpoints.down('xs')]: {
                margin: "auto",
            },
        }
    }))


  const layout3 = makeStyles( theme => ({
        container: {
            minHeight: 360,
            padding: theme.spacing(2),
            margin: 10,
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: backGroundColor(paletteIndex, theme),
            
            [theme.breakpoints.down('lg')]: {
                display: "grid",
                gap: theme.spacing(1),
                gridTemplateColumns: "1fr",
            },

            [theme.breakpoints.down('xs')]: {
                minHeight: 220,
            },
     
        },
        image: {
            maxWidth: 300,
            margin: "auto",
        }
    }))

    const classes = layout === "layout1" ? layout1() : layout === "layout2" ? layout2() : layout3()

    return (
        <div className={classes.container}>

            { image &&
                <div style={{textAlign: "center", alignItems: "center", filter: layout === "layout2" && paletteIndex !== undefined ? "brightness(0.4)" : "" }}>
                    <img src={image} className={classes.image} alt=""></img> 
                </div>
            }
            <Box px={2} >
                { emoji && 
                    <Typography align="center" variant="h3"> <span style={{ fontSize: "180%" }}>  {emoji} </span>  </Typography>
                }
                <Box py={1}>
                    <Typography align={layout === "layout1" ? 'left' : 'center'} variant="h5"> {title} </Typography>
                </Box>
                {children} 
            </Box>
        </div>
    )
}


