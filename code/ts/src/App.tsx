import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { MapComponent } from './map/mapComponent'
import { MenuOptions } from './navBar/menuOptions'
import { NavBar } from './navBar/navBar'

function App(): ReactElement {
    const [selectedView, setSelectedView] = useState('map')

    return (
        <AppStyles className="App">
            <main>
                <MapComponent />
                <NavBar selectedView={selectedView} setSelectedView={setSelectedView} />
                <MenuOptions selectedView={selectedView} setSelectedView={setSelectedView} />
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
        display: flex;
        flex-direction: column;
    }
`
export default App
