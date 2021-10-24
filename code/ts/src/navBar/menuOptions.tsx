import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SelectedPlaceContext, SelectedEventContext } from '../App'
import { ROUTES } from '../utils'
interface IProps {
    selectedView: string
    setSelectedView: (type: string) => void
}
export function MenuOptions({ selectedView, setSelectedView }: IProps): JSX.Element {
    const { setSelectedPlace } = useContext(SelectedPlaceContext)
    const { setSelectedEvent } = useContext(SelectedEventContext)
    useEffect(() => {
        setSelectedPlace?.(undefined)
        setSelectedEvent?.(undefined)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StyledMenuOptions className={`menuOptions ${selectedView === `menu` ? `open` : ``}`}>
            <button className={`menuOptions--header `} onClick={() => setSelectedView(`map`)}>
                <h1 className={`menuOptions--header__title`}>MAPA DO BEM</h1>
                <i className="fas fa-chevron-down" />
            </button>
            <ul className={`menuOptions--optionList `}>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.PROFILE} className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-user"></i> Perfil
                    </Link>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.NEW_PLACE} className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-sign-in-alt"></i>
                        Adicionar Ponto de Coleta
                    </Link>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.NEW_EVENT} className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-sign-in-alt"></i>
                        Adicionar evento de doação
                    </Link>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.FAVOURITES} className={`menuOptions--optionList__item--button `}>
                        <i className="far fa-star"></i>
                        Favoritos
                    </Link>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.EVENTS} className={`menuOptions--optionList__item--button `}>
                        <i className="far fa-calendar"></i> Meus Eventos
                    </Link>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.PLACES} className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-map-marker-alt"></i>
                        Meus Pontos de coleta
                    </Link>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.LOGIN} className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-sign-in-alt"></i>
                        Login
                    </Link>
                </li>
            </ul>
        </StyledMenuOptions>
    )
}

const StyledMenuOptions = styled.nav`
    position: absolute;
    top: 100vh;
    left: 0;
    height: 100vh;
    width: 100%;
    background: white;
    padding: 10px 40px;
    transition: all 0.5s ease-in-out;
    &.open {
        transform: translateY(-100vh);
    }
    .menuOptions {
        &--header {
            display: flex;
            border: none;
            background: transparent;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            &__title {
                color: var(--red);
            }
            i {
                color: var(--yellow);
            }
        }
        &--optionList {
            padding: 0;
            &__item {
                list-style: none;
                &--button {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border-radius: 10px;
                    padding: 18px 0;
                    border: none;
                    background: white;
                    text-decoration: none;
                    &,
                    &:visited {
                        color: var(--dark-blue);
                    }
                    i {
                        margin-right: 8px;
                        color: var(--yellow);
                    }
                }
                &:hover {
                    background: lightblue;
                }
            }
        }
    }
`
