import { SESSION_DATA } from "./apis"

export const ROUTES = {
    LOGIN: `/login`,
    SIGNIN: `/signIn`,
    PROFILE: `/profile`,
    NEW_PLACE: `/newCollection`,
    PLACES: `/places`,
    FAVOURITES: `/favourites`,
    NEW_EVENT: `/newEvent`,
    EVENTS: `/events`,
    COLLECTION_LIST: `/collectionList`,
    EVENT_LIST: `/eventList`
}

export const WEEK_DAYS = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', `sábado`, 'domingo'] as const
export const ITEM_TYPES = [
    'Roupas',
    'Alimento Não Perecível',
    'Alimento Preparado',
    'Produtos de Higiene Pessoal'
] as const

export const DONOR = 'Doador'
export const COLLECTOR = 'Coletor'

export function convertPlaceParamsToPostObject(params: CollectionPlace, id?: string): Record<string, unknown> {
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

export function convertPlaceResponse(response: CollectionPlaceResponse): CollectionPlace {
    const {
        nome,
        descricao,
        telefone,
        cep,
        cidadeEstado,
        numero,
        latitude,
        longitude,
        horarioInicioFuncionamento,
        horarioFimFuncionamento,
        diasFuncionamento,
        itensDoacao
    } = response

    const newObj = {
        name: nome,
        description: descricao,
        phone: telefone,
        cep,
        address: cidadeEstado,
        buildingNum: numero,
        latitude,
        longitude,
        workingHours: { from: horarioInicioFuncionamento, to: horarioFimFuncionamento },
        workingDays: JSON.parse(diasFuncionamento),
        acceptableItems: itensDoacao.map(item => item.id),
        configuredItems: itensDoacao
    }

    return newObj
}
