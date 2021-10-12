import React, { useState } from 'react'
import styled from 'styled-components'
import { BackArrow } from '../components/backArrow'
import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../components/styled'
import { UserInfo } from '../components/userInfo'

export function SignIn(): JSX.Element {
    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [UserType, setUserType] = useState<`collector` | `donor`>(`donor`)

    return (
        <StyledSignIn>
            <BackArrow />
            <h1>Cadastro</h1>
            <StyledForm action="">
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
                            checked={UserType === `donor`}
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
                            checked={UserType === `collector`}
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
