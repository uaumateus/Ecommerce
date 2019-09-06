import React, { Component } from 'react';
import './style.css';

export default class CardProduct extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="cardProduct">
                <article className="imgProduct">
                    <img src={product.image} />
                </article>

                <p className="Large-Text-Bold">{product.title}</p>
                <p className="Medium-Text-Light">{"R$ " + product.price}</p>
            </div>
        );
    }
}