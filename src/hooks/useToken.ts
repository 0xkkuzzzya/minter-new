import { createStore } from './store';
import AtomLogo from "../assets/svg/AtomLogo.svg"

export interface TokenFrom {
    logo: string;
    base: string;
}

export interface TokenTo {
    logo: string;
    base: string;
}

const TokenFromState: TokenFrom = { logo: "", base: "" };
const TokenToState: TokenTo = { logo: "", base: "" };

export const [useTokenFrom] = createStore(TokenFromState);
export const [useTokenTo] = createStore(TokenToState);