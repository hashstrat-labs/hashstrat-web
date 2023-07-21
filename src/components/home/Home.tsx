


import { Typography, makeStyles, Divider, Link, Box } from "@material-ui/core"
import { InfoPanel } from "./InfoPanel"
import { InfoBox } from "./InfoBox"
import { ProductPreview } from "./ProductPreview"
import { PortfolioStep } from "./PortfolioStep"
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
import diyInvesting from "./img/diy-investing.png"


import productPreview from "./img/product-preview.jpg"
import productPreviewSmall from "./img/product-preview-mobile.jpg"

import portfolio01 from "./img/portfolio_01.png"
import portfolio02 from "./img/portfolio_02.png"
import portfolio03 from "./img/portfolio_03.png"

import product01 from "./img/product_01.png"
import product02 from "./img/product_02.png"
import product03 from "./img/product_03.png"


const useStyle = makeStyles(theme => ({

    sectionWrapper: {
        margin: "auto",
        maxWidth: 1600,
    },

    topSection: {
        paddingTop: 20,
        paddingBottom: 20,

        display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: "calc(100vh - 60px)",

        [theme.breakpoints.down('xs')]: {
            minHeight: "calc(100vh - 20px)",
        },
    },

    titleSection: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        justifyItems: "center",
        gap: 0,

        paddingLeft: 60,
        paddingRight: 60,

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr",
            paddingLeft: 20,
            paddingRight: 20,
        },

        [theme.breakpoints.down('xs')]: {
            // gridTemplateColumns: "1fr",
            paddingLeft: 10,
            paddingRight: 10,
        },
    },


    title: {
     
        maxWidth: 1300,
  
        fontFamily: "Manrope",
        fontSize: "4.8rem",
        fontWeight: 600,
        color: theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.text.primary,
        
        background: theme.palette.type === 'light' ?  "-webkit-linear-gradient(66deg, #095703, #AE3FAE 80%)" : "-webkit-linear-gradient(66deg, #76D90B, #F467F4 80%)",
        '-webkit-background-clip': "text",
        '-webkit-text-fill-color': "transparent",

        margin: 0,
        marginBottom: 50,

        [theme.breakpoints.down('lg')]: {
            fontSize: "3.5rem",
            marginRight: 30,
        },

        [theme.breakpoints.down('md')]: {
            fontSize: "3.0rem",
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: "2.7rem",
            textAlign: 'center',
            marginRight: 0,
            paddingLeft: 5,
            paddingRight: 5,
        },
    },

    subtitle: {
        fontFamily: "Manrope",
        fontSize: "1.3rem",
        color: theme.palette.text.primary,
        paddingBottom: 20,
        fontWeight: 400,

        [theme.breakpoints.down('lg')]: {
            paddingBottom: 10,
            fontSize: "1.1rem",
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 580,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0,
            textAlign: 'left',
        },
    },

    actionButtons: {
        display: 'flex',
        flexDirection: 'row',
        flexFlow: "row wrap",
        gap: theme.spacing(2),
      
        paddingTop: 40, 
        marginBottom: 30,
        maxWidth: 500,

        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 80,
            margin: "auto",
            justifyContent: "center",
        },
    },


    infoSection: {
        marginTop: 0,
        marginLeft: 50,
        paddingTop: 0,
        paddingBottom: 0,
  
        border: theme.palette.type === 'light' ? `14px solid #fff`: `14px solid #ddd`,
        borderRadius: 20,

        boxShadow: "0 1px 27px 0 rgba(0,0,0,0.19)",
   
        maxWidth: 600,
        maxHeight: 490,

        [theme.breakpoints.down('lg')]: {
            maxHeight: 490
        },
        [theme.breakpoints.down('md')]: {
            maxHeight: 440,
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginBottom: 40,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: 300,
        },
    },

    imageContainer: {
        overflow: "hidden",
        filter: theme.palette.type === 'light' ? "brightness(1.0)" : "invert(0.9)",
        borderRadius: 10,
        maxHeight: 480,
       
        [theme.breakpoints.down('lg')]: {
            maxHeight: 480,
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 360,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%",
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: "100%",
        },
    },

    productImage: {
        content: `url( ${productPreview} )`,
        // maxWidth: 900,
        // maxHeight: 716,
       
        maxHeight: 470,
        
        [theme.breakpoints.down('lg')]: {
            maxHeight: 462,
        },
        [theme.breakpoints.down('md')]: {
            maxHeight: 420
        },
        [theme.breakpoints.down('sm')]: {
        },

        [theme.breakpoints.down('xs')]: {
            content: `url( ${productPreviewSmall} )`,
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

        paddingTop: 40,
        margin: "auto",
        paddingLeft: 60,
        paddingRight: 60,

        paddingBottom: 40,
        backgroundColor: theme.palette.type === 'light' ? '#FAFAFA' : '#111',

        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 10,
            paddingRight: 10,
        },
    },

    problemsItems: {
        maxWidth: 1600,
        margin: "auto",
  
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 30,

        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridColumnGap: 10,
        gridRowGap: 10,
        justifyItems: 'center',

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr 1fr",
            gridColumnGap: 0,
            paddingLeft: 0,
            paddingRight: 0,
        },

        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
            paddingLeft: 0,
            paddingRight: 0,
        },
    },

    solutionSection: {
        margin: "auto",
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0,

        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },

        [theme.breakpoints.down('xs')]: {
            paddingLeft: 10,
            paddingRight: 10,
        },
    },

    
    buildPortfolioSection: {
        margin: "auto",
        paddingLeft: 60,
        paddingRight: 60,

        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 10,
            paddingRight: 10,
        },
    },

    buildPortfolioItems: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: 20,
        rowGap: 0,
        justifyItems: "space-between",
        justifyContent: "space-between",

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr 1fr",

        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
            columnGap: 0,
            rowGap: 20,
        },
    },

    strategiesSection: {
        backgroundColor: theme.palette.type === 'light' ? '#FAFAFA' : '#111',
        marginTop: 0,
        paddingTop: 40,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 60,
        borderRadius: 20,

        
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 10,
            paddingRight: 10,
        },
    },

    strategiesWrapper: {
        maxWidth: 1500, 
        margin: "auto",
    },

    valuesSection: {
        paddingLeft: 60,
        paddingRight: 60,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
            paddingRight: 0,
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
            margin: 10,
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
        gridArea: "a",
    },
    gridElemB: {
        gridArea: "b",
    },
    gridElemC: {
        gridArea: "c"
    },
    gridElemD: {
        gridArea: "d"
    },


    faqSection: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: theme.spacing(0),

        marginTop: 0,
        paddingTop: 0,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 20,

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
            paddingLeft: 10,
            paddingRight: 10,
        },
    },

}))




