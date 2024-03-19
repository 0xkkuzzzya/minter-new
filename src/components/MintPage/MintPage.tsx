import styled from "styled-components";
import { useEffect } from 'react'
import { MintPageContainer } from "./MintPageContainer/MintPageContainer";
import { usePairStore } from "../../hooks/usePairStore";
import { UpdatePairs } from "../../connection/pairs";
import { useParams } from "react-router-dom";
import { useTokenFrom, useTokenTo } from "../../hooks/useToken";
import { useAmountInStore } from "../../hooks/useAmountStore";

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
`


export const MintPage = () => {

    const [pairs, setPairs] = usePairStore();
    const [amtIn, setAmtIn] = useAmountInStore();
    const [tokenFrom, setTokenFrom] = useTokenFrom();
    const [tokenTo, setTokenTo] = useTokenTo();
    let { pairID } = useParams()

    useEffect(() => {
        async function update() {
            
            let temp_pairs = await UpdatePairs()
            setPairs(temp_pairs)
            console.log('work useEffect')
        }
        update();

        pairs.map((pair) => {
            if (pair.pairId == pairID){
                setTokenFrom({
                    display: String(pairs.find((pair) => pair.displayIn != "")?.displayIn),
                    logo: String(pairs.find((pair) => pair.logoIn == "")?.logoIn),
                    base: String(pairs.find((pair) => pair.denomIn != "")?.denomIn)
                })
                setTokenTo({
                    display: String(pairs.find((pair) => pair.displayOut != "")?.displayOut),
                    logo: String(pairs.find((pair) => pair.logoOut == "")?.logoOut),
                    base: String(pairs.find((pair) => pair.denomIn != "")?.denomIn)
                })
            }
        })
    }, [])

    return(
        <Container>
            <MintPageContainer/>
        </Container>
    )
}