import React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../App.css'
import geo from './geo-coords.json'

const CaliMap = () => {



  let n = 0

  const position = [ 36.778259, -119.417931]
  return (
    <div style={{margin: '2em', boxShadow: '10px 5px grey'}}>
      <MapContainer center={position} zoom={6.45} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {geo.features.map(city => (
          <Marker 
            key={n++}
            position={[
              city.geometry.coordinates[1], 
              city.geometry.coordinates[0]
            ]}
          >
            <Popup
              position={[
                city.geometry.coordinates[1], 
                city.geometry.coordinates[0]
              ]}
            > 
            <div>
              location: {city.value}
            </div>
            <div>
            counts_location: {city.counts_locations}
            </div>
            <div>
            average_price_price_sqft: ${city.average_price_price_sqft}
            </div>

            </Popup>

          </Marker>
        ))}

      </MapContainer>
    </div>
    )
}

export default CaliMap