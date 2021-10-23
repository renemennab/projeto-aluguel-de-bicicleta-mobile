import React, { useContext } from 'react'
import styled from 'styled-components'
import { SelectedEventContext } from '../App'
import { PageHeader } from '../components/pageHeader'
import { AssetActions } from './assetActions'

export function SelectedEvent(): JSX.Element {
    const { selectedEvent } = useContext(SelectedEventContext)
    console.log(`selectedEvent`, selectedEvent)

    return selectedEvent ? (
        <StyledSelectedEvent className={`selectedEvent`}>
            <PageHeader pageName={selectedEvent.date} />
            <AssetActions />

            <span>{selectedEvent.description}</span>
            <span>{selectedEvent.workingHours.to}</span>
            <span>{selectedEvent.workingHours.from}</span>
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
`
