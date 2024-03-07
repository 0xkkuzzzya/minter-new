import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 40px;
    border: 2px solid #3A3A3A;
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
    return(
        <Container>
            <SearchInput placeholder="Search"></SearchInput>
        </Container>
    )
}