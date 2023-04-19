
import { makeStyles, Box, Typography, Link } from "@material-ui/core"
import { ButtonSecondary } from "../shared/Button"

interface HeadlineBoxProps {
    subject: string | undefined
    children: React.ReactNode,
    paletteIndex? : number
}

const subjectColors = ['#D14200', '#13315F', '#00622A', '#584400']
const subjectColorsDark = ['#f5e4dc', '#e4ecf7', '#e1f7eb', '#f5f0df']

const backgroundColors = ['#F7F0E8', '#EEF8F4', '#F0F4EB', '#F7F5E8']
const backgroundColorsDark = ['#706562', '#3b3a3d', '#585e51', '#3b3934']


export const HeadlineBox = ({ subject, children, paletteIndex = 0} : HeadlineBoxProps) => {


    const backGroundColor = (paletteIndex: number | undefined, theme: any) : string => {
        if (paletteIndex == undefined) return ''
        return theme.palette.type === 'light' ? backgroundColors[paletteIndex] : backgroundColorsDark[paletteIndex]
    }
    const subjectColor = (paletteIndex: number | undefined, theme: any) : string => {
        if (paletteIndex == undefined) return ''
        return theme.palette.type === 'light' ? subjectColors[paletteIndex] : subjectColorsDark[paletteIndex]
    }


    const style = makeStyles( theme => ({
        container: {
            width: 320,
            height: 100,
            whiteSpace: 'normal',
            overflow: 'overflow-wrap',

            padding: theme.spacing(2),
            margin: 0,
            borderRadius: 20,
            backgroundColor: backGroundColor(paletteIndex % backgroundColors.length, theme),
        },
        subject: {
            fontSize: '0.8rem', 
            color: subjectColor(paletteIndex % backgroundColors.length, theme),
            textTransform: 'uppercase' 
        },

        image: {
            maxWidth: 120,
            margin: "auto",
            [theme.breakpoints.down('xs')]: {
                margin: "auto",
            },
        }
    }))
    
    const classes = style()

    return (
        <Box px={2} className={classes.container} >
            <Box className={classes.subject}>
                {subject}
            </Box>
            
            <Box mt={1}>
                {children}  
            </Box>
        </Box>
    )
}


