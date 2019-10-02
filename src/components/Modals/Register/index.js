import React, {Component} from 'react';
import './style.css';
import api from '../../../services/api';
import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class Register extends Component {
    state = {
        name: null,
        errorName: false,
        adress: null,
        errorAdress: false,
        email: null,
        errorEmail: false,
        user: null,
        errorUser: false,
        password: null,
        errorPassword: false,
        otherError: false
    }

    onChange = e => {
        if(e.target.name === "name"){
            this.setState({name: e.target.value});
            if(e.target.value !== null && e.target.value !== ""){
                let testName = /[^a-zà-ú]/gi;
                if(testName.test(e.target.value)) //Apenas letras.
                    this.setState({errorName: false})
                else   
                    this.setState({errorName: "Nome e sobrenome, apenas letras"})
            }
        }else if(e.target.name === "adress"){
            this.setState({adress: e.target.value});
        }else if(e.target.name === "email"){
            this.setState({email: e.target.value});
            if(e.target.value !== null && e.target.value !== ""){
                let testEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
                if(testEmail.test(e.target.value))
                    this.setState({errorEmail: false})
                else   
                    this.setState({errorEmail: "E-mail inválido"})
            }
        }else if(e.target.name === "user"){
            this.setState({user: e.target.value});
            if(e.target.value !== null && e.target.value !== ""){
                let testUser = /^.{6,20}$/;
                if(testUser.test(e.target.value))
                    this.setState({errorUser: false})
                else   
                    this.setState({errorUser: "Deve ter entre 6 e 20 caracteres"})
            }
        }else if(e.target.name === "password"){
            this.setState({password: e.target.value});
            if(e.target.value !== null && e.target.value !== ""){
                let testPassword = /^.{8,20}$/;
                if(testPassword.test(e.target.value)){
                    this.setState({errorPassword: false})
                    testPassword = /^(?=.*\d)(?=.*[a-z]).{8,20}$/;
                    if(testPassword.test(e.target.value)){
                        this.setState({errorPassword: false})
                    }else
                        this.setState({errorPassword: "Deve ter letras e números"})
                }else
                    this.setState({errorPassword: "Deve ter entre 8 e 20 caracteres"})
            }
        }
    }

    closeModal = () => {
        this.props.onChangeState();
    };

    openModalLogin = () => {
        this.props.onChangeState();
        this.props.handlerLogin();
    };

    goRegister = async () => {
        if(this.state.name !== "" && this.state.name !== null && 
            this.state.email !== "" && this.state.email !== null && 
            this.state.adress !== "" && this.state.adress !== null &&
            this.state.user !== "" && this.state.user !== null &&
            this.state.password !== "" && this.state.password !== null){

                if(!this.state.errorName && 
                    !this.state.errorEmail &&
                    !this.state.errorAdress &&
                    !this.state.errorUser &&
                    !this.state.errorPassword){
                        
                        const {name, email, adress, user, password} = this.state;
                        await api.post('/register', {
                                name: name, 
                                adress: adress, 
                                email: email, 
                                login: user, 
                                password: password
                        }).then(resp => {  
                            this.props.registerSuccess();
                            this.openModalLogin();
                        })
                        .catch(error => {          
                            this.setState({otherError: "Ocorreu algum erro"});     
                        })
                    }

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
                <div className="modal">
                    <div className="headerModal">
                        <p className="Medium-Text-Bold">Inscreva-se, é simples e rápido</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal">
                        {this.state.otherError &&
                            <p className="Medium-Text-Regular errorInput otherError">{this.state.otherError}</p>
                        }
                        <InputText placeholder="Nome" type="text" name="name" onChange={this.onChange}/>
                        {this.state.errorName &&
                            <p className="Small-Text-Regular errorInput">{this.state.errorName}</p>
                        }
                        <InputText placeholder="Endereço" type="text" name="adress" onChange={this.onChange}/>
                        
                        <InputText placeholder="E-mail" type="text" name="email" onChange={this.onChange}/>
                        {this.state.errorEmail &&
                            <p className="Small-Text-Regular errorInput">{this.state.errorEmail}</p>
                        }
                        <InputText placeholder="Login" type="text" name="user" onChange={this.onChange}/>
                        {this.state.errorUser &&
                            <p className="Small-Text-Regular errorInput">{this.state.errorUser}</p>
                        }
                        <InputText placeholder="Senha" type="password" name="password" onChange={this.onChange}/>
                        {this.state.errorPassword &&
                            <p className="Small-Text-Regular errorInput">{this.state.errorPassword}</p>
                        }
                        <button className="button buttonPrimary" onClick={this.goRegister}>Cadastre-se</button>
                    </div>
                    <div className="footerModal">
                        <p className="Medium-Text-Regular">Já tem uma conta?</p>
                        <a onClick={this.openModalLogin}><p className="Small-Text-Bold link">Fazer Login</p></a>
                    </div>
                </div>
            </>
        )
    }
}