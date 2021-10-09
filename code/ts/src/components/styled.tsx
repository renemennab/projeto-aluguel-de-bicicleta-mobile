import styled from 'styled-components'

export const StyledButton = styled.button`
    border: none;
    border-radius: 100px;
    padding: 15px 32px;
    background: var(--dark-blue);
    color: white;
`

export const StyledLabel = styled.label`
    margin-bottom: 20px;
    display: flex;
    flex-direction: var(--flexDirection);
    width: 100%;
    color: var(---black);
    &.column {
        flex-direction: column;
    }
`

export const StyledInput = styled.input`
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
`
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`
