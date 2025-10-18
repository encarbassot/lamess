



import CalculatorMap from "../../../components/CalculatorMap/CalculatorMap"
import { bcnPrices, madPrices, zonesFeesMAD } from "../../../config"


export default function CalculatorMapPage(){


  return <>
  <CalculatorMap
    zonesFees={zonesFeesMAD}
    prices = {madPrices}
    zone="mad"
  />
  </>
}