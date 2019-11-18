import React, { Component } from 'react';
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
        valueProduct : 0
    }

    componentDidMount() {
        this.setState({valueProduct: this.props.amount});
    }

    addValueProduct = () => {
        const productsCookies = this.props.cookies.get('userBag');
        for (var i=0; i < productsCookies.length; i++){
            if (productsCookies[i].key === this.props.id && productsCookies[i].amount === this.state.valueProduct)
                productsCookies[i].amount = this.state.valueProduct+1;
        }
        this.setState({valueProduct: this.state.valueProduct+1});
        // this.props.cookies.set('userBag', productsCookies.splice(i, 1));
        this.props.cookies.set('userBag', productsCookies);
    }

    removeValueProduct = () => {
        if(this.state.valueProduct > 1){
            this.setState({valueProduct: this.state.valueProduct-1});
            const productsCookies = this.props.cookies.get('userBag');
            for (var i=0; i < productsCookies.length; i++){
                if (productsCookies[i].key === this.props.id && productsCookies[i].amount === this.state.valueProduct)
                    productsCookies[i].amount -= 1;
            }
            this.props.cookies.set('userBag', productsCookies);
        }
    }

    removeProduct = () => {
        const productsCookies = this.props.cookies.get('userBag');
        for (var i=0; i < productsCookies.length; i++){
            if (productsCookies[i].key === this.props.id && productsCookies[i].amount === this.state.valueProduct)
                this.props.cookies.set('userBag', productsCookies.splice(i, 1));
        }
        this.props.cookies.set('userBag', productsCookies);
        window.location.reload();
    }

    render(){
        const { product, id, amount } = this.props;
        const style = { background: `url('${product.image}') no-repeat center center`, 
                        backgroundSize: 'cover',
                        height: '90px',
                        width: '70px',
                        borderRadius: '5px'}
        return(
            <div className="productBag">
                <div className="containerLeft">
                    <div className="imgProduct" style={style}></div>
                    <div>
                        <p className="Large-Text-Bold titleProduct">{product.title}</p>
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
            </div>
        );
    }
}

export default withCookies(ProductBag);