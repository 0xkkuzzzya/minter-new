import styled from "styled-components";
import { MainHeader } from "./Headers/MainHeader/MainHeader";

const Contrainer = styled.div`
    width: 100%;
    height: 100%;
`


export const MainIndex = () => {
    return(
        <Contrainer>
            <MainHeader/>
        </Contrainer>
    )
}