import { WEEK_DAYS, ITEM_TYPES } from './utils'

declare global {
    interface UserPostParams extends LogInParams {
        name: string
        userType: UserTypes
    }
    interface LogInParams {
        email: string
        password: string
    }

    interface LogInResponse {
        nome: string
        id: string
        perfil: string
    }
    interface EventForm {
        date: string
        description: string
        collectionPlace: number
        workingHours: { from: string; to: string }
        id?: number
    }

    interface AlterCollectionPlaceParams extends CollectionPlace {
        placeId: string
    }
    interface CollectionPlace {
        name: string
        description: string
        phone: string
        cep: string
        address: string
        buildingNum: string
        latitude: string
        longitude: string
        workingHours: { from: string; to: string }
        workingDays: WeekDays[]
        acceptableItems: AcceptableItems[]
    }

    type UserTypes = 'collector' | 'donor'
    type WeekDays = typeof WEEK_DAYS[number]
    type AcceptableItems = typeof ITEM_TYPES[number]
}
