import React, { useState, MouseEvent, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { deleteEvent, deletePlace, addFavourite, removeFavourite, SESSION_DATA, getFavourites } from '../apis'
import { DONOR, ROUTES } from '../utils'
import { ConfirmationDialog } from './confirmationDialog'

interface IProps {
    itemId: number
    itemType: AssetType
}

export function AssetActions({ itemId, itemType }: IProps): JSX.Element {
    const location = useLocation().pathname
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()
    const [isPlaceFavourite, setIsPlaceFavourite] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const isDonor = window.sessionStorage.getItem(SESSION_DATA.USER_TYPE) === DONOR
    const userId = window.sessionStorage.getItem(SESSION_DATA.ID) as string

    function handleDelete(): void {
        if (itemType === 'place') {
            deletePlace(itemId)
            history.push(ROUTES.PLACES)
        } else if (itemType === 'event') {
            deleteEvent(itemId)
            history.push('/')
        }
        setShowModal(false)
    }

    function handleFavourite(event: MouseEvent<HTMLButtonElement>): void {
        event.preventDefault()

        if (!userId) {
            history.push(ROUTES.LOGIN)
        }
        if (!isPlaceFavourite) {
            addFavourite(userId, itemId).then(response => {
                if (response?.status === 200) {
                    console.log('Ponto favoritado')
                    setIsPlaceFavourite(true)
                }
            })
        } else {
            removeFavourite(userId, itemId).then(response => {
                if (response?.status === 200) {
                    console.log('Ponto des favoritado')
                    setIsPlaceFavourite(false)
                }
            })
        }
    }

    useEffect(() => {
        setIsLoading(true)
        getFavourites(userId).then(response => {
            const matches = response.filter(place => place.id === itemId)
            if (matches.length) setIsPlaceFavourite(true)
            setIsLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledAssetActions className={`assetActions`}>
            {isDonor && itemType === 'place' && !isLoading ? (
                <button
                    className={`assetActions--favourite`}
                    aria-label={'adicionar aos favoritos'}
                    onClick={event => handleFavourite(event)}
                >
                    {isPlaceFavourite ? <i className="fas fa-star"></i> : <i className="far fa-star"></i>}
                </button>
            ) : null}
            {!isDonor ? (
                <>
                    <Link to={location + `/edit`} className={`assetActions--edit`} aria-label={'editar'}>
                        <i className="far fa-edit"></i>
                    </Link>
                    <button
                        className={`assetActions--remove`}
                        onClick={() => setShowModal(true)}
                        aria-label={'deletar'}
                    >
                        <i className="far fa-trash-alt"></i>
                    </button>
                </>
            ) : null}
            {showModal ? (
                <ConfirmationDialog onCancel={() => setShowModal(false)} onDelete={() => handleDelete()} />
            ) : null}
        </StyledAssetActions>
    )
}

const StyledAssetActions = styled.div`
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: var(--padding);
    right: var(--padding);
    .fas.fa-star {
        color: var(--yellow);
    }
    .assetActions {
        &--edit,
        &--remove,
        &--favourite {
            padding: 15px;
            background: transparent;
            color: var(--dark-blue);
            border: none;
            font-size: 18px;
            transform: translate(10px, -25%);
        }
        &--remove {
            color: var(--red);
        }
        &--favourite {
            color: var(--dark-gray);
        }
    }
`
