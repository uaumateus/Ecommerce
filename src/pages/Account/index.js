import React, {Component} from 'react';
import api from '../../services/api';
import './style.css';

import AlertMessage from '../../components/AlertMessage';
import BreadCrumb from '../../components/BreadCrumb';
import InputTextAlter from '../../components/InputTextAlter';
import InputText from '../../components/InputText';

export default class Account extends Component{

    state = {
        id: null,
        name: null,
        adress: null,
        email: null,
        user: null,
        currentPassword: null,
        newPassword: null,
        confirmPassword: null,
        alterPassword: false,
        deleteAccount: false,
        passwordAlter: false
    }

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('@compreaqui-User'));
        this.setState({
            id: user.id,
            name: user.name,
            adress: user.adress,
            email: user.email,
            user: user.login
        });
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handlerAlterPassword = () => {
        this.setState({alterPassword: !this.state.alterPassword});
    }

    handlerDeleteAccount = () => {
        this.setState({deleteAccount: !this.state.deleteAccount});
    }

    editDataAccount = async () => {
        await api.put('/user/'+this.state.id, {
            name: this.state.name,
            email: this.state.email,
            login: this.state.user,
            adress: this.state.adress
        }).then(resp => {
            localStorage.setItem('@compreaqui-User', JSON.stringify({id: this.state.id,
                                                    name: this.state.name,
                                                    email: this.state.email,
                                                    login: this.state.user,
                                                    adress: this.state.adress}));
            window.location.reload();
        })
        .catch(error => {          
            console.log("deu erro")  
        })
    }

    editPassword = async () => {
        await api.put('/user-password/'+this.state.id, {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword,
            confirmPassword: this.state.confirmPassword
        }).then(resp => {
            this.handlerAlterPassword();
            this.passwordAlter();
        })
        .catch(error => {          
            console.log("deu erro")  
        })
    }

    passwordAlter = () => {
        this.setState({passwordAlter: true});
        setTimeout(()=>this.setState({passwordAlter: false}), 3000);
    }

    deleteAccount = async () => {
        await api.delete('/user/'+this.state.id).then(resp => {
            window.location.reload();
            localStorage.clear();
        })
        .catch(error => {          
            console.log("deu erro")  
        })
    }

    render(){
        let { name, adress, email, user, alterPassword, deleteAccount, currentPassword, newPassword, confirmPassword }  = this.state;
        return(
            <div className="content account">
                {this.state.passwordAlter && <AlertMessage message="passwordAlter" />}
                <BreadCrumb actualPage="Conta" />
                <div className="container">
                    <div>
                        <InputTextAlter name="name" title="Nome" value={name} onChange={this.onChange} save={this.editDataAccount}/>
                        {adress !== undefined &&
                            <InputTextAlter name="adress" title="Endereço" value={adress} onChange={this.onChange} save={this.editDataAccount}/>
                        }
                        <InputTextAlter name="email" title="E-mail" value={email} onChange={this.onChange} save={this.editDataAccount}/>
                        <InputTextAlter name="user" title="Usuário" value={user} onChange={this.onChange} save={this.editDataAccount}/>
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
                                <InputText name="currentPassword" value={currentPassword} onChange={this.onChange} placeholder="Senha atual" type="password"/>
                                <InputText name="newPassword" value={newPassword} onChange={this.onChange} placeholder="Nova senha" type="password"/>
                                <InputText name="confirmPassword" value={confirmPassword} onChange={this.onChange} placeholder="Confirme a nova senha" type="password"/>
                                <button className="button buttonSecundary" onClick={this.handlerAlterPassword}>Cancelar</button>
                                <button className="button buttonSecundary" onClick={this.editPassword}>Salvar</button>
                            </div>
                        }
                        {deleteAccount &&
                            <div className="deleteAccount">
                                <p className="Large-Text-Regular">Digite sua senha para deletar a conta</p>
                                <InputText placeholder="Senha" type="password"/>
                                <button className="button buttonSecundary" onClick={this.handlerDeleteAccount}>Cancelar</button>
                                <button className="button buttonSecundary" onClick={this.deleteAccount}>Deletar</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}