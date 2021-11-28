import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { getCollectionPlaces, getCollectionPlacesFromUser, getFavourites, SESSION_DATA } from '../apis'
import { AssetList } from '../components/assetList'
import { PageHeader } from '../components/pageHeader'

interface IProps {
    isFavourites?: boolean
}

export function PlacesList({ isFavourites }: IProps): JSX.Element {
    const [placesArray, setPlacesArray] = useState<CollectionPlace[]>([])
    const history = useHistory()
    const generalView = history.location.pathname === '/'

    useEffect(() => {
        if (generalView) {
            getCollectionPlaces().then(response => {
                setPlacesArray(response)
            })
        } else if (isFavourites) {
            getFavourites(window.sessionStorage.getItem(SESSION_DATA.ID) || '').then(response => {
                setPlacesArray(response)
            })
        } else if (window.sessionStorage.getItem(SESSION_DATA.ID)) {
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
            {generalView ? <h1>{'Pontos de Coleta'}</h1> : <PageHeader pageName={`Meus Pontos de Coleta`} />}
            <AssetList placesData={placesArray} assetType={'place'} />
        </StyledPlacesList>
    )
}

const StyledPlacesList = styled.div`
    padding: var(--padding);
    flex-grow: 1;
`
