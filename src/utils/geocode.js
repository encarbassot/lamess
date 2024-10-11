import axios from "axios";
import { MAPBOX_TOKEN } from "../config";
import Place from "./Place";

const GEOCODING_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
const REVERSE_GEOCODING_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
const DIRECTIONS_URL = 'https://api.mapbox.com/directions/v5/mapbox/cycling'



export async function locatePlace(text) {
  try {
    // Define the coordinates for Barcelona to bias the search
    const barcelonaCoordinates = [2.17, 41.39,] // Longitude, Latitude of Barcelona

    // Make a request to the Mapbox Geocoding API
    const response = await axios.get(`${GEOCODING_URL}/${encodeURIComponent(text)}.json`, {
      params: {
        access_token: MAPBOX_TOKEN,
        proximity: barcelonaCoordinates.join(','), // Bias the search to Barcelona
        limit: 1 // Limit to one result
      }
    })

    // Extract and return the first result
    const place = response.data.features[0]
    return new Place(place)
  } catch (error) {
    console.error('Error fetching location:', error)
    throw error
  }
}

// // Example usage
// locatePlace('Sagrada Familia').then(place => {
//   console.log('Located Place:', place)
// }).catch(error => {
//   console.error('Error:', error)
// })








export async function geolocatePlace(coordinates) {
  try {
    const [longitude, latitude] = coordinates

    // Make a request to the Mapbox Reverse Geocoding API
    const response = await axios.get(`${REVERSE_GEOCODING_URL}/${latitude},${longitude}.json`, {
      params: {
        access_token: MAPBOX_TOKEN,
        limit: 1 // Limit to one result
      }
    })

    // Extract and return the first result
    const place = response.data.features[0]
    return new Place(place)
  } catch (error) {
    console.error('Error fetching location:', error)
    throw error
  }
}







export async function getBikingRoute(startCoords, endCoords) {
  try {
    const [startLng, startLat] = startCoords
    const [endLng, endLat] = endCoords

    // Make a request to the Mapbox Directions API
    const response = await axios.get(`${DIRECTIONS_URL}/${startLat},${startLng};${endLat},${endLng}`, {
      params: {
        access_token: MAPBOX_TOKEN,
        alternatives: false,
        geometries: 'geojson' // Include the route geometry
      }
    })

    // Extract the route information and travel time
    const route = response.data.routes[0]

    return {
      distance: route.distance, // Distance in meters
      duration: route.duration, // Duration in seconds
      geometry: route.geometry.coordinates.map(([lng, lat]) => [lat, lng])// GeoJSON of the route
    }
  } catch (error) {
    console.error('Error fetching route:', error)
    throw error
  }
}