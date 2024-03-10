import styled from "styled-components";
import Arrow from '../../../assets/webp/ArrowBack.webp'
import { TokenInfoHeader } from "./Header/Header";
import { MintPageLinkBack } from "../../CustomLink/MintPageLinkBack/MintPageLinkBack";
import { StableInfo } from "./StableInfo/StableInfo";

const Container = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`

const LinkBlock = styled.div`
    max-width: 100%;
`

const ArrowLogo = styled.img`
    width: 15px;
    height: 10px;
    margin-right: 5px;
`


export const TokenInfo = () => {
    return(
        <Container>
            <LinkBlock>
                <MintPageLinkBack to="/stablecoins">
                    <ArrowLogo src={Arrow}></ArrowLogo>
                    Back
                </MintPageLinkBack>
            </LinkBlock>
            <TokenInfoHeader/>
            <StableInfo/>
        </Container>
    )
}