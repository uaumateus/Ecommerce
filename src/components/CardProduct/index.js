import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import './style.css';

import AlertMessage from '../AlertMessage';
import Product from '../Modals/Product';

import iconBag from './assets/bag_icon.svg';
import iconFavorite from './assets/favorite_icon.svg';

class CardProduct extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            addBag: false,
            addFavorite: false,
            removeBag: false,
            removeFavorite: false,
            showProduct: null
        }
    }    

    addBag = () => {
        const { product, cookies } = this.props;
        let cookie = cookies.get('userBag');
        if(cookie === undefined){
            cookies.set("userBag", [{id: product.id, amount: 1}], '/');
            this.setState({addBag: true});
            setTimeout(()=>this.setState({addBag: false}), 3000);
        }else{
            let aux = false;
            for(var item in cookie){
                if(cookie[item].id === product.id)
                    aux = true;
            }
            if(!aux){
                cookies.set("userBag", cookie.concat({id: product.id, amount: 1}), '/');
                this.setState({addBag: true});
                setTimeout(()=>this.setState({addBag: false}), 3000);
            }
        }
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
                                {product.amount !== 0 &&
                                    <img src={iconBag} onClick={this.addBag}/>
                                }
                            </div>
                        </article>
                        <img src={`data:image/jpg;base64,${product.photo}`} />
                    </article>

                    <p className="Large-Text-Bold">{product.name}</p>
                    {product.amount !== 0 ?
                        <p className="Medium-Text-Light">{"R$ " + product.price}</p>
                    :
                        <p className="Medium-Text-Light noStock">Fora de estoque</p>
                    }

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

export default withCookies(CardProduct);