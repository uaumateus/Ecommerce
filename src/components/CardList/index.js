import React, { Component } from 'react';
import './style.css';

import CardProduct from '../CardProduct';

export default class CardList extends Component {
  render() {
    const { products } = this.props;
    return (
        <div className="cards">
            {products.map((item, index) => (
                <CardProduct product={item} />  
            ))}
        </div>
    );
  }
}
