import styled from "styled-components";
import { MainHeader } from "./Headers/MainHeader/MainHeader";
import { Routes, Route } from 'react-router-dom';
import { StablePage } from "./StablePage/StablePage";
import { MintPage } from "./MintPage/MintPage";
import { HomePage } from "./HomePage/HomePage";

const Contrainer = styled.div`
    width: 100%;
    height: 100%;
`


export const MainIndex = () => {
    return(
        <Contrainer>
            <MainHeader/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/stablecoins" element={<StablePage/>} />
                <Route path="/stablecoin/:stableID" element={<MintPage/>} />
			</Routes>
        </Contrainer>
    )
}