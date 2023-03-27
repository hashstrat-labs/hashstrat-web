


import { Typography, makeStyles, Divider, Link, Box } from "@material-ui/core"
import { Link as LinkRouter } from "react-router-dom"
import { InfoPanel } from "./InfoPanel"
import { InfoBox } from "./InfoBox"
import { HeadlineBox } from "./HeadlineBox"

import { Horizontal } from "../Layout"
import { FaqContent } from "../faq/FaqContent"
import { StrategyCarousel } from "./StrategyCarousel"

import { Button, ButtonSecondary } from "../shared/Button"

import key from "./img/keys.png"
import autonomy from "./img/autonomy.png"
import lock from "./img/lock.png"
import dao from "./img/governance.png"

import centralized from "./img/centralized.png"
import decentralized from "./img/decentralized.png"


import productPreview from "./img/product-preview.png"
import portfolio01 from "./img/portfolio01.png"
import portfolio02 from "./img/portfolio02.png"
import portfolio03 from "./img/portfolio03.png"


const useStyle = makeStyles(theme => ({

    topSection: {
        paddingTop: 20,
        paddingBottom: 20,

        display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: "calc(100vh - 60px)",

        margin: "auto",
        paddingLeft: 10,
        paddingRight: 10,

        [theme.breakpoints.down('xs')]: {
            minHeight: "calc(100vh - 20px)",
        },
    },

    titleSection: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        justifyItems: "center",
        gap: 10,

        paddingLeft: 50,
        paddingRight: 50,

        [theme.breakpoints.down('md')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr",
            paddingLeft: 10,
            paddingRight: 10,
        },
    },


    title: {
        margin: 0,
        fontFamily: "Manrope",
        fontWeight: 800,
        color:  theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.text.primary,
        
        [theme.breakpoints.down('xl')]: {
            fontSize: "4.8rem",
            maxWidth: 1300,
            marginRight: 200,
            marginBottom: 50,
        },

        [theme.breakpoints.down('lg')]: {
            fontSize: "3.5rem",
            marginRight: 30,
        },

        [theme.breakpoints.down('md')]: {
            fontSize: "3.0rem",
        },

        [theme.breakpoints.down('xs')]: {
            fontSize: "2.9rem",
            textAlign: 'center',
            marginRight: 0
        },
    },

    subtitle: {
        fontFamily: "Manrope",
        fontSize: "1.5rem",
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : '#ffaf49',
        paddingBottom: 20,

        [theme.breakpoints.down('xl')]: {
            fontSize: "1.8rem",
            fontWeight: 400,
        },
        [theme.breakpoints.down('lg')]: {
            paddingBottom: 10,
            fontSize: "1.3rem",
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0,
            fontSize: "1.3rem",
            textAlign: 'left'
        },
    },

    actionButtons: {
        display: 'flex',
        flexDirection: 'row',
        flexFlow: "row wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(2),
      
        paddingTop: 20, 
        marginBottom: 30,
        maxWidth: 500,

        [theme.breakpoints.down('sm')]: {
            marginTop: 40,
        },
    },


    infoSection: {

        paddingTop: 20,
        border: `10px solid #EBEBEB`,
        borderRadius: 20,
        boxShadow: "0 1px 27px 0 rgba(0,0,0,0.19)",

        backgroundColor: theme.palette.type === 'light' ? '#D7E9CB' : theme.palette.grey[900],
        paddingBottom: 0,

        [theme.breakpoints.down('xl')]: {
            maxWidth: 600,
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: 480,
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 400,
        },
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },

    imageContainer: {
        margin: "auto",
        paddingLeft: 40,
        paddingRight: 40,

        filter: theme.palette.type === 'light' ? "brightness(1)" : "grayscale(0.3)"
    },

    productImage: {
        content: `url( ${productPreview} )`,
        [theme.breakpoints.down('xl')]: {
            maxWidth: 480,
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: 350,
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 300,
        },
    },


    infoContainer: {
         gap: 0, 
         display: 'flex', 
         flexDirection: 'column', 
         justifyContent: 'center', 
         alignItems: 'center',
         width: "100%"
    },
   

    gridList: {
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        margin: 'auto',
    },

    problemsSection: {
        margin: "auto",
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 40,
        backgroundColor: theme.palette.type === 'light' ? '#FAFAFA' : '#140F0C',
    },

    problemsItems: {
        maxWidth: 1100,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: theme.spacing(0),
        paddingTop: 20,
        margin: "auto",
        justifyItems: "center",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },
    },

    solutionSection: {
        // backgroundImage: theme.palette.type === 'light' ? `url( ${background} )` : `url( ${backgroundDark} )` ,

        margin: "auto",
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 40,
    },

    solutionItems: {
        
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: theme.spacing(2),
        margin: "auto",
        justifyItems: "center",
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr 1fr",
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },

        color: theme.palette.type === 'light' ? theme.palette.grey[900] : theme.palette.grey[100],
    },

    buildPortfolioSection: {
        // backgroundImage: theme.palette.type === 'light' ? `url( ${background} )` : `url( ${backgroundDark} )` ,

        margin: "auto",
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 40,
    },


    strategiesSection: {
        // backgroundColor: theme.palette.type === 'light' ? '#FAFAFA' : '#140F0C',

        margin: "auto",
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 40,
    },


    valueSection: {
        // backgroundImage: theme.palette.type === 'light' ? `url( ${background} )` : `url( ${backgroundDark} )` ,

        margin: "auto",
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,

        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },

    faqSection: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: theme.spacing(0),
        // margin: "auto",

        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        // color: theme.palette.type === 'light' ? theme.palette.grey[900] : theme.palette.grey[100],

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr",
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
            paddingLeft: 10,
            paddingRight: 10,
        },
    },

    faqContent: {
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            margin: 0,
        },
    },

    valuesItems: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateAreas: `
            'a a b' 
            'c d d'
        `,
        
        gap: theme.spacing(2),
        paddingBottom: 0,
        maxWidth: 1024,
        margin: "auto",

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr 1fr",
            gridTemplateAreas: `
                'a a' 
                'b c'
                'd d'
            `,
        },

        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
            gridTemplateAreas: `
                'a' 
                'b'
                'c'
                'd'
            `,
        },
    },
    
    gridElemA: {
        gridArea: "a"
    },
    gridElemB: {
        gridArea: "b"
    },
    gridElemC: {
        gridArea: "c"
    },
    gridElemD: {
        gridArea: "d"
    }

}))




