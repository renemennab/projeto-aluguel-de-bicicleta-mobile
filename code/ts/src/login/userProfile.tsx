import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUser } from '../apis'
import { PageHeader } from '../components/pageHeader'

export function UserProfile(): JSX.Element {
    const [userProfile, setUserProfile] = useState<UserPostParams | null>(null)
    console.log(`UserProfile`, userProfile)

    useEffect(() => {
        // @ts-ignore
        getUser().then(response => setUserProfile(response.body?.[0]))
    }, [])

    return userProfile ? (
        <StyledUserProfile className={`userProfile`}>
            <PageHeader pageName={userProfile.name} />
            <span className={`userProfile--email`}>
                <strong>EMAIL: </strong>
                {userProfile.email}
            </span>
            <span className={`userProfile--password`}>
                <strong>SENHA: </strong>
                {userProfile.password}
            </span>
            <span className={`userProfile--type`}>
                <strong>TIPO: </strong>
                {userProfile.userType}
            </span>
        </StyledUserProfile>
    ) : (
        <div />
    )
}

const StyledUserProfile = styled.div`
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    position: relative;
    .userProfile {
        &--email,
        &--password,
        &--type {
            margin-top: 15px;
            strong {
                color: var(--dark-blue);
            }
        }
    }
`
