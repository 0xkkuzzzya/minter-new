import styled from 'styled-components'
import { useWallet } from '../../../hooks/useWallet';
import { useAmountInStore } from '../../../hooks/useAmountStore';
import { swap } from '../../../functions/swap';
import { useClient } from '../../../hooks/useClient';
import { useShowAlert, useShowWalletModal } from '../../../hooks/useShowModal';
import { useState } from 'react';
import { TOKEN_INFO_COLLATERAL, STABLE_INFO_QASSETS } from '../../../constants';
import { Coin, useBalancesStore } from '../../../hooks/useBalanceStore';
import { UpdateBalances } from '../../../connection/balances';
import { useAlertStore } from '../../../hooks/useAlertStore';
import { useTokenFrom, useTokenTo } from '../../../hooks/useToken';


const ConvertSwapButton = styled.div `
    width:100%;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    background: linear-gradient(to right, #7cc2fe, #2c96ff);
    margin-top: 25px;
    border-radius: 5px;
    color: black;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
`

const ConvertSwapButtonNonActive = styled.div `
    width: 100%;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    background: #757575;
    margin-top: 25px;
    border-radius: 5px;
    color: black;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 40px;
`

const ButtonSwapText = styled.a`
   font-weight: 500;
   font-size: 19px;
`

const getBalance = (balances: Array<Coin>, denom: string) => {
    let res: string = "0";
    balances.map((coin) => {
        if(coin.denom == denom) {
            res = coin.amt;
        }
    })
    return (Number(res) / 10 ** 6).toFixed(3) == "0.000" ? "0" : (Number(res) / 10 ** 6).toFixed(3)
}

export const SwapButton = () => {
    const [wallet, _ ] = useWallet();
    const [amtIn, s ] = useAmountInStore();
    const [tokenFrom, s1 ] = useTokenFrom();
    const [tokenTo, s3 ] = useTokenTo();
    const [client, s4] = useClient();
    const [walletModalStatus, setWalletModalStatus] = useShowWalletModal();
    const [balance, setBalance] = useState('');
    const [balances, setBalances] = useBalancesStore();
    const [alertStore, setAlertStore] = useAlertStore();
    const [showAlerts, setShowAlerts] = useShowAlert();

    async function update() {
        let blns = await UpdateBalances(wallet, balances);
        let tokens = tokenFrom.type == "collateral" ? TOKEN_INFO_COLLATERAL : STABLE_INFO_QASSETS;
        let tokenInfo = tokens.find((token) => token.Base == tokenFrom.display)
        setBalance(getBalance(blns, String(tokenInfo?.Denom)))
    }

    let button;
    if (wallet.init == false) {
        button = <ConvertSwapButtonNonActive onClick={() => {setWalletModalStatus({b: true})}}><ButtonSwapText>Connect wallet</ButtonSwapText> </ConvertSwapButtonNonActive>
    } else {
        update();
        if (amtIn.amt == "" || amtIn.amt == "0") {
            button = <ConvertSwapButtonNonActive><ButtonSwapText>Enter {tokenFrom.display} amount</ButtonSwapText> </ConvertSwapButtonNonActive>
        } else if (Number(amtIn.amt) > Number(balance)) {
            button = <ConvertSwapButtonNonActive><ButtonSwapText>Insufficient {tokenFrom.display} balance</ButtonSwapText> </ConvertSwapButtonNonActive>
        } else {
            button = <ConvertSwapButton onClick={() => {swap(amtIn, tokenFrom, tokenTo, wallet, client).then((alert) => {alertStore.push(alert); setShowAlerts({b: true})})}}><ButtonSwapText>Swap</ButtonSwapText> </ConvertSwapButton>
        }
    }

    return(
        <>{button}</>
    )
}