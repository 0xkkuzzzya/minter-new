import USQLogo from "../assets/webp/USQLogo.webp";
import ATOMLogo from "../assets/webp/AtomLogo.webp";
import QubeLogo from "../assets/webp/Qube Logo Circle.webp";
import WBTCLogo from "../assets/webp/WBTCLogo.webp"
import USDCLogo from "../assets/webp/USDC Logo.webp"


interface TokenInfo {
        Denom: string
        Base: string
        Network: string
        Logo: string
        Decimals: number
}

export const TOKEN_INFO: TokenInfo[] = [
        {
                Denom: "uusd",
                Base: "USQ",
                Network: "Qube Testnet",
                Logo: USQLogo,
                Decimals: 6
        },
        {
                Denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
                Base: "ATOM",
                Network: "Cosmos Hub",
                Logo: ATOMLogo,
                Decimals: 6
        },
        {
                Denom: "factory/qube1t2ydw7r4asmk74ymuvykjshdzun8dxye0az5wz/wbtc",
                Base: "BTC",
                Network: "Bitcoin",
                Logo: WBTCLogo,
                Decimals: 6
        },
        {
                Denom: "factory/qube1t2ydw7r4asmk74ymuvykjshdzun8dxye0az5wz/uusdc",
                Base: "USDC",
                Network: "USDC",
                Logo: USDCLogo,
                Decimals: 6
        },
        {
                Denom: "uqube",
                Base: "QUBE",
                Network: "Qube Testnet",
                Logo: QubeLogo,
                Decimals: 6
        },
]

