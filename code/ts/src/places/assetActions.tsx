import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { deletePlace } from '../apis'
import { ROUTES } from '../utils'
import { ConfirmationDialog } from './confirmationDialog'
interface IProps {
    itemId: number
    itemType: AssetType
}

export function AssetActions({ itemId, itemType }: IProps): JSX.Element {
    const location = useLocation().pathname
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    function handleDelete(): void {
        if (itemType === 'place') {
            deletePlace(itemId)
            history.push(ROUTES.PLACES)
        }
        setShowModal(false)
    }

    return (
        <StyledAssetActions className={`assetActions`}>
            <button className={`assetActions--favourite`}>
                <i className="far fa-star"></i>
                {/* filled star <i class="fas fa-star"></i> */}
            </button>
            <Link to={location + `/edit`} className={`assetActions--edit`}>
                <i className="far fa-edit"></i>
            </Link>
            <button className={`assetActions--remove`} onClick={() => setShowModal(true)}>
                <i className="far fa-trash-alt"></i>
            </button>
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
