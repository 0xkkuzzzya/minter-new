import styled from "styled-components";
import { FromField } from "./FromField/FromField";
import { ToField } from "./ToField/ToField";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const ConvertFields = () => {
    return(
        <Container>
            <FromField/>
            <ToField/>
        </Container>
    )
}