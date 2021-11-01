import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getPlace } from '../apis'
import { SelectedPlaceContext } from '../App'
import { PageHeader } from '../components/pageHeader'
import { AssetActions } from './assetActions'

export function SelectedPlace(): JSX.Element {
    const { selectedPlace, setSelectedPlace } = useContext(SelectedPlaceContext)
    const params = useParams() as { placeId: string }
    useEffect(() => {
        if (!selectedPlace && params.placeId) {
            getPlace(Number(params.placeId)).then(place => {
                setSelectedPlace?.(place)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    function handleMessageClick(): void {
        const phone = `55${selectedPlace?.phone}`

        const url = `https://wa.me/${phone}`

        window.open(url, '_blank')
    }

    return selectedPlace ? (
        <StyledSelectedPlace className={`selectedPlace`}>
            <PageHeader pageName={selectedPlace.name} />
            <AssetActions itemId={selectedPlace.id || 0} itemType={'place'} />
            <span className={`selectedPlace--acceptableItems`}>
                <strong>acceptableItems: </strong> {selectedPlace.acceptableItems.join(', ')}
            </span>
            <span className={`selectedPlace--buildingNum`}>
                <strong>buildingNum: </strong> {selectedPlace.buildingNum}
            </span>
            <span className={`selectedPlace--cep`}>
                <strong>cep: </strong> {selectedPlace.cep}
            </span>
            <span className={`selectedPlace--description`}>
                <strong>description: </strong> {selectedPlace.description}
            </span>
            <span className={`selectedPlace--latitude`}>
                <strong>latitude: </strong> {selectedPlace.latitude}
            </span>
            <span className={`selectedPlace--longitude`}>
                <strong>longitude: </strong> {selectedPlace.longitude}
            </span>
            <span className={`selectedPlace--phone`}>
                <strong>phone: </strong> {selectedPlace.phone}
            </span>
            <span className={`selectedPlace--workingDays`}>
                <strong>workingDays: </strong> {selectedPlace.workingDays.join(`, `)}
            </span>
            <span className={`selectedPlace--workingHoursFrom`}>
                <strong>From: </strong> {selectedPlace.workingHours.from}
            </span>
            <span className={`selectedPlace--workingHoursTo`}>
                <strong>To: </strong> {selectedPlace.workingHours.to}
            </span>

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
        &--acceptableItems,
        &--buildingNum,
        &--cep,
        &--description,
        &--latitude,
        &--longitude,
        &--phone,
        &--workingDays,
        &--workingHoursFrom,
        &--workingHoursTo {
            margin-bottom: 40px;

            strong {
                color: var(--dark-blue);
                text-transform: uppercase;
            }
        }
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
