import "./CalculatorMap.css"

import loader from "../../../assets/icons/cargo-loader.svg"
import Map from "./Map/Map"
import { useEffect, useRef, useState } from "react"
import getZipCodeZones from "../../../utils/getZipCodeZones"
import InputDirection from "./InputDirection/InputDirection"
import { defaultPickUpFee, defaultPickUpFeeHoliday, driverHourlyRateHoliday, driverHourlyRateWeekday, driverHourlyRateWeekend, zonesFees } from "../../../config"
import { geolocatePlace, getBikingRoute } from "../../../utils/geocode"
import { formatDuration } from "../../../utils/time"

import icoWarn from "../../../assets/icons/actions/warn.svg"
import MoreInfo from "./MoreInfo/MoreInfo"
import HeroTarifas from "./HeroTarifas/HeroTarifas"

export default function CalculatorMap(){

  const resultRef = useRef(null)
  const editingCode = undefined// "08035"

  const [isLoading, setIsLoading] = useState(true)
  const [zipCodeZones,setZipCodeZones] = useState([])

  const [startPlace,setStartPlace] = useState(undefined)
  const [endPlace,setEndPlace] = useState(undefined)
  const [path,setPath] = useState(undefined)

  const [desglose,setDesglose] = useState({})

  async function callGetZones(){
    const zones = await getZipCodeZones()
    setZipCodeZones(zones)
  }

  useEffect(() => {
    const loadData = async () => {
      const dataFetch = callGetZones()

      const timeoutPromise = new Promise(resolve => {
        setTimeout(() => resolve(), 1500)
      })

      await Promise.all([dataFetch, timeoutPromise])

      setIsLoading(false)
    }

    loadData()

  }, [])


  useEffect(()=>{
    setPath(undefined)
    setDesglose(undefined)
    if(startPlace && endPlace){
      callGetPath()
    }
  },[startPlace,endPlace])


  function calculateDesglose(path){

    const time = path.duration
    const duration = formatDuration(time)
    const hours = Math.ceil(path.duration / 3600)
    const distance = (path.distance/1000).toFixed(2)

    const startZone = checkZoneForCoord(startPlace.center,zipCodeZones,zonesFees)
    const endZone = checkZoneForCoord(endPlace.center,zipCodeZones,zonesFees)

    const pickUpPriceWeekday = startZone?.pickUpPrice ?? defaultPickUpFee
    const pickUpPriceHoliday = startZone?.pickUpPriceHoliday ?? defaultPickUpFeeHoliday

    const dropPriceWeekday = endZone?.dropPrice
    const dropPriceHoliday = endZone?.dropPriceHoliday

    const total = endZone 
      ? pickUpPriceWeekday + dropPriceWeekday
      : (hours * driverHourlyRateWeekday) //pickUpPriceWeekday +

    const totalWeekend = endZone 
      ? pickUpPriceHoliday + dropPriceHoliday
      : (hours * driverHourlyRateWeekend) //pickUpPriceHoliday +

    const totalHoliday = endZone 
      ? pickUpPriceHoliday + dropPriceHoliday
      : (hours * driverHourlyRateHoliday) //pickUpPriceHoliday +

    const result = {
      startZoneName:startZone?.name,
      endZoneName:endZone?.name,
      duration,
      tarifaPorZonas: Boolean(startZone && endZone),
      tarifaPorHoras: Boolean(!startZone || !endZone),
      pickUpPrice : [pickUpPriceWeekday,pickUpPriceHoliday,pickUpPriceHoliday],
      dropPrice : [dropPriceWeekday, dropPriceHoliday, dropPriceHoliday],
      total: [total, totalWeekend, totalHoliday],
    }

    console.log(result)
    return result
  }

  async function callGetPath(){
    const path = await getBikingRoute(startPlace.center,endPlace.center)
    setPath(path)
    const desg = calculateDesglose(path)
    setDesglose(desg)

    scrollToBottom(resultRef)
  }

  async function handleClickCoords(coords){
    
    if(editingCode){

      console.log(coords.reverse().map(x=>x.toFixed(6)).join(",")+",0")
  
      return
    }

    console.log(coords)
    const place = await geolocatePlace(coords)

    if(startPlace && endPlace){
      setStartPlace(place)
      setEndPlace(undefined)
    }else if(startPlace){
      setEndPlace(place)
    }else{
      setStartPlace(place)
    }
  }
  
  return <>
    <div className="CalculatorMap max-width">

      <HeroTarifas/>


    {isLoading ? (
          <div className="loader-wrapper">
            <img src={loader} alt="Loading..." />
          </div>
        ) : (

          <div className="map-wrapper"> 

            <InputDirection
              startPlace={startPlace}
              setStartPlace={setStartPlace}
              endPlace={endPlace}
              setEndPlace={setEndPlace}
            />

            <Map 
              zonesFees={zonesFees}
              zipCodeZones={zipCodeZones}
              startPlace={startPlace}
              endPlace={endPlace}
              handleClickCoords={handleClickCoords}
              path={path}

              editingCode={editingCode}
            />

            {(desglose && desglose.tarifaPorHoras) &&

              <div className="desgloseWarn">
                <img src={icoWarn} alt="" />
                Si la recogida o la entrega estan fuera de zona, se aplica tarifa por horas!
              </div>

            }

            {desglose && <div className={"desglose"+(desglose.tarifaPorHoras?" porHoras":"")} ref={resultRef}>

              {
                desglose.tarifaPorZonas &&  <>
                  <div className="tarifaZonas">
                    <h2>Laborables</h2>
                    <p>Recogida: <span>{desglose.pickUpPrice[0]} €</span></p>
                    <p>Entrega: <span>{desglose.dropPrice[0]} €</span> <span>({desglose.endZoneName})</span></p>
                    <hr />
                    <p className="total">Total: <span>{desglose.total[0]} €</span></p>
                  </div>
                  <div className="tarifaZonas">
                    <h2>Festivos</h2>
                    <p>Recogida: <span>{desglose.pickUpPrice[2]} €</span></p>
                    <p>Entrega: <span>{desglose.dropPrice[2]} €</span> <span>({desglose.endZoneName})</span></p>
                    <hr />
                    <p className="total">Total: <span>{desglose.total[2]} €</span></p>
                  </div>
                </>
              }

              {
                desglose.tarifaPorHoras && <>
                <div className="tarifaHoras">
                    <h2>Laborables</h2>
                    {/* <p>Recogida: <span>{desglose.pickUpPrice[0]} €</span></p> */}
                    <p>{desglose.duration}h <span>({driverHourlyRateWeekday}€/h)</span></p>
                    <p><small>* tiempo aproximado</small></p>
                    <hr />
                    <p className="total">Total: <span>{desglose.total[0]} €</span></p>
                  </div>
                  <div className="tarifaHoras">
                    <h2>Sábados</h2>
                    {/* <p>Recogida: <span>{desglose.pickUpPrice[1]} €</span></p> */}
                    <p>{desglose.duration}h <span>({driverHourlyRateWeekend}€/h)</span></p>
                    <p><small>* tiempo aproximado</small></p>
                    <hr />
                    <p className="total">Total: <span>{desglose.total[1]} €</span></p>
                  </div>
                  <div className="tarifaHoras">
                    <h2>Festivos</h2>
                    {/* <p>Recogida: <span>{desglose.pickUpPrice[2]} €</span></p> */}
                    <p>{desglose.duration}h <span>({driverHourlyRateHoliday}€/h)</span></p>
                    <p><small>* tiempo aproximado</small></p>
                    <hr />
                    <p className="total">Total: <span>{desglose.total[2]} €</span></p>
                  </div>
                </>
              }
            </div>}
            
          </div>
        )}

    <MoreInfo/>

    </div>
  </>
}




function checkZoneForCoord(coords,zipCodeZones,zonesFees){

  const getCoordsZipCode = (coords)=>{
    for (const cp in zipCodeZones) {
      const zone = zipCodeZones[cp];
      
      if(zone.isPointInside(coords)){
        return cp
      }
    
    }
  }

  const zipcode = getCoordsZipCode(coords)
  
  const zoneFee = zonesFees.find(x=>x.zipCodes.some(y=>y===zipcode))
  return zoneFee

}



function scrollToBottom(ref) {
  if (ref.current) {
    ref.current.scrollIntoView({
      block: 'end',      // Aligns the bottom of the div with the bottom of the viewport
      inline: 'nearest', // Maintains the horizontal scroll position (optional)
      behavior: 'smooth' // Smooth scroll
    });
  }
}