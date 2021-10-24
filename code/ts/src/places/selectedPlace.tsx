import React, { useContext } from 'react'
import styled from 'styled-components'
import { SelectedPlaceContext } from '../App'
import { PageHeader } from '../components/pageHeader'
import { AssetActions } from './assetActions'

export function SelectedPlace(): JSX.Element {
    const { selectedPlace } = useContext(SelectedPlaceContext)

    function handleMessageClick(): void {
        const phone = `55${selectedPlace?.phone}`

        const url = `https://wa.me/${phone}`

        window.open(url, '_blank')
    }

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

            <button type="button" className="selectedPlace--message" onClick={handleMessageClick}>
                Enviar Mensagem
                <i className="fab fa-whatsapp"></i>
            </button>
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
    .selectedPlace {
        &--message {
            color: white;
            border: none;
            background: #25d366;
            padding: 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
                margin-left: 8px;
            }
        }
    }
`
