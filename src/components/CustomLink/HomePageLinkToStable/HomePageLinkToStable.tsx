import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    width: 100%;
    text-decoration: none;
    font-weight: 700;
    outline: none;
    font-size: 15px;
`

interface Props {
    to: string;
    children: ReactNode;
}

export const HomePageLinkToStable = ({children, to}: Props) => {

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            color: 'white',
            transition: '.2s ease-in-out'
        }}
        >
            {children}
        </LinkBLock>
    )
}