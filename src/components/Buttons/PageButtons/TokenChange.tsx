import styled from 'styled-components'
import ConvertSwap from '../../../assets/webp/ConvertSwap.svg'
import { useAmountInStore, useAmountOutStore } from '../../../hooks/useAmountStore'
import { usePairStore } from '../../../hooks/usePairStore'
import { useTokenFrom, useTokenTo } from '../../../hooks/useToken'

const TokenChangeDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    margin-top: 11.2em;
`

const SwapImage = styled.svg <{ConvertLogo: string}>`
    background: url(${props => props.ConvertLogo});
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: contain;
`

export const TokenChange = () => {

    const [pairs, setPairs] = usePairStore();
    const [amountIn, setAmountIn] = useAmountInStore();
    const [amountOut, setAmountOut] = useAmountOutStore();
    const [tokenFrom, setTokenFrom] = useTokenFrom();
    const [tokenTo, setTokenTo] = useTokenTo();

    let Handler = async () => {
        let oldTokenFrom = tokenFrom
        setTokenFrom({
            logo: tokenTo.logo,
            base: tokenTo.base,
            display: tokenTo.display,
            type: tokenTo.type
        })
        setTokenTo({
            logo: oldTokenFrom.logo,
            base: oldTokenFrom.base,
            display: oldTokenFrom.display,
            type: oldTokenFrom.type
        })

        let oldAmountIn = amountIn
        setAmountIn(amountOut);
        setAmountOut(oldAmountIn);
    }

    return(
        <TokenChangeDiv onClick={Handler}>
            <SwapImage ConvertLogo={ConvertSwap}></SwapImage>
        </TokenChangeDiv>
    )
}