import React, { FormEvent, useContext, useState } from 'react'
import styled from 'styled-components'
import { PageHeader } from '../components/pageHeader'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'
import { UserInfo } from '../components/userInfo'
import { COLLECTOR, DONOR } from '../utils'
import { useHistory } from 'react-router-dom'
import { loginUser, postUser } from '../apis'
import { UserLoggedContext } from '../App'

export function UserProfileForm(): JSX.Element {
    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [userType, setUserType] = useState<UserTypes>(DONOR)
    const { setUserIsLogged } = useContext(UserLoggedContext)

    const history = useHistory()

    function handleSignIn(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault()
        const params = { name, email, password, userType }
        postUser(params).then(response => {
            if (response?.status === 200) {
                console.log('usuário criado')
                loginUser({ email, password }).then(response => {
                    if (response.status === 200) {
                        console.log('usuário logado')
                        setUserIsLogged?.(true)
                        history.push('/')
                    }
                })
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
                            value={DONOR}
                            checked={userType === DONOR}
                            onChange={() => setUserType(DONOR)}
                        />
                        Doador
                    </StyledLabel>
                    <StyledLabel>
                        <StyledInput
                            className={`userType--input`}
                            type="radio"
                            name={`userType`}
                            value={COLLECTOR}
                            checked={userType === COLLECTOR}
                            onChange={() => setUserType(COLLECTOR)}
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
