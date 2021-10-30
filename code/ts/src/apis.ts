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

export function getItems(): Promise<AcceptableItemsResponse[]> {
    return fetch(URL_BASE + API_PATHS.ITEMS, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data)
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

function convertPlaceParamsToPostObject(params: CollectionPlace, id?: string): Record<string, unknown> {
    const {
        name,
        description,
        phone,
        cep,
        address,
        buildingNum,
        latitude,
        longitude,
        workingHours,
        workingDays,
        acceptableItems
    } = params

    const postObj = {
        nome: name,
        descricao: description,
        telefone: phone,
        cep: cep,
        cidadeEstado: address,
        numero: buildingNum,
        latitude,
        longitude,
        horarioInicioFuncionamento: workingHours.from,
        horarioFimFuncionamento: workingHours.to,
        diasFuncionamento: JSON.stringify(workingDays),
        itensDoacao: acceptableItems,
        coletorId: window.sessionStorage.getItem(SESSION_DATA.ID),
        id
    }
    if (!id) delete postObj.id

    return postObj
}
export function postCollectionPlace(params: CollectionPlace, id?: string): Promise<Response> {
    let url = URL_BASE + API_PATHS.PLACE
    if (id) url += API_PATHS.ALTER
    else url += API_PATHS.REGISTER

    return fetch(url, {
        method: id ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(convertPlaceParamsToPostObject(params))
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err))
}

export function deletePlace(id: string): Promise<Response> {
    return fetch(API_PATHS.PLACE + '/' + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
}

export function getCollectionPlacesFromUser(userId: number): Promise<CollectionPlace[]> {
    return fetch(`${URL_BASE + API_PATHS.USER}/${userId}${API_PATHS.MY_PLACES}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data)
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
        .then(data => data)
        .catch(err => console.error(err))
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

export function getAddressFromCep(cep: string): Promise<CepObject> {
    return fetch(`http://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
}
