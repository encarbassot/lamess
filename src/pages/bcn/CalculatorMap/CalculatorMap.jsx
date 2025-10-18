



import CalculatorMap from "../../../components/CalculatorMap/CalculatorMap"

import {zonesFeesBCN, bcnPrices, zonesFeesMAD, madPrices} from "../../../config"


export default function CalculatorMapPage(){




  return <>
    <CalculatorMap
      zonesFees={zonesFeesBCN}
      prices = {bcnPrices}
      zone="bcn"
      // zone="mad"
    />
  </>


    // return <>
    // <CalculatorMap
    //   zonesFees={zonesFeesMAD}
    //   prices = {madPrices}
    //   zone="mad"
    // />
    // </>
}