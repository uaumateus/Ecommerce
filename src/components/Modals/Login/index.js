import React, {Component} from 'react';
import '../Register/style.css';
import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class Login extends Component {
    closeModal = () => {
        this.props.onChangeState();
    };

    openModalRegister = () => {
        this.props.onChangeState();
        this.props.handlerRegister();
    };
    
    render(){
        if (!this.props.show) {
            return null;
        }
        return(
            <>
                <div className="backgroundModal" onClick={this.closeModal}/>
                <div className="modal" style={{marginTop: '20vh'}}>
                    <div className="headerModal">
                        <p className="Medium-Text-Bold">Faça login em sua conta</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal">
                        <form>
                            <InputText placeholder="Login" type="text"/>
                            <InputText placeholder="Senha" type="password"/>
                            <input type="submit" value="Entrar" className="button buttonPrimary"/>
                        </form>
                    </div>
                    <div className="footerModal">
                        <p className="Medium-Text-Regular">Não tem uma conta?</p>
                        <a onClick={this.openModalRegister}><p className="Small-Text-Bold link">Cadastre-se</p></a>
                    </div>
                </div>
            </>
        )
    }
}