import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getEvents } from '../apis'
import { AssetList } from '../components/assetList'
import { PageHeader } from '../components/pageHeader'

export function EventsList(): JSX.Element {
    const [eventsArray, setEventsArray] = useState<EventForm[]>([])

    useEffect(() => {
        getEvents().then(response => {
            // @ts-ignore
            setEventsArray(response.body)
        })
    }, [])

    return (
        <StyledEventsList>
            <PageHeader pageName={`Meus Eventos`} />
            <AssetList eventData={eventsArray} assetType={'event'} />
        </StyledEventsList>
    )
}

const StyledEventsList = styled.div`
    padding: var(--padding);
`
