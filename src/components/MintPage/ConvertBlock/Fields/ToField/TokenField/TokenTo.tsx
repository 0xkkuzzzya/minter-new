import styled from "styled-components";
import { usePairStore } from "../../../../../../hooks/usePairStore";
import { STABLE_INFO_QASSETS, TOKEN_INFO_COLLATERAL, TokenType } from "../../../../../../constants/tokens";
import { useTokenFrom, useTokenTo } from "../../../../../../hooks/useToken";
import { useEffect, useState } from "react";
import { QUBE_TESTNET_INFO } from "../../../../../../constants";
import { useAmountInStore, useAmountOutStore } from "../../../../../../hooks/useAmountStore";
import { useToggleTheme } from "../../../../../../hooks/useToggleTheme";

const Field = styled.div <{BorderField: string}>`
    width: 100%;
    height: 60px;
    border: ${props => props.BorderField};
    border-radius: 15px;
    display: flex;
    align-items: center;
`

const StableLogo = styled.img`
    width: 35px;
    margin-left: 10px;
`

const StableAmountBlock = styled.div`
    width: 70%;
    height: 100%;
    text-align: right;
    display: flex;
    align-items: center;
`

const StableAmountOut = styled.a <{TextColor: string}>`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    font-size: 20px;
    color: ${props => props.TextColor};
    margin-right: 10px;
`

const StableName = styled.a <{TextColor: string}>`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.TextColor};
    margin-left: 5px;
`

async function getAmountOutByAmountIn(PairId: string, restUrl: string, inp: number, action: string, old: string, dec: number): Promise<string> {
    try {
        if (inp == 0) {
            return "0"
        }
        let res = await fetch(restUrl + `/core/stable/v1beta1/getAmountOutByAmountIn/${PairId}/${(inp * 10**dec).toFixed(0)}/${action}`)
        let amountOut = await res.json()
        return (Number(amountOut.amountOut) / 10 ** 6).toFixed(2)
    } catch {
        return old
    }
}


export const TokenTo = () => {

    const [pairs, setPairs] = usePairStore();
    const [tokenTo, setTokenTo] = useTokenTo();
    const [amtIn, setAmtIn] = useAmountInStore();
    const [amtOut, setAmtOut] = useAmountOutStore();
    const [amt, setAmt] = useState('');
    const [tokenFrom, setTokenFrom] = useTokenFrom();
    const [theme, setTheme] = useToggleTheme()

    pairs.map((pair) => {
        STABLE_INFO_QASSETS.map((token) => {
            if (pair.displayOut == token.Base) {
                pair.logoOut = tokenTo.logo
                pair.displayOut = token.Base
            }
        })
    })

    let pair = ""
    
    let action = ""

    pairs.map((pairs) => {
        pair = pairs.pairId
    })

    let tokenInfoFrom = (tokenFrom.type == "collateral" ? TOKEN_INFO_COLLATERAL : STABLE_INFO_QASSETS).find((token: any) => token.Base == tokenFrom.display)

    action = (tokenInfoFrom?.Type == TokenType.collateral ? "mint" : "burn");

    console.log(tokenFrom)
    
    useEffect(() => {
        console.log(tokenFrom.type)
        const timeoutId = setTimeout(() =>
            getAmountOutByAmountIn(pair, QUBE_TESTNET_INFO.rest, Number(amtIn.amt), String(action), amt, Number(tokenInfoFrom?.Decimals))
                .then(amountOut => {
                    Number.isNaN(Number(amountOut)) ? setAmtOut({ amt: "0" }) : setAmtOut({ amt: amountOut })
                }),
            1500);
            
        return () => clearTimeout(timeoutId);
    }, [amtIn, action, tokenInfoFrom, pair]);

    const Token = pairs.map((pair) =>
        <Field BorderField={theme.BorderField}>
            <StableLogo src={pair.logoOut}/>
            <StableName TextColor={theme.TextColor}>{tokenTo.display}</StableName>
            <StableAmountBlock>
                <StableAmountOut TextColor={theme.TextColor}>{amtOut.amt}</StableAmountOut>
            </StableAmountBlock>
        </Field>
    )

    return (
        <>
            {Token}
        </>
    )
}