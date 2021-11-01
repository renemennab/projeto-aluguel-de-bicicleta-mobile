import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { getCollectionPlacesFromUser, SESSION_DATA } from '../apis'
import { AssetList } from '../components/assetList'
import { PageHeader } from '../components/pageHeader'

export function PlacesList(): JSX.Element {
    const [placesArray, setPlacesArray] = useState<CollectionPlace[]>([])
    const history = useHistory()

    useEffect(() => {
        if (window.sessionStorage.getItem(SESSION_DATA.ID)) {
            getCollectionPlacesFromUser(window.sessionStorage.getItem(SESSION_DATA.ID) || '').then(response => {
                setPlacesArray(response)
            })
        } else {
            history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledPlacesList>
            <PageHeader pageName={`Meus Pontos de Coleta`} />
            <AssetList placesData={placesArray} assetType={'place'} />
        </StyledPlacesList>
    )
}

const StyledPlacesList = styled.div`
    padding: var(--padding);
`
