import styled from "styled-components";
import { TokenTo } from "./TokenTo";
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


export const ToField = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Container>
            <FieldHeader TextColor={theme.TextColor}>To</FieldHeader>
            <TokenTo/>
        </Container>
    )
}