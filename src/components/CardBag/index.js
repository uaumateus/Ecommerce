import React, { Component } from 'react';
import './style.css';

export default class CardBag extends Component{

    render(){
        return(
            <div className="cardBag">
                <article className="containerInfos">
                    <p className="Large-Text-Regular">Subtotal:</p>
                    <p className="Large-Text-Bold">R$ 150,00</p>
                </article>
                <article className="containerInfos">
                    <p className="Large-Text-Regular">Quant. Itens:</p>
                    <p className="Large-Text-Bold">2</p>
                </article>
                <button className="button buttonPrimary">Fechar Pedido</button>
            </div>
        );
    }
}