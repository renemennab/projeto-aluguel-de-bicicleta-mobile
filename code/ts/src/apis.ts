export function postUser(params: UserPostParams): Promise<Response> {
    return new Promise(resolve => {
        const currentUsers = JSON.parse(window.localStorage.getItem('USERS') || '[]')
        window.localStorage.setItem('USERS', JSON.stringify([...currentUsers, params]))
        // @ts-ignore
        resolve({ status: 200 })
    })
}
export function postCollectionPlace(params: CollecgtionPlacePostParams): Promise<Response> {
    return new Promise(resolve => {
        const currentUsers = JSON.parse(window.localStorage.getItem('PLACES') || '[]')
        window.localStorage.setItem('PLACES', JSON.stringify([...currentUsers, params]))
        // @ts-ignore
        resolve({ status: 200 })
    })
}
export function loginUser(params: LogInParams): Promise<Response> {
    return new Promise(resolve => {
        const currentUsers = JSON.parse(window.localStorage.getItem('USERS') || '[]')
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
