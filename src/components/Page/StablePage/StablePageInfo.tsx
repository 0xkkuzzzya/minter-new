import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const InfoText = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: #BABABA;
`


export const StablePageInfo = () => {
    return(
        <Container>
            <InfoText style={{marginLeft: "15px"}}>Asset</InfoText>
            <InfoText style={{marginRight: "15px"}}>Action</InfoText>
        </Container>
    )
}