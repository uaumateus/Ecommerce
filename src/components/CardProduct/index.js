import React, { Component } from 'react';
import './style.css';

import iconBag from './assets/bag_icon.svg';
import iconFavorite from './assets/favorite_icon.svg';

export default class CardProduct extends Component{
    render(){
        const { product } = this.props;
        return(
            <div className="cardProduct">
                <article className="imgProduct">
                    <article className="backgroundHover">
                        <button className="button buttonTerceary">Ver Mais</button>
                        <div className="icons">
                            <img src={iconFavorite} />
                            <img src={iconBag} />
                        </div>
                    </article>
                    <img src={product.image} />
                </article>

                <p className="Large-Text-Bold">{product.title}</p>
                <p className="Medium-Text-Light">{"R$ " + product.price}</p>
            </div>
        );
    }
}