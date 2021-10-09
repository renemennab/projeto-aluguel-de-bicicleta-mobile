import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../components/styled'

export function Login(): JSX.Element {
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    return (
        <StyledLogin>
            <Link to="/">
                <i className={`fa fa-arrow-left`} />
            </Link>
            <form action="">
                <label>
                    Email
                    <input required type="email" value={email} onChange={event => setEmail(event.target.value)} />
                </label>
                <label>
                    Senha
                    <input
                        required
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </label>
                <StyledButton>
                    Salvar <i className={`fa fa-save`} />
                </StyledButton>
            </form>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    padding: var(--padding);
    a {
        &:visited {
            color: var(--red);
        }
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 40px;
    }
    label {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        color: var(---black);
        input {
            font-size: 16px;
            margin-top: 8px;
            border: 1px solid var(--gray);
            padding: 8px;
            &:focus-visible,
            &:active {
                border: 1px solid var(--dark-blue);
                outline-color: var(--dark-blue);
            }
            height: 40px;
        }
    }
`
