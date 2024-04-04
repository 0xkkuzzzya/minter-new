import styled from "styled-components";
import { MainHeader } from "./Headers/MainHeader/MainHeader";
import { Routes, Route } from 'react-router-dom';
import { StablePage } from "./Page/StablePage/StablePage";
import { MintPage } from "./MintPage/MintPage";
import { useToggleTheme } from "../hooks/useToggleTheme";

const Contrainer = styled.div <{ backgroundColor: string}>`
    width: 100%;
    height: 100vh;
    background: ${props => props.backgroundColor};
`


export const MainIndex = () => {

    const [theme, setTheme] = useToggleTheme()
    
    return(
        <Contrainer backgroundColor={theme.backgroundColor}>
            <MainHeader/>
            <Routes>
                <Route path="/" element={<StablePage/>} />
                <Route path="/stablecoin/:stableID" element={<MintPage/>} />
			</Routes>
        </Contrainer>
    )
}