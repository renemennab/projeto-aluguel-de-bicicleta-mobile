import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { SelectedEventContext } from '../App'
import { PageHeader } from '../components/pageHeader'

export function SelectedEvent(): JSX.Element {
    const { selectedEvent } = useContext(SelectedEventContext)
    console.log(`selectedEvent`, selectedEvent)
    const location = useLocation().pathname

    return selectedEvent ? (
        <StyledSelectedEvent className={`selectedEvent`}>
            <PageHeader pageName={selectedEvent.date} />
            <div className={`selectedEvent--actions`}>
                <Link to={location + `/edit`} className={`selectedEvent--actions__edit`}>
                    <i className="far fa-edit"></i>
                </Link>
                <button className={`selectedEvent--actions__remove`}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
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
    .selectedEvent {
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
