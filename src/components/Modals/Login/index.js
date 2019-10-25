import React, {Component} from 'react';
import '../Register/style.css';
import api from '../../../services/api';
import { login } from '../../../services/auth';

import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class Login extends Component {
    state = {
        username: null,
        password: null,
        otherError: false
    }

    onChange = e => {
        if(e.target.name === "username"){
            this.setState({username: e.target.value});
        }
        else if(e.target.name === "password"){
            this.setState({password: e.target.value});
        }
    }

    closeModal = () => {
        this.props.onChangeState();
    };

    openModalRegister = () => {
        this.props.onChangeState();
        this.props.handlerRegister();
    };

    goLogin = async () => {
        if(this.state.username !== "" && this.state.username !== null &&
            this.state.password !== "" && this.state.password !== null){
                        
            const { username, password } = this.state;
            await api.post('/admin/login', {
                login: username, 
                password: password
            }).then(resp => {  
                if(resp.data.result === "Administrador não encontrado"){
                    api.post('/login', {
                        login: username, 
                        password: password
                    }).then(r => {  
                        login(r.data.token);
                        window.location.reload();
                    })
                    .catch(error => {          
                        this.setState({otherError: "Informações incorretas"});      
                    })   
                }
                else{
                    login(resp.data.token);
                    window.location.reload();
                }
            })
            .catch(error => {          
                api.post('/login', {
                    login: username, 
                    password: password
                }).then(resp => {  
                    login(resp.data.token);
                    window.location.reload();
                })
                .catch(error => {          
                    this.setState({otherError: "Informações incorretas"});      
                })     
            })
            
        }else{
            this.setState({otherError: "Preencha todos os campos e tente novamente"});
        } 
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
                        {this.state.otherError &&
                            <p className="Medium-Text-Regular errorInput otherError">{this.state.otherError}</p>
                        }
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