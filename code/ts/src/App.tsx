import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { AssetList } from './components/assetList'
import { FakePointData } from './fakeData/fakeData'
import { MapComponent } from './map/mapComponent'
import { MenuOptions } from './navBar/menuOptions'
import { NavBar } from './navBar/navBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login } from './login/login'
import { UserProfileForm } from './login/userProfileForm'
import { CollectionPlaceForm } from './places/collectionPlaceForm'
import { ROUTES } from './utils'
import { EventForm } from './places/eventForm'
import { PlacesList } from './places/placesList'

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
                            <UserProfileForm />
                        </Route>
                        <Route path={ROUTES.FAVOURITES}>
                            <PlacesList />
                        </Route>
                        <Route path={ROUTES.PLACES}>
                            <PlacesList />
                        </Route>
                        <Route path={ROUTES.NEW_PLACE}>
                            <CollectionPlaceForm />
                        </Route>
                        <Route path={ROUTES.EVENTS}>
                            <EventForm />
                        </Route>
                        <Route path={ROUTES.NEW_EVENT}>
                            <EventForm />
                        </Route>
                        <Route path="/">
                            {
                                // @ts-ignore
                                selectedView === `list` ? <AssetList assetData={FakePointData} /> : <MapComponent />
                            }
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
