import styled from "styled-components";
import { useParams } from "react-router";
import { usePairStore } from "../../../../hooks/usePairStore";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const Container = styled.div`
    max-width: 100%;
    height: 100%;
`

const Description = styled.h1 <{TextColor: string}>`
    color: ${props => props.TextColor};
    margin: 0;
    font-size: 20px;
`


export const StableInfo = () => {

    let { stableID } = useParams()
    const [pairs, setPairs] = usePairStore();
    const [theme, setTheme] = useToggleTheme()


    let temp_pair = pairs.find((pair) => pair.pairId == stableID)

    return(
        <Container>
            <Description TextColor={theme.TextColor}>
                {temp_pair?.description}
            </Description>
        </Container>
    )
}