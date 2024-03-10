import styled from "styled-components";
import { TokenTo } from "./TokenField/TokenTo";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const FieldHeader = styled.h3`
    color: white;
    font-size: 15px;
`


export const ToField = () => {
    return(
        <Container>
            <FieldHeader>To</FieldHeader>
            <TokenTo/>
        </Container>
    )
}