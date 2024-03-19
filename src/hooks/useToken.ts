import { createStore } from './store';
import AtomLogo from '../assets/webp/AtomLogo.webp'
import USQLogo from '../assets/webp/USQLogo.webp'

export interface TokenFrom {
    logo: string;
    base: string;
    display: string
}

export interface TokenTo {
    logo: string;
    base: string;
    display: string
}

const TokenFromState: TokenFrom = { logo: AtomLogo, base: "", display: "ATOM" };
const TokenToState: TokenTo = { logo: USQLogo, base: "", display: "USQ" };

export const [useTokenFrom] = createStore(TokenFromState);
export const [useTokenTo] = createStore(TokenToState);