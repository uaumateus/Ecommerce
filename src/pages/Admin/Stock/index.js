import React, { Component } from 'react';
import './style.css';

import BreadCrumb from '../../../components/BreadCrumb';
import ProductStock from '../../../components/Accordions/ProductStock';
import NewCategory from '../../../components/Modals/NewCategory';
import NewProduct from '../../../components/Modals/NewProduct';

export default class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategory: false,
            showProduct: false,
        };
        this.handleNewCategory = this.handleNewCategory.bind(this);
        this.handleNewProduct = this.handleNewProduct.bind(this);
    }

    handleNewCategory = () => {
        const showCategory = !this.state.showCategory;
        this.setState({ showCategory });
    };

    handleNewProduct = () => {
        const showProduct = !this.state.showProduct;
        this.setState({ showProduct });
    };

    render(){
        return(
            <>
                <div className="modals">
                    <NewCategory 
                        show={this.state.showCategory}
                        onChangeState={this.handleNewCategory}
                        handlerRegister={this.handleNewCategory}
                    />
                    <NewProduct 
                        show={this.state.showProduct}
                        onChangeState={this.handleNewProduct}
                        handlerRegister={this.handleNewProduct}
                    />
                </div>
                <div className="content stock">
                    <div className="optionsStock">
                        <BreadCrumb actualPage="Estoque"/>
                        <button className="button buttonSecundary" onClick={this.handleNewCategory}>+ Categoria</button>
                        <button className="button buttonPrimary" onClick={this.handleNewProduct}>+ Produto</button>
                    </div>
                    <ProductStock category="Camisas"/>
                    <ProductStock category="Bermudas"/>
                </div>
            </>
        )
    }
}