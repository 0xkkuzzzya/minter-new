import styled from "styled-components";
import { TokenFrom } from "./TokenField/TokenFrom";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const FieldHeader = styled.h3`
    color: white;
    font-size: 15px;
`


export const FromField = () => {

    return(
        <Container>
            <FieldHeader>From</FieldHeader>
            <TokenFrom/>
        </Container>
    )
}