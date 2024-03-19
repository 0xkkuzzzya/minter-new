import { QUBE_TESTNET_INFO } from "../constants";
import { Pair } from "../hooks/usePairStore";


export async function UpdatePairs(): Promise<Array<Pair>> {
    let temp_pair: Array<Pair> = [];

        let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/stable/v1beta1/pairs`)
        let pairsJson = await res.json()
        let pairsArray = pairsJson.pairs;
        pairsArray.map((pair: any) => {
            temp_pair.push({
                denomIn: pair.amountInMetadata.base,
                denomOut: pair.amountOutMetadata.base,
                pairId : pair.pairId,
                mfee: pair.minting_fee,
                bfee: pair.burning_fee,
                br: pair.backing_ratio,
                model: pair.model,
                displayIn: pair.amountInMetadata.display,
                displayOut: pair.amountOutMetadata.display,
                description: pair.amountOutMetadata.description,
                logoIn: pair.logo,
                logoOut: pair.logo,
            })
        })
        console.log('work')
    return temp_pair
    
}