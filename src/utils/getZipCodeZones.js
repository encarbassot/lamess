import axios from "axios"
import { BASENAME } from "../config"
import Zone from "./Zone"

export default async function getZipCodeZones(){

  const url = BASENAME + "/k08.kml"
  //https://www.codigospostales.com/kml/k08.kml
  
  try {
    const response = await axios.get(url)
    const kmlString = response.data
    const zones = await parseKML(kmlString)
    
    return zones
  } catch (err) {
    console.error('Error fetching or parsing KML:', err)
    return []
  }
}


async function parseKML(kmlString) {
  const result = {}
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(kmlString, 'text/xml')

  const placemarks = xmlDoc.getElementsByTagName('Placemark')

  for (const placemark of placemarks) {
    const zipCode = placemark.querySelector('SimpleData[name="CODPOS"]').textContent
    const coordinatesString = placemark.querySelector('coordinates').textContent.trim()
    const coordinatesArray = coordinatesString.split('\n').map(coord => {
      const [lng, lat] = coord.split(',').map(Number)
      return [lat, lng] // Leaflet expects [lat, lng]
    })

    

    result[zipCode] = new Zone(coordinatesArray)
  }

  return result
}