import styled from "styled-components";
import { ConnectModal } from "../../Modal/ConnectModal/ConnectModal";

const Button = styled.div`
    max-width: 100%;
    height: 35px;
    border: none;
    color: black;
    font-family: 'Inter', sans-serif;
    border-radius: 5px;
    margin-right: 50px;
    cursor: pointer;
    color: white;
    margin-top: 7px;
    @media (max-width: 500px) {
        margin-right: 20px;
    }
`



export const ConnectButton = () => {

    return(
        <Button>
            <ConnectModal/>
        </Button>
    )
}