
import { makeStyles, Box, Typography } from "@material-ui/core"

interface InfoBoxProps {
    children: React.ReactNode,
    emoji?: string | undefined,
    image?: string,
    title: string,
    layout: "layout1" |  "layout2" | "layout3"
    paletteIndex?: number | undefined
}


const imgBackgroundColors = ['#E0EDD6', '#E2D3EB', '#F4E5D0', '#F5EED4', '#C8D9DF']
const imgBackgroundColorsDark = ['#DCE9D1', 'rgba(227, 222, 236, 0.32)', '#F4E5D0', 'rgba(248, 239, 212, 0.28)', '#C8D9DF']

const backgroundColors = ['rgba(220, 233, 209, 0.26)', 'rgba(227, 222, 236, 0.32)', 'rgba(244, 229, 208, 0.24)', 'rgba(248, 239, 212, 0.28)', '#C8D9DF']
const backgroundColorsDark = ['#3c4235', '#3b3a3d', '#49322e', '#3b3934', '#2b4853']

export const InfoBox = ({ children, title, image, emoji,  paletteIndex, layout = "layout1" } : InfoBoxProps) => {


    const backGroundColor = (paletteIndex: number | undefined, theme: any) : string => {
        if (paletteIndex == undefined) return ''
        return theme.palette.type === 'light' ? backgroundColors[paletteIndex] : backgroundColorsDark[paletteIndex]
    }
    const imgBackGroundColor = (paletteIndex: number | undefined, theme: any) : string => {
        if (paletteIndex == undefined) return ''
        return theme.palette.type === 'light' ? imgBackgroundColors[paletteIndex] : imgBackgroundColorsDark[paletteIndex]
    }



    const layout1 = makeStyles( theme => ({

        container: {
            display: "grid",
            gap: theme.spacing(1),
            gridTemplateColumns: "3fr 2fr",

            height: "100%",
            padding: theme.spacing(2),
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: backGroundColor(paletteIndex, theme),
            border: "1px solid #E6E6E6",

            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: "1fr",
                gap: theme.spacing(1),
            },
        },

        imageWrapper: {
            margin: "auto",
            backgroundColor: imgBackGroundColor(paletteIndex, theme),
            height: "100%",
            borderRadius: 20,
        },
        image: {
            maxWidth: "100%",
            padding: 40,
            filter: "saturate(60%)",

            [theme.breakpoints.down('sm')]: {
                maxWidth: 180,
            },
            [theme.breakpoints.down('xs')]: {
                margin: "auto",
                display: 'none'
            },
        }
    }))

    const layout2 = makeStyles( theme => ({
        container: {
            display: "grid",
            gap: theme.spacing(1),
            padding: theme.spacing(2),
            height: "100%",
            backgroundColor: backGroundColor(paletteIndex, theme),
            alignItems: "center",
            borderRadius: 20,
            border: "1px solid #E6E6E6",
        },

        imageWrapper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: imgBackGroundColor(paletteIndex, theme),
            height: "100%",
            borderRadius: 20,
        },
        image: {
            maxWidth: 80,
            maxHeight: "100%",
            filter: "saturate(60%)",
            [theme.breakpoints.down('xs')]: {
                margin: "auto",
                display: 'none'
            },
        },
    }))


  const layout3 = makeStyles( theme => ({
        container: {
            display: "grid",
            gap: theme.spacing(1),
            gridTemplateColumns: "1fr",

            padding: theme.spacing(2),
            margin: 10,
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: backGroundColor(paletteIndex, theme),
            
            [theme.breakpoints.down('xs')]: {
                minHeight: 220,
            },
        },
        imageWrapper: {
            margin: "auto",
            backgroundColor: imgBackGroundColor(paletteIndex, theme),
            height: 200,
            borderRadius: 20,
        },
        image: {
            height: 200,
        }
    }))

    const classes = layout === "layout1" ? layout1() : layout === "layout2" ? layout2() : layout3()

    return (
        <div className={classes.container}>

            { image && layout !== "layout1" &&
                <Box className={classes.imageWrapper}>
                    <div style={{margin: 'auto'}}>
                        <img src={image} className={classes.image} alt="" />
                    </div>
                </Box>
            }
            <Box px={2} >
                { emoji && 
                    <Typography align="center" variant="h3"> <span style={{ fontSize: "180%" }}> {emoji} </span>  </Typography>
                }
                <Box py={1}>
                    <Typography variant="h5"> {title} </Typography>
                </Box>
                {children} 
            </Box>

            { image && layout ===  "layout1" &&
                <Box className={classes.imageWrapper}>
                    <div style={{textAlign: "center", alignItems: "center"}}>
                        <img src={image} className={classes.image} alt="" /> 
                    </div>
                </Box>
            }
        </div>
    )
}
