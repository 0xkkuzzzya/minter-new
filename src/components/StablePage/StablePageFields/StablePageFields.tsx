import styled from "styled-components";
import Arrow from '../../../assets/webp/Arrow.svg'
import { StablePageCustomLink } from "../../CustomLink/StablePageCustomLink/StablePageCustomLink";
import { useMediaQuery } from "react-responsive";
import { usePairStore } from "../../../hooks/usePairStore";
import { STABLE_INFO } from "../../../constants/tokens";


const Container = styled.div`
    width: 100%;
    height: 60px;
    background: #202020;
    border: 3px solid #3A3A3A;
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NameBlock = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
`

const TokenBlock = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
`


const TokenLogo = styled.img`
    width: 40px;
`

const TokenName = styled.a`
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-left: 10px;
`

const MechanismBlock = styled.div`
    width: 50px;
    height: 15px;
    color: #3B9CFC;
    font-weight: 700;
    font-size: 13px;
    border: 2px solid #3B9CFC;
    border-radius: 50px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 150px;
    height: 30px;
    font-size: 15px;
    color: white;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border-radius: 20px;
    margin-right: 15px;
    white-space: nowrap;
    padding: 0;
    font-weight: 700;
    @media (max-width: 730px) {
        width: 120px;
    }
`

const LinkBlock = styled.div`
    margin-left: auto;
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


export const StablePageFields = () => {

    const [pairs, setPairs] = usePairStore();

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });


    pairs.map ((pair) => {
        STABLE_INFO.map((token) => {
            if (pair.displayOut == token.Display) {
                pair.logoOut = token.Logo
            }
        })
    })


    const StableBlock = pairs.map((pair) =>
        <Container>
            <NameBlock>
                <TokenBlock>
                    <TokenLogo src={pair.logoOut}></TokenLogo>
                    <TokenName>{pair.displayOut}</TokenName>
                </TokenBlock>
                <MechanismBlock>{pair.model}</MechanismBlock>
            </NameBlock>
            {isDes && <LinkBlock> <StablePageCustomLink to={`/stablecoin/${pair.pairId}`}> <Button> Mint / Burn </Button> </StablePageCustomLink> </LinkBlock>}
            {isMob && <CircleButton> <StablePageCustomLink to={`/stablecoin/${pair.pairId}`}> <ArrowImg src={Arrow}></ArrowImg> </StablePageCustomLink> </CircleButton>}
        </Container>
    )

    return (
        <div>
            {StableBlock}
        </div>
    )
}