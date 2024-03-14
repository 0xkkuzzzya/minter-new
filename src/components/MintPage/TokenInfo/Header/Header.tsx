import styled from "styled-components";
import { useParams } from "react-router";
import { STABLE_INFO } from "../../../../constants/tokens";
import { usePairStore } from "../../../../hooks/usePairStore";

const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
`

const TokenInfoNameBlock = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

const TokenInfoLogo = styled.img`
    width: 50px;
    height: 50px;
`

const TokenInfoName = styled.h1`
    color: white;
    margin-left: 10px;
`


export const TokenInfoHeader = () => {
    let { stableID } = useParams()
    const [pairs, setPairs] = usePairStore();

    let temp_Logo = ""
    let temp_token = pairs.find((pair) => pair.pairId == stableID)

    STABLE_INFO.map((token) => {
        if (token.Display == temp_token?.displayOut){
            temp_Logo = token.Logo
        }
    })

    return(
        <Container>
            <TokenInfoNameBlock>
                <TokenInfoLogo src={temp_Logo}></TokenInfoLogo>
                <TokenInfoName>{temp_token?.displayOut}</TokenInfoName>
            </TokenInfoNameBlock>
        </Container>
    )
}