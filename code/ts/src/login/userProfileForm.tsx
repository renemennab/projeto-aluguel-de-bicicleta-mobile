import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import { PageHeader } from '../components/pageHeader'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'
import { UserInfo } from '../components/userInfo'
import { ROUTES } from '../utils'
import { useHistory } from 'react-router-dom'
import { postUser } from '../apis'

export function UserProfileForm(): JSX.Element {
    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [userType, setUserType] = useState<UserTypes>(`donor`)
    const history = useHistory()

    function handleSignIn(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const params = { name, email, password, userType }
        postUser(params).then(response => {
            if (response?.status === 200) {
                history.push(ROUTES.LOGIN)
            }
        })
    }

    return (
        <StyledSignIn>
            <PageHeader pageName={`Cadastro`} />
            <StyledForm action="" onSubmit={event => handleSignIn(event)}>
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
                    <UserInfo email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                </fieldset>
                <fieldset className={`userType`}>
                    <StyledLabel>
                        <StyledInput
                            className={`userType--input`}
                            type="radio"
                            name={`userType`}
                            value={`donor`}
                            checked={userType === `donor`}
                            onChange={() => setUserType(`donor`)}
                        />
                        Doador
                    </StyledLabel>
                    <StyledLabel>
                        <StyledInput
                            className={`userType--input`}
                            type="radio"
                            name={`userType`}
                            value={`collector`}
                            checked={userType === `collector`}
                            onChange={() => setUserType(`collector`)}
                        />
                        Coletor
                    </StyledLabel>
                </fieldset>
                <StyledButton>
                    Salvar <i className={`fa fa-save`} />
                </StyledButton>
            </StyledForm>
        </StyledSignIn>
    )
}

const StyledSignIn = styled.div`
    padding: var(--padding);
    fieldset {
        border: none;
        width: 100%;
    }
`
