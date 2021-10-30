const API_PATHS = {
    ITEMS: 'api/Itens',
    PLACE: 'api/Ponto/',
    USER: 'api/Usuario/',
    LIST: 'listar-todos',
    MY_PLACES: 'meus-pontos',
    SEARCH: 'buscar',
    REGISTER: 'cadastrar',
    ALTER: 'alterar',
    EVENTS: 'EVENTS',
    LOGIN: 'login'
}

export const SESSION_DATA = {
    NAME: 'nome',
    EMAIL: 'email',
    ID: 'id',
    USER_TYPE: 'perfil'
}
const URL_BASE = 'https://localhost:3001/'

export function getItems(): Promise<void | CollectionPlace[]> {
    return fetch(URL_BASE + API_PATHS.ITEMS, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}

export function postUser(params: UserPostParams): Promise<void | Response> {
    const { name, email, password, userType } = params

    return fetch(URL_BASE + API_PATHS.USER + API_PATHS.REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: name, email, senha: password, perfil: userType })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
}

export function loginUser(params: LogInParams): Promise<void> {
    return fetch(URL_BASE + API_PATHS.USER + API_PATHS.LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then(response => response.json())
        .then((data: LogInResponse) => {
            window.sessionStorage.setItem(SESSION_DATA.ID, data.id)
            window.sessionStorage.setItem(SESSION_DATA.NAME, data.nome)
            window.sessionStorage.setItem(SESSION_DATA.USER_TYPE, data.perfil)
            window.sessionStorage.setItem(SESSION_DATA.EMAIL, params.email)
        })
        .catch(err => console.error(err))
}

export function logOutUser(): void {
    window.sessionStorage.clear()
}

export function postCollectionPlace(params: CollecgtionPlacePostParams): Promise<Response> {
    return new Promise(resolve => {
        const currentPlaces = JSON.parse(window.localStorage.getItem(API_PATHS.PLACE) || '[]')
        window.localStorage.setItem(API_PATHS.PLACE, JSON.stringify([...currentPlaces, params]))
        // @ts-ignore
        resolve({ status: 200 })
    })
}

export function getCollectionPlacesFromUser(userId: number): Promise<void | CollectionPlace[]> {
    return fetch(`${URL_BASE + API_PATHS.USER}/${userId}${API_PATHS.MY_PLACES}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err))
}
export function getCollectionPlaces(): Promise<CollectionPlace[]> {
    return new Promise(resolve => {
        // @ts-ignore
        resolve(JSON.parse(window.localStorage.getItem(API_PATHS.PLACES) || '[]'))
    })
}

export function postEvent(params: EventForm): Promise<Response> {
    return new Promise(resolve => {
        const currentEvents = JSON.parse(window.localStorage.getItem(API_PATHS.EVENTS) || '[]')
        window.localStorage.setItem(API_PATHS.EVENTS, JSON.stringify([...currentEvents, params]))
        // @ts-ignore
        resolve({ status: 200 })
    })
}
export function getEvents(): Promise<EventForm[]> {
    return new Promise(resolve => {
        // @ts-ignore
        resolve({ status: 200, body: JSON.parse(window.localStorage.getItem(API_PATHS.EVENTS) || '[]') })
    })
}
