
import { makeStyles, Box, Typography, Link } from "@material-ui/core"
import { Vertical } from "../Layout"
import { ButtonSecondary } from "../shared/Button"

interface InfoPanelProps {
    subject: string | undefined
    title: string,
    children: React.ReactNode,
    image?: string,
    layout: "layout1" |  "layout2"
    url? : string | undefined
}

const layout1 = makeStyles( theme => ({
    container: {

        padding: theme.spacing(2),
        margin: 10,
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: '#FAFAFA',
        background: theme.palette.type === 'light' ? 
         "linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(241,241,241,1) 66%, rgba(218,218,218,1) 100%)" :
         "linear-gradient(180deg, rgba(79,78,78,1) 0%, rgba(48,48,48,1) 64%, rgba(33,33,33,1) 100%)",

        // [theme.breakpoints.down('xl')]: {
        //     minWidth: 320,
        // },

        [theme.breakpoints.down('lg')]: {
            minWidth: 530,
        },

        [theme.breakpoints.down('sm')]: {
            minWidth: 330,
        },

        [theme.breakpoints.down('xs')]: {
            minWidth: "100%",
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
        minWidth: 480,

        padding: theme.spacing(2),
        border: "1px solid #aaa",
        margin: 10,
        alignItems: "center",
        borderRadius: 12,
        
        [theme.breakpoints.down('lg')]: {
            display: "grid",
            gap: theme.spacing(1),
            gridTemplateColumns: "1fr",
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


export const InfoPanel = ({ subject, children, title, image, url, layout = "layout1" } : InfoPanelProps) => {
    const classes =  layout === "layout1" ? layout1() : layout2()

    return (
        <div className={classes.container}>
            <Box px={2} style={{height: '100%'}}>
                <Vertical>
                    { image &&
                        <div style={{textAlign: "center", alignItems: "center" }}>
                            <img src={image} className={classes.image} alt=""></img> 
                        </div>
                    }
                    {
                        subject && 
                        <Typography variant="body2" align="left" color="textPrimary" >
                        <strong> {subject} </strong>
                        </Typography>
                    }
                    <Box py={1} >
                        <Box >
                            <Typography variant="h5" align="left"> {title} </Typography>
                        </Box>
                    
                    </Box>

                    <Box style={{minHeight: 160}}>
                        {children} 
                    </Box>

                    { url && 
                        <Box mt={2}>
                            <Link href={`${url}`} target="_blank" style={{ textDecoration: 'none' }} >
                                <ButtonSecondary variant="outlined" color="primary" >Learn more</ButtonSecondary>
                            </Link>
                        </Box>
                    }
                </Vertical>
            </Box>
                
        </div>
    )
}


