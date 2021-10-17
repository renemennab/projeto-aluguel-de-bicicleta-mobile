import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getCollectionPlaces } from '../apis'
import { AssetList } from '../components/assetList'
import { PageHeader } from '../components/pageHeader'

export function PlacesList(): JSX.Element {
    const [placesArray, setPlacesArray] = useState<CollectionPlace[]>([])

    useEffect(() => {
        getCollectionPlaces().then(response => {
            setPlacesArray(response)
        })
    }, [])

    return (
        <StyledPlacesList>
            <PageHeader pageName={`Meus Pontos de Coleta`} />
            <AssetList assetData={placesArray} />
        </StyledPlacesList>
    )
}

const StyledPlacesList = styled.div`
    padding: var(--padding);
`
