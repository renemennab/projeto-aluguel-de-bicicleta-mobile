import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
    pageName: string
}

export function PageHeader({ pageName }: IProps): JSX.Element {
    return (
        <StyledBackArrow>
            <Link to="/">
                <i className={`fa fa-arrow-left`} />
            </Link>
            <h1>{pageName}</h1>
        </StyledBackArrow>
    )
}

const StyledBackArrow = styled.header`
    a {
        &:visited {
            color: var(--red);
        }
    }
`
