import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Login from '../Modals/Login';
import Register from '../Modals/Register';

import iconCategories from './assets/categories_icon.svg';
import iconSearch from './assets/search_icon.svg';
import iconFavorite from './assets/favorite_icon.svg';
import iconBag from './assets/bag_icon.svg';

export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showRegister: false,
            showLogin: false
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
                    <button className="button buttonSecundary" onClick={this.handleModalLogin}>Entrar</button>
                    <button className="button buttonPrimary" onClick={this.handleModalRegister}>Cadastre-se</button>
                </div>
            </header>
        )
    }
}