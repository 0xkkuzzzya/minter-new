import { QUBE_TESTNET_INFO } from "../constants";
import { Pair } from "../hooks/usePairStore";


export async function Pairs(): Promise<Array<Pair>> {
    let temp_pair: Array<Pair> = [];

    try {
        let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/stable/v1beta1/pairs`)
        let pairsJson = await res.json()
        let pairsArray = pairsJson.assets;
        pairsArray.map((pair: any) => {
            temp_pair.push({
                denomIn: pair.pairs.amountInMetadata.base,
                denomOut: pair.pairs.amountOutMetadata.base,
                pairId : pair.pairs.pairId,
                mfee: pair.pairs.minting_fee,
                bfee: pair.pairs.burning_fee,
                br: pair.pairs.backing_ratio,
                model: pair.pairs.model
            })
        })
    } catch (e) {
    }
    return temp_pair
}