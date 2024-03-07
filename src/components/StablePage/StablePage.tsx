import styled from "styled-components";
import { StablePageSearch } from "./StablePageSearch/StablePageSearch";
import { StablePageHeader } from "./StablePageHeader/StablePageHeader";
import { StablePageFields } from "./StablePageFields/StablePageFields";
import { StablePageInfo } from "./StablePageInfo/StablePageInfo";

const Container = styled.div`
    width: 550px;
    margin: 0 auto;
    margin-top: 100px;
    @media (max-width: 600px) {
        width: 90%;
    }
`


export const StablePage = () => {
    return(
        <Container>
            <StablePageHeader/>
            <StablePageSearch/>
            <StablePageInfo/>
            <StablePageFields/>
        </Container>
    )
}