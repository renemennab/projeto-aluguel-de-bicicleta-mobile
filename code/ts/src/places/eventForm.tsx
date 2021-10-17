import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { postEvent } from '../apis'
import { BackArrow } from '../components/backArrow'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'
import { ROUTES } from '../utils'
import { useHistory } from 'react-router-dom'

export function EventForm(): JSX.Element {
    const [date, setDate] = useState(``)
    const [description, setDescription] = useState(``)
    const [collectionPlace, setCollectionPlace] = useState(0)
    const [workingHours, setWorkingHours] = useState({ from: '', to: '' })
    const history = useHistory()

    const options = [
        { value: 1, label: 'Mercado' },
        { value: 2, label: 'Igreja' }
    ]

    function handleEventSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        postEvent({
            date,
            description,
            collectionPlace,
            workingHours
        }).then(response => {
            if (response.status === 200) {
                history.push(ROUTES.EVENT_LIST)
            }
        })
    }

    return (
        <StyledNewColectionPlace className={`newEvent`}>
            <BackArrow />
            <h1>Novo Evento de Coleta</h1>
            <StyledForm action="" onSubmit={event => handleEventSubmit(event)}>
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
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
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
