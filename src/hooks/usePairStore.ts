import { createStore } from './store';


export interface Pair {
    denomIn: string;
    denomOut: string;
    pairId: string;
    mfee: string;
    bfee: string;
    br: string;
    model: string;
    displayIn: string;
    displayOut: string;
    description: string;
    logoIn: string;
    logoOut: string;
}

const defaultInState: Array<Pair> = [];

export const [usePairStore] = createStore(defaultInState);