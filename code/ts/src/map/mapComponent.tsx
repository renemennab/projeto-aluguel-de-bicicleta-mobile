import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'

import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})

export function MapComponent(): JSX.Element {
    return (
        <StyledMap>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={DefaultIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </StyledMap>
    )
}

const StyledMap = styled.div`
    width: 100%;
    height: 100%;
    .leaflet-container {
        height: 80vh;
        width: 100vw;
    }
`
