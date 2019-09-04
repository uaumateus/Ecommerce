import React, {Component} from 'react';
import './style.css';
import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class Register extends Component {
    closeModal = () => {
        this.props.onChangeState();
    };

    openModalLogin = () => {
        this.props.onChangeState();
        this.props.handlerLogin();
    };
    
    render(){
        if (!this.props.show) {
            return null;
        }
        return(
            <>
                <div className="backgroundModal" onClick={this.closeModal}/>
                <div className="modal">
                    <div className="headerModal">
                        <p className="Medium-Text-Bold">Inscreva-se, é simples e rápido</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal">
                        <form>
                            <InputText placeholder="Nome" type="text"/>
                            <InputText placeholder="Endereço" type="text"/>
                            <InputText placeholder="E-mail" type="text"/>
                            <InputText placeholder="Login" type="text"/>
                            <InputText placeholder="Senha" type="password"/>
                            <input type="submit" value="Cadastre-se" className="button buttonPrimary"/>
                        </form>
                    </div>
                    <div className="footerModal">
                        <p className="Medium-Text-Regular">Já tem uma conta?</p>
                        <a onClick={this.openModalLogin}><p className="Medium-Text-Regular link">Fazer Login</p></a>
                    </div>
                </div>
            </>
        )
    }
}