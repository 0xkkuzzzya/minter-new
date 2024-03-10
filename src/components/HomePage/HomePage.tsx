import styled from "styled-components";
import { HomePageButton } from "../Buttons/HomePageButton/HomePageButton";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    margin-top: 250px;
`

const TextBlock = styled.div`
    max-width: 30%;
`

const MainText = styled.h1`
    color: white;
    font-size: 45px;
`

const GreyText = styled.h3`
    font-size: 30px;
    color: rgb(170, 170, 170);
`


export const HomePage = () => {
    return(
        <Container>
            <TextBlock>
                <MainText>Easy and convenient way of mintering stablecoins</MainText>
                <GreyText>Mint stablecoins for easy access to our network</GreyText>
            </TextBlock>
            <HomePageButton/>
        </Container>
    )
}