import styled from "styled-components";
import { useEffect } from 'react'
import { usePairStore } from "../../hooks/usePairStore";
import { UpdatePairs } from "../../connection/pairs";
import { useParams } from "react-router-dom";
import { useTokenFrom, useTokenTo } from "../../hooks/useToken";
import { ConvertBlock } from "./ConvertBlock/ConvertBlock";
import { TokenInfo } from "./MintInfo/TokenInfo";
import { useMediaQuery } from "react-responsive";
import { SwapButton } from "../Buttons/PageButtons/SwapButton";

const Container = styled.div`
    width: 100%;
`

const ContainerPage = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 160px;
`


export const MintPage = () => {

    const [pairs, setPairs] = usePairStore();
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
            if (pair.pairId == pairID) {
                setTokenFrom({
                    display: String(pairs.find((pair) => pair.displayIn != "")?.displayIn),
                    logo: String(pairs.find((pair) => pair.logoIn == "")?.logoIn),
                    base: String(pairs.find((pair) => pair.denomIn != "")?.denomIn),
                    type: "collateral"
                })
                setTokenTo({
                    display: String(pairs.find((pair) => pair.displayOut != "")?.displayOut),
                    logo: String(pairs.find((pair) => pair.logoOut == "")?.logoOut),
                    base: String(pairs.find((pair) => pair.denomIn != "")?.denomIn),
                    type: "qAsset"
                })
            }
        })
    }, [])

    const isDes = useMediaQuery({
        query: "(min-device-width: 700px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 700px)",
    });

    const Des = isDes && 
        <><TokenInfo />
        <ConvertBlock /></>

    const Mob = isMob && <ConvertBlock />

    return (
        <Container>
            <ContainerPage>
                {isDes && Des}
                {isMob && Mob}
            </ContainerPage>
        </Container>
    )
}