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

    interface CollecgtionPlacePostParams extends CollectionPlace {
        requestType?: 'PUT' | 'POST'
    }
    interface CollectionPlace {
        name: string
        cep: string
        buildingNum: string
        latitude: string
        longitude: string
        phone: string
        description: string
        acceptableItems: AcceptableItems[]
        workingHours: { from: string; to: string }
        workingDays: WeekDays[]
    }

    type UserTypes = 'collector' | 'donor'
    type WeekDays = typeof WEEK_DAYS[number]
    type AcceptableItems = typeof ITEM_TYPES[number]
}
