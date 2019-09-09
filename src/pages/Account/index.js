import React, {Component} from 'react';
import './style.css';

import BreadCrumb from '../../components/BreadCrumb';
import InputTextAlter from '../../components/InputTextAlter';

export default class Account extends Component{
    render(){
        return(
            <div className="content account">
                <BreadCrumb actualPage="Conta" />
                <div className="container">
                    <div>
                        <InputTextAlter title="Nome" value="Mateus Pereira dos Santos" />
                        <InputTextAlter title="Endereço" value="Rua José Avilar, 2345, Messejana, Fortaleza - CE" />
                        <InputTextAlter title="E-mail" value="mateus@gmail.com" />
                        <InputTextAlter title="Usuário" value="uaumateus" />
                    </div>
                    <div className="optionsAccount">
                        <button className="button buttonSecundary">Alterar Senha</button>
                        <button className="button buttonSecundary">Deletar Conta</button>
                    </div>
                </div>
            </div>
        )
    }
}