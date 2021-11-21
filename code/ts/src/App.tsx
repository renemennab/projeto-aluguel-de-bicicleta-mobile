import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AssetList } from './components/assetList'
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
import { SelectedPlace } from './places/selectedPlace'
import { SelectedEvent } from './places/selectedEvent'
import { EventsList } from './places/eventsList'
import { UserProfile } from './login/userProfile'
import { getCollectionPlaces, SESSION_DATA } from './apis'

export const SelectedPlaceContext = React.createContext<{
    selectedPlace?: CollectionPlace
    setSelectedPlace?: Dispatch<SetStateAction<CollectionPlace | undefined>>
}>({})
export const SelectedEventContext = React.createContext<{
    selectedEvent?: EventForm
    setSelectedEvent?: Dispatch<SetStateAction<EventForm | undefined>>
}>({})
export const UserLoggedContext = React.createContext<{
    userIsLogged?: boolean
    setUserIsLogged?: Dispatch<SetStateAction<boolean>>
}>({})
function App(): ReactElement {
    const [selectedView, setSelectedView] = useState('map')
    const [selectedPlace, setSelectedPlace] = useState<CollectionPlace | undefined>(undefined)
    const [selectedEvent, setSelectedEvent] = useState<EventForm | undefined>(undefined)
    const [placesArray, setPlacesArray] = useState<CollectionPlace[]>([])
    const [userIsLogged, setUserIsLogged] = useState<boolean>(!!window.sessionStorage.getItem(SESSION_DATA.ID))
    useEffect(() => {
        getCollectionPlaces().then(response => {
            setPlacesArray(response)
        })
    }, [])

    return (
        <Router>
            <AppStyles className="App">
                <UserLoggedContext.Provider value={{ userIsLogged, setUserIsLogged }}>
                    <SelectedPlaceContext.Provider value={{ selectedPlace, setSelectedPlace }}>
                        <SelectedEventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
                            <main>
                                <Switch>
                                    <Route path={ROUTES.LOGIN}>
                                        <Login />
                                    </Route>
                                    <Route path={ROUTES.SIGNIN}>
                                        <UserProfileForm />
                                    </Route>
                                    <Route path={ROUTES.PROFILE}>
                                        <UserProfile />
                                    </Route>
                                    <Route path={ROUTES.FAVOURITES}>
                                        <PlacesList />
                                    </Route>
                                    <Route path={`${ROUTES.PLACES}/:placeId${ROUTES.EVENTS}/:eventId/edit`}>
                                        <EventForm />
                                    </Route>
                                    <Route path={`${ROUTES.PLACES}/:placeId${ROUTES.EVENTS}/:eventId`}>
                                        <SelectedEvent />
                                    </Route>
                                    <Route path={`${ROUTES.PLACES}/:placeId/edit`}>
                                        <CollectionPlaceForm />
                                    </Route>
                                    <Route path={`${ROUTES.PLACES}/:placeId`}>
                                        <SelectedPlace />
                                    </Route>
                                    <Route path={ROUTES.PLACES}>
                                        <PlacesList />
                                    </Route>
                                    <Route path={ROUTES.NEW_PLACE}>
                                        <CollectionPlaceForm />
                                    </Route>
                                    <Route path={`${ROUTES.EVENTS}/:eventId`}>
                                        <SelectedEvent />
                                    </Route>
                                    <Route path={ROUTES.EVENTS}>
                                        <EventsList />
                                    </Route>
                                    <Route path={ROUTES.NEW_EVENT}>
                                        <EventForm />
                                    </Route>
                                    <Route path={`/:placeId`}>
                                        <SelectedPlace />
                                    </Route>
                                    <Route path="/">
                                        {selectedView === `list` ? <PlacesList /> : <MapComponent />}
                                        <NavBar selectedView={selectedView} setSelectedView={setSelectedView} />
                                        <MenuOptions selectedView={selectedView} setSelectedView={setSelectedView} />
                                    </Route>
                                </Switch>
                            </main>
                        </SelectedEventContext.Provider>
                    </SelectedPlaceContext.Provider>
                </UserLoggedContext.Provider>
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
