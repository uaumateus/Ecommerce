import React, { Component } from 'react';
import './style.css';

import Login from '../Modals/Login';
import Register from '../Modals/Register';

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
                <h4>LOGOAQUI</h4>
                <div className="optionsNavbar">
                    <h4>icon1</h4>
                    <h4>icon2</h4>
                    <h4>icon3</h4>
                    <button className="button buttonPrimary" onClick={this.handleModalRegister}>Cadastre-se</button>
                    <button className="button buttonSecundary" onClick={this.handleModalLogin}>Login</button>
                </div>
            </header>
        )
    }
}