import styled from "styled-components";
import { useParams } from "react-router";
import { STABLE_INFO } from "../../../../constants/tokens";

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

    let { stable } = useParams()

    let temp_description = ""

    STABLE_INFO.find((token) => {
        if(token.Display == stable) {
            temp_description = token.Info
        }
    })

    return(
        <Container>
            <Description>
                {temp_description}
            </Description>
        </Container>
    )
}