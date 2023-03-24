
import { roiDataForPrices } from '../swapsRoiCalculator';
import { expect } from "chai";

import swaps_btc from "./pool_swaps.json"
import usdc from "./token_usdc.json"
import weth from "./token_eth.json"
import { BigNumber } from 'ethers';



describe("Testing poolRoiDataForSwaps with pricefeed", () => {

    describe("single swap", () => {

        const roiInfo = roiDataForPrices(
            {
                poolId: "0",
                weight: 1,
                priceInfo: {
                    symbol: "BTC",
                    price: BigNumber.from("120000000000"),
                    timestamp: 1672909047,
                },
                priceInfoStart: {
                    symbol: "BTC",
                    price: BigNumber.from("120000000000"),
                    timestamp: 1661789156,
                },
                swaps: [
                    {
                        timestamp: "1661789156",  //  Aug 29 2022 16:05:56 GMT+0000
                        side: "BUY",
                        feedPrice: "120000000000",        // 1200 WETH/USDC
                        bought: "833333333333333333",     //  0.833 WETH
                        sold: "1000000000",               // 1000 USDC
                        depositTokenBalance: "0",
                        investTokenBalance: "833333333333333333" //  0.833 WETH
                    },
                ],
            },

            usdc,
            weth
        )

        it('Has expected dates', () => {
            console.log(">>> dates: ",  roiInfo.map( it => Number(it.date)) )
           // expect( roiInfo.map( it => Number(it.date) )).to.eql( [1, 2, ] );
        });

        // it('Has zero ROI', () => {
        //     expect( roiInfo.map( it => it.strategyROI )).to.eql( [0, 0, 0, 0] );
        //     expect( roiInfo.map( it => it.buyAndHoldROI )).to.eql( [0, 0, 0, 0] );
        // });

        // it('Has $100 model investment', () => {
        //     expect( roiInfo.map( it => it.strategyValue )).to.eql( [100, 100, 100, 100] );
        //     expect( roiInfo.map( it => it.buyAndHoldValue )).to.eql( [100, 100, 100, 100] );
        // });
    });

});
