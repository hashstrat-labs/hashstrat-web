
import { makeStyles, Box, Typography, Link } from "@material-ui/core"
import { Horizontal, Vertical } from "../Layout"
import { ButtonSecondary } from "../shared/Button"

interface InfoPanelProps {
    subject: string
    title: string,
    children: React.ReactNode,
    image?: string,
    url: string
}



export const InfoPanel = ({ subject, children, title, image, url } : InfoPanelProps) => {
   

    const layout = makeStyles( theme => ({
        container: {
            margin: 0,
            minHeight: 450,
            width: "calc(100% - 40px)",
            padding: theme.spacing(2),
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: '#FAFAFA',
            background: theme.palette.type === 'light' ? 
            "linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(241,241,241,1) 66%, rgba(218,218,218,1) 100%)" :
            "linear-gradient(180deg, rgba(79,78,78,1) 0%, rgba(48,48,48,1) 64%, rgba(33,33,33,1) 100%)",

            [theme.breakpoints.down('xs')]: {
                margin: 0,
                minWidth: "100%",
                minHeight: 320,
            },
        },
        image: {
            maxWidth: 140,
            [theme.breakpoints.down('md')]: {
                display: "none",
                maxWidth: 60,
            },
            [theme.breakpoints.down('sm')]: {
                display: "none",
            },
            [theme.breakpoints.down('xs')]: {
                margin: "auto",
            },
        }, 
        
        button: {
            paddingTop: 20, 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: "flex-end", 
            justifyContent:'space-between',

            [theme.breakpoints.down('xs')]: {
                margin: "auto",
            },
        }
    }))

    const classes = layout()

    return (
        <div className={classes.container}>
            <Box px={2} style={{height: '100%'}}>
                <Vertical>

                    <Box>
                        <Box pb={1}>
                            <Typography variant="body1" align="left" color="error" >
                                <strong> {subject} </strong>
                            </Typography>                 
                        </Box>
                        <Typography variant="h4" align="left"> {title} </Typography>
                    </Box>

                    <Box style={{ }}>
                        {children} 
                    </Box>
                
                    <Box className={classes.button}>
                        <Link href={`${url}`} target="_blank" style={{ textDecoration: 'none' }} >
                            <ButtonSecondary style={{ minWidth: 150 }} variant="outlined" color="primary" >Learn more</ButtonSecondary>
                        </Link>
                        <img src={image} className={classes.image} alt="" />
                    </Box>
                </Vertical>
            </Box>


        </div>
    )
}


