import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
    pageName: string
}

export function PageHeader({ pageName }: IProps): JSX.Element {
    const history = useHistory()

    return (
        <StyledBackArrow>
            <button type="button" onClick={() => history.goBack()}>
                <i className={`fa fa-arrow-left`} />
            </button>
            <h1>{pageName}</h1>
        </StyledBackArrow>
    )
}

const StyledBackArrow = styled.header`
    button {
        color: var(--red);
        border: none;
        background: transparent;
        font-size: 20px;
    }
`
