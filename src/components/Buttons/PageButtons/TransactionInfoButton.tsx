import styled from 'styled-components'
import { useState } from "react";
import { QUBE_TESTNET_INFO } from '../../../constants'
import { useAccordionStore } from '../../../hooks/useAccordionStore';
import { useToggleTheme } from '../../../hooks/useToggleTheme';
import { useTokenFrom, useTokenTo } from '../../../hooks/useToken';
import ArrowWhite from '../../../assets/webp/ArrowWhite.svg'
import ArrowBlack from '../../../assets/webp/ArrowBlack.svg'


const ButtonInfoMain = styled.button <{ TextColor: string }>`
    width: 100%;
    cursor: pointer;
    font-family: 'Metropolis', sans-serif;
    border: none;
    background: transparent;
    font-weight: 600;
    font-size: 17px;
    color: ${props => props.TextColor};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 0;
`

const InfoImg = styled.svg <{ ArrrowColor: string }> `
    background: url(${props => props.ArrrowColor});
    width: 13px;
    height: 13px;
    border: 0px;
    stroke: none;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 5px;
    cursor: pointer;
`

async function getPriceByDenom(denom: string, restUrl: string): Promise<number> {
    var price = await fetch(restUrl + `/core/oracle/v1beta1/denoms/${denom}/exchange_rate`)
    var pricejson = await price.json()
    return Number(pricejson.exchange_rate)
}

async function getPrice(tokenFrom: any, oldPrice: string, tokenTo: any,) {
    if (tokenFrom.type == "collateral") {
        let data = await getPriceByDenom(tokenFrom.display, QUBE_TESTNET_INFO.rest)
        return data.toFixed(3)
    } else if (tokenFrom.type == "qAsset") {
        let data = await getPriceByDenom(tokenTo.display, QUBE_TESTNET_INFO.rest)
        return (1 / data).toFixed(3)
    }
    return "0"
}

export const TransactionInfoButton = () => {
    const [tokenFrom, _] = useTokenFrom();
    const [tokenTo, set] = useTokenTo();
    const [price, setPrice] = useState('');
    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    let ButtonInfoMainV = <ButtonInfoMain TextColor={theme.TextColor}></ButtonInfoMain>;

    if (tokenTo.base != "Select token" && tokenTo.logo != "") {
        try {
            getPrice(tokenFrom, price, tokenTo).then(price => setPrice(price))
        } catch { }
        ButtonInfoMainV = <ButtonInfoMain TextColor={theme.TextColor}>
            1 {tokenFrom.base} = {price} {tokenTo.base}
        </ButtonInfoMain>
    }

    function openInfoBlock() {
        if (accordion.active == false) {
            setAccordion({
                active: true,
                height: '110px'
            })
        } else if (accordion.active == true) {
            setAccordion({
                active: false,
                height: '0px'
            })
        }
    }

    return (
        <ButtonInfoMain TextColor={theme.TextColor} onClick={openInfoBlock}>
            <ButtonInfoMain TextColor={theme.TextColor}>
                1 {tokenFrom.display} = {price} {tokenTo.display}
                <InfoImg ArrrowColor={theme.active == true ? ArrowWhite : ArrowBlack}></InfoImg>
            </ButtonInfoMain>
        </ButtonInfoMain>
    )
}