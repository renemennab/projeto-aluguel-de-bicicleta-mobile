import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { MapComponent } from './map/mapComponent'

function App(): ReactElement {
    return (
        <AppStyles className="App">
            <main>
                <MapComponent />
                hellog
            </main>
        </AppStyles>
    )
}

const AppStyles = styled.div`
    height: 100vh;
    width: 100%;
    main {
        width: 100%;
        height: 100%;
    }
`
export default App
