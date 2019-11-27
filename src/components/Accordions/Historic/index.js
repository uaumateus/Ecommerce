import React, { Component } from 'react';
import '../style.css';

import imgMockup from '../../../assets/mockup.png';
import iconClose from '../assets/close_icon.svg';

export default class Historic extends Component{

    state = {
        accordion: false,
        priceTotal: 0,
        amountTotal: 0
    }

    componentDidMount = () => {
        const { purchase } = this.props;
        let priceTotal = 0;
        let amountTotal = 0;
        for(var i = 0; i < purchase.purchases.length; i++){
            priceTotal += purchase.purchases[i].amount * purchase.purchases[i].product.price;
            amountTotal += purchase.purchases[i].amount;
        }
        this.setState({priceTotal, amountTotal});
    }

    handleAccordion = () => {
        this.setState({accordion: !this.state.accordion});
    }

    render(){
        const { purchase } = this.props;
        const { amountTotal, priceTotal } = this.state;
        if(amountTotal === 0 && priceTotal === 0){ return null }
        return(
            <div className="accordion accordionHistoric">
                <div className="header" onClick={this.handleAccordion}>
                    {amountTotal > 1 ?
                        <p className="Medium-Text-Bold">{amountTotal} produtos</p>
                    :
                        <p className="Medium-Text-Bold">{amountTotal} produto</p>
                    }
                    <article>
                        <p className="Medium-Text-Regular">Data:</p>
                        <p className="Medium-Text-Bold">{purchase.purchases[0].date_time.split('T')[0]}</p>
                    </article>
                    <article>
                        <p className="Medium-Text-Regular">Preço total:</p>
                        {priceTotal > 1 ?
                            <p className="Medium-Text-Bold">R$ {priceTotal}</p>
                        :
                            <p className="Medium-Text-Bold">{priceTotal} produto</p>
                        }
                    </article>
                    {this.state.accordion ?
                        <img src={iconClose} className="iconClose"/>
                        :
                        <img src={iconClose} className="iconOpen"/>
                    }
                </div>
                {this.state.accordion &&
                    <>
                        {purchase.purchases.map(item => (
                            <div className="container containerHistoric">
                                <div className="containerProduct">
                                    <img src={`data:image/jpg;base64,${item.product.photo}`} />
                                    <div>
                                        <p className="Large-Text-Bold titleProduct">{item.product.name}</p>
                                    </div>
                                </div>
                                <div></div>
                                <div>
                                    <p className="Medium-Text-Regular">Quantidade: </p>
                                    <p className="Medium-Text-Bold">{item.amount}</p>
                                </div>
                                <div>
                                    <p className="Medium-Text-Regular">Preço: </p>
                                    <p className="Medium-Text-Bold">R$ {item.product.price}</p>
                                </div>
                            </div>
                        ))}
                    </>
                }
            </div>
        );
    }
}