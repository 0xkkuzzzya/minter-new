import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`

const Header = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: 400;
`


export const StablePageHeader = () => {
    return(
        <Container>
            <Header>
                Stablecoins
            </Header>
        </Container>
    )
}