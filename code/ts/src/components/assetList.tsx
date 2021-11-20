import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../utils'
import { SelectedEventContext, SelectedPlaceContext } from '../App'
interface Props {
    assetType: 'event' | 'place'
    placesData?: CollectionPlace[]
    eventData?: EventForm[]
}
export function AssetList({ placesData, assetType, eventData }: Props): JSX.Element {
    const { setSelectedPlace } = useContext(SelectedPlaceContext)
    const { setSelectedEvent } = useContext(SelectedEventContext)
    const [filter, setFilter] = useState('')
    const [filteredList, setFilteredList] = useState(assetType === 'place' ? placesData : eventData)

    useEffect(() => {
        const list = assetType === 'place' ? placesData : eventData
        // @ts-ignore
        const filtered = list?.reduce((acc: any[], asset: Record<string, string | number>) => {
            const assetValues = Object.values(asset)
            const matchingValues = assetValues.filter(value =>
                value.toString().toLowerCase().includes(filter.toLowerCase())
            )
            if (matchingValues.length) acc.push(asset)

            return acc
        }, [])
        setFilteredList(filtered)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    return (
        <StyledAssetList className={`assetList`}>
            <input
                className={`assetList--input`}
                type="text"
                value={filter}
                onChange={event => setFilter(event.target.value)}
            />
            {assetType === 'place'
                ? (filteredList as CollectionPlace[])?.map((data: CollectionPlace, index: number) => (
                      <li className={`assetList--card`} key={index} onClick={() => setSelectedPlace?.(data)}>
                          <Link className={`assetList--card__link`} to={`${ROUTES.PLACES}/${data.id}`}>
                              <h2 className={`assetList--card__link--name`}>{data.name}</h2>
                              <span className={`assetList--card__link--acceptableItems`}>
                                  {data.configuredItems?.map(item => item.produto).join(`, `)}
                              </span>
                              <span className={`assetList--card__link--cep`}>{data.cep}</span>
                          </Link>
                      </li>
                  ))
                : (filteredList as EventForm[])?.map((data: EventForm, index: number) => (
                      <li className={`assetList--card`} key={index} onClick={() => setSelectedEvent?.(data)}>
                          <Link className={`assetList--card__link`} to={`${ROUTES.EVENTS}/${data.id || 2}`}>
                              <h2 className={`assetList--card__link--name`}>{data.name}</h2>
                              <span className={`assetList--card__link--date`}>{data.date}</span>
                              <span className={`assetList--card__link--workingHours`}>
                                  {data.workingHours.from} - {data.workingHours.to}
                              </span>
                          </Link>
                      </li>
                  ))}
        </StyledAssetList>
    )
}

const StyledAssetList = styled.ul`
    flex-grow: 1;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 20px;
    .assetList {
        &--input {
            width: 100%;
            height: 30px;
            border-radius: 35px;
            margin-bottom: 20px;
            border: 1px solid var(--black);
            padding-left: 16px;
        }
        &--card {
            padding: 20px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            border-radius: 3px;
            box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.22);
            &__link {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                &--name,
                &--acceptableItems,
                &--workingHours,
                &--description,
                &--cep {
                    font-size: 14px;
                    margin-bottom: 15px;
                }
                &--name {
                    color: var(--dark-blue);
                    text-transform: capitalize;
                    font-weight: 700;
                    font-size: 18px;
                }
            }
        }
    }
`
