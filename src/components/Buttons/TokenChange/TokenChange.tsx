import styled from 'styled-components'
import ConvertSwap from '../../../assets/webp/TokenChange.webp'
import { useAmountInStore } from '../../../hooks/useAmountInStore'
import { usePairStore } from '../../../hooks/usePairStore'
import { useTokenFrom, useTokenTo } from '../../../hooks/useToken'

const TokenChangeDiv = styled.div `
    width:85%;
    height:50px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const SwapImage = styled.img <{ConvertLogo: string}>`
    background: url(${props => props.ConvertLogo});
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;
`

export const TokenChange = () => {

    const [pairs, setPairs] = usePairStore();
    const [amtIn, setAmtIn] = useAmountInStore();
    const [tokenFrom, setTokenFrom] = useTokenFrom();
    const [tokenTo, setTokenTo] = useTokenTo();

    let Handler = async () => {
        pairs.map((token) => {
            token.displayOut = token.displayIn
        })

        console.log(pairs)
    }

    return(
        <TokenChangeDiv onClick={Handler}>
            <SwapImage ConvertLogo={ConvertSwap}></SwapImage>
        </TokenChangeDiv>
    )
}