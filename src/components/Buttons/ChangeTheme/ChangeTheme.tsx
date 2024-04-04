import styled from 'styled-components'
import Sun from '../../../assets/webp/Sun.webp'
import Moon from '../../../assets/webp/Moon.webp'
import { ThemeBlackState, ThemeWhiteState, useToggleTheme } from '../../../hooks/useToggleTheme'


const SwapButton= styled.button`
    width: 35px;
    margin-right: 20px;
    background-color: transparent;
    border: none;
    padding: 0;
    border-radius: 50px;
    outline: none;
    @media (max-width: 1000px) {
        margin-left: auto;
    }
`

const BlackThemeIcon = styled.svg  <{ArrrowColor: string}>`
    background: url(${props => props.ArrrowColor});
    height: 28px;
    width: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`


export const ChengeTheme = () => {

    const [theme, setTheme] = useToggleTheme();


    function toggleTheme () {
        if(theme.active == false) {
            localStorage.setItem('Theme', 'black')
            setTheme(ThemeBlackState)
            
        } else if (theme.active == true) {
            localStorage.setItem('Theme', 'white')
            setTheme(ThemeWhiteState)
        }
    }

    return(
        <SwapButton onClick={toggleTheme}>
            <BlackThemeIcon  ArrrowColor={theme.active == true ? Sun : Moon}></BlackThemeIcon>
        </SwapButton>
    )
}