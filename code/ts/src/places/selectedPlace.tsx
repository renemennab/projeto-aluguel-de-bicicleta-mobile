import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { SelectedPlaceContext } from '../App'
import { PageHeader } from '../components/pageHeader'
export function SelectedPlace(): JSX.Element {
    const { selectedPlace } = useContext(SelectedPlaceContext)
    console.log(`selectedPlace`, selectedPlace)
    const location = useLocation().pathname

    return selectedPlace ? (
        <StyledSelectedPlace className={`selectedPlace`}>
            <PageHeader pageName={selectedPlace.name} />
            <div className={`selectedPlace--actions`}>
                <Link to={location + `/edit`} className={`selectedPlace--actions__edit`}>
                    <i className="far fa-edit"></i>
                </Link>
                <button className={`selectedPlace--actions__remove`}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
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
    .selectedPlace {
        &--actions {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            top: var(--padding);
            right: var(--padding);
            &__edit,
            &__remove {
                padding: 10px;
                background: transparent;
                color: var(--dark-blue);
                border: none;
                font-size: 18px;
                transform: translate(10px, -25%);
            }
            &__remove {
                color: var(--red);
            }
        }
    }
`
