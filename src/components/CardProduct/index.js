import React, { Component } from 'react';
import './style.css';

import AlertMessage from '../AlertMessage';
import iconBag from './assets/bag_icon.svg';
import iconFavorite from './assets/favorite_icon.svg';

export default class CardProduct extends Component{
    state = {
        addBag: false,
        addFavorite: false,
        removeBag: false,
        removeFavorite: false,
    }

    addBag = () => {
        this.setState({addBag: true});
        setTimeout(()=>this.setState({addBag: false}), 3000);
    }

    addFavorite = () => {
        this.setState({addFavorite: true});
        setTimeout(()=>this.setState({addFavorite: false}), 3000);
    }

    render(){
        const { product } = this.props;
        return(
            <div className="cardProduct">
                <article className="imgProduct">
                    <article className="backgroundHover">
                        <button className="button buttonTerceary">Ver Mais</button>
                        <div className="icons">
                            <img src={iconFavorite} onClick={this.addFavorite}/>
                            <img src={iconBag} onClick={this.addBag}/>
                        </div>
                    </article>
                    <img src={product.image} />
                </article>

                <p className="Large-Text-Bold">{product.title}</p>
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
        );
    }
}