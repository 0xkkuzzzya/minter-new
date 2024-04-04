import styled from "styled-components";
import QubeLogo from '../../../assets/webp/QubeLogo.webp'
import { ConnectButton } from "../../Buttons/ConnectButton/ConnectButton";
import { useMediaQuery } from "react-responsive";
import { ChengeTheme } from "../../Buttons/ChangeTheme/ChangeTheme";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const Header = styled.div <{headerColor: string}>`
    width: 100%;
    height: 70px;
    background: ${props => props.headerColor};
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        background: transparent;
    }
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

const MainName = styled.h1 <{TextColor: string}>`
    color: ${props => props.TextColor};
    margin-left: 100px;
    font-size: 20px;
`


export const MainHeader = () => {

    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 1000px)",
    });

    return(
        <Header headerColor={theme.headerColor}>
            <HeaderImgBlock>
                <HeaderImg src={QubeLogo}></HeaderImg>
            </HeaderImgBlock>
            {isDes && <div style={{width: "100px", margin: "auto"}}><MainName TextColor={theme.TextColor}>Minter</MainName></div>}
            {isMob && <></>}
            <ChengeTheme/>
            <ConnectButton/>
        </Header>
    )
}
