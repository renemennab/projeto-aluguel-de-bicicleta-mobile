import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'

import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { getCollectionPlaces } from '../apis'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils'

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [30, 45], // size of the icon
    iconAnchor: [15, 45], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45]
})

export function MapComponent(): JSX.Element {
    const [mapMethods, setMapMethods] = useState<Map<unknown, unknown> | null>(null)
    const [placesArray, setPlacesArray] = useState<CollectionPlace[]>([])
    const [location, setLocation] = useState<{
        loaded: boolean
        coordinates?: { latitude: number; longitude: number }
        error?: { code: number; message: string }
    }>({
        loaded: false,
        coordinates: { latitude: -19.919946017081916, longitude: -43.995658850819936 }
    })

    useEffect(() => {
        getCollectionPlaces().then(response => {
            setPlacesArray(response)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSuccess = (location: { coords: { latitude: number; longitude: number } }): void => {
        setLocation({
            loaded: true,
            coordinates: location.coords
        })
    }

    const onError = (error: { code: number; message: string }): void => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message
            }
        })
    }

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
    useEffect(() => {
        // @ts-ignore
        if (mapMethods) mapMethods.flyTo([location.coordinates?.latitude || 0, location.coordinates?.longitude || 0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <StyledMap>
            <MapContainer
                center={[location.coordinates?.latitude || 0, location.coordinates?.longitude || 0]}
                zoom={13}
                scrollWheelZoom={false}
                zoomAnimation={true}
                whenCreated={map => setMapMethods(map as any)}
                tap={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker
                    position={[location.coordinates?.latitude || 0, location.coordinates?.longitude || 0]}
                    icon={DefaultIcon}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                {placesArray?.map(place => (
                    <Marker key={place.id} position={[place.latitude || 0, place.longitude || 0]} icon={DefaultIcon}>
                        <Popup>
                            <Link className={`popup--link`} to={`${ROUTES.PLACES}/${place.id}`}>
                                <h2 className={`popup--link__name`}>{place.name}</h2>
                                <span className={`popup--link__acceptableItems`}>
                                    {place.configuredItems?.map(item => item.produto).join(`, `)}
                                </span>
                                <span className={`popup--link__cep`}>{place.cep}</span>
                            </Link>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </StyledMap>
    )
}

const StyledMap = styled.div`
    flex-grow: 1;
    width: 100%;
    z-index: 0;
    .leaflet-container {
        height: 100%;
        width: 100vw;
    }
    .popup {
        &--link {
            display: flex;
            flex-direction: column;
            &--name,
            &--acceptableItems,
            &--cep {
            }
        }
    }
`
