import React from 'react'
import styled from 'styled-components'

interface Props {
    assetData: CollectionPlace[]
}
export function AssetList({ assetData }: Props): JSX.Element {
    console.log(assetData)

    return (
        <StyledAssetList className={`assetList`}>
            {assetData.map((data: CollectionPlace, index: number) => (
                <li className={`assetList--card`} key={index}>
                    <h2 className={`assetList--card__name`}>{data.name}</h2>
                    <span className={`assetList--card__acceptableItems`}>{data.acceptableItems.join(`, `)}</span>
                    <span className={`assetList--card__cep`}>{data.cep}</span>
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
        &--card {
            padding: 20px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            border-radius: 3px;
            box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.22);
            &__name,
            &__acceptableItems,
            &__cep {
                font-size: 14px;
            }
            &__name {
                color: var(--dark-blue);
                text-transform: capitalize;
                font-weight: 700;
                font-size: 18px;
            }
        }
    }
`
