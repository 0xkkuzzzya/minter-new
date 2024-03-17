import styled from "styled-components";
import { TokenInfo } from "../TokenInfo/TokenInfo";
import { ConvertBlock } from "../ConvertBlock/ConvertBlock";
import { TokenChange } from "../../Buttons/TokenChange/TokenChange";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15em;
`


export const MintPageContainer = () => {
    return(
        <Container>
            <TokenInfo/>
            <ConvertBlock/>
        </Container>
    )
}