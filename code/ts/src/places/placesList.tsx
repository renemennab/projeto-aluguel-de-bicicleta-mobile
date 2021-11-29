import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { getCollectionPlaces, getCollectionPlacesFromUser, getFavourites, SESSION_DATA } from '../apis'
import { AssetList } from '../components/assetList'
import { PageHeader } from '../components/pageHeader'
import { DONOR } from '../utils'

interface IProps {
    listType: 'favourites' | 'userPlaces' | 'allPlaces'
}

export function PlacesList({ listType }: IProps): JSX.Element {
    const [placesArray, setPlacesArray] = useState<CollectionPlace[]>([])
    const history = useHistory()
    const userId = window.sessionStorage.getItem(SESSION_DATA.ID) || ''
    const isDonor = window.sessionStorage.getItem(SESSION_DATA.USER_TYPE) === DONOR

    useEffect(() => {
        if (listType === 'userPlaces' && isDonor) {
            history.push('/')
        }
        if (listType === 'allPlaces') {
            getCollectionPlaces().then(response => {
                setPlacesArray(response)
            })
        } else if (listType === 'favourites') {
            getFavourites(userId).then(response => {
                setPlacesArray(response)
            })
        } else if (listType === 'userPlaces') {
            getCollectionPlacesFromUser(userId).then(response => {
                setPlacesArray(response)
            })
        } else {
            history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listType])

    return (
        <StyledPlacesList>
            {listType === 'allPlaces' ? (
                <h1>{'Pontos de Coleta'}</h1>
            ) : listType === 'favourites' ? (
                <PageHeader pageName={`Favoritos`} />
            ) : (
                <PageHeader pageName={`Meus Pontos de Coleta`} />
            )}
            <AssetList placesData={placesArray} assetType={'place'} />
        </StyledPlacesList>
    )
}

const StyledPlacesList = styled.div`
    padding: var(--padding);
    flex-grow: 1;
`
