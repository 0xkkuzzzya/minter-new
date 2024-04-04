import styled from "styled-components";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const Container = styled.div <{BorderField: string}>`
    width: 100%;
    height: 40px;
    border: ${props => props.BorderField};
    display: flex;
    justify-content: center;
    border-radius: 50px;
    align-items: center;
`

const SearchInput = styled.input`
    width: 90%;
    height: 50px;
    background: transparent;
    font-size: 16px;
    color: #BABABA;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
`


export const StablePageSearch = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Container BorderField={theme.BorderField}>
            <SearchInput placeholder="Search"></SearchInput>
        </Container>
    )
}