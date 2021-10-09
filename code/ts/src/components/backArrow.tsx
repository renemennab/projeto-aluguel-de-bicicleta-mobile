import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function BackArrow(): JSX.Element {
    return (
        <StyledBackArrow>
            <Link to="/">
                <i className={`fa fa-arrow-left`} />
            </Link>
        </StyledBackArrow>
    )
}

const StyledBackArrow = styled.div`
    a {
        &:visited {
            color: var(--red);
        }
    }
`
