import React, { useContext } from 'react'
import styled from 'styled-components'
import { SelectedPlaceContext } from '../App'
import { PageHeader } from '../components/pageHeader'
import { AssetActions } from './assetActions'

export function SelectedPlace(): JSX.Element {
    const { selectedPlace } = useContext(SelectedPlaceContext)

    return selectedPlace ? (
        <StyledSelectedPlace className={`selectedPlace`}>
            <PageHeader pageName={selectedPlace.name} />
            <AssetActions />
            <span>{selectedPlace.acceptableItems}</span>
            <span>{selectedPlace.buildingNum}</span>
            <span>{selectedPlace.cep}</span>
            <span>{selectedPlace.description}</span>
            <span>{selectedPlace.latitude}</span>
            <span>{selectedPlace.longitude}</span>
            <span>{selectedPlace.phone}</span>
            <span>{selectedPlace.workingDays.join(`, `)}</span>
            <span>{selectedPlace.workingHours.to}</span>
            <span>{selectedPlace.workingHours.from}</span>
        </StyledSelectedPlace>
    ) : (
        <div />
    )
}

const StyledSelectedPlace = styled.div`
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    position: relative;
`
