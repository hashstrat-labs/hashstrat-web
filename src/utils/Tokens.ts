import { Token } from "../types/Token"
import { PoolInfo } from "./pools"
import { PoolLPTokenAddress, UsdcTokenAddress, DaiTokenAddress, WethTokenAddress, WbtcTokenAddress , HstTokenAddress} from "./network"


export const Tokens = (chainId: number, poolId: string) : Map<String, Token> => {
    const { depositToken } = PoolInfo(chainId, poolId)
    const depositTokenDecimals = depositToken.toLowerCase() === 'dai' ? 18 :
                                 depositToken.toLowerCase() === 'usdc' ? 6 : 18
   
    return {
        "dai": { address: DaiTokenAddress(chainId), symbol: "DAI", decimals: 18, },
        "usdc": { address: UsdcTokenAddress(chainId), symbol: "USDC", decimals: 6,},
        "wbtc": { address: WbtcTokenAddress(chainId), symbol: "WBTC", decimals: 8, },
        "weth": { address: WethTokenAddress(chainId), symbol: "WETH", decimals: 18, },
        "pool-lp": { address: PoolLPTokenAddress(chainId, poolId), symbol: "POOL-LP", decimals: depositTokenDecimals, },
        "hst" : HstToken(chainId)
    } as any
}


export const HstToken = (chainId: number) : Token => {
    return {
        address: HstTokenAddress(chainId), 
        symbol: "HST", 
        decimals: 18,     }
}
