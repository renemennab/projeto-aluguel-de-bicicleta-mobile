const API_PATHS = {
    USERS: 'USERS',
    PLACES: 'PLACES',
    EVENTS: 'EVENTS',
    AUTH: 'AUTH'
}

export function postUser(params: UserPostParams): Promise<Response> {
    return new Promise(resolve => {
        const currentUsers = JSON.parse(window.localStorage.getItem(API_PATHS.USERS) || '[]')
        window.localStorage.setItem(API_PATHS.USERS, JSON.stringify([...currentUsers, params]))
        // @ts-ignore
        resolve({ status: 200 })
    })
}
export function postCollectionPlace(params: CollecgtionPlacePostParams): Promise<Response> {
    return new Promise(resolve => {
        const currentPlaces = JSON.parse(window.localStorage.getItem(API_PATHS.PLACES) || '[]')
        window.localStorage.setItem(API_PATHS.PLACES, JSON.stringify([...currentPlaces, params]))
        // @ts-ignore
        resolve({ status: 200 })
    })
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
export function loginUser(params: LogInParams): Promise<Response> {
    return new Promise(resolve => {
        const currentUsers = JSON.parse(window.localStorage.getItem(API_PATHS.USERS) || '[]')
        const existingUser = currentUsers.filter(
            (user: { email: string; password: string }) =>
                user.email === params.email && user.password === params.password
        )
        if (existingUser.length) {
            window.localStorage.setItem('AUTH', 'true')
            // @ts-ignore
            resolve({ status: 200 })
        } else {
            // @ts-ignore
            resolve({ status: 500 })
        }
    })
}
