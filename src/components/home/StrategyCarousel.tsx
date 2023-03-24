import Carousel from 'react-material-ui-carousel'

import { makeStyles, Card, CardContent, CardActions, Box, Typography, Link } from  "@material-ui/core"
import { Horizontal } from '../Layout';

import { StrategyPlayground } from "./StrategyPlayground"
import { Link as RouterLink } from "react-router-dom"

import { Launch } from "@material-ui/icons"


type StrategyInfo = {
    id: string,
    name: string,
    description: string,
    goal: string,
    scope: string,
    returns: string,
    timeframe: string,
    link: string
}

const useStyle = makeStyles( theme => ({
    container: {
        maxWidth: 1900,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    card: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    cardContent: {
       [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    item: {
        marginLeft: 0,
        marginRight: 10,
        display: "grid",
        gridTemplateColumns: "4fr 2fr",
        gap: theme.spacing(0),
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr",
            marginLeft: 0,
            marginRight: 0,
        },
    },

    itemDetail: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },

    roi: {
        marginTop:  20,
        margin: "auto",
        maxWidth: 220,
        padding: theme.spacing(2),
        border: "1px solid #aaa",
        alignItems: "center",
        borderRadius: 12,
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    }

}))

export const StrategyCarousel = () =>  { 

    const classes = useStyle()

    return (
        <Box className={classes.container}>
            <Carousel
                fullHeightHover={false}  
                navButtonsProps={{ 
                    style: {
                        backgroundColor: 'dodgerblue',
                        // borderRadius: 0
                    }
                }} 

                autoPlay={false}
                stopAutoPlayOnHover={true}
                navButtonsAlwaysVisible={true}
                cycleNavigation={false}
                swipe={false}
                indicators={true}
            >

                {
                    strategyItems.map( (item, i) => <StrategyItem key={i} data={item} /> )
                }
            </Carousel>
        </Box>
    )
}


export const StrategyItem = (props: {data: StrategyInfo}) =>  { 
    const classes = useStyle()

    return (
        <Card variant="outlined" >
            <CardContent  className={classes.cardContent}>
                <Box px={0}>
                    <div className={classes.item}>
                        <Box>
                            <Typography variant="h5" align="center"> <strong> {props.data.name} </strong> </Typography>
                            <ul>
                                <li>
                                    <Typography variant="body1" align="left"> {props.data.description} </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" align="left"> {props.data.goal} </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" align="left"> {props.data.scope} </Typography>
                                </li>
                            </ul>
                            <Horizontal align='center'> 
                                <Box pb={2}>
                                    <Link component={RouterLink} to={`/sim?strategy=${props.data.id}&from=2019-01-01`} style={{ paddingRight: 30 }} > Strategy Simulator </Link>
                                    <Link href={props.data.link} target="_blank" > Learn More <Launch style={{ height: 15, transform: "translateY(2px)" }} />  </Link>
                                </Box>
                            </Horizontal>
                        </Box>


                        <Box className={classes.roi}>
                            <Typography variant="body1" align="center"><strong>Returns</strong></Typography>
                            <Box py={1}>
                                <Typography variant="h4" align="center" color="primary"> {props.data.returns}</Typography>
                            </Box>
                            <Typography variant="body2" align="center" color={'textSecondary'}> {props.data.timeframe}</Typography>
                        </Box>
                    </div>
                        
                    <Box px={0}>
                        <StrategyPlayground 
                            strategy={props.data.id as string} 
                            symbol="ETH"
                            from="2018-01-01"
                            to="2023-01-17"
                            chartHeight={ Math.max( Math.round(window.screen.availWidth * .2), 350) }
                            chainId={137}
                        /> 
                    </Box>
                    
                </Box>
            </CardContent>
            <CardActions >
            </CardActions>
        </Card>
    )
}



export const strategyItems : StrategyInfo[] = [
    {
        id: "TrendFollowing",
        name: "Trend Following",
        description: "A momentum strategy trading in the direction of the underlying trend.",
        goal: "Allows to capture value in the risk asset during uptrends, and sell into USDC during downtrends.",
        scope: "Works best when there is a defined trend in the market.",
        returns: "13.2x",
        timeframe: "From Jan 2019 to Jan 2023",
        link: "https://medium.com/@hashstrat/trend-following-strategy-7dce9756eaa"

    },
    {
        id: "MeanReversion",
        name: "Mean Reversion",
        description: "A strategy for dollar-cost averaging in and out a risk asset when its price diverges substantially from its long term trend.",
        goal: "Aims to accumulate the risk asset when its price is significantly undervalued, and progressively divest when it's significantly overvalued.",
        scope: "Works best when the market is forming a bottom or a top.",
        returns: "7.7x",
        timeframe: "From Jan 2019 to Jan 2023",
        link: "https://medium.com/@hashstrat/hashstrat-mean-reversion-strategy-b1a576b05d5f"
    },
    {
        id: "Rebalancing",
        name: "Rebalancing",
        description: "A self-balancing strategy targeting an allocation of 60% to risk asset and 40% USDC.",
        goal: "Allows to acquire more of the risk asset at lower prices and offload some risk at higher prices.",
        scope: "Works best during periods of significant market volatility, in either direction.",
        returns: "6.6x",
        timeframe: "From Jan 2019 to Jan 2023",
        link: "https://medium.com/@hashstrat/hashstrat-rebalancing-strategy-f0bb6cf3152f"

    }
]