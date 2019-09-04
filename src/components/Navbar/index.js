import React, { Component } from 'react';
import './style.css';

import Register from '../Modals/Register';

export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showRegister: false,
            showLogin: false
        };
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal = () => {
        this.setState({ showRegister: true });
    };
    
    onChangeState = () => {
        this.setState({ showRegister: false });
    };

    render(){
        return(
            <header className="navbar">
                <Register 
                    show={this.state.showRegister}
                    onChangeState={this.onChangeState}
                />
                <h4>LOGOAQUI</h4>
                <div className="optionsNavbar">
                    <h4>icon1</h4>
                    <h4>icon2</h4>
                    <h4>icon3</h4>
                    <button className="button buttonPrimary" onClick={this.handleModal}>Cadastre-se</button>
                    <button className="button buttonSecundary">Login</button>
                </div>
            </header>
        )
    }
}