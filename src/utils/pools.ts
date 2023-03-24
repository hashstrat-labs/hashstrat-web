
import networksConfig from "../config/networks.json"

import poolsInfo from "../config/pools.json"
import indexesInfo from "../config/indexes.json"
import { Token } from "../types/Token"

import { UsdcTokenAddress } from "./network"
import { Tokens } from "./Tokens"

import usdc from "../components/img/usdc.png"


export const PoolInfo = (chainId: number, poolId: string) => {
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    // const indexes = indexesInfo[networkName as keyof typeof indexesInfo]
    const pools : {[poolId: string] : any} = poolId.startsWith("index") ? 
                                    indexesInfo[networkName as keyof typeof indexesInfo] :
                                    poolsInfo[networkName as keyof typeof poolsInfo]
 
    const infos = pools.filter( (pool: { poolId: string }) =>  { return (pool.poolId === poolId) })
    if (infos.length === 0) throw Error(`Pool ${poolId} not found on ${networkName} nework`)
    
    return infos[0]
}

 
export const TokensForPool = (chainId: number, poolId: string) : {depositToken: Token, investTokens: Token[], lpToken: Token} => {
    const { depositToken : depositTokenSymbol, investTokens : investTokenSymbols } = PoolInfo(chainId, poolId)
    const tokens = Tokens(chainId, poolId)
    const depositToken : Token = tokens[depositTokenSymbol.toLowerCase() as keyof typeof tokens] as any 
    const lptoken : Token = tokens["pool-lp" as keyof typeof tokens]! as any
    return {
        depositToken: depositToken,
        investTokens: investTokenSymbols.map( (symbol : any)=> {
            const investToken : Token = tokens[symbol.toLowerCase() as keyof typeof tokens]! as any
            return investToken
        }) as Token[],
        lpToken: lptoken,
    }
}


export const DepositToken = (chainId : number = 137) => {
    return { image: undefined, address: UsdcTokenAddress(chainId), symbol: "USDC", decimals: 6 } 
}


export const PoolIds = (chainId: number) : Array<string> => {
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]
    const pools = poolsInfo[networkName as keyof typeof poolsInfo] as any
    const poolIds = pools && pools.map( (pool: { [x: string]: any }) => {
        return pool["poolId"]
    })

    return poolIds ?? []
}


export const IndexesIds = (chainId: number) : string[] => {
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]
    const indexes = indexesInfo[networkName as keyof typeof poolsInfo] as any
    const indexesIds = indexes && indexes.map( (index: { [x: string]: any }) => {
        return index["poolId"]
    })

    return indexesIds || []
}


//// TOKENS HELPERS
export const InvestTokens = (chainId : number = 137) : Token[] =>  {

    const poolids = PoolIds(chainId) 
    let tokenSet = new Set<Token>();
    let tokenSymbols = new Set<string>();
    poolids.forEach(poolId => {
        const { investTokens } = TokensForPool(chainId, poolId)
        investTokens.forEach( investToken => {
            if (!tokenSymbols.has(investToken.symbol)) {
                tokenSymbols.add(investToken.symbol)
                tokenSet.add(investToken)
            }
        }) 
    });

    return Array.from(tokenSet.values())
}





