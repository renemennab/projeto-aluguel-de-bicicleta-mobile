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
