import { constants, utils, Contract  } from "ethers"

import networkMappings from "../config/deployments.json"
import networksConfig from "../config/networks.json"
import explorerMappings from "../config/explorers.json"
import { PoolInfo } from "./pools"

export const PoolAddress = (chainId: number, poolId: string) => {
   
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]
    const isIndex = poolId.startsWith("index")

    const deployments = networkMappings as any
    const address = isIndex ? deployments[networkName]["indexes"][poolId]["pool"] :
                     deployments[networkName][poolId]["pool"]

    return address
}


export const PoolLPTokenAddress = (chainId: number, poolId: string) => {

    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]
    const isIndex = poolId.startsWith("index")

    const deployments = networkMappings as any
    const address = isIndex ? deployments[networkName]["indexes"][poolId]["pool_lp"] :
                     deployments[networkName][poolId]["pool_lp"]
    return address
}


export const StrategyAddress = (chainId: number, poolId: string) => {
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    const deployments = networkMappings as any
    return deployments[networkName][poolId]["strategy"]
}

export const FeedAddressForToken = (chainId: number, symbol: string) => {

    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    const deployments = networkMappings as any
    return deployments[networkName]['tokens'][symbol.toLowerCase()]["feed"]
}

export const FeedAddress = (chainId: number, poolId: string) => {
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    const deployments = networkMappings as any
    return deployments[networkName][poolId]["price_feed"]
}


export const FarmAddress = (chainId: number, poolId?: string) => {
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]
    const deployments = networkMappings as any

    const isDisabled = poolId && (PoolInfo(chainId, poolId).disabled === 'true')
    if (isDisabled) return deployments[networkName]["hst_farm_disabled"]

    return deployments[networkName]["hst_farm"]
}   

export const FarmAddressDisabled = (chainId: number, poolId?: string) => {
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]
    const deployments = networkMappings as any

    return deployments[networkName]["hst_farm_disabled"]
}   


export const DaoOperationsAddress = (chainId: number) => {
    if (!chainId) return constants.AddressZero
   const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

   return networkMappings[networkName as keyof typeof networkMappings]["dao_operations"]
}


export const DivsDistributorAddress = (chainId: number) => {
    if (!chainId) return constants.AddressZero
   const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

   return networkMappings[networkName as keyof typeof networkMappings]["divs_distributor"]
}

export const TreasuryAddress = (chainId: number) => {
    if (!chainId) return constants.AddressZero
   const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

   return networkMappings[networkName as keyof typeof networkMappings]["treasury"]
}


export const UsdcTokenAddress = (chainId: number) => {
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    return networkMappings[networkName as keyof typeof networkMappings]["usdc"]
}

export const DaiTokenAddress = (chainId: number) => {
     if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    return networkMappings[networkName as keyof typeof networkMappings]["dai"]
}


export const WbtcTokenAddress = (chainId: number) => {
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    return networkMappings[networkName as keyof typeof networkMappings]["wbtc"]
}

export const WethTokenAddress = (chainId: number) => {
    if (!chainId) return constants.AddressZero
    const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

    return networkMappings[networkName as keyof typeof networkMappings]["weth"]
}

export const HstTokenAddress = (chainId: number) => {
    if (!chainId) return constants.AddressZero
   const networkName = networksConfig[chainId.toString() as keyof typeof networksConfig]

   return networkMappings[networkName as keyof typeof networkMappings]["hst"]
}

export const NetworkExplorerHost = (chainId: number) => {
    if (!chainId) return ""
   const networkName = NetworkName(chainId)

   const explorers = explorerMappings as any
   return explorers[networkName]["host"]
}

export const NetworkExplorerName = (chainId: number) => {
    if (!chainId) return ""
   const networkName = NetworkName(chainId)

   const explorers = explorerMappings as any
   return explorers[networkName]["name"]
}

export const NetworkName = (chainId: number) => {
    if (!chainId) return ""
    return networksConfig[chainId.toString() as keyof typeof networksConfig]
}

