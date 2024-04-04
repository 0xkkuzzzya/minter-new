import styled from "styled-components";
import { TokenFrom } from "./TokenFrom";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const FieldHeader = styled.h3 <{TextColor: string}>`
    color: ${props => props.TextColor};
    font-size: 15px;
`


export const FromField = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Container>
            <FieldHeader TextColor={theme.TextColor}>From</FieldHeader>
            <TokenFrom/>
        </Container>
    )
}