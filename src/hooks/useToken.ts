import { createStore } from './store';
import AtomLogo from '../assets/webp/AtomLogo.webp'
import USQLogo from '../assets/webp/USQLogo.webp'
import { TokenType } from '../constants/tokens';

export interface Token {
    logo: string;
    base: string;
    display: string;
    type: string;
}


const TokenFromState: Token = { logo: AtomLogo, base: "", display: "ATOM", type: "collateral" };
const TokenToState: Token = { logo: USQLogo, base: "", display: "USQ", type: "qAsset" };

export const [useTokenFrom] = createStore(TokenFromState);
export const [useTokenTo] = createStore(TokenToState);