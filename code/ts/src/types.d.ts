interface UserPostParams extends LogInParams {
    name: string
    userType: UserTypes
}
interface LogInParams {
    email: string
    password: string
}

type UserTypes = 'collector' | 'donor'
