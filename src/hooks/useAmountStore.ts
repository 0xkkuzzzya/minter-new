
import { createStore } from './store';


export interface AmountIn {
        amt: string;
}

export interface AmountOut {
        amt: string;
}

const AmountInState: AmountIn = { amt: "" };
const AmountOutState: AmountOut = { amt: "" };

export const [useAmountInStore] = createStore(AmountInState);
export const [useAmountOutStore] = createStore(AmountOutState);
