import Carousel from 'react-material-ui-carousel'

import { makeStyles, useTheme, CardContent, CardActions, Box, Typography, Link } from  "@material-ui/core"
import { Horizontal } from '../Layout';

import { StrategyPlayground } from "./StrategyPlayground"
import { Link as RouterLink } from "react-router-dom"

import { Launch } from "@material-ui/icons"

import dca from "./img/dca.png"
import rebalancing from "./img/rebalancing.png"
import trend from "./img/trend.png"


type StrategyInfo = {
    id: string,
    name: string,
    description: string,
    goal: string,
    scope: string,
    returns: string,
    timeframe: string,
    link: string,
    image: string
}

const useStyle = makeStyles( theme => ({
    container: {
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
        borderRadius: 20,
        border: "1px solid #ddd",

        marginLeft: 80,
        marginRight: 80,

        [theme.breakpoints.down('md')]: {
            marginLeft: 60,
            marginRight: 60,
        },

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    item: {
        marginLeft: 0,
    },

    strategyInfo: {
        display: 'grid', 
        gap: 20, 
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center", 
        gridTemplateColumns: "1fr auto",
        
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 10,
            paddingRight: 10,
        },

        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
            paddingLeft: 0,
            paddingRight: 0,
        },
    },

    roi: {
        marginTop:  20,
        margin: "auto",
        maxWidth: 220,
        minWidth: 150,
        padding: theme.spacing(2),
        border: "1px solid #aaa",
        alignItems: "center",
        borderRadius: 12,
    },

    playground: {
        [theme.breakpoints.down('md')]: {
           display: 'none'
       },
   },

}))

export const StrategyCarousel = () =>  { 

    const classes = useStyle()
	const theme = useTheme();

    return (
        <Box className={classes.container}>
            <Carousel
                fullHeightHover={false}  
                navButtonsProps={{ 
                    style: {
                        backgroundColor: '#93C78F',
                        // borderRadius: 0
                    }
                }}

                // navButtonsWrapperProps={{
                //     style: {
                //         top: '0',
                //         bottom: 'unset',
                //     }
                // }}

                autoPlay={false}
                navButtonsAlwaysVisible={true}
                swipe={true}
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
        <Box  >
            <CardContent className={classes.cardContent}>
                <Box>
                    <Box className={classes.item}>

                        <Typography variant="h4" align="center"> <strong> {props.data.name} </strong>  </Typography>

                        <Box className={classes.strategyInfo}>
     
                            <Box className={classes.roi}>
                                <Typography variant="body1" align="center"><strong>Returns</strong></Typography>
                                <Box py={1}>
                                    <Typography variant="h4" align="center" color="primary"> {props.data.returns}</Typography>
                                </Box>
                                <Typography variant="body2" align="center" color={'textSecondary'}> {props.data.timeframe}</Typography>
                            </Box>
                            
                            <ul >
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

                            {/* <Box style={{ margin: 'auto' }}>
                                <img src={props.data.image} style={{width: 100, height: 100}} />
                            </Box> */}

                        </Box>


                        <Horizontal align='center'> 
                            <Box pb={2}>
                                <Link component={RouterLink} to={`/sim?strategy=${props.data.id}&from=2019-01-01`} style={{ paddingRight: 30 }} > Strategy Simulator </Link>
                                <Link href={props.data.link} target="_blank" > Learn More <Launch style={{ height: 15, transform: "translateY(2px)" }} />  </Link>
                            </Box>
                        </Horizontal>
                    </Box>
                        
                    <Box className={classes.playground}>
                        <StrategyPlayground 
                            strategy={props.data.id as string} 
                            symbol="ETH"
                            from="2018-01-01"
                            to="2023-01-17"
                            chartHeight={ 250 }
                            chainId={137}
                        />
                    </Box>
                    
                </Box>
            </CardContent>
            <CardActions >
            </CardActions>
        </Box>
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
        link: "https://medium.com/@hashstrat/trend-following-strategy-7dce9756eaa",
        image: trend
    },
    {
        id: "MeanReversion",
        name: "Mean Reversion",
        description: "A strategy for dollar-cost averaging in and out a risk asset when its price diverges substantially from its long term trend.",
        goal: "Aims to accumulate the risk asset when its price is significantly undervalued, and progressively divest when it's significantly overvalued.",
        scope: "Works best when the market is forming a bottom or a top.",
        returns: "7.7x",
        timeframe: "From Jan 2019 to Jan 2023",
        link: "https://medium.com/@hashstrat/hashstrat-mean-reversion-strategy-b1a576b05d5f",
        image: dca
    },
    {
        id: "Rebalancing",
        name: "Rebalancing",
        description: "A self-balancing strategy targeting an allocation of 60% to risk asset and 40% USDC.",
        goal: "Allows to acquire more of the risk asset at lower prices and offload some risk at higher prices.",
        scope: "Works best during periods of significant market volatility, in either direction.",
        returns: "6.6x",
        timeframe: "From Jan 2019 to Jan 2023",
        link: "https://medium.com/@hashstrat/hashstrat-rebalancing-strategy-f0bb6cf3152f",
        image: rebalancing
    }
]