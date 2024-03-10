import styled from "styled-components";
import { HomePageLinkToStable } from "../../CustomLink/HomePageLinkToStable/HomePageLinkToStable";

const Button = styled.button`
    width: 170px;
    height: 40px;
    color: white;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border-radius: 20px;
    font-size: 15px;
`

export const HomePageButton = () => {
    return(
        <>
            <HomePageLinkToStable to ="/stablecoins">
                <Button>Launch App</Button>
            </HomePageLinkToStable>
        </>
    )
}