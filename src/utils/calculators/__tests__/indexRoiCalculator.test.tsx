
// import {  roiDataForSwaps as indexRoiDataForSwaps } from '../indexRoiCalculator';
import { roiDataForSwaps as indexRoiDataForSwaps } from "../../../utils/calculators/roiCalculator"
import { PoolTokensSwapsInfo } from "../../../types/PoolTokensSwapsInfo"

import { RoiInfo } from "../../../types/RoiInfo"


import { expect } from "chai";


import index_swaps from "./index_swaps.json"

import usdc from "./token_usdc.json"
import wbtc from "./token_btc.json"
import weth from "./token_eth.json"
import { BigNumber } from "ethers";


describe("Testing indexRoiDataForSwaps", () => {

    // describe("Index with one pool and no price move", () => {

    //     const lastTimestamp = 1665092600
    //     const poolTokensSwapsInfo = {
    //         poolId: "01",
    //         weight: 1,
    //         priceInfo: {
    //             symbol: "weth",
    //             price: "2034365180234",
    //             timestamp: lastTimestamp,
    //         },
    //         swaps: [
    //             {
    //                 "timestamp": "1661789156",
    //                 "side": "BUY",
    //                 "feedPrice": "2034365180234",
    //                 "bought": "1632110",
    //                 "sold": "333333334",
    //                 "depositTokenBalance": "1333333332",
    //                 "investTokenBalance": "1632110"
    //             },
    //             {
    //                 "timestamp": "1662068452",
    //                 "side": "BUY",
    //                 "feedPrice": "2034365180234",
    //                 "bought": "0",
    //                 "sold": "0",
    //                 "depositTokenBalance": "1333333332",
    //                 "investTokenBalance": "1632110"
    //             }
    //         ]
    //     }

    //     const roiInfo : RoiInfo[] = indexRoiDataForSwaps( 
    //         [poolTokensSwapsInfo] as [PoolTokensSwapsInfo] ,
    //         usdc,
    //         [weth]
    //     )

    //     it('Has expected dates', () => {
    //         const dates = roiInfo.map(it => it.date)
    //         const expected = [1661789156, 1662068452, lastTimestamp]

    //         expect( dates ).to.eql( expected )
    //     });

    //     it('Includes ROI value for latest price', () => {
    //         const strategyROI = roiInfo.map(it => it.strategyROI)

    //         expect( strategyROI.length ).to.eql( 3 )
    //     });

    //     it('Includes ROI value for latest price', () => {
    //         const strategyROI = roiInfo.map(it => it.strategyROI)

    //         expect( strategyROI ).to.eql( [0, 0, 0] )
    //     });

    // });


    // describe("Index with 2 pools with ROI of 0% and 100%", () => {
    //     const lastTimestamp = 1665092600

    //     const pool0TokensSwapsInfo : PoolTokensSwapsInfo = {
    //         poolId: "0",
    //         weight: 1,
    //         priceInfo: {
    //             symbol: "weth",
    //             price: "120000000000",
    //             timestamp: lastTimestamp,
    //         },
    //         swaps: [
    //             {
    //                 "timestamp": "1661789156",
    //                 "side": "BUY",
    //                 "feedPrice": "120000000000",  // 1200 WETH/USDC
    //                 "bought": "0",
    //                 "sold": "0",
    //                 "depositTokenBalance": "1000000000", // 1000 USDC
    //                 "investTokenBalance": "0"            //   0 WETH
    //             }
    //         ]
    //     }

    //     const pool1TokensSwapsInfo : PoolTokensSwapsInfo = {
    //         poolId: "1",
    //         weight: 1,
    //         priceInfo: {
    //             symbol: "wbtc",
    //             price: "4000000000000",
    //             timestamp: lastTimestamp,
    //         },
    //         swaps: [
    //             {
    //                 "timestamp": "1661789156",
    //                 "side": "BUY",
    //                 "feedPrice": "2000000000000",
    //                 "bought": "5000000",
    //                 "sold": "1000000000",
    //                 "depositTokenBalance": "0",
    //                 "investTokenBalance": "5000000" // 0.05 WBTC ($1000)
    //             }
    //         ]
    //     }

    //     const roiInfo : RoiInfo[] = indexRoiDataForSwaps( 
    //         [pool0TokensSwapsInfo, pool1TokensSwapsInfo],
    //         usdc,
    //         [weth, wbtc]
    //     )

    //     it('has ROI of 50%', () => {
    //         const strategyROI = roiInfo.map(it => it.strategyROI)
    //         expect( strategyROI[1] ).to.eql( 50 )
    //     });
    // });



    // describe("Index with 2 pools with ROI of -50% and 100%", () => {
    //     const lastTimestamp = 1665092600

    //     const pool0TokensSwapsInfo : PoolTokensSwapsInfo = {
    //         poolId: "0",
    //         weight: 1,
    //         priceInfo: {
    //             symbol: "weth",
    //             price: "60000000000",
    //             timestamp: lastTimestamp,
    //         },
    //         swaps: [
    //             {
    //                 "timestamp": "1661789156",
    //                 "side": "BUY",
    //                 "feedPrice": "120000000000",    // 1200 WETH/USDC
    //                 "bought": "833333333333333333", //  0.833 WETH
    //                 "sold": "1000000000",           // 1000 USDC
    //                 "depositTokenBalance": "0",                //  0 USDC
    //                 "investTokenBalance": "833333333333333333" //  0.833 WETH
    //             }
    //         ]
    //     }

    //     const pool1TokensSwapsInfo : PoolTokensSwapsInfo = {
    //         poolId: "1",
    //         weight: 1,
    //         priceInfo: {
    //             symbol: "wbtc",
    //             price: "4000000000000",
    //             timestamp: lastTimestamp,
    //         },
    //         swaps: [
    //             {
    //                 "timestamp": "1661789156",
    //                 "side": "BUY",
    //                 "feedPrice": "2000000000000",
    //                 "bought": "5000000",
    //                 "sold": "1000000000",
    //                 "depositTokenBalance": "0",
    //                 "investTokenBalance": "5000000" // 0.05 WBTC ($1000)
    //             }
    //         ]
    //     }

    //     const roiInfo : RoiInfo[] = indexRoiDataForSwaps( 
    //         [pool0TokensSwapsInfo, pool1TokensSwapsInfo],
    //         usdc,
    //         [weth, wbtc]
    //     )

    //     it('has ROI of 25%', () => {
    //         const strategyROI = roiInfo.map(it => it.strategyROI)
    //         expect( strategyROI[1] ).to.eql( 25 )
    //     });

    // });
    


    // describe("Index with 2 pools with ROI of -50% and 100% and trades with different timetamps", () => {
    //     const lastTimestamp = 3

    //     const pool0TokensSwapsInfo : PoolTokensSwapsInfo = {
    //         poolId: "0",
    //         weight: 1,
    //         priceInfo: {
    //             symbol: "weth",
    //             price: "60000000000",
    //             timestamp: lastTimestamp,
    //         },
    //         swaps: [
    //             {
    //                 "timestamp": "1",
    //                 "side": "BUY",
    //                 "feedPrice": "120000000000",    // 1200 WETH/USDC
    //                 "bought": "833333333333333333", //  0.833 WETH
    //                 "sold": "1000000000",           // 1000 USDC
    //                 "depositTokenBalance": "0",                //  0 USDC
    //                 "investTokenBalance": "833333333333333333" //  0.833 WETH
    //             }
    //         ]
    //     }

    //     const pool1TokensSwapsInfo : PoolTokensSwapsInfo = {
    //         poolId: "1",
    //         weight: 1,
    //         priceInfo: {
    //             symbol: "wbtc",
    //             price: "4000000000000",
    //             timestamp: lastTimestamp,
    //         },
    //         swaps: [
    //             {
    //                 "timestamp": "2",
    //                 "side": "BUY",
    //                 "feedPrice": "2000000000000",
    //                 "bought": "5000000",
    //                 "sold": "1000000000",
    //                 "depositTokenBalance": "0",
    //                 "investTokenBalance": "5000000" // 0.05 WBTC ($1000)
    //             }
    //         ]
    //     }

    //     const roiInfo : RoiInfo[] = indexRoiDataForSwaps( 
    //         [pool0TokensSwapsInfo, pool1TokensSwapsInfo],
    //         usdc,
    //         [weth, wbtc]
    //     )

    //     it('has ROI of 25%', () => {
    //         const strategyROI = roiInfo.map(it => it.strategyROI)
    //         expect( strategyROI[1] ).to.eql( 25 )
    //     });
        
    // });



    describe("Index with 3 pools with ROI of -50%, 0% and +50%", () => {
        const lastTimestamp = 4

        // // Pool with -50% ROI
        const pool0TokensSwapsInfo : PoolTokensSwapsInfo = {
            poolId: "0",
            weight: 1,
            priceInfo: {
                symbol: "weth",
                price: BigNumber.from("60000000000"),
                timestamp: lastTimestamp,
            },
            swaps: [
                {
                    "timestamp": "1",
                    "side": "BUY",
                    "feedPrice": "120000000000",    // 1200 WETH/USDC
                    "bought": "833333333333333333", //  0.833 WETH
                    "sold": "1000000000",           // 1000 USDC
                    "depositTokenBalance": "0",                //  0 USDC
                    "investTokenBalance": "833333333333333333" //  0.833 WETH
                }
            ]
        }

        // Pool with 0% ROI
        const pool1TokensSwapsInfo : PoolTokensSwapsInfo = {
            poolId: "1",
            weight: 1,
            priceInfo: {
                symbol: "weth",
                price: BigNumber.from("60000000000"),
                timestamp: lastTimestamp,
            },
            swaps: [
                {
                    "timestamp": "2",
                    "side": "SELL",
                    "feedPrice": "120000000000",  // 1200 WETH/USDC
                    "bought": "1000000000",
                    "sold": "833333333333333333",
                    "depositTokenBalance": "1000000000", // 1000 USDC
                    "investTokenBalance": "0"            //   0 WETH
                }
            ]
        }

        // Pool with +50% ROI
        const pool2TokensSwapsInfo : PoolTokensSwapsInfo = {
            poolId: "2",
            weight: 1,
            priceInfo: {
                symbol: "wbtc",
                price: BigNumber.from("3000000000000"),
                timestamp: lastTimestamp,
            },
            swaps: [
                {
                    "timestamp": "3",
                    "side": "BUY",
                    "feedPrice": "2000000000000",
                    "bought": "5000000",
                    "sold": "1000000000",
                    "depositTokenBalance": "0",
                    "investTokenBalance": "5000000" // 0.05 WBTC ($1000)
                }
            ]
        }

        const roiInfo : RoiInfo[] = indexRoiDataForSwaps( 
            [pool0TokensSwapsInfo, pool1TokensSwapsInfo, pool2TokensSwapsInfo],
            usdc,
            [weth, wbtc]
        )

        it('has strategy ROI of 0%', () => {
            const strategyROI = roiInfo.map(it => it.strategyROI)
            expect( strategyROI[1] ).to.eql( 0 )
        });
        
        // it('has buy & hold ROI of -16.66%', () => {
        //     const buyAndHoldROI = roiInfo.map(it => it.buyAndHoldROI)
        //     expect( buyAndHoldROI[1] ).to.be.approximately( (-50 + -50 + +50) / 3, 0.0000001 )
        // });
        
    });

});


