import styled from "styled-components";
import { ConvertHeader } from "../../Headers/MintPage/ConvertHeader";
import { ConvertFields } from "./Fields/ConvertFields";
import { TokenChange } from "../../Buttons/PageButtons/TokenChange/TokenChange";
import { TransactionInfo } from "../MintInfo/TransactionInfo";

const Container = styled.div`
    width: 300px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%;
        margin-left: 0;
    }
`


export const ConvertBlock = () => {
    return(
        <Container>
            <ConvertHeader/>
            <ConvertFields/>
            <TokenChange/>
            <TransactionInfo/>
        </Container>
    )
}