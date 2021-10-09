import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BackArrow } from '../components/backArrow'
import { StyledButton, StyledForm } from '../components/styled'
import { UserInfo } from '../components/userInfo'
export function Login(): JSX.Element {
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    return (
        <StyledLogin>
            <BackArrow />
            <h1>LOGIN</h1>
            <StyledForm action="">
                <UserInfo email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                <StyledButton>
                    Login <i className="fas fa-sign-in-alt" />
                </StyledButton>
            </StyledForm>
            <Link to={`/signIn`} className={`login--signInLink`}>
                Não tem uma conta? Cadastre-se aqui
            </Link>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    .login {
        &--signInLink {
            align-self: center;
            text-decoration: none;
            color: var(--dark-blue);
            margin-top: 50px;
        }
    }
`
