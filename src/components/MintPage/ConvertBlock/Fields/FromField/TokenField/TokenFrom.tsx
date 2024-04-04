import styled from "styled-components";
import { FormEvent } from "react";
import { usePairStore } from "../../../../../../hooks/usePairStore";
import { TOKEN_INFO_COLLATERAL } from "../../../../../../constants/tokens";
import { useAmountInStore } from "../../../../../../hooks/useAmountStore";
import { useTokenFrom } from "../../../../../../hooks/useToken";
import { useToggleTheme } from "../../../../../../hooks/useToggleTheme";

const Field = styled.div <{BorderField: string}>`
    width: 100%;
    height: 60px;
    border: ${props => props.BorderField};
    border-radius: 15px;
    display: flex;
    align-items: center;
`

const CollateralLogo = styled.img`
    width: 35px;
    margin-left: 10px;
`

const CollateralInput = styled.input <{TextColor: string}>`
    width: 70%;
    height: 100%;
    text-align: right;
    background: transparent;
    font-size: 20px;
    color: ${props => props.TextColor};
    margin-right: 10px;
`

const CollateralName = styled.a <{TextColor: string}>`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.TextColor};
    margin-left: 5px;
`


export const TokenFrom = () => {

    const [pairs, setPairs] = usePairStore();
    const [amtIn, setAmtIn] = useAmountInStore();
    const [tokenFrom, setTokenFrom] = useTokenFrom();
    const [theme, setTheme] = useToggleTheme()

    pairs.map((pair) => {
        TOKEN_INFO_COLLATERAL.map((token) => {
            if (pair.denomIn == token.Denom) {
                pair.logoIn = tokenFrom.logo
                pair.displayIn = token.Base
            }
        })
    })

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmtIn({ amt: "" });
        } else {
            setAmtIn({ amt: e.currentTarget.value });
        }
    };

    const Token = pairs.map((pair) =>
        <Field BorderField={theme.BorderField}>
            <CollateralLogo src={pair.logoIn}></CollateralLogo>
            <CollateralName TextColor={theme.TextColor}>{tokenFrom.display}</CollateralName>
            <CollateralInput 
            TextColor={theme.TextColor} 
            placeholder="0" 
            onChange={HandleInputAmpunt} 
            value={amtIn.amt}></CollateralInput>
        </Field>
    )

    return (
        <>
            {Token}
        </>
    )
}