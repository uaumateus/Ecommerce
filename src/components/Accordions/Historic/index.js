import React, { Component } from 'react';
import '../style.css';

import imgMockup from '../../../assets/mockup.png';
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
            <div className="accordion accordionHistoric">
                <div className="header" onClick={this.handleAccordion}>
                    <p className="Medium-Text-Bold">1 produto</p>
                    <article>
                        <p className="Medium-Text-Regular">Data:</p>
                        <p className="Medium-Text-Bold">07/09/2019</p>
                    </article>
                    <article>
                        <p className="Medium-Text-Regular">Preço total:</p>
                        <p className="Medium-Text-Bold">R$ 150,00</p>
                    </article>
                    {this.state.accordion ?
                        <img src={iconClose} className="iconClose"/>
                        :
                        <img src={iconClose} className="iconOpen"/>
                    }
                </div>
                {this.state.accordion &&
                    <div className="container">
                        <div className="containerProduct">
                            <img src={imgMockup} />
                            <div>
                                <p className="Large-Text-Bold titleProduct">Camisa Mockup</p>
                                <p className="Small-Text-Regular">Em estoque</p>
                            </div>
                        </div>
                        <div></div>
                        <p className="Medium-Text-Bold">R$ 150,00</p>
                    </div>
                }
            </div>
        );
    }
}