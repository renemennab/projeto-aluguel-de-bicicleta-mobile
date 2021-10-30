import React from 'react'
import styled from 'styled-components'
import { SESSION_DATA } from '../apis'
import { PageHeader } from '../components/pageHeader'

export function UserProfile(): JSX.Element {
    return (
        <StyledUserProfile className={`userProfile`}>
            <PageHeader pageName={window.sessionStorage.getItem(SESSION_DATA.NAME) || ``} />
            <span className={`userProfile--email`}>
                <strong>EMAIL: </strong>
                {window.sessionStorage.getItem(SESSION_DATA.EMAIL)}
            </span>
            <span className={`userProfile--type`}>
                <strong>TIPO: </strong>
                {window.sessionStorage.getItem(SESSION_DATA.USER_TYPE)}
            </span>
        </StyledUserProfile>
    )
}

const StyledUserProfile = styled.div`
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    position: relative;
    .userProfile {
        &--email,
        &--name,
        &--type {
            margin-top: 15px;
            strong {
                color: var(--dark-blue);
            }
        }
    }
`
