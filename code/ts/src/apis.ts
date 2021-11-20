import {
    convertEventParamsToPostObject,
    convertEventResponse,
    convertPlaceParamsToPostObject,
    convertPlaceResponse
} from './utils'

const API_PATHS = {
    ITEMS: 'api/Itens',
    PLACE: 'api/Ponto/',
    USER: 'api/Usuario/',
    COLLECTOR: 'api/Coletor/',
    LIST: 'listar-todos',
    MY_PLACES: 'meus-pontos',
    PLACE_EVENTS: 'eventos-ponto',
    SEARCH: 'buscar',
    REGISTER: 'cadastrar',
    ALTER: 'alterar',
    EVENT: 'api/Evento/',
    LOGIN: 'login'
}

export const SESSION_DATA = {
    NAME: 'nome',
    EMAIL: 'email',
    ID: 'id',
    USER_TYPE: 'perfil'
}
const URL_BASE = 'https://localhost:3001/'

export function getItems(): Promise<AcceptableItemsResponse[]> {
    return fetch(URL_BASE + API_PATHS.ITEMS, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
}

export function getPlace(placeId: number): Promise<CollectionPlace> {
    return fetch(URL_BASE + API_PATHS.PLACE + placeId, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => convertPlaceResponse(data))
        .catch(err => err)
}

export function postUser(params: UserPostParams): Promise<Response> {
    const { name, email, password, userType } = params

    return fetch(URL_BASE + API_PATHS.USER + API_PATHS.REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: name, email, senha: password, perfil: userType })
    }).catch(err => err)
}

export function loginUser(params: LogInParams): Promise<Response> {
    const { email, password } = params

    return fetch(URL_BASE + API_PATHS.USER + API_PATHS.LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha: password })
    })
        .then(response => response.json())
        .then((data: LogInResponse) => {
            window.sessionStorage.setItem(SESSION_DATA.ID, data.id)
            window.sessionStorage.setItem(SESSION_DATA.NAME, data.nome)
            window.sessionStorage.setItem(SESSION_DATA.USER_TYPE, data.perfil)
            window.sessionStorage.setItem(SESSION_DATA.EMAIL, params.email)

            return { status: 200 }
        })
        .catch(err => err)
}

export function logOutUser(): void {
    window.sessionStorage.clear()
}

export function postCollectionPlace(params: CollectionPlace, id?: number): Promise<Response> {
    let url = URL_BASE + API_PATHS.PLACE
    if (id) {
        url += API_PATHS.ALTER
        params.id = id
    } else {
        url += API_PATHS.REGISTER
    }

    return fetch(url, {
        method: id ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(convertPlaceParamsToPostObject(params, id))
    }).catch(err => err)
}

export function postEvent(params: EventForm, id?: number): Promise<Response> {
    let url = URL_BASE + API_PATHS.EVENT
    if (id) {
        url += API_PATHS.ALTER
        params.id = id
    } else {
        url += API_PATHS.REGISTER
    }

    return fetch(url, {
        method: id ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(convertEventParamsToPostObject(params, id))
    }).catch(err => err)
}

export function deletePlace(id: number): Promise<Response> {
    return fetch(URL_BASE + API_PATHS.PLACE + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
}

export function deleteEvent(id: number): Promise<Response> {
    return fetch(URL_BASE + API_PATHS.EVENT + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
}

export function getCollectionPlacesFromUser(userId: string): Promise<CollectionPlace[]> {
    return fetch(`${URL_BASE + API_PATHS.COLLECTOR}${userId}/${API_PATHS.MY_PLACES}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.map((place: CollectionPlaceResponse) => convertPlaceResponse(place)))
        .catch(err => err)
}
export function getCollectionPlaces(): Promise<CollectionPlace[]> {
    return fetch(`${URL_BASE + API_PATHS.PLACE + API_PATHS.LIST}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.map((place: CollectionPlaceResponse) => convertPlaceResponse(place)))
        .catch(err => err)
}

export function getEventsFromPlace(placeId: number): Promise<EventForm[]> {
    return fetch(`${URL_BASE + API_PATHS.EVENT}${placeId}/${API_PATHS.PLACE_EVENTS}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.map((event: EventResponse) => convertEventResponse(event)))
        .catch(err => err)
}

export function getEvents(): Promise<EventForm[]> {
    return new Promise(resolve => {
        // @ts-ignore
        resolve({ status: 200, body: JSON.parse(window.localStorage.getItem(API_PATHS.EVENT) || '[]') })
    })
}

export function getEvent(eventId: number): Promise<EventForm> {
    return fetch(`${URL_BASE + API_PATHS.EVENT}${eventId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then((event: EventResponse) => convertEventResponse(event))
        .catch(err => err)
}

export function getAddressFromCep(cep: string): Promise<CepObject> {
    return fetch(`http://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
}
