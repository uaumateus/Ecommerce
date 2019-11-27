import React, { Component } from 'react';
import '../style.css';

import iconClose from '../assets/close_icon.svg';
import iconTrash from '../assets/trash_icon.svg';
import api from '../../../services/api';

export default class Historic extends Component{

    state = {
        accordion: false
    }

    handleAccordion = () => {
        this.setState({accordion: !this.state.accordion});
    }

    deletePurchase = async (e) => {
        await api.delete('/admin/purchase/'+e).then(resp => {
            window.location.reload();
        }).catch(err => {
            console.log("Erro ao excluir")
        })
    }

    render(){
        const { user } = this.props;
        return(
            <div className="accordion accordionCostumers">
                <div className="header" onClick={this.handleAccordion}>
                    <p className="Medium-Text-Bold">{user.login}</p>
                    <p className="Medium-Text-Regular">{"[ " + user.name + " ]"}</p>
                    {this.state.accordion ?
                        <img src={iconClose} className="iconClose"/>
                        :
                        <img src={iconClose} className="iconOpen"/>
                    }
                </div>
                {this.state.accordion &&
                    <>
                        {user.purchases.map((item) => (
                            <>
                                <div className="titlePurchase">
                                    <p className="Medium-Text-Regular">{"Data da compra: " + item.purchase[0].date_time.split('T')[0]}</p>
                                    <img src={iconTrash} onClick={() => this.deletePurchase(item.id)}/>
                                </div>
                                {item.purchase.map(p => (
                                    <div className="container">
                                        <div className="containerProduct">
                                            <img src={`data:image/jpg;base64,${p.product.photo}`} />
                                            <p className="Large-Text-Bold titleProduct">{p.product.name}</p>
                                        </div>
                                        <article>
                                            <p className="Medium-Text-Regular">Quantidade:</p>
                                            <p className="Medium-Text-Bold">{p.amount}</p>
                                        </article>
                                        <article>
                                            <p className="Medium-Text-Regular">Preço:</p>
                                            <p className="Medium-Text-Bold">{"R$ " + p.product.price}</p>
                                        </article>
                                    </div>
                                ))}
                            </>
                        ))}
                    </>
                }
            </div>
        );
    }
}