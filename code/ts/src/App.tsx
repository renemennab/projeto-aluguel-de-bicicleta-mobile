import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { AssetList } from './components/assetList'
import { FakePointData } from './fakeData/fakeData'
import { MapComponent } from './map/mapComponent'
import { MenuOptions } from './navBar/menuOptions'
import { NavBar } from './navBar/navBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from './login/login'
import { SignIn } from './login/signIn'
import { NewCollectionPlace } from './places/newCollectionPlace'
import { ROUTES } from './utils'

function App(): ReactElement {
    const [selectedView, setSelectedView] = useState('map')

    return (
        <Router>
            <AppStyles className="App">
                <main>
                    <Switch>
                        <Route path={ROUTES.LOGIN}>
                            <Login />
                        </Route>
                        <Route path={ROUTES.SIGNIN}>
                            <SignIn />
                        </Route>
                        <Route path={ROUTES.NEW_COLLECTION}>
                            <NewCollectionPlace />
                        </Route>
                        <Route path="/">
                            {selectedView === `list` ? <AssetList assetData={FakePointData} /> : <MapComponent />}
                            <NavBar selectedView={selectedView} setSelectedView={setSelectedView} />
                            <MenuOptions selectedView={selectedView} setSelectedView={setSelectedView} />
                        </Route>
                    </Switch>
                </main>
            </AppStyles>
        </Router>
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
