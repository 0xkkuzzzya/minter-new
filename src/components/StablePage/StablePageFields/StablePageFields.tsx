import styled from "styled-components";
import { STABLE_INFO } from "../../../constants/tokens";
import { StablePageCustomLink } from "../../CustomLink/StablePageCustomLink/StablePageCustomLink";
import { useMediaQuery } from "react-responsive";
import Arrow from '../../../assets/webp/Arrow.svg'

export interface Vault {
    Display: string,
    Logo: string,
    Amount: number,
    Info: string,
    Mechanism: string
}

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

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    let temp_vault: Vault[] = []

    STABLE_INFO.map((vault_token) => 
        temp_vault.push({
            Display: vault_token.Display,
            Logo: vault_token.Logo,
            Amount: vault_token.Amount,
            Info: vault_token.Info,
            Mechanism: vault_token.Mechanism,
        })
    )

    const StableBlock = temp_vault.map((vault) => 
            <Container>
                <NameBlock>
                    <TokenBlock>
                        <TokenLogo src={vault.Logo}></TokenLogo>
                        <TokenName>{vault.Display}</TokenName>
                    </TokenBlock>
                    <MechanismBlock>{vault.Mechanism}</MechanismBlock>
                </NameBlock>
                {isDes && <LinkBlock> <StablePageCustomLink to={`/stablecoin/${vault.Display}`}> <Button> Mint / Burn </Button> </StablePageCustomLink> </LinkBlock>}
                {isMob && <CircleButton> <StablePageCustomLink to={`/stablecoin/${vault.Display}`}> <ArrowImg src={Arrow}></ArrowImg> </StablePageCustomLink> </CircleButton>}
            </Container>
    ) 

    return(
        <div>
            {StableBlock}
        </div>
    )
}