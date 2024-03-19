import styled from "styled-components";
import { useParams } from "react-router";
import { STABLE_INFO } from "../../../../constants/tokens";
import { usePairStore } from "../../../../hooks/usePairStore";

const Container = styled.div`
    max-width: 100%;
    height: 100%;
`

const Description = styled.h1`
    color: white;
    margin: 0;
    font-size: 20px;
`


export const StableInfo = () => {

    let { stableID } = useParams()
    const [pairs, setPairs] = usePairStore();


    let temp_pair = pairs.find((pair) => pair.pairId == stableID)

    return(
        <Container>
            <Description>
                {temp_pair?.description}
            </Description>
        </Container>
    )
}