import React, { Component } from 'react';
import './style.css';

export default class CardBag extends Component{

    render(){
        const { amount, total } = this.props;
        return(
            <div className="cardBag">
                <article className="containerInfos">
                    <p className="Large-Text-Regular">Subtotal:</p>
                    <p className="Large-Text-Bold">R$ {total}</p>
                </article>
                <article className="containerInfos">
                    <p className="Large-Text-Regular">Quant. Itens:</p>
                    <p className="Large-Text-Bold">{amount}</p>
                </article>
                <button className="button buttonPrimary">Fechar Pedido</button>
            </div>
        );
    }
}