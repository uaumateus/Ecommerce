import React, { Component } from 'react';
import './style.css';

export default class CardProduct extends Component{
    render(){
        const { product } = this.props;
        const styles = {
            background: `url('${product.image}') no-repeat center center`, 
            backgroundSize: 'cover',
            width: '170px',
            height: '250px',
            borderRadius: '8px'
        }
        return(
            <div className="cardProduct">
                <article style={styles}>
                </article>

                <p className="Large-Text-Bold">{product.title}</p>
                <p className="Small-Text-Light">{"R$ " + product.price}</p>
            </div>
        );
    }
}