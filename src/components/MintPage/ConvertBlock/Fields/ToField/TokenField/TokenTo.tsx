import styled from "styled-components";
import { usePairStore } from "../../../../../../hooks/usePairStore";
import { STABLE_INFO, TOKEN_INFO } from "../../../../../../constants/tokens";

const Field = styled.div`
    width: 100%;
    height: 60px;
    border: 2px solid #333333;
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

const StableAmountOut = styled.a`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    font-size: 20px;
    color: white;
    margin-right: 10px;
`

const StableName = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-left: 5px;
`


export const TokenTo = () => {

    const [pairs, setPairs] = usePairStore();

    pairs.map ((pair) => {
        STABLE_INFO.map((token) => {
            if (pair.displayOut == token.Display) {
                pair.logo = token.Logo
                pair.displayOut = token.Display
            }
        })
    })

    const Token = pairs.map((pair) => 
        <Field>
            <StableLogo src={pair.logo}></StableLogo>
            <StableName>{pair.displayOut}</StableName>
            <StableAmountBlock>
                <StableAmountOut>0</StableAmountOut>
            </StableAmountBlock>
        </Field>
    )

    return(
        <>
            {Token}
        </>
    )
}