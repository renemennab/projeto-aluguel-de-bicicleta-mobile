import React, { Dispatch, FormEvent, SetStateAction, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAddressFromCep, getItems, postCollectionPlace } from '../apis'
import { PageHeader } from '../components/pageHeader'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'
import { ROUTES, WEEK_DAYS } from '../utils'
import { useHistory } from 'react-router-dom'
import { SelectedPlaceContext } from '../App'

export function CollectionPlaceForm(): JSX.Element {
    const { selectedPlace } = useContext(SelectedPlaceContext)

    const [name, setName] = useState(selectedPlace?.name || ``)
    const [cep, setCep] = useState(selectedPlace?.cep || ``)
    const [address, setAddress] = useState<CepObject>(getAddresEmptyObj())
    const [buildingNum, setBuildingNum] = useState(selectedPlace?.buildingNum || ``)
    const [latitude, setLatitude] = useState(selectedPlace?.latitude || ``)
    const [longitude, setLongitude] = useState(selectedPlace?.longitude || ``)
    const [phone, setPhone] = useState(selectedPlace?.phone || ``)
    const [description, setDescription] = useState(selectedPlace?.description || ``)
    const [acceptableItems, setAcceptableItems] = useState<number[]>(selectedPlace?.acceptableItems || [])
    const [itemTypes, setItemTypes] = useState<AcceptableItemsResponse[]>([])
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

    useEffect(() => {
        const isCepValid = cep && cep.length === 8
        if (isCepValid) {
            getAddressFromCep(cep).then(response => {
                console.log(`cep response`, response)
                if (response.uf) setAddress(response)
            })
        } else if (address && !isCepValid) {
            setAddress(getAddresEmptyObj())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cep])

    useEffect(() => {
        getItems().then(response => {
            console.log(`setItemTypes response`, response)
            setItemTypes(response)
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleCollectionPlaceSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        postCollectionPlace(
            {
                name,
                cep,
                address: JSON.stringify(address),
                buildingNum: Number(buildingNum),
                latitude: Number(latitude),
                longitude: Number(longitude),
                phone,
                description,
                acceptableItems,
                configuredItems: selectedPlace?.configuredItems,
                workingHours,
                workingDays
            },
            selectedPlace?.id
        ).then(response => {
            console.log(response)
            if (response.status === 201) {
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
                        Estado
                        <StyledInput readOnly type="text" value={address.uf} />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        Cidade
                        <StyledInput readOnly type="text" value={address.localidade} />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        Bairro
                        <StyledInput readOnly type="text" value={address.bairro} />
                    </StyledLabel>
                    <StyledLabel className={`column`}>
                        Logradouro
                        <StyledInput readOnly type="text" value={address.logradouro} />
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
                    {itemTypes.map(itemType => (
                        <StyledLabel key={itemType.id}>
                            <StyledInput
                                type="checkbox"
                                name={`acceptableItems`}
                                value={itemType.id}
                                checked={acceptableItems.includes(itemType.id)}
                                onChange={() =>
                                    handleCheckboxClick<number>(itemType.id, acceptableItems, setAcceptableItems)
                                }
                            />
                            {itemType.produto}
                        </StyledLabel>
                    ))}
                </fieldset>
                <StyledButton>
                    {selectedPlace ? 'Atualizar' : 'Salvar'} <i className={`fa fa-save`} />
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
function getAddresEmptyObj(): CepObject {
    return {
        bairro: '',
        cep: '',
        complemento: '',
        ddd: '',
        gia: '',
        ibge: '',
        localidade: '',
        logradouro: '',
        siafi: '',
        uf: ''
    }
}
