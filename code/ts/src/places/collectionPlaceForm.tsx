import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { BackArrow } from '../components/backArrow'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'

export function CollectionPlaceForm(): JSX.Element {
    const [name, setName] = useState(``)
    const [cep, setCep] = useState(``)
    const [buildingNum, setBuildingNum] = useState(``)
    const [latitude, setLatitude] = useState(``)
    const [longitude, setLongitude] = useState(``)
    const [phone, setPhone] = useState(``)
    const [description, setDescription] = useState(``)
    const [acceptableItems, setAcceptableItems] = useState<string[]>([])
    const [workingHours, setWorkingHours] = useState({ from: '', to: '' })
    const [workingDays, setWorkingDays] = useState<string[]>([])
    // const [relatedEvents, setRelatedEvents] = useState(``)

    const weekDays = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', `sábado`, 'domingo']
    const itemTypes = ['roupas', 'alimentos perecíveis', 'refeições prontas', 'brinquedos']

    function handleCheckboxClick(
        clickedItem: string,
        state: string[],
        setState: Dispatch<SetStateAction<string[]>>
    ): void {
        if (state.includes(clickedItem)) {
            setState(state.filter(day => day !== clickedItem))
        } else {
            setState([...state, clickedItem])
        }
    }

    return (
        <StyledNewColectionPlace className={`newCollectionPlace`}>
            <BackArrow />
            <h1>Novo Ponto de Coleta</h1>
            <StyledForm action="">
                <fieldset className={`userInfo`}>
                    <StyledLabel className={`column`}>
                        Nome
                        <StyledInput
                            required
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        Telefone
                        <StyledInput
                            required
                            type="text"
                            value={phone}
                            onChange={event => setPhone(event.target.value)}
                        />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        CEP
                        <StyledInput required type="text" value={cep} onChange={event => setCep(event.target.value)} />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        Número
                        <StyledInput
                            required
                            type="text"
                            value={buildingNum}
                            onChange={event => setBuildingNum(event.target.value)}
                        />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        Latitude
                        <StyledInput
                            required
                            type="text"
                            value={latitude}
                            onChange={event => setLatitude(event.target.value)}
                        />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        Longitude
                        <StyledInput
                            required
                            type="text"
                            value={longitude}
                            onChange={event => setLongitude(event.target.value)}
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
                </fieldset>
                <fieldset className={`workingDays`}>
                    <h2>Dias de funcionamento</h2>
                    {weekDays.map(day => (
                        <StyledLabel key={day}>
                            <StyledInput
                                type="checkbox"
                                name={`workingDays`}
                                value={day}
                                checked={workingDays.includes(day)}
                                onChange={() => handleCheckboxClick(day, workingDays, setWorkingDays)}
                            />
                            {day}
                        </StyledLabel>
                    ))}
                </fieldset>
                <fieldset className={`workingHours`}>
                    <h2>Horário de funcionamento</h2>
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
                            value={workingHours.from}
                            onChange={event => setWorkingHours({ ...workingHours, from: event?.target.value })}
                        />
                    </StyledLabel>
                </fieldset>
                <fieldset className={`acceptableItems`}>
                    <h2>Tipos de Items coletados</h2>
                    {itemTypes.map(itemType => (
                        <StyledLabel key={itemType}>
                            <StyledInput
                                type="checkbox"
                                name={`acceptableItems`}
                                value={itemType}
                                checked={workingDays.includes(itemType)}
                                onChange={() => handleCheckboxClick(itemType, acceptableItems, setAcceptableItems)}
                            />
                            {itemType}
                        </StyledLabel>
                    ))}
                </fieldset>
                <StyledButton>
                    Salvar <i className={`fa fa-save`} />
                </StyledButton>
            </StyledForm>
        </StyledNewColectionPlace>
    )
}

const StyledNewColectionPlace = styled.div`
    padding: var(--padding);
    fieldset {
        border: none;
        width: 100%;
        .userType {
            &--input {
                margin-right: 10px;
            }
        }
    }
`
