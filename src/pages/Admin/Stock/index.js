import React, { Component } from 'react';
import './style.css';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../components/BreadCrumb';
import ProductStock from '../../../components/Accordions/ProductStock';
import NewCategory from '../../../components/Modals/NewCategory';
import NewProduct from '../../../components/Modals/NewProduct';
import AlertMessage from '../../../components/AlertMessage';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategory: false,
            showProduct: false,
            loading: false,
            categories: [],
            categoryAdd: false,
            productAdd: false
        };
        this.handleNewCategory = this.handleNewCategory.bind(this);
        this.handleNewProduct = this.handleNewProduct.bind(this);
    }

    componentDidMount = async () => {
        await api.get('/admin/auth').then(resp => {
            if(!resp.data.result){
                this.props.history.push('/');
            }
            else{
                this.setState({loading: true});
                this.getCategories();
            }            
        }).catch(error => {
            this.props.history.push('/');
        })
    }

    componentDidUpdate = () => {
        this.getCategories();
    }

    getCategories = async () => {
        await api.get('/admin/categories-products').then(resp => {
            console.log(resp.data)
            // this.setState({categories: resp.data});
        }).catch(error => {
            console.log(error)
        });
    }

    handleNewCategory = () => {
        const showCategory = !this.state.showCategory;
        this.setState({ showCategory });
    };

    handleNewProduct = () => {
        const showProduct = !this.state.showProduct;
        this.setState({ showProduct });
    };

    categoryAdd = () => {
        this.setState({categoryAdd: true});
        setTimeout(()=>this.setState({categoryAdd: false}), 3000);
    }

    productAdd = () => {
        this.setState({productAdd: true});
        setTimeout(()=>this.setState({productAdd: false}), 3000);
    }

    compare( a, b ) {
        if ( a.name.toUpperCase() < b.name.toUpperCase() ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
    }

    render(){
        const { categories } = this.state;
        if (!this.state.loading) return null;
        return(
            <>
                <div className="modals">
                    <NewCategory 
                        show={this.state.showCategory}
                        onChangeState={this.handleNewCategory}
                        handlerRegister={this.handleNewCategory}
                        notification={this.categoryAdd}
                    />
                    <NewProduct 
                        show={this.state.showProduct}
                        onChangeState={this.handleNewProduct}
                        handlerRegister={this.handleNewProduct}
                        notification={this.productAdd}
                    />
                </div>
                <div className="content stock">
                    {this.state.categoryAdd && <AlertMessage message="categoryAdd" />}
                    {this.state.productAdd && <AlertMessage message="productAdd" />}
                    <div className="optionsStock">
                        <BreadCrumb actualPage="Estoque"/>
                        <button className="button buttonSecundary" onClick={this.handleNewCategory}>+ Categoria</button>
                        <button className="button buttonPrimary" onClick={this.handleNewProduct}>+ Produto</button>
                    </div>
                    
                    {categories.sort(this.compare).map(item => (
                        <ProductStock category={item.name} categoryKey={item.id} />
                    ))}
                </div>
            </>
        )
    }
}

export default withRouter(Stock);