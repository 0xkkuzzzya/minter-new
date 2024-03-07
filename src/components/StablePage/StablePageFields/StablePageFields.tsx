import styled from "styled-components";
import USQLogo from '../../../assets/webp/USQLogo.webp'
import { StablePageButton } from "../../Buttons/StablePagebutton/StablePageButton";

const Container = styled.div`
    width: 100%;
    height: 60px;
    background: #202020;
    border: 3px solid #3A3A3A;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NameBlock = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
`

const TokenLogo = styled.img`
    width: 40px;
`

const TokenName = styled.a`
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-left: 10px;
`

const MechanismBlock = styled.div`
    width: 50px;
    height: 15px;
    color: #3B9CFC;
    font-weight: 700;
    font-size: 13px;
    border: 2px solid #3B9CFC;
    border-radius: 50px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
` 


export const StablePageFields = () => {
    return(
        <Container>
            <NameBlock>
                <TokenLogo src={USQLogo}></TokenLogo>
                <TokenName>USQ</TokenName>
                <MechanismBlock>Delta</MechanismBlock>
            </NameBlock>
            <StablePageButton/>
        </Container>
    )
}