import USQLogo from "../assets/webp/USQLogo.webp";
import ATOMLogo from "../assets/webp/AtomLogo.webp";

export enum TokenType {
        qAsset,
        collateral
}

interface TokenInfo {
        Denom: string
        Base: string
        Logo: string
        Decimals: number
        Type: TokenType
}

export const TOKEN_INFO_COLLATERAL: TokenInfo[] = [
        {
                Denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
                Base: "ATOM",
                Logo: ATOMLogo,
                Decimals: 6,
                Type: TokenType.collateral
        },
]

export const STABLE_INFO_QASSETS: TokenInfo[] = [
        {
                Denom: 'USQ',
                Base: 'USQ',
                Logo: USQLogo,
                Decimals: 6,
                Type: TokenType.qAsset     
        },
        {
                Denom: 'CNYQ',
                Base: 'USQ',
                Logo: USQLogo,
                Decimals: 6,
                Type: TokenType.qAsset  
        }
]