export const Home = () => {

    const classes = useStyle()

    return (
    
        <Box>

        <Divider style={{ marginTop: 0, marginBottom: 0 }} />

            <section className={classes.topSection}>
                <Box>
                    <div className={classes.titleSection} >
                        <Box>
                            <div>
                                <div className={classes.title}>
                                    Simplify your digital asset investments
                                </div>
                                <div className={classes.subtitle}>
                                    <ul>
                                        <li style={{ paddingBottom: 10 }}>
                                           The first <strong>DeFi</strong> protocol that <strong>automates</strong> the management of your <strong>digital assets</strong>. 
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            Proven <strong>on-chain strategies</strong> help you manage exposure and risk in your portfolio.
                                        </li>
                                        <li>
                                            <strong>Stay in control</strong> of your assets and watch your portfolio grow.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.actionButtons}>
                                    <Link component={LinkRouter} to="https://app.hashstrat.com" style={{ textDecoration: 'none' }} >
                                        <Button variant="contained" color="primary" >Launch App</Button>
                                    </Link>
                                    <Link href="./whitepaper.pdf" target="_blank" style={{ textDecoration: 'none' }} >
                                        <ButtonSecondary variant="outlined" color="primary"  >White paper</ButtonSecondary>
                                    </Link>
                            </div>
                        </Box>

                        <Box className={classes.infoSection}>
                            <Horizontal >
                                <div className={classes.imageContainer}>
                                    <img className={classes.productImage} alt="Info graphics"/>
                                </div>

                                <Box className={classes.infoContainer}>
                                    <ol>
                                        <li>
                                            <Typography variant="body2" >Build your digital asset portfolio</Typography> 
                                        </li>
                                        <li>
                                            <Typography variant="body2" >Earn DAO tokens</Typography> 
                                        </li>
                                        <li>
                                            <Typography variant="body2" >Participate in Governance</Typography> 
                                        </li>
                                        <li>
                                            <Typography variant="body2" >Collect protocol dividends</Typography> 
                                        </li>
                                    </ol>
                                </Box>

                            </Horizontal>

                        </Box>
                    </div>
                </Box>
            </section>

            <section className={classes.problemsSection}>
                <Divider style={{ marginTop: 0, marginBottom: 40 }} />

                <Box>
                    <Typography variant="body2" align="center" color="error" style={{textTransform: "uppercase", fontWeight: 600 }}>Current Landscape</Typography>
                </Box>

                <Box pb={2}>
                    <Typography variant="h3" align="center">CeFi & DeFi aren't working <br/> for long-term investors</Typography>
                </Box>

                <Box pb={2}>
                    <Typography variant="body1" align="center">
                        Trust issues and low returns don't justify the risks
                    </Typography>
                </Box>

                <Box className={classes.gridList}>
                    <Box style={{ width: 1330, maxHeight: 240, margin: "auto" }}>
                        <Horizontal  >
                            <HeadlineBox subject="FTX" paletteIndex={0}>
                                <Typography>
                                    <label style={{ color:'red' }}>$8 billion</label> hole in FTX's accounts. Where did the money go?
                                </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="DeFi Hacks" paletteIndex={1}>
                                    <Typography>
                                        DeFi protocols lost <label style={{ color:'red' }}>$4.75 billion</label> due to scams, hacks, and exploits.
                                    </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="Celsius" paletteIndex={2}>
                                <Typography>
                                    <label style={{ color:'red' }}>$4.2 billion</label> lost in Celsius. 600,000 customers defrauded of their deposits.
                                </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="Terra/Luna" paletteIndex={3}>
                                <Typography>
                                    <label style={{ color:'red' }}>98% price fall</label> in the space of 24 hours.
                                </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="BlockFi" paletteIndex={2}>
                                    <Typography>
                                        BlockFi owes between <label style={{ color:'red' }}>$1B</label> and <label style={{ color:'red' }}>10B</label> to more than 100K customers.
                                    </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="Three Arrows Capital" paletteIndex={4}>
                                <Typography>
                                    <label style={{ color:'red' }}> $10B </label>  hedge fund gone <label style={{ color:'red' }}>bust</label>.  Founders on the run.
                                </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="One coin" paletteIndex={3}>
                                <Typography>
                                    One coin defrauded investors of <label style={{ color:'red' }}>$5 billion</label> in cryptocurrencies and cash.
                                </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="Plus token" paletteIndex={1}>
                                <Typography>
                                   <label style={{ color:'red' }}>$4.2 billion </label> seized from a Chinese Ponzi scheme dubbed “plus token”
                                </Typography>
                            </HeadlineBox>

                        </Horizontal>
                    </Box>
                </Box>

                <Box className={classes.problemsItems} >
{/* 
                    <InfoPanel 
                        subject="Do-it-your-self Investing"
                        title="“Not your keys, not your coins”" 
                        image={centralized} 
                        layout="layout1"
                        url="https://medium.com/@hashstrat/why-hashstrat-bb850155e5cb"
                    >
                        <Box mt={3}>
                            <Typography align="left" variant="body2" >Incompetence and mismanagement, including:</Typography>
                        </Box>
                        <ul>
                            <li>Rehypothecation of investors' funds.</li>
                            <li>Appalling risk management.</li>
                            <li>Lack of integrity and fraud.</li>
                        </ul>
             
                    </InfoPanel> */}


                    <InfoPanel 
                        subject="Centralized Finance"
                        title="“Not your keys, not your coins”" 
                        image={centralized} 
                        layout="layout1"
                        url="https://medium.com/@hashstrat/why-hashstrat-bb850155e5cb"
                    >
                        <Box mt={3}>
                            <Typography align="left" variant="body2" >Incompetence and mismanagement, including:</Typography>
                        </Box>
                        <ul>
                            <li>Rehypothecation of investors' funds.</li>
                            <li>Appalling risk management.</li>
                            <li>Lack of integrity and fraud.</li>
                        </ul>
             
                    </InfoPanel>

                    <InfoPanel 
                        subject="Decentralized Finance"
                        title="“It's not much, but it's honest work”" 
                        image={decentralized} 
                        layout="layout1"
                        url="https://medium.com/@hashstrat/why-hashstrat-bb850155e5cb"
                    >

                        <Box mt={3}>
                            <Typography align="left" variant="body2" >A choice between low APY and rug pulls    :</Typography>
                        </Box>
                        <ul style={{maxWidth: 470}}>
                            <li>Legit protocols can only offer low APY, not worth the risks.</li>
                            <li>Scams entice you with impossible gains, but
                            “when you don't know where the API comes from, you are the APY”.
                             </li>
                        </ul>
                    </InfoPanel>
                </Box>

                <Box pt={3}>
                    <Typography align="center" variant="h6">
                        But what if you had the tools to grow your wealth, for real, while staying in control?
                    </Typography>
                </Box>

            </section>

            <section className={classes.solutionSection}>
                <Divider style={{ marginTop: 0, marginBottom: 40 }} />

                <Box pb={2}>
                    <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                       What we offer
                    </Typography>
                    <Typography variant="h3" align="center">
                        Your crypto portfolio, automated
                    </Typography>
                    <Box mt={1}>
                    <Typography variant="body1" align="center">
                        HashStrat, the first 100% trustless protocol that simplifies the management of your crypto portfolio. 
                    </Typography>
                    </Box>
                </Box>


                <Box className={classes.solutionItems} >
                    <InfoBox emoji="❤️" title="Hold only the best assets" layout="layout2" paletteIndex={0}>
                        <ul>
                            <li>Your APY comes from the appreciation of the best assets over the crypto market cycles.</li>
                            <li>No need to over-diversify. BTC and ETH are the 'index' over the whole crypto and web3 markets.</li>
                            <li>Stay in control. Always.</li>
                        </ul>
                    </InfoBox>

                    <InfoBox emoji="🤖" title="Automate your portfolio management"  layout="layout2" paletteIndex={1}>
                        <ul>
                            <li>Build a balanced portfolio of your favourite assets.</li>
                            <li>Automate your buys and sells to ensure appropriate exposure and risk management.</li>
                            <li>Don't be the guy buying the top and selling the bottom. </li>
                        </ul>
                    </InfoBox>

                    <InfoBox emoji="😌" title="Find peace of mind" layout="layout2" paletteIndex={2}>
                        <ul>
                            <li>Avoid the stress of the extreme sentiment and volatility in the crypto markets. </li>
                            <li>Let your portfolio management strategies do the hard work.</li>
                            <li>Stay humble. Stay safe.</li>
                        </ul>
                    </InfoBox>
                </Box>

            </section>


            <section className={classes.buildPortfolioSection}>
                <Divider style={{ marginTop: 0, marginBottom: 40 }} />

                <Box pb={2}>
                    <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                       What we offer
                    </Typography>
                    <Typography variant="h3" align="center">Build your portfolio in 3 easy steps</Typography>
                </Box>

                <Box pb={2}>
                    <Typography variant="body1" align="center">
                        Choose your favourite assets and portfolio management strategies. Deposit. HashStrat will take care of the rest.
                    </Typography>
                  
                </Box>

                <Box className={classes.solutionItems} >
                    <InfoBox title="Choose your favourite assets" layout="layout3" image={portfolio01} paletteIndex={2}>
                    </InfoBox>

                    <InfoBox title="Pick your portfolio management strategies" layout="layout3" image={portfolio02} paletteIndex={0}>
                    </InfoBox>

                    <InfoBox title="Deposit and access your portfolio" layout="layout3" image={portfolio03} paletteIndex={1}>
                    </InfoBox>
                </Box>
            </section>


            <section className={classes.strategiesSection}>
                <Divider style={{ marginTop: 0, marginBottom: 40 }} />

                <Box pb={2}>
                    <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                       How we do it
                    </Typography>
                    <Typography variant="h3" align="center">Our Strategies</Typography>
                </Box>

                <Box pb={2}>
                    <Typography variant="body1" align="center">
                       Designed to generate returns and manage risk in your portfolio.
                    </Typography>
                </Box>

                <StrategyCarousel />
            </section>

            <section className={classes.valueSection}>

                <Box pb={2}>
                    <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                       What we believe in
                    </Typography>
                    <Typography variant="h3" align="center">Our Values</Typography>
                </Box>

                <Box pb={2}>
                    <Typography variant="body1" align="center">
                        A protocol that is truly open, trustless and transparent. <br/>
                        The way DeFi is meant to be.
                    </Typography>
                </Box>

                <Box className={classes.valuesItems} >
                    <Box className={classes.gridElemA}>
                        <InfoBox title="Security" image={lock} layout="layout1"  paletteIndex={0} >
                            <Typography variant="body2">
                                All code is open source and smart contracts are verified on-chain.
                                This means their behaviour is predictable and transparent.
                                HashStrat smart contracts are immutable. Nobody can stop them or change their behaviour.
                            </Typography>
                        </InfoBox>
                    </Box>

                    <Box className={classes.gridElemB}>
                        <InfoBox title="Self-sovereignty" image={key} layout="layout2" paletteIndex={2} >
                            <Typography variant="body2">
                                Users interact directly with the blockchain through their digital wallets and stay in control of their funds. 
                                No personal information is ever shared or leaked.
                            </Typography>
                        </InfoBox>
                    </Box>

                    <Box className={classes.gridElemC}>
                        <InfoBox title="Open Governance" image={dao} layout="layout2"  paletteIndex={1}>
                            <Typography variant="body2">
                                All users can claim their share of HST tokens, and become members of the HashStrat DAO.
                                HST has a fixed supply, fair distribution and allows to participate in protocol governance and revenue sharing.
                            </Typography>
                        </InfoBox>
                    </Box>

                    <Box className={classes.gridElemD}>
                        <InfoBox title="Autonomy" image={autonomy} layout="layout1"  paletteIndex={3} >
                            <Typography variant="body2">
                                HashStrat uses <Link href="https://docs.chain.link/docs/chainlink-automation/introduction/" target="_blank">Chainlink Automation</Link> to automate
                                the execution of all on-chain strategies.
                                This means you can trust the blockchain, and a decentralised network of independent nodes, to keep managing your investments.
                            </Typography>
                        </InfoBox>
                    </Box>

                </Box>

                <Divider style={{ marginTop: 40, marginBottom: 0 }} />

            </section>


     
            <section className={classes.faqSection}  > 
                <Box>
                    <Box pb={0}>
                        <Typography variant="body2" color="primary" style={{textTransform: "uppercase", fontWeight: 600 }}>
                            Know More
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2"> Frequently Asked Questions </Typography>
                    </Box>
                </Box>
                
                <Box className={classes.faqContent}>
                    <FaqContent />
                </Box>
            </section>
        </Box>

    )
}