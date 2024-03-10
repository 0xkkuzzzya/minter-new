import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HeaderText = styled.h1`
    color: white;
    font-size: 25px;
    margin: 0;
`

const BlueLine = styled.div`
    width: 100%;
    height: 5px;
    border-radius: 50px;
    margin-top: 20px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
`


export const ConvertHeader = () => {
    return(
        <Header>
            <HeaderText>Convert qAssets</HeaderText>
            <BlueLine/>
        </Header>
    )
}