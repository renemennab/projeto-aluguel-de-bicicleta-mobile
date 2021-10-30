import { WEEK_DAYS, ITEM_TYPES, COLLECTOR, DONOR } from './utils'

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
        buildingNum: number
        latitude: number
        longitude: number
        workingHours: { from: string; to: string }
        workingDays: WeekDays[]
        acceptableItems: number[]
        id?: string
    }

    interface CepObject {
        bairro: string
        cep: string
        complemento: string
        ddd: string
        gia: string
        ibge: string
        localidade: string
        logradouro: string
        siafi: string
        uf: string
    }

    type UserTypes = typeof COLLECTOR | typeof DONOR
    type WeekDays = typeof WEEK_DAYS[number]
    type AcceptableItems = typeof ITEM_TYPES[number]

    interface AcceptableItemsResponse {
        id: number
        produto: AcceptableItems
    }
}
