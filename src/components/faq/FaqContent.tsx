



import { makeStyles,  Link, Box, Accordion, AccordionDetails, AccordionSummary, Typography } from  "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"
import { Link as RouterLink } from "react-router-dom"


const useStyles = makeStyles( theme => ({
    container: {
        fontSize: 18,

        [theme.breakpoints.down('sm')]: {
            padding: 0,
            margin: 0,
        },
    },

    title: {
        fontSize: 24, 
        fontWeight: 400,

        [theme.breakpoints.down('sm')]: {
            fontSize: 22,
            fontWeight: 400,
        },
    }, 

    accordion: {
        backgroundColor: 'rgba(1,1,1,0)', 
        borderBottom: `1px solid ${ theme.palette.type === 'light' ? 'rgba(0.6,0.6,0.6,0)': 'rgba(0.8,0.8,0.8,0)'} `, 
        boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
        margin: 0,
        padding: 0

    },


}))


export const FaqContent = () => {

    const classes = useStyles()
    
    return (
        <Box className={classes.container}>

            <Accordion defaultExpanded className={classes.accordion}>

                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > What is HashStrat?  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul style={{  paddingLeft: 20, marginTop: 0 }} >
                        <li style={{ marginBottom: 10 }} >
                            HashStrat is a new DeFi protocol that helps investors in digital assets achieve financial success.
                        </li >
                        <li style={{ marginBottom: 10 }} >
                            The protocol offers various strategies for managing your crypto portfolio, such as Trend Following, Rebalancing, Mean Reversion, or a combination of these. 
                        </li>
                        <li style={{ marginBottom: 10 }} >
                            You select which assets you want to hold (e.g. BTC &amp; ETH), and your preferred portfolio management strategies, and the protocol will handle the rest. 
                        </li>
                        <li style={{ marginBottom: 10 }} >
                            Your chosen strategies determine your initial portfolio allocation and automate risk management.
                        </li>
                        <li style={{ marginBottom: 10 }} >
                            They decide when it's time to buy more of your chosen assets and when to sell into USDC to offload some risk.
                        </li>
                        <li style={{ marginBottom: 10 }} >
                            HashStrat is a fully trustless and self-custodial, which means you stay in control of your assets at all times.
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > Why use HashStrat?</Typography>
                </AccordionSummary>
                <AccordionDetails  >
                    <Box>
                        HashStrat can help you to be a more successful, long-term investor:
                        <ul style={{ paddingLeft: 20}} >
                            <li style={{ marginBottom: 10 }} >Automated portfolio management prevents FOMO-buying and panic-selling your investments at the wrong time. </li>
                            <li style={{ marginBottom: 10 }} >HashStrat strategies, with their built-in risk management, help to lock-in gains when price &amp; sentiment is high and scaling in your investments when price &amp; sentiment is low.</li>
                            <li style={{ marginBottom: 10 }} >Our strategies can dramatically reduce volatility &amp; drawdowns of your portfolio, whilst aiming for returns competitive with a simple holding strategy.</li>
                            <li style={{ marginBottom: 10 }} >HashStrat will make it easier for you to stay invested for longer and reap greater rewards over time.</li>
                        </ul>

                        Being an honest DeFi protocol, HashStrat offers the benefits of real DeFi:
                        <ul style={{  paddingLeft: 20 }} >
                            <li style={{ marginBottom: 10 }} > You stay in control of your funds at all times. </li>
                            <li style={{ marginBottom: 10 }} > No minimum investment requirements and other arbitrary constraints, no barriers to entry or to exit.</li>
                            <li style={{ marginBottom: 10 }} > Behaviour of trading strategies is deterministic and transparent.</li>
                            <li style={{ marginBottom: 10 }} > Asset allocation and individual trades are auditable by anybody on the blockchain.</li>
                            <li style={{ marginBottom: 10 }} > Correctness of execution is guaranteed by the blockchain.</li>
                            <li style={{ marginBottom: 10 }} > All code is open source and smart contracts are verified on-chain.</li>
                            <li style={{ marginBottom: 10 }} > No need to share any personal information. </li>
                            <li style={{ marginBottom: 10 }} >Seamless access to on-chain liquidity.</li>
                        </ul>
                    </Box>
                </AccordionDetails>
            </Accordion>


            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > What are HashStrat Strategies exactly? </Typography>
                </AccordionSummary>
                <AccordionDetails >
                        <ul style={{ paddingLeft: 20, marginTop: 0 }} >
                            <li style={{ marginBottom: 10 }} > Strategies are set of rules, encoded into smart contracts, designed to manage the assets held in your digital asset portfolio.</li>
                            <li style={{ marginBottom: 10 }} > Strategies decide when to allocate capital to risk assets (e.g. BTC, ETH) and when to trade back into a stable asset (USDC).</li>
                            <li style={{ marginBottom: 10 }} > Their goal is to grow the value of your digital asset portfolio over time, while managing risk. </li>
                            <li style={{ marginBottom: 10 }} > HashStrat strategies are desigend to work best over the long term, capturing the appreciation of pristine crypto assets, like BTC and ETH, over the crypto market cycles. </li>
                        </ul>
                </AccordionDetails>
            </Accordion>


            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > Who is it for? </Typography>
                </AccordionSummary>
                <AccordionDetails >
                        <ul style={{  paddingLeft: 20, marginTop: 0 }} >
                            <li style={{ marginBottom: 10 }} > <strong>Individual investors</strong> who want to automate the management of their crypto-portfolios, improve returns and reduce volatility, whilst retaining control over their digital assets.</li>
                            <li style={{ marginBottom: 10 }} > <strong>DAO treasury managers</strong> who want to protect the value of their stablecoin holdings from FIAT currency debasement by getting some exposure to pristine crypto assets in a 100% trustless and verifiable way.</li>
                            <li style={{ marginBottom: 10 }} > <strong>DeFi protocols</strong> who want to safely invest some of their liquidity on-chain with full security and transparency.</li>
                        </ul>
                </AccordionDetails>
            </Accordion>


            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > How do you use HashStrat? </Typography>
                </AccordionSummary>
               
                <AccordionDetails >
                    <Box>
                        Using HashStat is as simple as:
                        <ol >
                            <li>
                                Select the assets you want to hold.
                            </li>
                            <li>
                                Select the automated strategies that will manage your assets.
                            </li>
                            <li>
                                Deposit USDC into the protocol smart contracts.
                            </li>
                            <li>
                                Sit back while HashStrat manages your digital asset portfolio for you.
                            </li>
                        </ol>

                        HashStrat is a web3 application running over the Polygon Network. To intereact with the HashStrat smart contracts you need:
                        <ol>
                            <li>A web3 enabled browser. Good options are <Link href="https://metamask.io" target="_blank">MetaMask</Link>  or  <Link href="https://www.coinbase.com/wallet" target="_blank">Coinbase wallet</Link>  
                            </li>
                            <li>A little amount of <Link href="https://coinmarketcap.com/currencies/polygon/" target="_blank">MATIC (Polygon)</Link> tokens to pay for transaction fees on the Polygon Network.</li>
                        </ol>
                    </Box>      
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > What is the HashStrat DAO?</Typography>
                </AccordionSummary>
                <AccordionDetails >
                        <ul style={{ paddingLeft: 20, marginTop: 0 }} >
                            <li style={{ marginBottom: 10 }} >The HashStrat protocol is governed by a Decentralized Autonomous Organization, the HashStrat DAO.</li>
                            <li style={{ marginBottom: 10 }} >Users of the protocol can earn the DAO token <Link component={RouterLink} to="/dao">HST</Link> and become members of the DAO.</li>
                            <li style={{ marginBottom: 10 }} > HST holders are able to participate in the protocol governance and revenue sharing programs.</li>
                        </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > What's the DAO business model?</Typography>
                </AccordionSummary>
                <AccordionDetails >
                        <ul style={{  paddingLeft: 20, marginTop: 0 }} >
                            <li style={{ marginBottom: 10 }} > The protocol generates its revenues by taxing profits withdrawn from Pools &amp; Indexes. </li>
                            <li style={{ marginBottom: 10 }} > The withdrawal fee is currently set to 1% of profits. </li>
                            <li style={{ marginBottom: 10 }} > These fees are periodically collected into the DAO Treasury and re-distributed to DAO token holders as "dividends" </li>
                        </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore color="primary" />} aria-controls="panel1bh-content" >
                    <Typography className={classes.title} > This is cool but what are the risks?</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Box>
                        Decentralized Finance is a nascent industry and it's important to be aware of its risks.<br/>
                        These are the main risks that is worth considering when using a DeFi protocol like HashStrat: 
                        <ul style={{  paddingLeft: 20 }} >
                            <li style={{ marginBottom: 10 }} >
                                Protocol risks: <br/>
                                Although great care is put into following programing best practices, 
                                HashStrat smart contracts could contain bugs and be subject to exploits. 
                                Be aware that in several situations DeFi protocols have been exploited and users lost access to their funds.
                            </li>
                            <li style={{ marginBottom: 10 }} >
                                Digital Asset risks: <br/>
                                HashStat strategies trade a small number of top digital assets on the Polygon Network: USDC, WETH, WBTC.
                                In case of catastrophic events on the Polygon Network and Polygon Bridge, these assets could, in theory, loose value against 
                                their pegged tokens (BTC on the Bitcoin network, ETH and USDC on the Ethereum network).
                            </li>
                            <li style={{ marginBottom: 10 }} >
                                Smart contract integration risks: <br/>
                                In order to enable strategy trading, HashStat integrates a limited number of high-profile thirt-party protocols: <Link href="https://chain.link/" target="_blank"> Chainlink </Link> data-feeds, <Link href="https://quickswap.exchange/" target="_blank">QuickSwap DEX</Link>. 
                                <br/>
                                Issues with these protocols could impact HashStat strategies, halting their functions or altering their behaviour.
                                
                            </li>
                            <li style={{ marginBottom: 10 }} >
                                Network risks: <br/>
                                The HashStrat protocol runs on a blockchain, 
                                the <Link href="https://polygon.technology/" target="_blank">Polygon Network</Link>, that could suffer from malfunctions and exploits. <br/>
                                Issues at the base layer of a blockchian are very rare but can't be totally discounted. 
                            </li>
                            <li style={{ marginBottom: 10 }} >
                                Regulatory risks: <br/>
                                Owning crypto assets and using DeFi is perfectly legal in <Link href="https://www.euronews.com/next/2022/04/27/bitcoin-ban-these-are-the-countries-where-crypto-is-restricted-or-illegal2" target="_blank"> almost </Link> every
                                jurisdiction, but it's worth keeping  an eye on how regualtions evolve and make sure you are following laws applicable in your jurisdiction.
                            </li>
                        </ul>   
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}