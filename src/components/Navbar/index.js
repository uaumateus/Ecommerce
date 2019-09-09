import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Login from '../Modals/Login';
import Register from '../Modals/Register';

import iconCategories from './assets/categories_icon.svg';
import iconSearch from './assets/search_icon.svg';
import iconFavorite from './assets/favorite_icon.svg';
import iconBag from './assets/bag_icon.svg';
import iconPerson from './assets/person_icon.svg';

export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showRegister: false,
            showLogin: false,
            logged: true,
            userType: 2 // 1 - user comum   /   2 - admin
        };
        this.handleModalRegister = this.handleModalRegister.bind(this);
        this.handleModalLogin = this.handleModalLogin.bind(this);
    }

    handleModalRegister = () => {
        const showRegister = !this.state.showRegister;
        this.setState({ showRegister });
    };
    
    handleModalLogin = () => {
        const showLogin = !this.state.showLogin;
        this.setState({ showLogin });
    };

    render(){
        return(
            <header className="navbar">
                <Login 
                    show={this.state.showLogin}
                    onChangeState={this.handleModalLogin}
                    handlerRegister={this.handleModalRegister}
                />
                <Register 
                    show={this.state.showRegister}
                    onChangeState={this.handleModalRegister}
                    handlerLogin={this.handleModalLogin}
                />
                <div className="containerLogo">
                    <p className="Large-Text-Bold">LOGOAQUI</p>
                    <article>
                        <img src={iconCategories} />
                        <p className="Medium-Text-Regular">Categorias</p>
                    </article>
                </div>
                
                <div className="optionsNavbar">
                    <img src={iconSearch} className="iconNavbar" />
                    <img src={iconFavorite} className="iconNavbar" />
                    <Link to="/sacola"><img src={iconBag} className="iconNavbar"/></Link>

                    {this.state.logged ?
                        <>
                            {this.state.userType == 1 &&
                                <div className="profileOptions">
                                    <img src={iconPerson} className="iconNavbar" />
                                    <ul className="dropdownUser">
                                        <Link to="/historico"><li className="Medium-Text-Regular liLine">Histórico de compra</li></Link>
                                        <Link to="/conta"><li className="Medium-Text-Regular liLine">Conta</li></Link>
                                        <li className="Medium-Text-Regular">Sair</li>
                                    </ul>
                                </div>
                            }
                            {this.state.userType == 2 &&
                                <div className="profileOptions">
                                    <img src={iconPerson} className="iconNavbar" />
                                    <ul className="dropdownUser">
                                        <Link to="/historico"><li className="Medium-Text-Regular liLine">Histórico de compra</li></Link>
                                        <Link to="/conta"><li className="Medium-Text-Regular liLine">Conta</li></Link>
                                        <li className="Medium-Text-Regular liLine ">Clientes</li>
                                        <li className="Medium-Text-Regular liLine">Estoque</li>
                                        <li className="Medium-Text-Regular liLine reports">Relatórios
                                            <ul className="subDropdown">
                                                <li className="Medium-Text-Regular liLine">Compras por cliente</li>
                                                <li className="Medium-Text-Regular liLine">Produtos em falta</li>
                                                <li className="Medium-Text-Regular">Valor diário</li>
                                            </ul>
                                        </li>
                                        <li className="Medium-Text-Regular">Sair</li>
                                    </ul>
                                </div>
                            }
                        </>
                    :
                        <>
                            <button className="button buttonSecundary" onClick={this.handleModalLogin}>Entrar</button>
                            <button className="button buttonPrimary" onClick={this.handleModalRegister}>Cadastre-se</button>
                        </>
                    }                    

                </div>
            </header>
        )
    }
}