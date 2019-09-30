import React, {Component} from 'react';
import '../Register/style.css';
import api from '../../../services/api';

import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class Login extends Component {
    state = {
        username: null,
        password: null
    }

    onChange = e => {
        if(e.target.name === "username")
            this.setState({username: e.target.value});
        else if(e.target.name === "password")
            this.setState({password: e.target.value});
    }

    closeModal = () => {
        this.props.onChangeState();
    };

    openModalRegister = () => {
        this.props.onChangeState();
        this.props.handlerRegister();
    };

    goLogin = async () => {
        const { username, password } = this.state;
        await api.post('/login', {
            login: username, 
            password: password
        }).then(resp => {  
            console.log(resp)
        })
        .catch(error => {          
            console.log(error)       
        })
    }
    
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
                        <InputText placeholder="Login" type="text" name="username" onChange={this.onChange}/>
                        <InputText placeholder="Senha" type="password" name="password" onChange={this.onChange}/>
                        <button className="button buttonPrimary" onClick={this.goLogin}>Entrar</button>
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