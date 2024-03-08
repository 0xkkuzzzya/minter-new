import styled from "styled-components";
import QubeLogo from '../../../assets/webp/QubeLogo.webp'
import { ConnectButton } from "../../Buttons/ConnectButton/ConnectButton";
import { useMediaQuery } from "react-responsive";

const Header = styled.div`
    width: 100%;
    height: 70px;
    background: #202020;
    display: flex;
    align-items: center;
`

const HeaderImgBlock = styled.div`
    display: flex;
    align-items: center;
    margin-left: 60px;
    @media (max-width: 500px) {
        margin-left: 20px;
    }
`

const HeaderImg = styled.img `
    width: 55px;
`

const MainName = styled.h1`
    color: white;
    margin-left: 20px;
    font-size: 20px;
`


export const MainHeader = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 1000px)",
    });

    return(
        <Header>
            <HeaderImgBlock>
                <HeaderImg src={QubeLogo}></HeaderImg>
            </HeaderImgBlock>
            {isDes && <div style={{margin: "0 auto"}}><MainName>Minter</MainName></div>}
            {isMob && <></>}
            <ConnectButton/>
        </Header>
    )
}
