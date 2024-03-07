import styled from "styled-components";
import { StablePageCustomLink } from "../../CustomLink/StablePageCustomLink/StablePageCustomLink";
import { useMediaQuery } from "react-responsive";
import Arrow from '../../../assets/webp/Arrow.svg'

const Button = styled.button`
    width: 150px;
    height: 30px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border-radius: 20px;
    margin-right: 15px;
    white-space: nowrap;
    padding: 0;
    @media (max-width: 730px) {
        width: 120px;
    }
`


const CircleButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: #3B9CFC;
    white-space: nowrap;
    padding: 0;
    margin-right: 15px;
`

const ArrowImg = styled.img`
    width: 16px;
`


export const StablePageButton = () => {


    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    let Des = <Button><StablePageCustomLink to="/stablecoin">Mint / Burn</StablePageCustomLink></Button>;
    let Mob = <CircleButton><StablePageCustomLink to="/stablecoin"><ArrowImg src={Arrow}></ArrowImg></StablePageCustomLink></CircleButton>;

    return(
        <div>
            {isDes && Des}
            {isMob && Mob}
        </div>
    )
}