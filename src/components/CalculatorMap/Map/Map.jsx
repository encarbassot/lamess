import "./Map.css"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polygon, useMap, Tooltip, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from "react"
import { Icon, LatLngBounds } from "leaflet"




import imgStart from "../../../assets/icons/actions/marker-green.svg"
import imgEnd from "../../../assets/icons/actions/marker-red.svg"



export default function Map({zone,zipCodeZones,zonesFees,startPlace, endPlace, handleClickCoords, path, editingCode}){


  const startIcon = new Icon ({
    iconUrl : imgStart,
    iconSize : [48,64], // size of the icon
    iconAnchor : [24,64], // point of the icon which will correspond to marker's location
  })



  const endIcon = new Icon ({
    iconUrl : imgEnd,
    iconSize : [48,64], // size of the icon
    iconAnchor : [24,64], // point of the icon which will correspond to marker's location
  })



  const urlTilers = {
    bcn: "https://cdn-tiles.bcn.cat/tiles/XYZ/PLANOLBCN/{z}/{x}/{y}.png",
    mad: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }
  const urlTiler = urlTilers[zone] ||  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


  const centers = {
    bcn : [41.4036963352364, 2.1636201722937414],
    mad: [40.430474, -3.694987],
  }

  const center = centers[zone]

  const maxBounds = new LatLngBounds(
    [center[0] - 0.15, center[1] - 0.15], // Southwest corner (latitude, longitude)
    [center[0] + 0.15, center[1] + 0.15]  // Northeast corner (latitude, longitude)
  )

  



  function FitBounds({ coordinates }) {
    const map = useMap()

    useEffect(() => {
      if (coordinates.length > 0) {
        const bounds = new LatLngBounds(coordinates)
        map.fitBounds(bounds)
      }
    }, [coordinates, map])

    return null
  }

  const allCoordinates = zonesFees.flatMap(zone =>
    zone.zipCodes.flatMap(zipcode =>
      zipCodeZones[zipcode] ? zipCodeZones[zipcode].getBoundingCoordinates() : []
    )
  )


  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        handleClickCoords([e.latlng.lat, e.latlng.lng])
      }
    })
    return null // This component does not render anything
  }

  const MapFlyto = ({startPlace,endPlace})=>{
    const map = useMap()

    useEffect(() => {
      if (startPlace?.center && endPlace?.center) {
        // Both coordinates are defined, fit bounds
        const bounds = [
          startPlace.center,
          endPlace.center
        ];
        map.fitBounds(bounds, { padding: [50, 50] });
      } else if (startPlace?.center) {
        // Only startPlace is defined, fly to it
        map.flyTo(startPlace.center, map.getZoom());
      } else if (endPlace?.center) {
        // Only endPlace is defined, fly to it
        map.flyTo(endPlace.center, map.getZoom());
      }
      // If both are undefined, do nothing
    }, [map, startPlace, endPlace]);
  

    return null
  }


  console.log(zonesFees[0].zipCodes[0])

  return (
    <div className="Map__component">

    <MapContainer 
      center={center} 
      zoom={13} 
      minZoom={12}
      maxBounds={maxBounds} // Set the max bounds to limit panning
      maxBoundsViscosity={1.0} // Make sure the map cannot be dragged outside the bounds
    > 
      <TileLayer
        url={urlTiler}
        />
      {
        zonesFees.map((zone,i)=>
          zone.zipCodes.map(zipcode=>
            zipCodeZones[zipcode] ?
            <Polygon 
              key={zipcode} 
              positions={zipCodeZones[zipcode].getPolygonCoordinates()}
              color={zone.color}
            >
              {/* <Tooltip>{zipcode}</Tooltip> */}
            </Polygon>
            :
            null
            )
        )
      }


      { editingCode &&
        zipCodeZones[editingCode].getPolygonCoordinates().map((point,i)=>(
        <Marker 
          key={i} 
          position={point}
          eventHandlers={{
            click: () => {
              // console.log(`Marker clicked at:`, point)
              zipCodeZones[editingCode].deletePoint(point)
            }
          }}
        />))
      }

      {startPlace && 
        <Marker 
          position={startPlace.center} 
          icon={startIcon}
        />
      }

      {endPlace && 
        <Marker 
          position={endPlace.center} 
          icon={endIcon}
        />
      }

      <MapClickHandler/>
      <MapFlyto startPlace={startPlace} endPlace={endPlace}/>
      <FitBounds coordinates={allCoordinates} />

      {
        path && <Polyline
        positions={path.geometry}
        color="black"
        weight={5}
        opacity={0.7}
      />
      }


    </MapContainer>

    </div>
  )
}

