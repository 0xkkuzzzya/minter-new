import styled from "styled-components";
import { useParams } from "react-router";
import { STABLE_INFO_QASSETS } from "../../../constants/tokens";
import { usePairStore } from "../../../hooks/usePairStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
`

const TokenInfoNameBlock = styled.div`
    display: flex;
    align-items: center;
`

const TokenInfoLogo = styled.img`
    width: 50px;
    height: 50px;
`

const TokenInfoName = styled.h1 <{TextColor: string}>`
    color: ${props => props.TextColor};
    margin-left: 10px;
`


export const TokenInfoHeader = () => {
    let { stableID } = useParams()
    const [pairs, setPairs] = usePairStore();
    const [theme, setTheme] = useToggleTheme()

    let temp_Logo = ""
    let temp_token = pairs.find((pair) => pair.pairId == stableID)

    STABLE_INFO_QASSETS.map((token) => {
        if (token.Base == temp_token?.displayOut){
            temp_Logo = token.Logo
        }
    })

    return(
        <Container>
            <TokenInfoNameBlock>
                <TokenInfoLogo src={temp_Logo}></TokenInfoLogo>
                <TokenInfoName TextColor={theme.TextColor}>{temp_token?.displayOut}</TokenInfoName>
            </TokenInfoNameBlock>
        </Container>
    )
}