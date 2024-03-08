import styled from "styled-components";
import { MainHeader } from "./Headers/MainHeader/MainHeader";
import { Routes, Route } from 'react-router-dom';
import { StablePage } from "./StablePage/StablePage";
import { MintPage } from "./MintPage/MintPage";

const Contrainer = styled.div`
    width: 100%;
    height: 100%;
`


export const MainIndex = () => {
    return(
        <Contrainer>
            <MainHeader/>
            <Routes>
                <Route path="/" element={<StablePage/>} />
                <Route path="/stablecoin/:stable" element={<MintPage/>} />
			</Routes>
        </Contrainer>
    )
}