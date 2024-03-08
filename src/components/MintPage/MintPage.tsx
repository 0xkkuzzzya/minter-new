import styled from "styled-components";
import { MintPageContainer } from "./MintPageContainer/MintPageContainer";

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
`


export const MintPage = () => {
    return(
        <Container>
            <MintPageContainer/>
        </Container>
    )
}