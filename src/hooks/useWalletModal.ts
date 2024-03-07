import { createStore } from './store';
import KeplrLogo from "../assets/webp/Keplr.webp"
import LeapLogo from "../assets/webp/LeapWalletSoon.webp"
import QubeLogo from "../assets/webp/QubeWalletSoon.webp"

export interface Wallet {
        logo: string;
        name: string;
        text: string;
        id: number
}

export const WalletStatements: Wallet [] = [ 
    { 
        logo: KeplrLogo, 
        name: "Keplr Wallet", 
        text: "Keplr Wallet provides the user with a simple and easy-to-use interface for working with blockchains",
        id: 0 
    },
    { 
        logo: LeapLogo, 
        name: "Leap Wallet", 
        text: "This wallet will be up and running soon, sorry for the wait.", 
        id: 1
    },
    { 
        logo: QubeLogo, 
        name: "Qube Wallet", 
        text: "This wallet will be up and running soon, sorry for the wait.",
        id: 2 
    }
]
 

export const [useWalletModal] = createStore(WalletStatements[0]);