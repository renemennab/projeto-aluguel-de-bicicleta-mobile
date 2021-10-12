import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../utils'
interface IProps {
    selectedView: string
    setSelectedView: (type: string) => void
}
export function MenuOptions({ selectedView, setSelectedView }: IProps): JSX.Element {
    return (
        <StyledMenuOptions className={`menuOptions ${selectedView === `menu` ? `open` : ``}`}>
            <button className={`menuOptions--header `} onClick={() => setSelectedView(`map`)}>
                <h1 className={`menuOptions--header__title`}>NOSSO NOME</h1>
                <i className="fas fa-chevron-down" />
            </button>
            <ul className={`menuOptions--optionList `}>
                <li className={`menuOptions--optionList__item `}>
                    <button className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-user"></i> Perfil
                    </button>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <Link to={ROUTES.NEW_COLLECTION} className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-sign-in-alt"></i>
                        Adicionar Ponto de Coleta
                    </Link>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <button className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-plus"></i>
                        Adicionar evento de doação
                    </button>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <button className={`menuOptions--optionList__item--button `}>
                        <i className="far fa-star"></i>
                        Favoritos
                    </button>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <button className={`menuOptions--optionList__item--button `}>
                        <i className="far fa-calendar"></i> Meus Eventos
                    </button>
                </li>
                <li className={`menuOptions--optionList__item `}>
                    <button className={`menuOptions--optionList__item--button `}>
                        <i className="fas fa-map-marker-alt"></i>
                        Meus Pontos de coleta
                    </button>
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
                    i {
                        margin-right: 8px;
                    }
                }
                &:hover {
                    background: lightblue;
                }
            }
        }
    }
`
