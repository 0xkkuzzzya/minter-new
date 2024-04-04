import styled from "styled-components";
import { useEffect } from 'react'
import { StablePageSearch } from "./StablePageSearch";
import { StablePageHeader } from "../../Headers/StablePage/StablePageHeader";
import { StablePageFields } from "./StablePageFields";
import { StablePageInfo } from "./StablePageInfo";
import { UpdatePairs } from "../../../connection/pairs";
import { usePairStore } from "../../../hooks/usePairStore";

const Container = styled.div`
    width: 550px;
    margin: 0 auto;
    margin-top: 100px;
    @media (max-width: 600px) {
        width: 90%;
    }
`


export const StablePage = () => {

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
            <StablePageHeader/>
            <StablePageSearch/>
            <StablePageInfo/>
            <StablePageFields/>
        </Container>
    )
}