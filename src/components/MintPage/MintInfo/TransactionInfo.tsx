import styled from 'styled-components'
import { useAccordionStore } from '../../../hooks/useAccordionStore'
import { useToggleTheme } from '../../../hooks/useToggleTheme'
import { QUBE_TESTNET_INFO, TOKEN_INFO_COLLATERAL, STABLE_INFO_QASSETS } from '../../../constants'
import { TokenType } from '../../../constants/tokens'
import { useInfoStore } from '../../../hooks/useInfoStore'
import { useEffect } from 'react'
import { TransactionInfoButton } from '../../Buttons/PageButtons/MintPageButtons/TransactionInfoButton'
import { useTokenFrom, useTokenTo } from '../../../hooks/useToken'
import { usePairStore } from '../../../hooks/usePairStore'


const InfoText = styled.div `
    width: 100%;
    margin-top: 25px;
    margin-left:auto;
    margin-right:auto;
    color: white;
    font-family: 'Metropolis', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
    flex-direction: column;
`

const InfoHiddenBlock = styled.div <{height: string}>`
    max-height: ${props => props.height};
    overflow: hidden;
    width: 100%;
    display: flex;
    transition: max-height .3s ease-in-out;
    margin-top: 10px;
`

const InfoBlockNum = styled.div <{TextColor: string}>`
    text-align: right;
    margin-left: auto;
    font-size: 15px;
    color: ${props => props.TextColor};
`

const InfoBlockName = styled.div <{TextColor: string}>`
    margin-right: auto;
    text-align: left;
    font-size: 15px;
    color: ${props => props.TextColor}; 
`

async function getPairData(PairId: string, restUrl: string): Promise<[string, string, string]>  {
    try {
        let res = await fetch(restUrl + `/core/stable/v1beta1/pair/${PairId}`)
        let res_json = await res.json()
        return [
            res_json.backing_ratio,
            ((Number(res_json.minting_fee) / 10).toFixed(1)) == "1.0" ? "1" : ((Number(res_json.minting_fee) / 10).toFixed(1)),
            (Number(res_json.burning_fee) / 10).toFixed(1) == "1.0" ? "1" : ((Number(res_json.burning_fee) / 10).toFixed(1)),
        ]
    } catch {
        return ["", "", ""]
    }
}


export const TransactionInfo = () => {

    const [ accordion, setAccordion ] = useAccordionStore ()
    const [ theme, setTheme ] = useToggleTheme()
    const [ tokenTo, setTokenTo ] = useTokenTo();
    const [ tokenFrom, setTokenFrom ] = useTokenFrom();
    const [ info, setInfo ] = useInfoStore();
    const [pairs, setPairs] = usePairStore();

    let tokenInfoFrom = (tokenFrom.type == "collateral" ? TOKEN_INFO_COLLATERAL : STABLE_INFO_QASSETS).find((token: any) => token.Base == tokenFrom.display)

    let pair = ""
    let action: string = "";

    pairs.map((pairs) => {
        pair = pairs.pairId
    })

    action = (tokenInfoFrom?.Type == TokenType.collateral ? "mint" : "burn");

    useEffect(() => {
        const timeoutId = setTimeout(() => 
            getPairData(String(pair), QUBE_TESTNET_INFO.rest)
            .then(result => {
                if(!Number.isNaN((result[0])) || !Number.isNaN(result[1]) || !Number.isNaN(result[2])) { 
                    setInfo({br: result[0], m_fee: result[1] == "999.9" ? "Blocked" : result[1], b_fee: result[2] == "999.9" ? "Blocked" : result[2]}) 
                }
            }), 
        500);
        return () => clearTimeout(timeoutId);
    }, [pair])

    return(
        <InfoText>
            <TransactionInfoButton/>
            <InfoHiddenBlock height={accordion.height} >
                <InfoBlockName TextColor={theme.TextColor}>
                    <p>Slippage</p>
                    <p>Protocol fee</p>
                    <p>Backing ratio</p>
                </InfoBlockName>
                <InfoBlockNum TextColor={theme.TextColor}>
                    <p>0%</p>
                    <p>{action == "mint" ? info.m_fee : info.b_fee}%</p>
                    <p>{info.br}%</p>
                </InfoBlockNum>
            </InfoHiddenBlock>
        </InfoText>
    )
}