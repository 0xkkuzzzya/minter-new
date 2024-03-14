import styled from "styled-components";
import { useEffect } from 'react'
import { MintPageContainer } from "./MintPageContainer/MintPageContainer";
import { usePairStore } from "../../hooks/usePairStore";
import { UpdatePairs } from "../../connection/pairs";

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
`


export const MintPage = () => {

    const [pairs, setPairs] = usePairStore();

    useEffect(() => {
        async function update() {
            
            let temp_pairs = await UpdatePairs()
            setPairs(temp_pairs)
            console.log('work useEffect')
        }
        update();
    }, [])

    return(
        <Container>
            <MintPageContainer/>
        </Container>
    )
}