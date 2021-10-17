import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getCollectionPlaces } from '../apis'
import { AssetList } from '../components/assetList'
import { BackArrow } from '../components/backArrow'

export function PlacesList(): JSX.Element {
    const [placesArray, setPlacesArray] = useState<CollectionPlace[]>([])

    useEffect(() => {
        getCollectionPlaces().then(response => {
            setPlacesArray(response)
        })
    }, [])

    return (
        <StyledPlacesList>
            <BackArrow />
            <h1>Meus Pontos de Coleta</h1>
            <AssetList assetData={placesArray} />
        </StyledPlacesList>
    )
}

const StyledPlacesList = styled.div`
    padding: var(--padding);
`
