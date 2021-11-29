import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getEvent } from '../apis'
import { SelectedEventContext } from '../App'
import { PageHeader } from '../components/pageHeader'
import { AssetActions } from './assetActions'

export function SelectedEvent(): JSX.Element {
    const { selectedEvent, setSelectedEvent } = useContext(SelectedEventContext)
    const params = useParams() as UrlParams
    const history = useHistory()

    useEffect(() => {
        getEvent(Number(params.eventId)).then(event => {
            if (event) setSelectedEvent?.(event)
            else history.push('/')
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return selectedEvent ? (
        <StyledSelectedEvent className={`selectedEvent`}>
            <PageHeader pageName={selectedEvent.name} />
            <AssetActions itemId={selectedEvent.id || 0} itemType={'event'} />
            <span className={`selectedEvent--description`}>
                <strong>descrição: </strong>
                {selectedEvent.description}
            </span>
            <span className={`selectedEvent--date`}>
                <strong>data: </strong>
                {selectedEvent.date}
            </span>
            <span className={`selectedEvent--workingHours`}>
                <strong>Horário: </strong>
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
        &--date,
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
