import styled from "styled-components";
import { FormEvent } from "react";
import { usePairStore } from "../../../../../../hooks/usePairStore";
import { TOKEN_INFO } from "../../../../../../constants/tokens";
import { useAmountInStore } from "../../../../../../hooks/useAmountInStore";

const Field = styled.div`
    width: 100%;
    height: 60px;
    border: 2px solid #333333;
    border-radius: 15px;
    display: flex;
    align-items: center;
`

const CollateralLogo = styled.img`
    width: 35px;
    margin-left: 10px;
`

const CollateralInput = styled.input`
    width: 70%;
    height: 100%;
    text-align: right;
    background: transparent;
    font-size: 20px;
    color: white;
    margin-right: 10px;
`

const CollateralName = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-left: 5px;
`


export const TokenFrom = () => {

    const [pairs, setPairs] = usePairStore();
    const [amtIn, setAmtIn] = useAmountInStore();

    pairs.map((pair) => {
        TOKEN_INFO.map((token) => {
            if (pair.denomIn == token.Denom) {
                pair.logo = token.Logo
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
        <Field>
            <CollateralLogo src={pair.logo}></CollateralLogo>
            <CollateralName>{pair.displayIn}</CollateralName>
            <CollateralInput placeholder="0" onChange={HandleInputAmpunt} value={amtIn.amt}></CollateralInput>
        </Field>
    )

    return (
        <>
            {Token}
        </>
    )
}