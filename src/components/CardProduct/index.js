import React, { Component } from 'react';
import './style.css';

import AlertMessage from '../AlertMessage';
import Product from '../Modals/Product';

import iconBag from './assets/bag_icon.svg';
import iconFavorite from './assets/favorite_icon.svg';

export default class CardProduct extends Component{
    state = {
        addBag: false,
        addFavorite: false,
        removeBag: false,
        removeFavorite: false,
        showProduct: null
    }

    addBag = () => {
        this.setState({addBag: true});
        setTimeout(()=>this.setState({addBag: false}), 3000);
    }

    addFavorite = () => {
        this.setState({addFavorite: true});
        setTimeout(()=>this.setState({addFavorite: false}), 3000);
    }

    handleModalProduct = () => {
        const showProduct = !this.state.showProduct;
        this.setState({ showProduct });
    };

    render(){
        const { product } = this.props;
        return(
            <>
                {this.state.showProduct &&
                    <Product 
                        show={this.state.showProduct}
                        onChangeState={this.handleModalProduct}
                        product={product}
                    />
                }
                <div className="cardProduct">
                    <article className="imgProduct">
                        <article className="backgroundHover">
                            <button className="button buttonTerceary" onClick={this.handleModalProduct}>Ver Mais</button>
                            <div className="icons">
                                <img src={iconFavorite} onClick={this.addFavorite}/>
                                <img src={iconBag} onClick={this.addBag}/>
                            </div>
                        </article>
                        <img src={`data:image/jpg;base64,${product.photo}`} />
                    </article>

                    <p className="Large-Text-Bold">{product.name}</p>
                    <p className="Medium-Text-Light">{"R$ " + product.price}</p>

                    {this.state.addBag &&
                        <AlertMessage message="addBag"/>
                    }
                    {this.state.removeBag &&
                        <AlertMessage message="removeBag"/>
                    }
                    {this.state.addFavorite &&
                        <AlertMessage message="addFavorite"/>
                    }
                    {this.state.removeFavorite &&
                        <AlertMessage message="removeFavorite"/>
                    }
                </div>
            </>
        );
    }
}
