import React, {Component} from 'react';
import '../Register/style.css';
import api from '../../../services/api';
import { login } from '../../../services/auth';

import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class FinishOrder extends Component {
    closeModal = () => {
        this.props.onChangeState();
    };

    finishOrder = () => {
        this.props.finish();
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
                        <p className="Medium-Text-Bold">Finalizar pedido</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal contentModalFinishOrder">
                        <p className="Medium-Text-Regular">{"Deseja finalizar o pedido no valor de R$"+this.props.price+"?"}</p>
                    </div>
                    <div className="footerModal footerModalFinishOrder">
                        <button className="button buttonSecundary" onClick={this.closeModal}>Cancelar</button>
                        <button className="button buttonPrimary" onClick={this.finishOrder}>Finalizar</button>
                    </div>
                </div>
            </>
        )
    }
}