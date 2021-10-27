import React, { useContext } from 'react'
import styled from 'styled-components'
import { SelectedEventContext } from '../App'
import { PageHeader } from '../components/pageHeader'
import { AssetActions } from './assetActions'

export function SelectedEvent(): JSX.Element {
    const { selectedEvent } = useContext(SelectedEventContext)

    return selectedEvent ? (
        <StyledSelectedEvent className={`selectedEvent`}>
            <PageHeader pageName={selectedEvent.date.replaceAll('-', '/')} />
            <AssetActions />

            <span className={`selectedEvent--description`}>
                <strong>description: </strong>
                {selectedEvent.description}
            </span>
            <span className={`selectedEvent--workingHours`}>
                <strong>workingHours: </strong>
                {selectedEvent.workingHours.to} - {selectedEvent.workingHours.from}
            </span>
        </StyledSelectedEvent>
    ) : (
        <div />
    )
}

const StyledSelectedEvent = styled.div`
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    position: relative;

    .selectedEvent {
        &--description,
        &--workingHours {
            margin-top: 30px;

            strong {
                color: var(--dark-blue);
                text-transform: uppercase;
            }
        }
    }
`
