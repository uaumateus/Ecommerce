import React, {Component} from 'react';
import './style.css';

import BreadCrumb from '../../components/BreadCrumb';
import InputTextAlter from '../../components/InputTextAlter';
import InputText from '../../components/InputText';

export default class Account extends Component{

    state = {
        name: null,
        adress: null,
        email: null,
        user: null,
        alterPassword: false,
        deleteAccount: false
    }

    componentDidMount(){
        this.setState({
            name: "Mateus Pereira dos Santos",
            adress: "Rua José Avilar, 2345, Messejana, Fortaleza - CE",
            email: "mateus@gmail.com",
            user: "uaumateus"
        });
    }

    onChange = e => {
        if(e.target.name == "name")
            this.setState({name: e.target.value});
        else if(e.target.name == "adress")
            this.setState({adress: e.target.value});
        else if(e.target.name == "email")
            this.setState({email: e.target.value});
        else if(e.target.name == "user")
            this.setState({user: e.target.value});
    }

    handlerAlterPassword = () => {
        this.setState({alterPassword: !this.state.alterPassword});
    }

    handlerDeleteAccount = () => {
        this.setState({deleteAccount: !this.state.deleteAccount});
    }

    render(){
        let { name, adress, email, user, alterPassword, deleteAccount }  = this.state;
        return(
            <div className="content account">
                <BreadCrumb actualPage="Conta" />
                <div className="container">
                    <div>
                        <InputTextAlter name="name" title="Nome" value={name} onChange={this.onChange}/>
                        <InputTextAlter name="adress" title="Endereço" value={adress} onChange={this.onChange}/>
                        <InputTextAlter name="email" title="E-mail" value={email} onChange={this.onChange}/>
                        <InputTextAlter name="user" title="Usuário" value={user} onChange={this.onChange}/>
                    </div>
                    <div className="optionsAccount">
                        {!alterPassword && !deleteAccount &&
                            <>
                                <button className="button buttonSecundary" onClick={this.handlerAlterPassword}>Alterar Senha</button>
                                <button className="button buttonSecundary" onClick={this.handlerDeleteAccount}>Deletar Conta</button>
                            </>
                        }
                        {alterPassword &&
                            <div className="alterPassword">
                                <p className="Large-Text-Regular">Alterar Senha</p>
                                <InputText placeholder="Senha atual" type="password"/>
                                <InputText placeholder="Nova senha" type="password"/>
                                <InputText placeholder="Confirme a nova senha" type="password"/>
                                <button className="button buttonSecundary" onClick={this.handlerAlterPassword}>Cancelar</button>
                                <button className="button buttonSecundary">Salvar</button>
                            </div>
                        }
                        {deleteAccount &&
                            <div className="deleteAccount">
                                <p className="Large-Text-Regular">Digite sua senha para deletar a conta</p>
                                <InputText placeholder="Senha" type="password"/>
                                <button className="button buttonSecundary" onClick={this.handlerDeleteAccount}>Cancelar</button>
                                <button className="button buttonSecundary">Deletar</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}