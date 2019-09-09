import React, { Component } from 'react';
import '../style.css';

import InputTextAlter from '../../../components/InputTextAlter';
import iconClose from '../assets/close_icon.svg';

export default class Historic extends Component{

    state = {
        accordion: false
    }

    handleAccordion = () => {
        this.setState({accordion: !this.state.accordion});
    }

    render(){
        return(
            <div className="accordion accordionCostumers">
                <div className="header" onClick={this.handleAccordion}>
                    <p className="Medium-Text-Bold">johndoe123</p>
                    <p className="Medium-Text-Regular">[ John Doe da Silva ]</p>
                    {this.state.accordion ?
                        <img src={iconClose} className="iconClose"/>
                        :
                        <img src={iconClose} className="iconOpen"/>
                    }
                </div>
                {this.state.accordion &&
                    <div className="container">
                        <div>
                            <InputTextAlter title="Nome" value="Mateus Pereira dos Santos" />
                            <InputTextAlter title="Endereço" value="Rua José Avilar, 2345, Messejana, Fortaleza - CE" />
                            <InputTextAlter title="E-mail" value="mateus@gmail.com" />
                            <InputTextAlter title="Usuário" value="uaumateus" />
                        </div>
                        <div className="optionsAccount">
                            <button className="button buttonSecundary">Compras</button>
                            <button className="button buttonSecundary">Alterar Senha</button>
                            <button className="button buttonSecundary">Deletar Conta</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}