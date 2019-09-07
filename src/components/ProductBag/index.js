import React, { Component } from 'react';
import './style.css';
import iconTrash from './assets/trash_icon.svg';

export default class ProductBag extends Component{

    state = {
        valueProduct : 0
    }

    addValueProduct = () => {
        this.setState({valueProduct: this.state.valueProduct+1});
    }

    removeValueProduct = () => {
        if(this.state.valueProduct > 0)
            this.setState({valueProduct: this.state.valueProduct-1});
    }

    render(){
        const { product } = this.props;
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
                    <div className="valuePrice">
                        <p className="Large-Text-Bold" onClick={this.removeValueProduct}>-</p>
                        <p className="Small-Text-Bold">{this.state.valueProduct}</p>
                        <p className="Large-Text-Bold" onClick={this.addValueProduct}>+</p>
                    </div>
                    <div className="containerPrice">
                        <p className="Medium-Text-Regular">Preço:</p>
                        <p className="Medium-Text-Bold">{"R$ "+product.price+",00"}</p>
                    </div>
                    <img src={iconTrash} />
                </div>
            </div>
        );
    }
}