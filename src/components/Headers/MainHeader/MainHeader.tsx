import styled from "styled-components";
import QubeLogo from '../../../assets/webp/QubeLogo.webp'
import { ConnectButton } from "../../Buttons/ConnectButton/ConnectButton";

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
`

const HeaderImg = styled.img `
    width: 55px;
`


export const MainHeader = () => {
    return(
        <Header>
            <HeaderImgBlock>
                <HeaderImg src={QubeLogo}></HeaderImg>
            </HeaderImgBlock>
            <h1>Minter</h1>
            <ConnectButton/>
        </Header>
    )
}
