import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import iconTrash from './assets/trash_icon.svg';
import ControllAmount from '../ControllAmount';

class ProductBag extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    state = {
        valueProduct : 0,
        product: null
    }

    componentDidMount = async () => {
        this.setState({valueProduct: this.props.amount});
        await api.get('/product/'+this.props.id).then(item =>
        {
            this.setState({product: item.data});
        }).catch(error => {
            console.log("Erro ao procurar produto");
        })
    }

    addValueProduct = () => {
        const productsCookies = this.props.cookies.get('userBag');
        for (var i=0; i < productsCookies.length; i++){
            if (productsCookies[i].id === this.props.id && productsCookies[i].amount === this.state.valueProduct)
                productsCookies[i].amount = this.state.valueProduct+1;
        }
        this.setState({valueProduct: this.state.valueProduct+1});
        this.props.cookies.set('userBag', productsCookies);
        this.props.updateAmount(productsCookies)
    }

    removeValueProduct = () => {
        if(this.state.valueProduct > 1){
            this.setState({valueProduct: this.state.valueProduct-1});
            const productsCookies = this.props.cookies.get('userBag');
            for (var i=0; i < productsCookies.length; i++){
                if (productsCookies[i].id === this.props.id && productsCookies[i].amount === this.state.valueProduct)
                    productsCookies[i].amount -= 1;
            }
            this.props.cookies.set('userBag', productsCookies);
            this.props.updateAmount(productsCookies)
        }
    }

    removeProduct = () => {
        const productsCookies = this.props.cookies.get('userBag');
        for (var i=0; i < productsCookies.length; i++){
            if (productsCookies[i].id === this.props.id && productsCookies[i].amount === this.state.valueProduct)
                this.props.cookies.set('userBag', productsCookies.splice(i, 1));
        }
        this.props.cookies.set('userBag', productsCookies);
        window.location.reload();
    }

    render(){
        const { product } = this.state;
        let style, url;
        if(product){
            url = 'data:image/jpg;base64,'+product.photo;
            style = { background: `url(${url}) no-repeat center center`, 
                        backgroundSize: 'cover',
                        height: '90px',
                        width: '70px',
                        borderRadius: '5px'}
        }
        return(
            <div className="productBag">
                {this.state.product &&
                    <>
                        <div className="containerLeft">
                            <div className="imgProduct" style={style}></div>
                            <div>
                                <p className="Large-Text-Bold titleProduct">{product.name}</p>
                                <p className="Small-Text-Regular">Em estoque</p>
                            </div>
                        </div>
                        <div className="containerRight">
                            <ControllAmount add={this.addValueProduct} remove={this.removeValueProduct} value={this.state.valueProduct}/>
                            <div className="containerPrice">
                                <p className="Medium-Text-Regular">Preço:</p>
                                <p className="Medium-Text-Bold">{"R$ "+product.price+",00"}</p>
                            </div>
                            <img src={iconTrash} onClick={this.removeProduct}/>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default withCookies(ProductBag);