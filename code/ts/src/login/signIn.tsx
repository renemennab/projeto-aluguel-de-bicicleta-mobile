import React, { useState } from 'react'
import styled from 'styled-components'
import { BackArrow } from '../components/backArrow'
import { StyledButton, StyledForm, StyledLabel } from '../components/styled'
import { UserInfo } from '../components/userInfo'

export function SignIn(): JSX.Element {
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [UserType, setUserType] = useState<`colector` | `donor`>(`donor`)

    return (
        <StyledSignIn>
            <BackArrow />
            <h1>Cadastro</h1>
            <StyledForm action="">
                <fieldset className={`userInfo`}>
                    <UserInfo email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                </fieldset>
                <fieldset className={`userType`}>
                    <StyledLabel>
                        <input
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
                        <input
                            className={`userType--input`}
                            type="radio"
                            name={`userType`}
                            value={`colector`}
                            checked={UserType === `colector`}
                            onChange={() => setUserType(`colector`)}
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
        .userType {
            &--input {
                margin-right: 10px;
            }
        }
    }
`
