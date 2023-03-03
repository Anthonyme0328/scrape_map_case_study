import React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import '../App.css'


import citidata from './cities-coord.json'
import dt from '../csvjson.json'

import geo from './geo-coords.json'

const CaliMap = () => {

  let arr = []
  arr.push(new Set(dt.map(city => city.citi)))

  console.log(arr)

  let n = 0

  const position = [ 36.778259, -119.417931]
  return (
    <div style={{margin: '2em'}}>
      <MapContainer center={position} zoom={6.45} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {geo.features.map(city => (
          <Marker 
            position={[
              city.geometry.coordinates[1], 
              city.geometry.coordinates[0]
            ]}
          />
        ))}

        {/* <Marker key={n++} position={[34.563440305821715, -120.69126933937426]}/> */}

      </MapContainer>
    </div>
    )
}

export default CaliMap