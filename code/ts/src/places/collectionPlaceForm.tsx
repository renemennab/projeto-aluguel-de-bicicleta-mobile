import React, { Dispatch, FormEvent, SetStateAction, useContext, useState } from 'react'
import styled from 'styled-components'
import { postCollectionPlace } from '../apis'
import { PageHeader } from '../components/pageHeader'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'
import { ITEM_TYPES, ROUTES, WEEK_DAYS } from '../utils'
import { useHistory } from 'react-router-dom'
import { SelectedPlaceContext } from '../App'

export function CollectionPlaceForm(): JSX.Element {
    const { selectedPlace } = useContext(SelectedPlaceContext)

    const [name, setName] = useState(selectedPlace?.name || ``)
    const [cep, setCep] = useState(selectedPlace?.cep || ``)
    const [buildingNum, setBuildingNum] = useState(selectedPlace?.buildingNum || ``)
    const [latitude, setLatitude] = useState(selectedPlace?.latitude || ``)
    const [longitude, setLongitude] = useState(selectedPlace?.longitude || ``)
    const [phone, setPhone] = useState(selectedPlace?.phone || ``)
    const [description, setDescription] = useState(selectedPlace?.description || ``)
    const [acceptableItems, setAcceptableItems] = useState<AcceptableItems[]>(selectedPlace?.acceptableItems || [])
    const [workingHours, setWorkingHours] = useState(selectedPlace?.workingHours || { from: '', to: '' })
    const [workingDays, setWorkingDays] = useState<WeekDays[]>(selectedPlace?.workingDays || [])

    const history = useHistory()
    // const [relatedEvents, setRelatedEvents] = useState(``)

    function handleCheckboxClick<Type>(
        clickedItem: Type,
        state: Type[],
        setState: Dispatch<SetStateAction<Type[]>>
    ): void {
        if (state.includes(clickedItem)) {
            setState(state.filter((day: unknown) => day !== clickedItem))
        } else {
            setState([...state, clickedItem])
        }
    }

    function handleCollectionPlaceSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        postCollectionPlace({
            name,
            cep,
            buildingNum,
            latitude,
            longitude,
            phone,
            description,
            acceptableItems,
            workingHours,
            workingDays
        }).then(response => {
            if (response.status === 200) {
                history.push(ROUTES.COLLECTION_LIST)
            }
        })
    }

    return (
        <StyledNewColectionPlace className={`newCollectionPlace`}>
            <PageHeader pageName={`Novo Ponto de Coleta`} />
            <StyledForm action="" onSubmit={event => handleCollectionPlaceSubmit(event)}>
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
                    {WEEK_DAYS.map(day => (
                        <StyledLabel key={day}>
                            <StyledInput
                                type="checkbox"
                                name={`workingDays`}
                                value={day}
                                checked={workingDays.includes(day)}
                                onChange={() => handleCheckboxClick<WeekDays>(day, workingDays, setWorkingDays)}
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
                            value={workingHours.to}
                            onChange={event => setWorkingHours({ ...workingHours, to: event?.target.value })}
                        />
                    </StyledLabel>
                </fieldset>
                <fieldset className={`acceptableItems`}>
                    <h2>Tipos de Items coletados</h2>
                    {ITEM_TYPES.map(itemType => (
                        <StyledLabel key={itemType}>
                            <StyledInput
                                type="checkbox"
                                name={`acceptableItems`}
                                value={itemType}
                                checked={acceptableItems.includes(itemType)}
                                onChange={() =>
                                    handleCheckboxClick<AcceptableItems>(itemType, acceptableItems, setAcceptableItems)
                                }
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
