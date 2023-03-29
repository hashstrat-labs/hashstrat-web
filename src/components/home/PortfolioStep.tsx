
import { makeStyles, Box, Typography } from "@material-ui/core"
import { Horizontal } from "../Layout"

interface PortfolioStepProps {
    image?: string,
    title: string,
    step?: number | undefined
}

export const PortfolioStep = ({ step, title, image } : PortfolioStepProps ) => {

  const layout = makeStyles( theme => ({
        container: {
            maxWidth: 430,
            display: "grid",
            gap: 0,
            gridTemplateColumns: "1fr",
            alignItems: "center",
                
            borderRadius: 20,
            border: "1px solid #E6E6E6",
            backgroundColor: theme.palette.type === 'light' ? '#E0E0E0' : '#E0E0E0',
            
            [theme.breakpoints.down('xs')]: {
                margin: 10,
            },
        },
        imageWrapper: {
            margin: "auto",
            maxWidth: "100%",
        },
        image: {
            borderRadius: "20px 20px 0px 0px",
            maxWidth: "100%",
            filter: theme.palette.type === 'light' ? "saturate(60%)" : "saturate(60%) brightness(0.8)",
        },
        stepWrapper: {
            margin: 15,
            display: "grid", 
            gap: 20, 
            height: 60,
            alignItems: "center", 
            alignContent: "center", 
            justifyItems: "center", 
            gridTemplateColumns: "66px auto"
        },
        step: {
             display: 'grid',
             textAlign: 'center', 
             alignItems: 'center', 
             width: 66, 
             height: 66, 
             backgroundColor: theme.palette.type === 'light' ? '#93C78F': '#93C78F',
             color: '#fff',
             fontFamily: "Manrope",
             fontSize: '1.9em',
             fontWeight: 600,
             borderRadius: 20
        },
        title: {
            fontSize: '1.4rem',
            color:  theme.palette.type === 'light' ? theme.palette.text.primary: '#333'
        }
    }))

    const classes = layout()

    return (
        <div className={classes.container}>

            <Box className={classes.imageWrapper}>
                {/* <div style={{margin: 'auto'}}> */}
                    <img src={image} className={classes.image} alt="" />
                {/* </div> */}
            </Box>

            <Box style={{backgroundColor: '#FAFAFA', borderRadius: "0px 0px 20px 20px"}} >
                <Box py={1}>
                    <Box className={classes.stepWrapper}>
                        <Box className={classes.step}>
                            {step}
                        </Box>
                        <Box className={classes.title}> {title} </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
