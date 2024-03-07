import styled from "styled-components";
import { ConnectModal } from "../../Modal/ConnectModal/ConnectModal";

const Button = styled.div`
    max-width: 100%;
    height: 35px;
    border: none;
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    color: black;
    margin-left: auto;
`



export const ConnectButton = () => {

    return(
        <Button>
            <ConnectModal/>
        </Button>
    )
}