const APP = {
    //el: '#app',
    data() {
        return {
            jQuery: window.jQuery,
            windowWidth: window.innerWidth,
            selectedSection: 0,
            sortBy: 'default',
            sections: [{
                    title: 'Home',
                    href: '#Home',
                    class: 'lnk Home'
                },
                {
                    title: 'Swap',
                    href: '#',
                    class: 'lnk swap'
                },
                {
                    title: 'Farm',
                    href: '#farm',
                    class: 'lnk farm'
                },
                {
                    title: 'Pool',
                    href: '#pool',
                    class: 'lnk wpool',
                },
                {
                    title: 'RNBO',
                    href: '#RNBO',
                    class: 'lnk wusd'
                },
                {
                    title: 'Locked Staking',
                    href: '#locked-staking',
                    class: 'lnk locked-staking'
                },
                {
                    title: 'Vaults',
                    href: '#vaults',
                    class: 'lnk vaults'
                },
            ],
            Web3Modal: null,
            WalletConnectProvider: null,
            web3: null,
            web3Modal: null,
            provider: null,
            selectedAccount: null,
            walletButton: {
                text: 'Connect Wallet'
            },
            /* STABLECOIN */
            wusdPrice: 0,
            isScMint: true,
            usdtTokenAddress: '0x55d398326f99059ff775485246999027b3197955',
            usdtTokenContract: null,
            usdtTokenBalance: 0,
            isUsdtApproved: false,
            wusdTokenAddress: '0x3ff997eaea488a082fb7efc8e6b9951990d0c3ab',
            wusdTokenContract: null,
            wusdTokenBalance: 0,
            isWusdApproved: false,
            wusdMasterAddress: '0xa79Fe386B88FBee6e492EEb76Ec48517d1eC759a',
            wusdMasterContract: null,
            usdtInputAmount: '0.00',
            wusdInputAmount: '0.00',
            wusdWexPermille: 0,
            wusdRedeemPermille: 0,
            wusdMintPermille: 0,
            wusdMaxStakeAmount: 0,
            wusdWexBalance: 0,
            wusdTotalSupply: 0,
            /* TOKEN */
            waultTokenAddress: '0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
            waultLpAddress: '0x1f280a4fa78f5805bac193dddafeb77b16da4614',
            waultTokenContract: null,
            waultLpContract: null,
            waultPrice: 0,
            waultLpPrice: 0,
            waultMarketCap: 0,
            waultCirculation: 0,
            waultBalance: 0,
            waultTotalValueLocked: 0,
            totalTotalValueLocked: 0,
            lmTotalRewards: 0,
            /* TOKEN2 */
            waultxCirculation: 0,
            waultxBurned: 0,
            waultxPrice: 0,
            waultxLpPrice: 0,
            waultxBalance: 0,
            waultxTokenAddress: '0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21',
            waultxTokenContract: null,
            waultxSwapAddress: '0x7F8218317Dbce673e633BF4deE162766d3563d4C',
            waultxSwapContract: null,
            waultxSwapAmount: '0.00',
            waultxSwapApproved: false,
            waultxBalance: 0,
            waultxStakeTimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            waultxStakeAddress: '0x06747f6501611baE9dD054cCC37ad076e9Ea2465',
            waultxStakeContract: null,
            waultxStakeTotalRewards: 0,
            waultxStakeLockedAmount: 0,
            waultxStakeTotalValueLocked: 0,
            waultxStakeApy: 0,
            waultxStakeAmount: 0,
            waultxStakePendingRewards: 0,
            waultxStakeDepositAmount: 0,
            waultxStakeWithdrawAmount: 0,
            waultxStakeApproved: false,
            /* TOKEN3 */
            wexCirculation: 0,
            wexBurned: 0,
            wexAddress: '0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90',
            wexContract: null,
            wexBalance: '0.00',
            wexPrice: '0.00',
            wexLpPrice: '0.00',
            wswapVolume: 0,
            wexStakeTimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            wexStakeAddress: '0xF4E0943C1D55e883E3C6310CD641970A36a7f870',
            wexStakeContract: null,
            wexStakeTotalRewards: 0,
            wexStakeLockedAmount: 0,
            wexStakeTotalValueLocked: 0,
            wexStakeApy: 0,
            wexStakeAmount: 0,
            wexStakePendingRewards: 0,
            wexStakeDepositAmount: 0,
            wexStakeWithdrawAmount: 0,
            wexStakeApproved: false,
            /* LM2 */
            lpBalance: 0,
            lm2TimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            lm2Address: '0xaBA8E6E7bC56973b723b7B2B14Ec11d64A7c3E92',
            lm2Contract: null,
            lm2TotalRewards: 0,
            lm2LockedAmount: 0,
            lm2TotalValueLocked: 0,
            lm2Apy: 0,
            lm2Amount: 0,
            lm2PendingRewards: 0,
            lm2DepositAmount: 0,
            lm2WithdrawAmount: 0,
            lm2Approved: false,
            /* EULER */
            eulerPrice: 0,
            eulerLpPrice: 0,
            eulerLpAddress: '0xd4B293586cb74770749Aea799e277241B339C62C',
            eulerLpContract: null,
            eulerLpBalance: 0,
            eulerLmAddress: '0x5A1f3BeE1b7B369Efd99B896101917a9d9BaDf6D',
            eulerLmContract: null,
            eulerLmTotalRewards: 0,
            eulerLmLockedAmount: 0,
            eulerLmTotalValueLocked: 0,
            eulerLmApy: 0,
            eulerLmAmount: 0,
            eulerLmPendingRewards: 0,
            eulerLmDepositAmount: 0,
            eulerLmWithdrawAmount: 0,
            eulerLmApproved: false,
            /* EULER STAKING */
            eulerStakingTimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            eulerTokenAddress: '0x3920123482070c1a2dff73aad695c60e7c6f6862',
            eulerTokenContract: null,
            eulerTokenBalance: 0,
            eulerStakingAddress: '0x38Ab2128327107D075a13E6Ed66Bd6184E4Cc20c',
            eulerStakingContract: null,
            eulerStakingLockedAmount: 0,
            eulerStakingTotalValueLocked: 0,
            eulerStakingApy: 0,
            eulerStakingAmount: 0,
            eulerStakingPendingRewards: 0,
            eulerStakingDepositAmount: 0,
            eulerStakingWithdrawAmount: 0,
            eulerStakingApproved: false,
            /* FARM */
            farmAddress: '0x22fB2663C7ca71Adc2cc99481C77Aaf21E152e2D',
            farmContract: null,
            farms: [{
                    currency: 'WEX',
                    earned: 'WEX',
                    title: 'WEX',
                    style: 'background-image: url(\'assets/images/farms/wex.png\')',
                    getHref: '       ',
                    orderId: 0,
                    isBoosted: true,
                }, {
                    currency: 'WAULTx',
                    earned: 'WEX',
                    title: 'WAULT<small>x</small>',
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21',
                    orderId: 1,
                }, {
                    currency: 'WEX-BNB',
                    earned: 'WEX',
                    title: 'WEX-BNB',
                    style: 'background-image: url(\'assets/images/farms/wex-bnb.png\')',
                    getHref: '       ',
                    orderId: 2,
                }, {
                    currency: 'WEX-BNB',
                    earned: 'WEX',
                    title: 'WEX-BNB',
                    style: 'background-image: url(\'assets/images/farms/wex-bnb.png\')',
                    getHref: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
                    orderId: 3,
                }, {
                    currency: 'WEX-USDT',
                    earned: 'WEX',
                    title: 'WEX-USDT',
                    style: 'background-image: url(\'assets/images/farms/wex-usdt2.png\')',
                    getHref: '       &inputCurrency=0x55d398326f99059ff775485246999027b3197955',
                    orderId: 4,
                    isBoosted: true,
                }, {
                    currency: 'WAULTx-BNB',
                    earned: 'WEX',
                    title: 'WAULT<small>x</small>-BNB',
                    style: 'background-image: url(\'assets/images/farms/wault-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xb64e638e60d154b43f660a6bf8fd8a3b249a6a21',
                    orderId: 5,
                }, {
                    currency: 'WAULTx-BNB',
                    earned: 'WEX',
                    title: 'WAULT<small>x</small>-BNB',
                    style: 'background-image: url(\'assets/images/farms/wault-bnb.png\')',
                    getHref: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xb64e638e60d154b43f660a6bf8fd8a3b249a6a21',
                    orderId: 6,
                }, {
                    i: 7,
                    apy: 0,
                    feeApr: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'EULER-BNB',
                    earned: 'EULER',
                    title: 'EULER-BNB',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/farms/EULER-logo.png\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x3920123482070c1a2dff73aad695c60e7c6f6862',
                    orderId: -1,
                }, {
                    currency: 'MATIC-USDT',
                    earned: 'WEX',
                    title: 'MATIC-USDT',
                    style: 'background-image: url(\'assets/images/farms/matic-usdt2.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
                    orderId: 10,
                }, {
                    currency: 'EULER-BNB',
                    earned: 'WEX',
                    title: 'EULER-BNB',
                    style: 'background-image: url(\'assets/images/farms/EULER-logo.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x3920123482070C1a2dff73AaD695c60e7c6F6862',
                    orderId: 14,
                }, {
                    currency: 'ELE-BNB',
                    earned: 'WEX',
                    title: 'ELE-BNB',
                    style: 'background-image: url(\'assets/images/farms/ele-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0',
                    orderId: 12,
                }, {
                    currency: 'ORAI-BNB',
                    earned: 'WEX',
                    title: 'ORAI-BNB',
                    style: 'background-image: url(\'assets/images/farms/orai-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xa325ad6d9c92b55a3fc5ad7e412b1518f96441c0',
                    orderId: 16,
                }, {
                    currency: 'TWIN-BNB',
                    earned: 'WEX',
                    title: 'TWIN-BNB',
                    style: 'background-image: url(\'assets/images/farms/twin-bnb2.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xaf83f292fced83032f52ced45ef7dbddb586441a',
                    orderId: 17,
                }, {
                    currency: 'AUTO-BNB',
                    earned: 'WEX',
                    title: 'AUTO-BNB',
                    style: 'background-image: url(\'assets/images/farms/auto-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xa184088a740c695e156f91f5cc086a06bb78b827',
                    orderId: 11,
                }, {
                    currency: 'HFS-BUSD',
                    earned: 'WEX',
                    title: 'HFS-BUSD',
                    style: 'background-image: url(\'assets/images/farms/hfs-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x9412F9AB702AfBd805DECe8e0627427461eF0602',
                    orderId: 18,
                }, {
                    currency: 'WOOP-BNB',
                    earned: 'WEX',
                    title: 'WOOP-BNB',
                    style: 'background-image: url(\'assets/images/farms/woop-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',
                    orderId: 15,
                }, {
                    currency: 'ALPACA-BNB',
                    earned: 'WEX',
                    title: 'ALPACA-BNB',
                    style: 'background-image: url(\'assets/images/farms/alpaca-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
                    orderId: 8,
                }, {
                    currency: 'ALPACA-USDT',
                    earned: 'WEX',
                    title: 'ALPACA-USDT',
                    style: 'background-image: url(\'assets/images/farms/alpaca-usdt.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
                    orderId: 9,
                }, {
                    currency: 'SWIRL-BNB',
                    earned: 'WEX',
                    title: 'SWIRL-BNB',
                    style: 'background-image: url(\'assets/images/farms/swirl-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x52d86850bc8207b520340b7e39cdaf22561b9e56',
                    orderId: 13,
                }, {
                    currency: 'BNB-BUSD',
                    earned: 'WEX',
                    title: 'BNB-BUSD',
                    style: 'background-image: url(\'assets/images/farms/bnb-busd3.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56',
                    orderId: 7,
                }, {
                    currency: 'USDT-BUSD',
                    earned: 'WEX',
                    title: 'USDT-BUSD',
                    style: 'background-image: url(\'assets/images/farms/usdt-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0x55d398326f99059ff775485246999027b3197955',
                    orderId: 19,
                }, {
                    currency: 'DAI-BUSD',
                    earned: 'WEX',
                    title: 'DAI-BUSD',
                    style: 'background-image: url(\'assets/images/farms/dai-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
                    orderId: 20,
                }, {
                    currency: 'USDT-BNB',
                    earned: 'WEX',
                    title: 'USDT-BNB',
                    style: 'background-image: url(\'assets/images/farms/usdt-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955',
                    orderId: 21,
                }, {
                    currency: 'USDC-BNB',
                    earned: 'WEX',
                    title: 'USDC-BNB',
                    style: 'background-image: url(\'assets/images/farms/usdc-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
                    orderId: 22,
                }, {
                    currency: 'CAKE-BNB',
                    earned: 'WEX',
                    title: 'Cake-BNB',
                    style: 'background-image: url(\'assets/images/farms/cake-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
                    orderId: 23,
                }, {
                    currency: 'BTCB-BUSD',
                    earned: 'WEX',
                    title: 'BTCB-BUSD',
                    style: 'background-image: url(\'assets/images/farms/btcb-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
                    orderId: 7.1,
                }, {
                    currency: 'BTCB-BNB',
                    earned: 'WEX',
                    title: 'BTCB-BNB',
                    style: 'background-image: url(\'assets/images/farms/btcb-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
                    orderId: 7.2,
                }, {
                    currency: 'ETH-BTCB',
                    earned: 'WEX',
                    title: 'ETH-BTCB',
                    style: 'background-image: url(\'assets/images/farms/btc-eth.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x2170Ed0880ac9A755fd29B2688956BD959F933F8&inputCurrency=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
                    orderId: 26,
                }, {
                    currency: 'ETH-BNB',
                    earned: 'WEX',
                    title: 'ETH-BNB',
                    style: 'background-image: url(\'assets/images/farms/eth-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8',
                    orderId: 27,
                }, {
                    currency: 'ETH-BUSD',
                    earned: 'WEX',
                    title: 'ETH-BUSD',
                    style: 'background-image: url(\'assets/images/farms/eth-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8',
                    orderId: 28,
                }, {
                    currency: 'VAI-BNB',
                    earned: 'WEX',
                    title: 'VAI-BNB',
                    style: 'background-image: url(\'assets/images/farms/vai-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
                    orderId: 29,
                }, {
                    currency: 'DOT-BNB',
                    earned: 'WEX',
                    title: 'DOT-BNB',
                    style: 'background-image: url(\'assets/images/farms/dot-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
                    orderId: 30,
                }, {
                    currency: 'XVS-BUSD',
                    earned: 'WEX',
                    title: 'XVS-BUSD',
                    style: 'background-image: url(\'assets/images/farms/xvs-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
                    orderId: 31,
                }, {
                    currency: 'LINK-BNB',
                    earned: 'WEX',
                    title: 'LINK-BNB',
                    style: 'background-image: url(\'assets/images/farms/link-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
                    orderId: 32,
                }, {
                    currency: 'LTC-BUSD',
                    earned: 'WEX',
                    title: 'LTC-BUSD',
                    style: 'background-image: url(\'assets/images/farms/ltc-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
                    orderId: 33,
                }, {
                    currency: 'XRP-BUSD',
                    earned: 'WEX',
                    title: 'XRP-BUSD',
                    style: 'background-image: url(\'assets/images/farms/xrp-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
                    orderId: 34,
                }, {
                    currency: 'ADA-BUSD',
                    earned: 'WEX',
                    title: 'ADA-BUSD',
                    style: 'background-image: url(\'assets/images/farms/ada-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
                    orderId: 35,
                }, {
                    currency: 'DOGE-BNB',
                    earned: 'WEX',
                    title: 'DOGE-BNB',
                    style: 'background-image: url(\'assets/images/farms/doge-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xba2ae424d960c26247dd6c32edc70b295c744c43',
                    orderId: 36,
                }, {
                    currency: 'BMXX-BNB',
                    earned: 'WEX',
                    title: 'BMXX-BNB',
                    style: 'background-image: url(\'assets/images/farms/bmxx-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x4131b87F74415190425ccD873048C708F8005823',
                    orderId: 7.3,
                },
                {
                    currency: 'BEL-BNB',
                    earned: 'WEX',
                    title: 'BEL-BNB',
                    style: 'background-image: url(\'assets/images/farms/bel-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x8443f091997f06a61670B735ED92734F5628692F',
                    orderId: 7.4,
                },
                {
                    currency: 'IVN-BNB',
                    earned: 'WEX',
                    title: 'IVN-BNB',
                    style: 'background-image: url(\'assets/images/farms/ivn-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x6A46d878401F46B4C7f665f065E0667580e031ec',
                    orderId: 7.29,
                },
                {
                    currency: 'BTCB-USDT',
                    earned: 'WEX',
                    title: 'BTCB-USDT',
                    style: 'background-image: url(\'assets/images/farms/btcb-usdt.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
                    orderId: 7.288,
                },
                {
                    currency: 'BETH-ETH',
                    earned: 'WEX',
                    title: 'BETH-ETH',
                    style: 'background-image: url(\'assets/images/farms/beth-eth.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
                    orderId: 7.289,
                },
                {
                    currency: 'BORING-BNB',
                    earned: 'WEX',
                    title: 'BORING-BNB',
                    style: 'background-image: url(\'assets/images/farms/bor-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F',
                    orderId: 7.2892,
                },
                {
                    currency: 'ETH-USDT',
                    earned: 'WEX',
                    title: 'ETH-USDT',
                    style: 'background-image: url(\'assets/images/farms/eth-usdt.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8&inputCurrency=0x55d398326f99059ff775485246999027b3197955',
                    orderId: 7.2891
                },
                {
                    currency: 'pCWS-BNB',
                    earned: 'WEX',
                    title: '<small>p</small>CWS-BNB',
                    style: 'background-image: url(\'assets/images/farms/pcws-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd',
                    orderId: 7.28919
                },
                {
                    currency: 'WATCH-BNB',
                    earned: 'WEX',
                    title: 'WATCH-BNB',
                    style: 'background-image: url(\'assets/images/farms/watch-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
                    orderId: 7.28918
                },
                {
                    currency: 'BYG-BNB',
                    earned: 'WEX',
                    title: 'BYG-BNB',
                    style: 'background-image: url(\'assets/images/farms/byg-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x4F7B627b88651e3DddcA0240bcA68a3062632C8c',
                    orderId: 7.00009
                },
                {
                    currency: 'KRW-BNB',
                    earned: 'WEX',
                    title: 'KRW-BNB',
                    style: 'background-image: url(\'assets/images/farms/krw-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x1446f3CEdf4d86a9399E49f7937766E6De2A3AAB',
                    orderId: 7.00008
                },
                {
                    currency: 'WEX-BTCB',
                    earned: 'WEX',
                    title: 'WEX-BTCB',
                    style: 'background-image: url(\'assets/images/farms/wex-btc.png\')',
                    getHref: '       &inputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
                    orderId: 4.1,
                },
                {
                    currency: 'PERA-WEX',
                    earned: 'WEX',
                    title: 'PERA-WEX',
                    style: 'background-image: url(\'assets/images/farms/pera-wex.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xb9d8592e16a9c1a3ae6021cddb324eac1cbc70d6&inputCurrency=0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
                    orderId: 7.00007,
                },
                {
                    currency: 'PIRATE-BNB',
                    earned: 'WEX',
                    title: 'PIRATE-BNB',
                    style: 'background-image: url(\'assets/images/farms/pirate-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x63041a8770c4cfe8193d784f3dc7826eab5b7fd2',
                    orderId: 7.00006,
                },
                {
                    currency: 'LORY-BNB',
                    earned: 'WEX',
                    title: 'LORY-BNB',
                    style: 'background-image: url(\'assets/images/farms/lory-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xcD5D75Dbe75449A9021B6C570a41959eB571C751',
                    orderId: 7.00005,
                },
                {
                    currency: 'JAWS-BNB',
                    earned: 'WEX',
                    title: 'JAWS-BNB',
                    style: 'background-image: url(\'assets/images/farms/jaws-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xdD97AB35e3C0820215bc85a395e13671d84CCBa2',
                    orderId: 7.00004,
                },
                {
                    currency: 'VITE-BTCB',
                    earned: 'WEX',
                    title: 'VITE-BTCB',
                    style: 'background-image: url(\'assets/images/farms/vite-btcb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x2794dad4077602ed25a88d03781528d1637898b4&inputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
                    orderId: 7.00003,
                },
                {
                    currency: 'TUSD-USDT',
                    earned: 'WEX',
                    title: 'TUSD-USDT',
                    style: 'background-image: url(\'assets/images/farms/tusd-usdt.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955&inputCurrency=0x14016e85a25aeb13065688cafb43044c2ef86784',
                    orderId: 7.00002,
                },
                {
                    currency: 'ONT-BNB',
                    earned: 'WEX',
                    title: 'ONT-BNB',
                    style: 'background-image: url(\'assets/images/farms/ont-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xFd7B3A77848f1C2D67E05E54d78d174a0C850335',
                    orderId: 7.00001,
                },
                {
                    currency: 'DEP-BNB',
                    earned: 'WEX',
                    title: 'DEP-BNB',
                    style: 'background-image: url(\'assets/images/farms/dep-bnb.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xcaF5191fc480F43e4DF80106c7695ECA56E48B18',
                    orderId: 7.000009,
                },
                {
                    currency: 'WUSD-BUSD',
                    earned: 'WEX',
                    title: 'WUSD-BUSD',
                    style: 'background-image: url(\'assets/images/farms/wusd-busd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x3ff997eaea488a082fb7efc8e6b9951990d0c3ab&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56',
                    orderId: 1.1,
                },
                {
                    currency: 'PLAY-WUSD',
                    earned: 'WEX',
                    title: 'PLAY-WUSD',
                    style: 'background-image: url(\'assets/images/farms/play-wusd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x9a3077f34cc30f9bf8e93a0369119bae0113d9cc&inputCurrency=0x3ff997eaea488a082fb7efc8e6b9951990d0c3ab',
                    orderId: 7.000008,
                    isNew: true,
                },
                {
                    currency: 'WIZARD-WUSD',
                    earned: 'WEX',
                    title: 'WIZARD-WUSD',
                    style: 'background-image: url(\'assets/images/farms/wizard-wusd.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x5066C68cAe3B9BdaCD6A1A37c90F2d1723559D18&inputCurrency=0x3ff997eaea488a082fb7efc8e6b9951990d0c3ab',
                    orderId: 7.000007,
                    isNew: true,
                },
            ],
            farmsStakedOnly: false,
            farmsSearch: '',
            /* WPOOLs */
            wpools: [{
                    currency: 'WEX',
                    earned: 'ELE',
                    title: 'EARN ELE',
                    style: 'background-image: url(\'assets/images/wpools/ele.svg\')',
                    endString: '',
                    informationText: 'Eleven Finance<br>Building a high APY vault ecosystem.<br><br><a href="https://eleven.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/elevenfinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'ORAI',
                    title: 'EARN ORAI',
                    style: 'background-image: url(\'assets/images/wpools/orai.png\')',
                    endString: '',
                    informationText: 'Oraichain Pte. Ltd.<br>The World\'s First AI Oracle for Blockchains.<br><br><a href="https://orai.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/oraichain" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'TWIN',
                    title: 'EARN TWIN',
                    style: 'background-image: url(\'assets/images/wpools/twin.png\')',
                    endString: '',
                    informationText: 'TWINCI<br>The first NFTs Social-Marketplace<br><br><a href="https://twinci.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/twinciio" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'HFS',
                    title: 'EARN HFS',
                    style: 'background-image: url(\'assets/images/wpools/hfs3.png\')',
                    endString: '',
                    informationText: 'Holder Finance<br>A highly scarce, community centric value retention token that resides on the crosschain DeFi network.<br><br><a href="https://www.holder.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/HolderFinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'WOOP',
                    title: 'EARN WOOP',
                    style: 'background-image: url(\'assets/images/wpools/woop.png\')',
                    endString: '',
                    informationText: 'Woonkly Power<br>Woonkly is a DEFI protocol enabling a Decentralized Social Network<br>in which the capital invested in post-advertising by advertisers<br>is shared with the people who interact with that content (Post, Photo, Video, Podcast).<br><br><a href="https://welcome.woonkly.com/en/" target="_blank">Go to website</a><br><a href="https://twitter.com/woonklyEN" target="_blank">Twitter</a>',
                    isFinished: true,
                },
                {
                    currency: 'WEX',
                    earned: 'BMXX',
                    title: 'EARN BMXX',
                    style: 'background-image: url(\'assets/images/wpools/bmxx.png\')',
                    endString: '',
                    informationText: 'Multiplier Finance<br>Multiplier Finance is an algorithmic money market system<br>designed to bring secure and unique lending and borrowing opportunities<br>like flash loans onto the Binance Smart Chain.<br>The protocol designs are architected and forked based on Aave<br>with revenue-sharing components for liquidity providers and token holders<br>that govern the protocol.<br><br><a href="https://multiplier.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/MultiplierMXX" target="_blank">Twitter</a>',
                    isFinished: true,
                },
                {
                    currency: 'WEX',
                    earned: 'BEL',
                    title: 'EARN BEL',
                    style: 'background-image: url(\'assets/images/wpools/bel2.png\')',
                    endString: '',
                    informationText: 'Bella Protocol<br>Bella is a suite of open finance products,<br>including automated yield farming tools, BEL Locker, and Flex Savings.<br>They believe everyone deserves equal access to premium financial products<br>and services with elegant design and a smooth user experience.<br>Bella Protocol is backed by Binance Labs and Arrington Capital as lead investors.<br>Other investors include Alphabit, AlphaCoin Fund, Koi Ventures,<br>Ledger Capital, Tensor, N7 labs, Quest Capital, HBTC Labs, and more.<br>Bella brings your familiar mobile banking into crypto with just one click.<br>With Bella, you can just simply sit back, watch your asset grow,<br>and leave all the heavy-lifting to secure, automated smart contracts.<br><br><a href="https://bella.fi" target="_blank">Go to website</a><br><a href="https://twitter.com/BellaProtocol" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'BORING',
                    title: 'EARN BORING',
                    style: 'background-image: url(\'assets/images/wpools/boring.png\')',
                    endString: '',
                    informationText: 'BoringDAO<br>BoringDAO aims to build a series of decentralized bridges & tunnels,<br>which allow you to safely move Bitcoin & other crypto assets between<br> Ethereum, BSC, Polygon & different blockchains to<br> maximize utilization rate of crypto assets in DeFi world.<br><br><a href="https://www.boringdao.com/" target="_blank">Go to website</a><br><a href="https://twitter.com/TheBoringDAO" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'pCWS',
                    title: 'EARN <small>p</small>CWS',
                    style: 'background-image: url(\'assets/images/wpools/pcws.png\')',
                    endString: '',
                    informationText: 'Seascape Network<br>Seascape Network is a gaming ecosystem platform built on Ethereum, BSC and Polkadot.<br>It is designed for the DeFi and NFT economies. With a focus on usability and quality,<br>the aim is to create an environment that will allow users,<br>developers and stakeholders to play, earn and share experiences in an incentivized way.<br><br><a href="http://www.seascape.network/" target="_blank">Go to website</a><br><a href="https://twitter.com/seascapenetwork" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'WATCH',
                    title: 'EARN WATCH',
                    style: 'background-image: url(\'assets/images/wpools/watch.png\')',
                    endString: '',
                    informationText: 'Yieldwatch<br>yieldwatch.net is a smart DeFi dashboard that lets you monitor<br>your liquidity pools, yield farming, and token staking<br>performance with a casual and sleek UI, that is optimized for mobile use.<br>With yieldwatch.net you get all the relevant information at one glance.<br>No more browsing different websites and using complicated<br>IL-loss calculators. We are the first on Binance Smart Chain that show you the deposit,<br>pending yield, fees generated and gives you an Home<br>of the potential impermanent loss that you are facing.<br><br><a href="https://www.yieldwatch.net/" target="_blank">Go to website</a><br><a href="https://twitter.com/yieldwatch" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'BYG',
                    title: 'EARN BYG',
                    style: 'background-image: url(\'assets/images/wpools/byg.png\')',
                    endString: '',
                    informationText: 'Black Eye Galaxy<br>Black eye galaxy token (BYG) is a decentralized cross chain NFT token for virtual world.<br><br><a href="https://www.blackeyegalaxy.space/" target="_blank">Go to website</a><br><a href="https://twitter.com/blackeyegalaxy_" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'KRW',
                    title: 'EARN KRW',
                    style: 'background-image: url(\'assets/images/wpools/krw.png\')',
                    endString: '',
                    informationText: 'KingDeFi<br>KingDeFi is a DeFi project combining three main areas: earning,<br>monitoring and tracking. The earning part offers its users a<br>large variety of farming options on BSC and Solana. Monitoring<br>provides an overall market Home combined with search<br>engine analytics and on-chain metrics. Portfolio tracking<br>allows users to access their investments and analyse their<br>portfolio performance, monitor impermanent loss, yields and<br>deposits and all relevant information in one dashboard.<br><br><a href="https://kingdefi.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/KingDefi2" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'PERA',
                    title: 'EARN PERA',
                    style: 'background-image: url(\'assets/images/wpools/pera.png\')',
                    endString: '',
                    informationText: 'Pera Finance<br>Pera Finance is a decentralized trading competition platform<br>with multi-layered yield farming opportunities.<br>Traders, liquidity providers and holders yield farm together<br>through the DeFi\'s first decentralized trading competition.<br>We are here to close one of the most important shortcomings<br>of DeFi compared to CeFi and that is "trader incentives."<br>Pera Finance will lay the foundation of DeFi 2.0 by integrating<br>the world’s first decentralized trading competition<br>as "trade farming" feature into DeFi.<br><br><a href="https://pera.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/perafinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'WSG',
                    title: 'EARN WSG',
                    style: 'background-image: url(\'assets/images/wpools/wsg.png\')',
                    endString: '',
                    informationText: 'Wall Street Games<br>Wall Street Games is a next generation hybrid blockchain-based<br>online gaming platform, where players battle each other in<br>fun & addicting simple games for rewards in cryptocurrencies!<br><br><a href="https://wsg.gg/" target="_blank">Go to website</a><br><a href="https://twitter.com/WSGToken" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'LORY',
                    title: 'EARN LORY',
                    style: 'background-image: url(\'assets/images/wpools/lory.png\')',
                    endString: '',
                    informationText: 'Yield Parrot<br>Yield Parrot is a state-of-the-art yield aggregator & optimizer<br>built in Binance Smart Chain. At yieldparrot.finance users can<br>find the best opportunities within the DeFi ecosystem, with a<br>world-class vault offering, fully optimized smart contracts,<br>and a renowned partnership plan.<br><br><a href="https://yieldparrot.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/yield_parrot" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'JAWS',
                    title: 'EARN JAWS',
                    style: 'background-image: url(\'assets/images/wpools/jaws.png\')',
                    endString: '',
                    informationText: 'Autoshark<br>AutoShark is a yield optimizer for Automatic Liquidity<br>Acquisition Farms & AMMs on the Binance Smart Chain. It is<br>currently vaulting for Wault Finance, PancakeSwap<br>and PantherSwap farms.<br><br><a href="https://autoshark.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/AutoSharkFin" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'ALPACA',
                    title: 'EARN ALPACA',
                    style: 'background-image: url(\'assets/images/wpools/alpaca.png\')',
                    endString: '',
                    informationText: 'Alpaca Finance<br>Alpaca Finance is the largest lending protocol allowing<br>leveraged yield farming on Binance Smart Chain. It helps<br>lenders earn safe and stable yields, and offers borrowers<br>undercollateralized loans for leveraged yield farming positions,<br>vastly multiplying their farming principals and resulting profits.<br><br><a href="https://www.alpacafinance.org/" target="_blank">Go to website</a><br><a href="https://twitter.com/AlpacaFinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'VITE',
                    title: 'EARN VITE',
                    style: 'background-image: url(\'assets/images/wpools/vite.png\')',
                    endString: '',
                    informationText: 'Vite<br>Vite is a Directed Acyclic Graph (DAG) based smart-contract<br>platform, with a Snapshot Chain structure to facilitate zero-fee<br>transactions and optimize transaction speed,<br>reliability, and security. The Snapshot Chain of Vite utilizes<br>Hierarchical Delegated Proof of Stake (“HDPoS”) to achieve<br>network consensus, while supernodes take only staking<br>rewards and no transaction fees. Vite virtual machine<br>maintains compatibility with EVM, and utilizes asynchronous<br>smart contract language, Solidity++.Vite’s flagship DApp is<br>ViteX, a truly trustless DEX deployed on the Vite chain. Vite\'s<br>next ambition is a universal cross-chain solution that allows<br>easy asset transfer between any two chains in a decentralized manner.<br><br><a href="https://www.vite.org/" target="_blank">Go to website</a><br><a href="https://twitter.com/vitelabs" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'TUSD',
                    title: 'EARN TUSD',
                    style: 'background-image: url(\'assets/images/wpools/tusd.png\')',
                    endString: '',
                    informationText: 'TrueUSD<br>TUSD is one of the world’s most trusted stablecoin,<br>independently attested live and on chain for 1:1 USD reserves,<br>with billions in monthly volume, nearly instant minting, no fees,<br>and direct-to-bank redemption.<br><br><a href="https://www.trusttoken.com/" target="_blank">Go to website</a><br><a href="https://twitter.com/tusd_official" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'ONT',
                    title: 'EARN ONT',
                    style: 'background-image: url(\'assets/images/wpools/ont.png\')',
                    endString: '',
                    informationText: 'Ontology<br>ONTO is the first truly decentralized, cross-chain wallet,<br>allowing users to securely manage their identities, data, and<br>digital assets. ONTO users can manage their crypto assets<br>(including NFTs), perform cross-chain swaps, keep up-to-date<br>with the latest industry latest developments and events via the<br>ONTO news feed, and enjoy access to a variety of dApps.<br>With ONTO Wallet, users can create an ONT ID, a decentralized<br>digital identity that fully protects their private data through an<br>encryption algorithm and enables one-click multi-chain wallet<br>address creation and management. Users worldwide can<br>download ONTO Wallet now via <a href="https://onto.app" target="_blank">onto.app</a> or their mobile app<br>store. Desktop users can also install ONTO Web Wallet for Google Chrome.<br><br><a href="https://ont.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/OntologyNetwork" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'DEP',
                    title: 'EARN DEP',
                    style: 'background-image: url(\'assets/images/wpools/dep.png\')',
                    endString: '',
                    informationText: 'DEAPCoin<br>DEAPcoin comes from DEA, a Singapore headquartered<br>blockchain-based multimedia digital entertainment group that<br>issues NFT and games, whose members are part of the<br>Blockchain Gaming Association.<br>With their traditional industrial network, DEA owns original IPs<br>drawn by more than 70 famous manga artists and original<br>content such as games and mangas.<br><br><a href="https://dea.sg/" target="_blank">Go to website</a><br><a href="https://twitter.com/PlayMining_SG" target="_blank">Twitter</a>',
                },
                {
                    currency: 'WEX',
                    earned: 'PLAY',
                    title: 'EARN PLAY',
                    style: 'background-image: url(\'assets/images/wpools/play.png\')',
                    endString: '',
                    informationText: 'PolyPlay<br>PolyPlay is the Gamers’ Gold Standard token with only<br>1,000,000 supply. PolyPlay is an eSports tournament<br>platform, full casino, and gaming launchpad with a store.<br>PolyPlay aims to be the go-to place for Blockchain and eSports Tournaments.<br><br><a href="https://polyplay.net/" target="_blank">Go to website</a><br><a href="https://twitter.com/PolyPlayCoin" target="_blank">Twitter</a>',
                    isNew: true,
                },
                {
                    currency: 'WEX',
                    earned: 'WIZARD',
                    title: 'EARN WIZARD',
                    style: 'background-image: url(\'assets/images/wpools/wizard.png\')',
                    endString: '',
                    informationText: 'Wizard<br>Wizard is a first-of-a-kind fantasy token and NFT marketplace<br>which brings a magical experience to all who behold it,<br>combining crypto with games for multiplied rewards!<br><br><a href="https://wizard.financial/" target="_blank">Go to website</a><br><a href="https://twitter.com/WIZARD_BSC" target="_blank">Twitter</a>',
                    isNew: true,
                },
            ],
            wpoolsStakedOnly: false,
            wpoolsSearch: '',
            /* STAKING */
            stakingAddress: '0x52a2B3BEAfA46BA51A4792793a7447396D09423f',
            stakingContract: null,
            stakingApproved: false,
            stakingPools: [{
                    i: 3,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT-BNB',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault-bnb.svg\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 6,
                    isFinished: true,
                },
                {
                    i: 0,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT',
                    title: '0 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 5,
                    isFinished: true,
                },
                {
                    i: 1,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT',
                    title: '7 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 4,
                    isFinished: true,
                },
                {
                    i: 2,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 3,
                    isFinished: true,
                },
                {
                    i: 4,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: new Date().getTime() / 1000 + Number(2592000),
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULTx',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21',
                    orderId: 1,
                },
                {
                    i: 5,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: new Date().getTime() / 1000 + Number(2592000),
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'EULER',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/farms/_EULER.png\')',
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x3920123482070C1a2dff73AaD695c60e7c6F6862',
                    orderId: 2,
                },
                {
                    i: 6,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: new Date().getTime() / 1000 + Number(2592000),
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WEX',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/farms/wex.png\')',
                    getHref: '       ',
                    orderId: 0,
                    isFinished: true,
                },
            ],
            lockedStakingStakedOnly: false,
            lockedStakingSearch: '',
            vaults: [{
                    disabled: false,
                    title: 'CAKE',
                    style: 'background-image: url(\'assets/images/vaults/cake.svg\')',
                    id: 'auto-cake',
                    tokenContractAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
                    tokenContract: null,
                    vaultContractAddress: '0x171a5efeFD1Af5f56bB2D6854CC63063D04B3F63',
                    vaultContract: null,
                    balance: 'N/A',
                    additionalRewards: 'N/A',
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    isApproved: false,
                    deposited: 'N/A',
                    decimals: 'ether',
                    tvl: 0,
                    apy: 0,
                    daily: 0,
                    subtitle: 'Pancake(AUTO)',
                    hasClaim: false,
                    currency: 'CAKE',
                    informationText: `Stake CAKE
Earn WAULT
0.1% Deposit Fee
Additional Rewards - Yes 
Claimable Rewards - No`,
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
                },
                {
                    disabled: true,
                    title: 'BUSD',
                    style: 'background-image: url(\'assets/images/vaults/busd.svg\')',
                    id: 'venus-busd',
                    tokenContractAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
                    tokenContract: null,
                    vaultContractAddress: '0x8dcc671f21B061dd276e9D84BFf151E858C6679c',
                    vaultContract: null,
                    balance: 'N/A',
                    additionalRewards: 'N/A',
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    isApproved: false,
                    deposited: 'N/A',
                    decimals: 'ether',
                    tvl: 0,
                    apy: 0,
                    daily: 0,
                    subtitle: 'Venus(AUTO)',
                    hasClaim: true,
                    currency: 'BUSD',
                    informationText: `Stake BUSD
Earn WAULT
No Fee
Additional Rewards - Yes
Claimable Rewards - Yes`,
                    getHref: 'https://     .finance/bsc/#/swap?outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
                },
                {
                    disabled: false,
                    title: 'BUSD/USDT/USDC',
                    style: 'background-image: url(\'assets/images/vaults/3eps.png\')',
                    id: 'ellipsis-3eps',
                    tokenContractAddress: '0xaf4de8e872131ae328ce21d909c74705d3aaf452',
                    tokenContract: null,
                    vaultContractAddress: '0x6844c5Df2C07dB22fF99E42cD70b7E4329f33ea3',
                    vaultContract: null,
                    balance: 'N/A',
                    additionalRewards: 'N/A',
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    isApproved: false,
                    deposited: 'N/A',
                    decimals: 'ether',
                    tvl: 0,
                    apy: 0,
                    daily: 0,
                    subtitle: 'Ellipsis',
                    hasClaim: false,
                    currency: 'EPS 3Pool',
                    informationText: `Stake EPS 3Pool LP
Earn EPS 3Pool LP
0.1% Withdraw Fee
0.5% Harvest Call Fee
2.5% Harvest Reward Fee
Additional Rewards - No`,
                    getHref: 'https://www.ellipsis.finance/3pool/deposit'
                },
            ],
            vaultsStakedOnly: false,
            vaultsSearch: '',
        };
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    },
    created: async function() {
        for (let i = 0; i < this.sections.length; i++) {
            if (this.sections[i].href == window.location.hash) this.selectedSection = i;
        }
        for (let i = 0; i < this.farms.length; i++) {
            this.farms[i].i = i;
            this.farms[i].apy = 0;
            this.farms[i].feeApr = 0;
            this.farms[i].amount = '0.00';
            this.farms[i].pendingRewards = 0;
            this.farms[i].depositAmount = '0.00';
            this.farms[i].withdrawAmount = '0.00';
            this.farms[i].totalValueLocked = 0;
            this.farms[i].balance = 0;
            this.farms[i].isApproved = false;
        }
        for (let i = 0; i < this.wpools.length; i++) {
            this.wpools[i].i = i;
            this.wpools[i].apy = 0;
            this.wpools[i].amount = '0.00';
            this.wpools[i].pendingRewards = 0;
            this.wpools[i].depositAmount = '0.00';
            this.wpools[i].withdrawAmount = '0.00';
            this.wpools[i].totalValueLocked = 0;
            this.wpools[i].balance = 0;
            this.wpools[i].isApproved = false;
        }
        document.getElementById('app').style.opacity = '';
        await new Promise(r => setTimeout(r, 1500));
        document.getElementById('preloader').style.display = 'none';
        this.Web3Modal = window.Web3Modal.default;
        this.WalletConnectProvider = window.WalletConnectProvider.default;
        this.init();
        if (sessionStorage.getItem('wallet')) {
            if (this.web3Modal.cachedProvider)
                this.onConnect();
        } else {
            this.web3Modal.clearCachedProvider();
        }
        this.dataLoad();
        setInterval(
            () => {
                this.dataLoad();
            }, 15000);
    },
    computed: {
        usdtOutputAmount: function() {
            if (Number(this.wusdInputAmount) == 0)
                return '0.00';
            return math.format(Number(this.wusdInputAmount) * (1000 - this.wusdWexPermille) / 1000 * Math.pow(10, 2) / Math.pow(10, 2), {
                notation: 'fixed'
            });
        },
        usdtReceiveAmount: function() {
            if (Number(this.wusdInputAmount) == 0)
                return '0.00';
            return math.format(Math.floor(Number(this.wusdInputAmount) * (1000 - Number(this.wusdWexPermille) - Number(this.wusdRedeemPermille)) / 1000 * Math.pow(10, 2)) / Math.pow(10, 2), {
                notation: 'fixed'
            });
        },
        wexReceiveAmount: function() {
            if (this.wusdWexBalance <= 0 || Number(this.wusdInputAmount) == 0)
                return '0.00';
            return math.format(Math.floor(Number(this.wusdWexBalance) * Number(this.wusdInputAmount) / Number(this.wusdTotalSupply) * Math.pow(10, 2)) / Math.pow(10, 2), {
                notation: 'fixed'
            });
        },
        wusdFeeOne: function() {
            if (Number(this.wusdInputAmount) == 0)
                return '0.00';
            return math.format(Math.ceil(Number(this.wusdInputAmount) * Number(this.wusdRedeemPermille) / 1000 * 0.71428571428 * Math.pow(10, 4)) / Math.pow(10, 4), {
                notation: 'fixed'
            });
        },
        wusdFeeTwo: function() {
            if (Number(this.wusdInputAmount) == 0)
                return '0.00';
            return math.format(Math.ceil(Number(this.wusdInputAmount) * Number(this.wusdRedeemPermille) / 1000 * 0.28571428571 * Math.pow(10, 4)) / Math.pow(10, 4), {
                notation: 'fixed'
            });
        },
        wexPerUsdt: function() {
            return math.format(Math.floor(1 / this.wexPrice * Math.pow(10, 2)) / Math.pow(10, 2), {
                notation: 'fixed'
            });
        },
        wusdPegPrice: function() {
            let usdtReceived = (1000 - this.wusdWexPermille) / 1000;
            let wexReceived = Number(this.wusdWexBalance) / Number(this.wusdTotalSupply) * this.wexPrice;
            return math.format(Math.floor((usdtReceived + wexReceived) * Math.pow(10, 4)) / Math.pow(10, 4), {
                notation: 'fixed'
            });
        },
        /*
        wusdReversePegPrice: function() {
            let usdtReceived = (1000 - this.wusdWexPermille) / 1000;
            let wexReceived = Number(this.wusdWexBalance) / Number(this.wusdTotalSupply) * this.wexPrice;
            return math.format(Math.floor(1 / (usdtReceived + wexReceived) * Math.pow(10, 4)) / Math.pow(10, 4), {
                notation: 'fixed'
            });
        },
        */
        selectedVaults: function() {
            let temp = this.vaults;
            if (this.vaultsStakedOnly)
                temp = temp.filter(x => Number(x.deposited) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.vaultsSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.vaultsSearch.toLowerCase()));
            if (this.sortBy === 'apr')
                temp = temp.sort((a, b) => Number(b.apy) - Number(a.apy));
            else if (this.sortBy === 'liquidity')
                temp = temp.sort((a, b) => Number(b.tvl) - Number(a.tvl));
            return temp;
        },
        selectedLockedStaking: function() {
            let temp = this.stakingPools;
            if (this.lockedStakingStakedOnly)
                temp = temp.filter(x => Number(x.amount) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.lockedStakingSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.lockedStakingSearch.toLowerCase()));
            if (this.sortBy === 'apr')
                temp = temp.sort((a, b) => Number(a.apy) - Number(b.apy));
            else if (this.sortBy === 'liquidity')
                temp = temp.sort((a, b) => Number(a.totalValueLocked) - Number(b.totalValueLocked));
            else
                temp = temp.sort((a, b) => Number(a.orderId) - Number(b.orderId));
            return temp;
        },
        selectedFarms: function() {
            let temp = this.farms;
            if (this.farmsStakedOnly)
                temp = temp.filter(x => Number(x.amount) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.farmsSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.farmsSearch.toLowerCase()));
            if (this.sortBy === 'apr')
                temp = temp.sort((a, b) => (Number(b.apy) + Number(b.feeApr)) - (Number(a.apy) + Number(a.feeApr)));
            else if (this.sortBy === 'liquidity')
                temp = temp.sort((a, b) => Number(b.totalValueLocked) - Number(a.totalValueLocked));
            else
                temp = temp.sort((a, b) => Number(a.orderId) - Number(b.orderId));
            return temp;
        },
        selectedWpools: function() {
            let temp = this.wpools;
            if (this.wpoolsStakedOnly)
                temp = temp.filter(x => Number(x.amount) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.wpoolsSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.wpoolsSearch.toLowerCase()));
            if (this.sortBy === 'apr')
                temp = temp.sort((a, b) => Number(b.apy) - Number(a.apy));
            else if (this.sortBy === 'liquidity')
                temp = temp.sort((a, b) => Number(b.totalValueLocked) - Number(a.totalValueLocked));
            else
                temp = temp.sort((a, b) => Number(b.endString === '0 days and 0 hours') - Number(a.endString === '0 days and 0 hours'));
            return temp.reverse();
        },
    },
    methods: {
        dataLoad: async function() {
            //RELOAD API DATA
            document.getElementsByTagName("body")[0].removeChild(scr4);
            scr4 = document.createElement("script");
            scr4.src = "https://api.wault.finance/realtimeData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr4);
            document.getElementsByTagName("body")[0].removeChild(scr5);
            scr5 = document.createElement("script");
            scr5.src = "https://api.wault.finance/vaultsData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr5);
            document.getElementsByTagName("body")[0].removeChild(scr8);
            scr8 = document.createElement("script");
            scr8.src = "https://api.wault.finance/farmsData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr8);
            document.getElementsByTagName("body")[0].removeChild(scr9);
            scr9 = document.createElement("script");
            scr9.src = "https://api.wault.finance/wpoolsData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr9);

            //USE IT
            for (let i = 0; i < this.wpools.length; i++) {
                if (wpoolsData[i].apy === null || wpoolsData[i].apy === undefined)
                    this.wpools[i].apy = 0;
                else
                    this.wpools[i].apy = wpoolsData[i].apy;
                if (wpoolsData[i].tvl === null || wpoolsData[i].tvl === undefined)
                    this.wpools[i].totalValueLocked = 0;
                else
                    this.wpools[i].totalValueLocked = wpoolsData[i].tvl;
                this.wpools[i].contractAddress = wpoolsData[i].contractAddress;
                this.wpools[i].endString = wpoolsData[i].endString;
                if (this.wpools[i].endString === '0 days and 0 hours')
                    this.wpools[i].apy = 0;
            }
            for (let i = 0; i < this.farms.length; i++) {
                if (farmsData[i].apy === null || farmsData[i].apy === undefined)
                    this.farms[i].apy = 0;
                else
                    this.farms[i].apy = farmsData[i].apy;
                if (farmsData[i].tvl === null || farmsData[i].tvl === undefined)
                    this.farms[i].totalValueLocked = 0;
                else
                    this.farms[i].totalValueLocked = farmsData[i].tvl;
                if (farmsData[i].feeApr === null || farmsData[i].feeApr === undefined)
                    this.farms[i].feeApr = 0;
                else
                    this.farms[i].feeApr = farmsData[i].feeApr;
                if (farmsData[i].lpPrice === null || farmsData[i].lpPrice === undefined)
                    this.farms[i].lpPrice = 0;
                else
                    this.farms[i].lpPrice = farmsData[i].lpPrice;
                this.farms[i].address = farmsData[i].address;
                this.farms[i].poolId = farmsData[i].poolId;
            }
            for (let i = 0; i < this.vaults.length; i++) {
                //this.vaults[i].apy = vaultsData[this.vaults[i].id].apy;
                this.vaults[i].tvl = vaultsData[this.vaults[i].id].tvl;
                //this.vaults[i].daily = vaultsData[this.vaults[i].id].daily;
            }
            //wex
            this.wexCirculation = realtimeData.wexCirculation;
            this.wexBurned = realtimeData.wexBurned;
            this.wexPrice = realtimeData.wexPrice;
            this.wexLpPrice = realtimeData.wexLpPrice;
            this.wswapVolume = realtimeData.wswapVolume;
            this.stakingPools[6].apy = realtimeData.wexStakingApy;
            this.stakingPools[6].totalValueLocked = realtimeData.wexStakingTvl;
            //waultx
            this.waultxPrice = realtimeData.waultxPrice;
            this.waultxApy = realtimeData.waultxApy;
            this.waultxTvl = realtimeData.waultxTvl;
            this.waultxLpPrice = realtimeData.waultxLpPrice;
            this.waultxCirculation = realtimeData.waultxCirculation;
            this.waultxBurned = realtimeData.waultxBurned;
            this.stakingPools[4].apy = realtimeData.waultxApy;
            this.stakingPools[4].totalValueLocked = realtimeData.waultxTvl;
            //wault
            this.waultTotalValueLocked = realtimeData.waultTotalValueLocked;
            this.totalTotalValueLocked = realtimeData.totalTotalValueLocked;
            this.waultPrice = realtimeData.waultPrice;
            this.waultLpPrice = realtimeData.waultLpPrice;
            this.waultCirculation = realtimeData.waultCirculation;
            this.waultMarketCap = realtimeData.waultMarketCap;
            this.lmTotalRewards = realtimeData.lmTotalRewards;
            //lm
            this.lm2TotalRewards = realtimeData.lm2TotalRewards;
            this.lm2LockedAmount = realtimeData.lm2LockedAmount;
            this.lm2TotalValueLocked = realtimeData.lm2TotalValueLocked;
            this.stakingPools[0].totalValueLocked = realtimeData.lm2TotalValueLocked;
            this.lm2Apy = realtimeData.lm2Apy;
            this.stakingPools[0].apy = realtimeData.lm2Apy;
            this.stakingPools[0].timeAvailable = this.lm2TimeAvailable;
            //EULER STAKING
            this.eulerStakingLockedAmount = realtimeData.eulerStakingLockedAmount;
            this.eulerStakingTotalValueLocked = realtimeData.eulerStakingTotalValueLocked;
            this.stakingPools[5].totalValueLocked = realtimeData.eulerStakingTotalValueLocked;
            this.eulerStakingApy = realtimeData.eulerStakingApy;
            this.stakingPools[5].apy = realtimeData.eulerStakingApy;
            this.stakingPools[5].timeAvailable = this.eulerStakingTimeAvailable;
            //EULER LM
            this.eulerLmTotalRewards = realtimeData.eulerLmTotalRewards;
            this.eulerLmLockedAmount = realtimeData.eulerLmLockedAmount;
            this.eulerLmTotalValueLocked = realtimeData.eulerLmTotalValueLocked;
            this.eulerLmApy = realtimeData.eulerLmApy;
            this.farms[7].totalValueLocked = realtimeData.eulerLmTotalValueLocked;
            this.farms[7].apy = realtimeData.eulerLmApy;
            //staking
            for (let i = 1; i < 4; i++) {
                this.stakingPools[i].totalDepositedAmount = realtimeData.stakingPools[i - 1].totalDepositedAmount;
                if (this.selectedAccount == null)
                    this.stakingPools[i].timeAvailable = realtimeData.stakingPools[i - 1].timeAvailable;
                this.stakingPools[i].apy = realtimeData.stakingPools[i - 1].apy;
                this.stakingPools[i].totalValueLocked = realtimeData.stakingPools[i - 1].totalValueLocked;
            }
            //WUSD
            this.wusdPrice = realtimeData.wusdPrice;
            this.wusdWexPermille = realtimeData.wusdWexPermille;
            this.wusdRedeemPermille = realtimeData.wusdRedeemPermille;
            this.wusdMintPermille = realtimeData.wusdMintPermille;
            this.wusdMaxStakeAmount = realtimeData.wusdMaxStakeAmount;
            this.wusdWexBalance = realtimeData.wusdWexBalance;
            this.wusdTotalSupply = realtimeData.wusdTotalSupply;
            try {
                if (this.selectedAccount != null)
                    this.fetchData();
                this.lastUpdate = new Date().toLocaleString();
            } catch (e) {
                console.log(e);
            }
            this.eulerPrice = realtimeData.eulerPrice;
            this.eulerLpPrice = realtimeData.eulerLpPrice;
        },
        init: function() {
            const providerOptions = {
                injected: {
                    display: {
                        name: 'Browser Injected',
                        description: 'Connect to your browser injected wallet',
                    },
                },
                walletconnect: {
                    package: this.WalletConnectProvider,
                    options: {
                        rpc: {
                            1: "https://bsc-dataseed.binance.org/",
                            56: "https://bsc-dataseed.binance.org/",
                        },
                    },
                },
                'custom-binance': {
                    display: {
                        name: 'Binance',
                        description: 'Connect to your Binance Chain Wallet',
                        logo: 'binance-wallet.png',
                    },
                    package: 'binance',
                    connector: async(ProviderPackage, options) => {
                        const provider = window.BinanceChain;
                        await provider.enable();
                        return provider;
                    },
                },
                /*
                'custom-onto': {
                    display: {
                        name: 'ONTO Wallet',
                        description: 'Connect to your ONTO Wallet',
                        logo: 'onto-wallet.png',
                    },
                    package: 'onto',
                    connector: async (ProviderPackage, options) => {
                        const provider = new window.OntoProvider();
                        return provider;
                    },
                }
                */
            };
            this.web3Modal = new this.Web3Modal({
                network: 'binance',
                cacheProvider: true,
                providerOptions,
                disableInjectedProvider: false,
            });
        },
        fetchData: async function() {
            let network = await this.web3.eth.net.getId();
            if (network != 56 && this.provider.chainId != '0x38') {
                Swal.fire(
                    'Wrong Network!',
                    'You currently have BSC selected in the app. Please change this selection or choose BSC in your web3 wallet.',
                    'error'
                );
                this.onDisconnect();
                return;
            }
            const accounts = await this.web3.eth.getAccounts();
            this.waultTokenContract = new this.web3.eth.Contract(waultAbi, this.waultTokenAddress);
            this.waultLpContract = new this.web3.eth.Contract(lpAbi, this.waultLpAddress);
            this.stakingContract = new this.web3.eth.Contract(stakingAbi, this.stakingAddress);
            this.waultxStakeContract = new this.web3.eth.Contract(stakingAbi, this.waultxStakeAddress);
            this.wexStakeContract = new this.web3.eth.Contract(stakingAbi, this.wexStakeAddress);
            this.waultxTokenContract = new this.web3.eth.Contract(erc20Abi, this.waultxTokenAddress);
            this.eulerStakingContract = new this.web3.eth.Contract(eulerStakingAbi, this.eulerStakingAddress);
            this.eulerTokenContract = new this.web3.eth.Contract(erc20Abi, this.eulerTokenAddress);
            this.wexContract = new this.web3.eth.Contract(erc20Abi, this.wexAddress);
            this.farmContract = new this.web3.eth.Contract(farmAbi, this.farmAddress);
            this.usdtTokenContract = new this.web3.eth.Contract(erc20Abi, this.usdtTokenAddress);
            this.wusdTokenContract = new this.web3.eth.Contract(erc20Abi, this.wusdTokenAddress);
            this.wusdMasterContract = new this.web3.eth.Contract(wusdMasterAbi, this.wusdMasterAddress);
            this.selectedAccount = accounts[0];
            this.walletButton = {
                text: this.addressShortener(accounts[0])
            };
            if (this.selectedSection == 0) {
                try {
                    this.waultBalance = await this.waultTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.waultBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.waultxSwapContract = new this.web3.eth.Contract(waultxSwapAbi, this.waultxSwapAddress);
                    let temp = await this.waultTokenContract.methods.allowance(this.selectedAccount, this.waultxSwapAddress).call();
                    this.waultxSwapApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.waultxBalance = await this.waultxTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.waultxBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultxBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.wexBalance = await this.wexContract.methods.balanceOf(this.selectedAccount).call();
                    this.wexBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.wexBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                } catch (e) {
                    console.log(e);
                }
            }
            if (this.selectedSection == 4) {
                try {
                    this.usdtTokenBalance = await this.usdtTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.usdtTokenBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.usdtTokenBalance)) * Math.pow(10, 2)) / Math.pow(10, 2), {
                        notation: 'fixed'
                    });
                    this.wexBalance = await this.wexContract.methods.balanceOf(this.selectedAccount).call();
                    this.wexBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.wexBalance)) * Math.pow(10, 2)) / Math.pow(10, 2), {
                        notation: 'fixed'
                    });
                    this.wusdTokenBalance = await this.wusdTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.wusdTokenBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.wusdTokenBalance)) * Math.pow(10, 2)) / Math.pow(10, 2), {
                        notation: 'fixed'
                    });
                    let temp = await this.usdtTokenContract.methods.allowance(this.selectedAccount, this.wusdMasterAddress).call();
                    this.isUsdtApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    temp = await this.wusdTokenContract.methods.allowance(this.selectedAccount, this.wusdMasterAddress).call();
                    this.isWusdApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                } catch (e) {
                    console.log(e);
                }
            }
            if (this.selectedSection == 5) {
                try {
                    this.waultBalance = await this.waultTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.waultBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    let temp = await this.waultTokenContract.methods.allowance(this.selectedAccount, this.stakingAddress).call();
                    this.stakingApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    for (let i = 1; i < 4; i++) {
                        this.stakingPools[i].balance = this.waultBalance;
                        this.stakingPools[i].isApproved = this.stakingApproved;
                        temp = await this.stakingContract.methods.poolInfo(i - 1).call();
                        let lockupDuration = temp.lockupDuration;
                        temp = await this.stakingContract.methods.userInfo(i - 1, this.selectedAccount).call();
                        this.stakingPools[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(temp.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                            notation: 'fixed'
                        });
                        if (Number(temp.lastClaim) > 0) {
                            this.stakingPools[i].timeAvailable = Number(temp.lastClaim) + Number(lockupDuration);
                        } else {
                            this.stakingPools[i].timeAvailable = realtimeData.stakingPools[i - 1].timeAvailable;
                        }
                        temp = await this.stakingContract.methods.pendingRewards(i - 1, this.selectedAccount).call();
                        this.stakingPools[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(temp)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                            notation: 'fixed'
                        });
                    }
                    this.lpBalance = await this.waultLpContract.methods.balanceOf(this.selectedAccount).call();
                    this.lpBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.lpBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.waultLpContract.methods.allowance(this.selectedAccount, this.lm2Address).call();
                    this.lm2Approved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.lm2Contract = new this.web3.eth.Contract(lm2Abi, this.lm2Address);
                    this.lm2Amount = await this.lm2Contract.methods.userInfo(this.selectedAccount).call();
                    this.lm2Amount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.lm2Amount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.lm2PendingRewards = await this.lm2Contract.methods.pendingRewards(this.selectedAccount).call();
                    this.lm2PendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.lm2PendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.lm2Contract.methods.userInfo(this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.lm2TimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.lm2TimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[0].amount = this.lm2Amount;
                    this.stakingPools[0].pendingRewards = this.lm2PendingRewards;
                    this.stakingPools[0].timeAvailable = this.lm2TimeAvailable;
                    this.stakingPools[0].balance = this.lpBalance;
                    this.stakingPools[0].isApproved = this.lm2Approved;
                    //WAULTx
                    this.waultxBalance = await this.waultxTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.waultxBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultxBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.waultxTokenContract.methods.allowance(this.selectedAccount, this.waultxStakeAddress).call();
                    this.waultxStakeApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.waultxStakeContract = new this.web3.eth.Contract(stakingAbi, this.waultxStakeAddress);
                    this.waultxStakeAmount = await this.waultxStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    this.waultxStakeAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultxStakeAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.waultxStakePendingRewards = await this.waultxStakeContract.methods.pendingRewards(0, this.selectedAccount).call();
                    this.waultxStakePendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultxStakePendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.waultxStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.waultxStakeTimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.waultxStakeTimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[4].amount = this.waultxStakeAmount;
                    this.stakingPools[4].pendingRewards = this.waultxStakePendingRewards;
                    this.stakingPools[4].timeAvailable = this.waultxStakeTimeAvailable;
                    this.stakingPools[4].balance = this.waultxBalance;
                    this.stakingPools[4].isApproved = this.waultxStakeApproved;
                    //EULER STAKING
                    this.eulerTokenBalance = await this.eulerTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.eulerTokenBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerTokenBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.eulerTokenContract.methods.allowance(this.selectedAccount, this.eulerStakingAddress).call();
                    this.eulerStakingApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.eulerStakingAmount = await this.eulerStakingContract.methods.userInfo(0, this.selectedAccount).call();
                    this.eulerStakingAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerStakingAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.eulerStakingPendingRewards = await this.eulerStakingContract.methods.pendingRewards(0, this.selectedAccount).call();
                    this.eulerStakingPendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerStakingPendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.eulerStakingContract.methods.userInfo(0, this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.eulerStakingTimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.eulerStakingTimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[5].amount = this.eulerStakingAmount;
                    this.stakingPools[5].pendingRewards = this.eulerStakingPendingRewards;
                    this.stakingPools[5].timeAvailable = this.eulerStakingTimeAvailable;
                    this.stakingPools[5].balance = this.eulerTokenBalance;
                    this.stakingPools[5].isApproved = this.eulerStakingApproved;
                    //WEX STAKING
                    this.wexBalance = await this.wexContract.methods.balanceOf(this.selectedAccount).call();
                    this.wexBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.wexBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.wexContract.methods.allowance(this.selectedAccount, this.wexStakeAddress).call();
                    this.wexStakeApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.wexStakeContract = new this.web3.eth.Contract(stakingAbi, this.wexStakeAddress);
                    this.wexStakeAmount = await this.wexStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    this.wexStakeAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.wexStakeAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.wexStakePendingRewards = await this.wexStakeContract.methods.pendingRewards(0, this.selectedAccount).call();
                    this.wexStakePendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.wexStakePendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.wexStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.wexStakeTimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.wexStakeTimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[6].amount = this.wexStakeAmount;
                    this.stakingPools[6].pendingRewards = this.wexStakePendingRewards;
                    this.stakingPools[6].timeAvailable = this.wexStakeTimeAvailable;
                    this.stakingPools[6].balance = this.wexBalance;
                    this.stakingPools[6].isApproved = this.wexStakeApproved;
                } catch (e) {
                    console.log(e);
                }
            }
            if (this.selectedSection == 6) {
                for (let i = 0; i < this.vaults.length; i++) {
                    this.vaults[i].tokenContract = new this.web3.eth.Contract(erc20Abi, this.vaults[i].tokenContractAddress);
                    this.vaults[i].vaultContract = new this.web3.eth.Contract(vaultsAbi[this.vaults[i].id], this.vaults[i].vaultContractAddress);
                    this.vaults[i].balance = await this.vaults[i].tokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.vaults[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.vaults[i].balance, this.vaults[i].decimals)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    let temp = await this.vaults[i].tokenContract.methods.allowance(this.selectedAccount, this.vaults[i].vaultContractAddress).call();
                    this.vaults[i].isApproved = this.web3.utils.fromWei(temp, this.vaults[i].decimals) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));

                    if (this.vaults[i].id !== 'venus-busd')
                        temp = await this.vaults[i].vaultContract.methods.getPricePerFullShare().call();
                    else
                        temp = (await this.vaults[i].vaultContract.methods.balanceOfRewards(this.selectedAccount).call())._rewards;

                    this.vaults[i].deposited = await this.vaults[i].vaultContract.methods.balanceOf(this.selectedAccount).call();

                    if (this.vaults[i].id !== 'venus-busd')
                        this.vaults[i].deposited = Number(this.web3.utils.fromWei(temp)) * Number(this.web3.utils.fromWei(this.vaults[i].deposited));
                    else
                        this.vaults[i].deposited = Number(this.web3.utils.fromWei(temp)) + Number(this.web3.utils.fromWei(this.vaults[i].deposited));

                    if (this.vaults[i].id === 'ellipsis-3eps')
                        this.vaults[i].additionalRewards = null;
                    else if (this.vaults[i].id !== 'venus-busd')
                        this.vaults[i].additionalRewards = await this.vaults[i].vaultContract.methods.pendingReward(this.selectedAccount).call();
                    else
                        this.vaults[i].additionalRewards = (await this.vaults[i].vaultContract.methods.balanceOfRewards(this.selectedAccount).call())._waults;
                    if (this.vaults[i].additionalRewards !== null)
                        this.vaults[i].additionalRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.vaults[i].additionalRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                            notation: 'fixed'
                        });
                }
            }
            if (this.selectedSection == 2) {
                try {
                    //FARMS
                    for (let i = 0; i < this.farms.length; i++) {
                        if (i == 7) continue;
                        this.farmContract.methods.userInfo(this.farms[i].poolId, this.selectedAccount).call().then((value) => {
                            if (i == 13)
                                this.farms[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(value.amount)) * Math.pow(10, 6)) / Math.pow(10, 6), {
                                    notation: 'fixed'
                                });
                            else
                                this.farms[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(value.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                        });
                    }
                    for (let i = 0; i < this.farms.length; i++) {
                        if (i == 7) continue;
                        let contract = new this.web3.eth.Contract(erc20Abi, this.farms[i].address);
                        contract.methods.balanceOf(this.selectedAccount).call().then((value) => {
                            if (i == 13)
                                this.farms[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 6)) / Math.pow(10, 6), {
                                    notation: 'fixed'
                                });
                            else
                                this.farms[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                        });
                        contract.methods.allowance(this.selectedAccount, this.farmAddress).call().then((value) =>
                            this.farms[i].isApproved = this.web3.utils.fromWei(value) >= this.web3.utils.fromWei('1' + (Array(78).join('0'))));
                        this.farmContract.methods.pendingWex(this.farms[i].poolId, this.selectedAccount).call().then((value) =>
                            this.farms[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                notation: 'fixed'
                            }));
                    }

                    this.eulerLpContract = new this.web3.eth.Contract(erc20Abi, this.eulerLpAddress);
                    this.eulerLpBalance = await this.eulerLpContract.methods.balanceOf(this.selectedAccount).call();
                    this.eulerLpBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerLpBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    let temp = await this.eulerLpContract.methods.allowance(this.selectedAccount, this.eulerLmAddress).call();
                    this.eulerLmApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.eulerLmContract = new this.web3.eth.Contract(eulerLmAbi, this.eulerLmAddress);
                    this.eulerLmAmount = await this.eulerLmContract.methods.userInfo(this.selectedAccount).call();
                    this.eulerLmAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerLmAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.eulerLmPendingRewards = await this.eulerLmContract.methods.pendingRewards(this.selectedAccount).call();
                    if (Number(this.web3.utils.fromWei(this.eulerLmPendingRewards)) > 1000000)
                        this.eulerLmPendingRewards = '0';
                    this.eulerLmPendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerLmPendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.farms[7].amount = this.eulerLmAmount;
                    this.farms[7].pendingRewards = this.eulerLmPendingRewards;
                    this.farms[7].balance = this.eulerLpBalance;
                    this.farms[7].isApproved = this.eulerLmApproved;

                } catch (e) {
                    console.error(e);
                }
            }
            if (this.selectedSection == 3) {
                try {
                    //WPOOLS
                    for (let i = 0; i < this.wpools.length; i++) {
                        let contract = new this.web3.eth.Contract(wpoolAbi, this.wpools[i].contractAddress);

                        contract.methods.userInfo(this.selectedAccount).call().then((value) =>
                            this.wpools[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(value.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                notation: 'fixed'
                            }));

                        this.wexContract.methods.balanceOf(this.selectedAccount).call().then((value) =>
                            this.wpools[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                notation: 'fixed'
                            }));

                        this.wexContract.methods.allowance(this.selectedAccount, this.wpools[i].contractAddress).call().then((value) =>
                            this.wpools[i].isApproved = this.web3.utils.fromWei(value) >= this.web3.utils.fromWei('1' + (Array(78).join('0'))));

                        contract.methods.pendingRewards(this.selectedAccount).call().then((value) => {
                            if (this.wpools[i].earned == 'HFS')
                                this.wpools[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(value, 'mwei')) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                            else
                                this.wpools[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                        });
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        },
        onConnect: async function() {
            try {
                this.provider = await this.web3Modal.connect();
                sessionStorage.setItem('wallet', 'connected');
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
            this.web3 = new Web3(this.provider);
            let network = await this.web3.eth.net.getId();
            if (network != 56 && this.provider.chainId != '0x38') {
                try {
                    let BSC = {
                        chainId: '0x38',
                        chainName: 'Binance Smart Chain',
                        nativeCurrency: {
                            name: 'Binance Coin',
                            symbol: 'BNB',
                            decimals: 18,
                        },
                        rpcUrls: ['https://bsc-dataseed.binance.org'],
                        blockExplorerUrls: ['https://bscscan.com'],
                    };
                    await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [BSC]
                    });
                } catch (error) {
                    console.log(error);
                }
            }

            this.provider.on("accountsChanged", (accounts) => {
                this.fetchData();
            });
            this.provider.on("chainChanged", (chainId) => {
                this.fetchData();
            });
            this.provider.on("networkChanged", (networkId) => {
                this.fetchData();
            });

            await this.fetchData();
        },
        onDisconnect: async function() {
            if (this.provider.close) {
                await this.provider.close();
                this.provider = null;
            }
            sessionStorage.removeItem('wallet');
            await this.web3Modal.clearCachedProvider();
            this.selectedAccount = null;
            this.walletButton = {
                text: 'Connect Wallet'
            };
        },
        addressShortener: function(address, length = 15) {
            return address.slice(0, length / 2) + '...' + address.slice(-(length / 2 + length % 2));
        },
        walletButtonClick: function() {
            if (this.selectedAccount)
                this.onDisconnect();
            else
                this.onConnect();
        },
        waultxSwapApprove: async function() {
            try {
                await this.waultTokenContract.methods.approve(this.waultxSwapAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        waultxSwapExecute: async function() {
            try {
                let amount = this.web3.utils.toWei(this.waultxSwapAmount.toString());
                this.waultxSwapAmount = '0.00';
                await this.waultxSwapContract.methods.swap(amount).send({
                    'from': this.selectedAccount
                });
            } catch (e) {
                console.log(e);
            }
        },
        lm2Approve: async function(stake) {
            try {
                await this.waultLpContract.methods.approve(this.lm2Address, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        lm2Withdraw: async function(stake) {
            try {
                //let amount = this.web3.utils.toWei(stake.withdrawAmount);
                let amount = this.web3.utils.toWei(stake.amount.toString());
                stake.withdrawAmount = 0;
                await this.lm2Contract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        lm2Claim: async function(stake) {
            try {
                await this.lm2Contract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        lm2Deposit: async function(stake) {
            try {
                let amount = this.web3.utils.toWei(stake.depositAmount.toString());
                stake.depositAmount = 0;
                await this.lm2Contract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmApprove: async function(farm) {
            try {
                await this.eulerLpContract.methods.approve(this.eulerLmAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmWithdraw: async function(farm) {
            try {
                let amount = this.web3.utils.toWei(farm.withdrawAmount.toString());
                farm.withdrawAmount = 0;
                await this.eulerLmContract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmDeposit: async function(farm) {
            try {
                let amount = this.web3.utils.toWei(farm.depositAmount.toString());
                farm.depositAmount = 0;
                await this.eulerLmContract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmClaim: async function(farm) {
            try {
                await this.eulerLmContract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        farmApprove: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmApprove(farm);
                return;
            }
            try {
                let contract = new this.web3.eth.Contract(erc20Abi, farm.address);
                await contract.methods.approve(this.farmAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        farmWithdraw: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmWithdraw(farm);
                return;
            }
            try {
                let amount = this.web3.utils.toWei(farm.withdrawAmount.toString());
                farm.withdrawAmount = 0;
                await this.farmContract.methods.withdraw(farm.poolId, amount, false).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        farmClaim: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmClaim(farm);
                return;
            }
            try {
                await this.farmContract.methods.claim(farm.poolId).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        farmDeposit: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmDeposit(farm);
                return;
            }
            try {
                let amount = this.web3.utils.toWei(farm.depositAmount.toString());
                farm.depositAmount = 0;
                await this.farmContract.methods.deposit(farm.poolId, amount, false).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolApprove: async function(wpool) {
            try {
                await this.wexContract.methods.approve(wpool.contractAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolWithdraw: async function(wpool) {
            try {
                let contract = new this.web3.eth.Contract(wpoolAbi, wpool.contractAddress);
                let amount = this.web3.utils.toWei(wpool.withdrawAmount.toString());
                wpool.withdrawAmount = 0;
                await contract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolClaim: async function(wpool) {
            try {
                let contract = new this.web3.eth.Contract(wpoolAbi, wpool.contractAddress);
                await contract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolDeposit: async function(wpool) {
            try {
                let contract = new this.web3.eth.Contract(wpoolAbi, wpool.contractAddress);
                let amount = this.web3.utils.toWei(wpool.depositAmount.toString());
                wpool.depositAmount = 0;
                await contract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        stakeApprove: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Approve(stake);
                return;
            }
            try {
                if (stake.i == 4) {
                    await this.waultxTokenContract.methods.approve(this.waultxStakeAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    await this.eulerTokenContract.methods.approve(this.eulerStakingAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    await this.wexContract.methods.approve(this.wexStakeAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.waultTokenContract.methods.approve(this.stakingAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                }
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        stakeWithdraw: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Withdraw(stake);
                return;
            }
            try {
                //let amount = this.web3.utils.toWei(stake.withdrawAmount);
                let amount = this.web3.utils.toWei(stake.amount.toString());
                if (stake.i == 4) {
                    amount = this.web3.utils.toWei(stake.withdrawAmount.toString());
                    await this.waultxStakeContract.methods.withdraw(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    amount = this.web3.utils.toWei(stake.withdrawAmount.toString());
                    await this.eulerStakingContract.methods.withdraw(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    amount = this.web3.utils.toWei(stake.withdrawAmount.toString());
                    await this.wexStakeContract.methods.withdraw(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.stakingContract.methods.withdraw(stake.i, amount).send({
                        'from': this.selectedAccount
                    });
                }
                stake.withdrawAmount = 0;
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        stakeClaim: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Claim(stake);
                return;
            }
            try {
                if (stake.i == 4) {
                    await this.waultxStakeContract.methods.claim(0).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    await this.eulerStakingContract.methods.claim(0).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    await this.wexStakeContract.methods.claim(0).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.stakingContract.methods.claim(stake.i).send({
                        'from': this.selectedAccount
                    });
                }
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        stakeDeposit: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Deposit(stake);
                return;
            }
            try {
                let amount = this.web3.utils.toWei(stake.depositAmount.toString());
                stake.depositAmount = 0;
                if (stake.i == 4) {
                    await this.waultxStakeContract.methods.deposit(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    await this.eulerStakingContract.methods.deposit(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    await this.wexStakeContract.methods.deposit(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.stakingContract.methods.deposit(stake.i, amount).send({
                        'from': this.selectedAccount
                    });
                }
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        formatNumber: function(n, digits = 2) {
            n = n.toString();
            let splitted = n.split('.');
            let result = '';

            if (n == 'N/A')
                return n;

            if (splitted.length < 2 && digits != 0)
                return splitted[0] + ".00";

            let digitsCount = 0;
            for (let i = splitted[0].length - 1; i >= 0; i--) {
                if (splitted[0][i] == ',')
                    continue;
                if (digitsCount != 0 && digitsCount % 3 == 0)
                    result = ',' + result;
                result = splitted[0][i] + result;
                digitsCount += 1;
            }
            if (splitted.length > 1 && digits > 0)
                result = result + '.' + splitted[1].slice(0, digits);


            return result;
        },
        vaultApprove: async function(vault) {
            try {
                await vault.tokenContract.methods.approve(vault.vaultContractAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        vaultDeposit: async function(vault) {
            try {
                let amount = this.web3.utils.toWei(vault.depositAmount.toString(), vault.decimals);
                vault.depositAmount = 0;
                await vault.vaultContract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        vaultWithdraw: async function(vault) {
            try {
                let balance = this.web3.utils.fromWei(await vault.vaultContract.methods.balanceOf(this.selectedAccount).call());
                let amount;
                if (balance > vault.withdrawAmount || vault.id !== 'ellipsis-3eps')
                    amount = this.web3.utils.toWei(vault.withdrawAmount.toString());
                else
                    amount = this.web3.utils.toWei(balance.toString());
                vault.withdrawAmount = 0;
                await vault.vaultContract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        vaultClaim: async function(vault) {
            try {
                await vault.vaultContract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        farmSetDepositAmount: function(i, e) {
            let el = e.target;
            this.farms[i].depositAmount = this.farms[i].balance;
            $(el).prev('input').val(this.farms[i].balance);
        },
        farmSetWithdrawAmount: function(i, e) {
            let el = e.target;
            this.farms[i].withdrawAmount = this.farms[i].amount;
            $(el).prev('input').val(this.farms[i].amount);
        },
        wpoolSetDepositAmount: function(i, e) {
            let el = e.target;
            this.wpools[i].depositAmount = this.wpools[i].balance;
            $(el).prev('input').val(this.wpools[i].balance);
        },
        wpoolSetWithdrawAmount: function(i, e) {
            let el = e.target;
            this.wpools[i].withdrawAmount = this.wpools[i].amount;
            $(el).prev('input').val(this.wpools[i].amount);
        },
        goToSwap: async function() {
            document.getElementById('preloader').style.display = 'flex';
            await new Promise(r => setTimeout(r, 1500));
            window.location.href = 'https://     .finance/bsc/index.html';
        },
        changeNetwork: async function(newNetwork) {
            if (newNetwork == 'polygon') {
                window.location.href = '/polygon/index.html';
            }
        },
        getCookies: function() {
            return window.$cookies;
        },
        changeSort: function(newSort) {
            this.sortBy = newSort;
        },
        usdtApprove: async function() {
            try {
                await this.usdtTokenContract.methods.approve(this.wusdMasterAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        wusdMint: async function() {
            try {
                let amount = this.web3.utils.toWei(this.usdtInputAmount.toString());
                this.usdtInputAmount = 0;
                await this.wusdMasterContract.methods.stake(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        wusdApprove: async function() {
            try {
                await this.wusdTokenContract.methods.approve(this.wusdMasterAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        wusdRedeem: async function() {
            try {
                let amount = this.web3.utils.toWei(this.wusdInputAmount.toString());
                this.wusdInputAmount = 0;
                await this.wusdMasterContract.methods.redeem(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
    },
};

const vm = Vue.createApp(APP).mount('#app');