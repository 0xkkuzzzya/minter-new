import styled from "styled-components";
import { ConvertHeader } from "./Header/ConvertHeader";
import { ConvertFields } from "./Fields/ConvertFields";

const Container = styled.div`
    width: 300px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`


export const ConvertBlock = () => {
    return(
        <Container>
            <ConvertHeader/>
            <ConvertFields/>
        </Container>
    )
}