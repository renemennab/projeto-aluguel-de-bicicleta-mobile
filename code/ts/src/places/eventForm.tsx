import React, { FormEvent, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getCollectionPlacesFromUser, getEvent, postEvent, SESSION_DATA } from '../apis'
import { PageHeader } from '../components/pageHeader'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'
import { ROUTES } from '../utils'
import { useHistory, useParams } from 'react-router-dom'
import { SelectedEventContext } from '../App'

export function EventForm(): JSX.Element {
    const { selectedEvent, setSelectedEvent } = useContext(SelectedEventContext)
    const params = useParams() as UrlParams

    const [name, setName] = useState(selectedEvent?.name || ``)
    const [date, setDate] = useState(selectedEvent?.date || ``)
    const [description, setDescription] = useState(selectedEvent?.description || ``)
    const [collectionPlace, setCollectionPlace] = useState(selectedEvent?.collectionPlace || 0)
    const [workingHours, setWorkingHours] = useState(selectedEvent?.workingHours || { from: '', to: '' })
    const [existingPlaces, setExistingPlaces] = useState<CollectionPlace[]>([])
    const history = useHistory()

    useEffect(() => {
        if (!selectedEvent && params.eventId) {
            getEvent(Number(params.eventId)).then(event => {
                setSelectedEvent?.(event)
                setName(event.name)
                setDate(event.date)
                setDescription(event.description)
                setCollectionPlace(event.collectionPlace)
                setWorkingHours(event.workingHours)
            })
        }
        if (window.sessionStorage.getItem(SESSION_DATA.ID)) {
            getCollectionPlacesFromUser(window.sessionStorage.getItem(SESSION_DATA.ID) || '').then(response => {
                setExistingPlaces(response)
            })
        } else {
            history.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleEventSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        postEvent(
            {
                name,
                date,
                description,
                collectionPlace,
                workingHours
            },
            selectedEvent?.id
        ).then(response => {
            if (response.status === 201 || response.status === 200) {
                history.push(`${ROUTES.PLACES}/${collectionPlace}`)
            }
        })
    }

    return (
        <StyledNewColectionPlace className={`newEvent`}>
            <PageHeader pageName={`Novo Evento de Coleta`} />
            <StyledForm action="" onSubmit={event => handleEventSubmit(event)}>
                <StyledLabel className={`column`}>
                    Nome
                    <StyledInput type="text" value={name} onChange={event => setName(event.target.value)} />
                </StyledLabel>
                <StyledLabel className={`column`}>
                    Data
                    <StyledInput required type="date" value={date} onChange={event => setDate(event.target.value)} />
                </StyledLabel>
                <StyledLabel className={`column`}>
                    Ponto de Coleta
                    <select
                        name="collectionPlace"
                        onChange={event => setCollectionPlace(Number(event.target.value))}
                        value={collectionPlace}
                    >
                        <option value={0}>--Por favor escolha um ponto--</option>
                        {existingPlaces.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </StyledLabel>
                <StyledLabel className={`column`}>
                    De:
                    <StyledInput
                        type="time"
                        value={workingHours.from}
                        onChange={event => setWorkingHours({ ...workingHours, from: event?.target.value })}
                    />
                </StyledLabel>
                <StyledLabel className={`column`}>
                    Até:
                    <StyledInput
                        type="time"
                        value={workingHours.to}
                        onChange={event => setWorkingHours({ ...workingHours, to: event?.target.value })}
                    />
                </StyledLabel>
                <StyledLabel className={`column`}>
                    Descrição
                    <StyledInput
                        type="text"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                </StyledLabel>

                <StyledButton>
                    Salvar <i className={`fa fa-save`} />
                </StyledButton>
            </StyledForm>
        </StyledNewColectionPlace>
    )
}

const StyledNewColectionPlace = styled.div`
    padding: var(--padding);
    select {
        font-size: 16px;
        margin-top: 8px;
        border: 1px solid var(--gray);
        padding: 8px;
        height: 40px;
        &:focus-visible,
        &:active {
            border: 1px solid var(--dark-blue);
            outline-color: var(--dark-blue);
        }
    }
`