export const Home = () => {

    const classes = useStyle()

    return (
    
        <Box>

        <Divider style={{ marginTop: 0, marginBottom: 0 }} />

            <section className={classes.sectionWrapper}>
                <Box className={classes.topSection} >
                    <div className={classes.titleSection} >
                        <Box>
                            <div>
                                <div className={classes.title}>
                                    Simplify your DeFi investments
                                </div>
                                <div className={classes.subtitle}>
                                    <ul>
                                        <li style={{ paddingBottom: 10 }}>
                                           The first <strong>DeFi</strong> protocol that <strong>automates</strong> the management of your <strong>digital assets</strong>. 
                                        </li>
                                        <li style={{ paddingBottom: 10 }}>
                                            Proven <strong>on-chain strategies</strong> help you <strong>manage exposure and risk</strong> in your portfolio.
                                        </li>
                                        <li>
                                            <strong>Stay in control</strong> of your assets and watch your portfolio grow.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.actionButtons}>
                                    <Link href="https://app.hashstrat.com" style={{ textDecoration: 'none' }} >
                                        <Button variant="contained" color="primary" >Start Investing</Button>
                                    </Link>
                                    <Link href="./whitepaper.pdf" target="_blank" style={{ textDecoration: 'none' }} >
                                        <ButtonSecondary style={{ minWidth: 210 }} variant="outlined" color="primary"  >White paper</ButtonSecondary>
                                    </Link>
                            </div>
                        </Box>

                        <Box className={classes.infoSection}>
                            <div className={classes.imageContainer}>
                                <img className={classes.productImage} alt="Info graphics"/>
                            </div>
                        </Box>
                    </div>
                </Box>
            </section>

            <Divider style={{ marginTop: 0, marginBottom: 0 }} />

            <section className={classes.problemsSection}>

                <Box>
                    <Typography variant="body2" align="center" color="error" style={{textTransform: "uppercase", fontWeight: 600 }}>The Problem</Typography>
                </Box>

                <Box pb={3}>
                    <Typography variant="h3" align="center"> Too many people lose <br/> money in crypto.</Typography>
                </Box>

                <Box pb={6}>
                    <Typography variant="body1" align="center">
                        DIY investing, CeFi, DeFi are full of pitfalls for new and seasoned investors.
                    </Typography>
                </Box>

                <Box className={classes.gridList}>
                    <Box style={{ width: 1730, maxHeight: 240, margin: "auto" }}>
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

                            <HeadlineBox subject="Three Arrows Capital" paletteIndex={3}>
                                <Typography>
                                    <label style={{ color:'red' }}> $10B </label> hedge fund gone <label style={{ color:'red' }}>bust</label>.  Founders on the run.
                                </Typography>
                            </HeadlineBox>


                            <HeadlineBox subject="BlockFi" paletteIndex={2}>
                                    <Typography>
                                        BlockFi owes between <label style={{ color:'red' }}>$1B</label> and <label style={{ color:'red' }}>10B</label> to more than 100K customers.
                                    </Typography>
                            </HeadlineBox>

                            
                            <HeadlineBox subject="REKT investors " paletteIndex={4}>
                                    <Typography>
                                        From <label style={{ color:'red' }}>73%</label> to <label style={{ color:'red' }}>81%</label> of new crypto investors lost money, research shows.
                                    </Typography>
                            </HeadlineBox>


                            <HeadlineBox subject="Crypto crash" paletteIndex={1}>
                                    <Typography>
                                    The cryptocurrency market is down over <label style={{ color:'red' }}>$2 trillion</label> in 2022. Bitcoin lost <label style={{ color:'red' }}> 63% </label>
                                    </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="One coin" paletteIndex={4}>
                                <Typography>
                                    One coin defrauded investors of <label style={{ color:'red' }}>$5 billion</label> in cryptocurrencies and cash.
                                </Typography>
                            </HeadlineBox>

                            <HeadlineBox subject="Plus token" paletteIndex={2}>
                                <Typography>
                                   <label style={{ color:'red' }}>$4.2 billion </label> seized from a Chinese Ponzi scheme dubbed “plus token”
                                </Typography>
                            </HeadlineBox>

                        </Horizontal>
                    </Box>
                </Box>

                <Box className={classes.problemsItems} >
                   
                     <InfoPanel 
                        subject="Do-it-yourself investing"
                        title="“FOMO in and get REKT”" 
                        image={diyInvesting} 
                        url="https://medium.com/@hashstrat/why-hashstrat-bb850155e5cb"
                    >
                        <Box mt={3}>
                            <Typography align="left" variant="body1" >
                                Too many new investors come with the expectation of quick gains, YOLO in at the wrong time and panic-sell due to the market extreme volatility.
                            </Typography>
                        </Box>
                    </InfoPanel>

                    <InfoPanel 
                        subject="Centralized Finance"
                        title="“Not your keys, not your coins”" 
                        image={centralized} 
                        url="https://medium.com/@hashstrat/why-hashstrat-bb850155e5cb"
                    >
                        <Box mt={3}>
                            <Typography align="left" variant="body1" >
                                Centralized platforms often pay back users' trust with incompetence, mismanagement, rehypothecation of investors' funds, lack of integrity and fraud.
                            </Typography>
                        </Box>
                    </InfoPanel>

                    <InfoPanel 
                        subject="Decentralized Finance"
                        title="“It's not much, but it's honest work”" 
                        image={decentralized} 
                        url="https://medium.com/@hashstrat/why-hashstrat-bb850155e5cb"
                    >

                        <Box mt={3}>
                            <Typography align="left" variant="body1" >
                                Legit protocols can only offer low single digit returns.
                                Scams entice you with impossible gains, but “when you don't know where the API comes from, you are the APY”.
                            </Typography>
                        </Box>
                    </InfoPanel>

                </Box>

                <Box pt={4}>
                    <Typography align="center" variant="h6">
                        But what if you had the tools to grow your wealth, for real, while staying in control?
                    </Typography>
                </Box>

            </section>

            <Divider style={{ marginTop: 0, marginBottom: 40 }} />
            
            <section className={classes.sectionWrapper}>
                <Box className={classes.solutionSection}>
                    <Box pb={3}>
                        <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                        Let's fix it
                        </Typography>
                        <Typography variant="h3" align="center">
                            HashStrat, your crypto portfolio, automated.
                        </Typography>
                        <Box mt={2}>
                            <Typography variant="body1" align="center">
                                The first DeFi protocol that simplifies <br/> the management of your crypto investments. 
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <ProductPreview emoji="❤️" title="Hold only the best assets" layout="layout1" image={product01}>
                            <Box pb={2}>
                                <span style={{ fontSize: 24, fontWeight: 400 }}>Your gains come from the appreciation of the best crypto assets. Not yield farming, lending or shitcoin trading. </span>
                            </Box>
                            <Box py={2}>
                                <span style={{ fontSize: 20 }}>BTC and ETH are the “index” over the whole crypto and web3 markets. USDC dampens volatility in your portfolio.</span>
                            </Box>
                            <Box py={2}>
                                <span style={{ fontSize: 20 }}>Stay in control. Always.</span>
                            </Box>
                        </ProductPreview>

                        <ProductPreview emoji="🤖" title="Automate your portfolio management"  layout="layout2" image={product02}>
                            <Box pb={2}>
                                <span style={{ fontSize: 24, fontWeight: 400 }}>Diversify your portfolio management strategies for different market conditions.</span>
                            </Box>
                            <Box py={2}>
                                <span style={{ fontSize: 20 }}>Automate your buys and sells to ensure appropriate exposure and risk management in your portfolio.</span>
                            </Box>
                            <Box py={2}>
                                <span style={{ fontSize: 20 }}>Don't be the guy buying the top and selling the bottom.</span>
                            </Box>
                        </ProductPreview>

                        <ProductPreview emoji="😌" title="Find peace of mind" layout="layout1" image={product03}>
                            <Box pb={2}>
                                <span style={{ fontSize: 24, fontWeight: 400 }}>Avoid the stress of the extreme sentiment and volatility in the crypto markets.</span>
                            </Box>
                            <Box py={2}>
                                <span style={{ fontSize: 20 }}>Let your portfolio management strategies do the hard work and keep your investments in check.</span>
                            </Box>
                            <Box py={2}>
                                <span style={{ fontSize: 20 }}>Stay humble. Stay safe.</span>
                            </Box>
                        </ProductPreview>
                    </Box>
                </Box>
            </section>

            <Divider style={{ marginTop: 0, marginBottom: 40 }} />

            <section className={classes.sectionWrapper}>
                <Box className={classes.buildPortfolioSection}>
                    <Box pb={2}>
                        <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                        What we offer
                        </Typography>
                        <Typography variant="h3" align="center">Build your portfolio in 3 easy steps</Typography>
                    </Box>

                    <Box pb={4}>
                        <Typography variant="body1" align="center">
                            Choose your favourite assets and portfolio management strategies. <br/>
                            Deposit. HashStrat will take care of the rest.
                        </Typography>
                    
                    </Box>

                    <Box className={classes.buildPortfolioItems} >
                        <PortfolioStep step={1} title="Choose your favourite assets" image={portfolio01} />
                        <PortfolioStep step={2} title="Pick your portfolio management strategies" image={portfolio02} />
                        <PortfolioStep step={3} title="Deposit and access your portfolio" image={portfolio03} />
                    </Box>
                </Box>
            </section>

            <Divider style={{ marginTop: 60, marginBottom: 0 }} />

            <section className={classes.strategiesSection}>
                <Box className={classes.strategiesWrapper}>
                    <Box pb={2}>
                        <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                        How we do it
                        </Typography>
                        <Typography variant="h3" align="center">Our Strategies</Typography>
                    </Box>

                    <Box pb={4}>
                        <Typography variant="body1" align="center">
                        Designed to generate returns and manage risk in your portfolio.
                        </Typography>
                    </Box>

                    <StrategyCarousel />
                </Box>
            </section>

            <Divider style={{ marginTop: 0, marginBottom: 40 }} />

            <section className={classes.sectionWrapper}>
                <Box className={classes.valuesSection}>
                    <Box pb={2}>
                        <Typography variant="body2" color="primary" align="center" style={{textTransform: "uppercase", fontWeight: 600 }}>
                        What we believe in
                        </Typography>
                        <Typography variant="h3" align="center">Our Values</Typography>
                    </Box>

                    <Box pb={4}>
                        <Typography variant="body1" align="center">
                            A protocol that is truly secure, open, trustless and transparent.<br/>
                            The way DeFi is meant to be.
                        </Typography>
                    </Box>

                    <Box className={classes.valuesItems} >
                        <Box className={classes.gridElemA}>
                            <InfoBox title="Security" image={lock} layout="layout1"  paletteIndex={0} >
                                <Typography variant="body1">
                                    All code is open source and smart contracts are verified on-chain.
                                    This means their behaviour is predictable and transparent.
                                    HashStrat smart contracts are immutable. Nobody can stop them or change their behaviour.
                                </Typography>
                            </InfoBox>
                        </Box>

                        <Box className={classes.gridElemB}>
                            <InfoBox title="Self-sovereignty" image={key} layout="layout2" paletteIndex={2} >
                                <Typography variant="body1">
                                    Users interact directly with the blockchain through their digital wallets and stay in control of their funds. 
                                    No personal information is ever shared or leaked.
                                </Typography>
                            </InfoBox>
                        </Box>

                        <Box className={classes.gridElemC}>
                            <InfoBox title="Open Governance" image={dao} layout="layout2"  paletteIndex={1}>
                                <Typography variant="body1">
                                    All users can claim their share of HST tokens, and become members of the HashStrat DAO.
                                    HST has a fixed supply, fair distribution and allows to participate in protocol governance and revenue sharing.
                                </Typography>
                            </InfoBox>
                        </Box>

                        <Box className={classes.gridElemD}>
                            <InfoBox title="Autonomy" image={autonomy} layout="layout1"  paletteIndex={3} >
                                <Typography variant="body1">
                                    HashStrat uses <Link href="https://docs.chain.link/docs/chainlink-automation/introduction/" target="_blank">Chainlink Automation</Link> to automate
                                    the execution of all on-chain strategies.
                                    This means you can trust the blockchain, and a decentralised network of independent nodes, to keep managing your investments.
                                </Typography>
                            </InfoBox>
                        </Box>
                    </Box>
                </Box>
            </section>

            <Divider style={{ marginTop: 60, marginBottom: 40 }} />

            <section className={classes.sectionWrapper}  > 
                <Box className={classes.faqSection}>
                    <Box >
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
                </Box>
            </section>
        </Box>

    )
}