import React, { Component } from 'react';
import api from '../../../services/api';
import '../style.css';

import imgMockup from '../../../assets/mockup.png';
import iconClose from '../assets/close_icon.svg';

export default class ProductStock extends Component{

    state = {
        accordion: false
    }

    handleAccordion = () => {
        this.setState({accordion: !this.state.accordion});
    }

    removeCategory = async () => {
        await api.delete('/admin/category/'+this.props.categoryKey).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        });
    }

    render(){
        return(
            <div className="accordion accordionCostumers accordionStock">
                <div className="header" onClick={this.handleAccordion}>
                    <p className="Medium-Text-Bold">{this.props.category}</p>
                    <p className="Medium-Text-Regular">[ 8 produtos ]</p>
                    <p className="buttonProduct Medium-Text-Regular options">editar</p>
                    <p className="buttonProduct Medium-Text-Regular options" onClick={this.removeCategory}>remover</p>
                </div>
                {this.state.accordion &&
                <>
                    <div className="container">
                        <div className="containerProduct">
                            <img src={imgMockup} />
                            <div>
                                <div className="containerTitleProduct">
                                    <p className="Large-Text-Bold titleProduct">Camisa Mockup</p>
                                    <p className="buttonProduct Medium-Text-Regular">editar</p>
                                    <p className="buttonProduct Medium-Text-Regular">remover</p>
                                </div>
                                <p className="Small-Text-Regular">Em estoque</p>
                            </div>
                        </div>
                        <article>
                            <p className="Medium-Text-Regular">Restantes:</p>
                            <p className="Medium-Text-Bold">4</p>
                        </article>
                        <article>
                            <p className="Medium-Text-Regular">Preço:</p>
                            <p className="Medium-Text-Bold">R$ 150,00</p>
                        </article>
                    </div>

                    <div className="container">
                        <div className="containerProduct">
                            <img src={imgMockup} />
                            <div>
                                <div className="containerTitleProduct">
                                    <p className="Large-Text-Bold titleProduct">Camisa Mockup</p>
                                    <p className="buttonProduct Medium-Text-Regular">editar</p>
                                    <p className="buttonProduct Medium-Text-Regular">remover</p>
                                </div>
                                <p className="Small-Text-Regular">Em estoque</p>
                            </div>
                        </div>
                        <article>
                            <p className="Medium-Text-Regular">Restantes:</p>
                            <p className="Medium-Text-Bold">4</p>
                        </article>
                        <article>
                            <p className="Medium-Text-Regular">Preço:</p>
                            <p className="Medium-Text-Bold">R$ 150,00</p>
                        </article>
                    </div>
                </>
                }
            </div>
        );
    }
}