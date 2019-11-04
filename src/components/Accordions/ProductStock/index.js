import React, { Component } from 'react';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';
import '../style.css';
import EditCategory from '../../Modals/EditCategory';
import NewProduct from '../../Modals/NewProduct';
import imgMockup from '../../../assets/mockup.png';
import iconClose from '../assets/close_icon.svg';

class ProductStock extends Component{

    state = {
        showProduct: false,
        accordion: false,
        showEditCategory: false,
        product: ''
    }

    handleAccordion = () => {
        this.setState({accordion: !this.state.accordion});
    }

    removeCategory = async () => {
        await api.delete('/admin/category/'+this.props.categoryKey).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    }

    handleEditCategory = () => {
        const showEditCategory = !this.state.showEditCategory;
        this.setState({ showEditCategory });
    };

    deleteProduct = async (e) => {
        await api.delete('/admin/product/'+e).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    }

    handleNewProduct = product => {
        const showProduct = !this.state.showProduct;
        this.setState({ product });
        this.setState({ showProduct });
    };

    render(){
        const { category, categoryKey, products } = this.props;
        return(
            <>
                <div className="modals">
                    <EditCategory 
                        show={this.state.showEditCategory}
                        onChangeState={this.handleEditCategory}
                        categoryKey={categoryKey}
                        categoryName={category}
                    />
                    <NewProduct 
                        show={this.state.showProduct}
                        onChangeState={this.handleNewProduct}
                        handlerRegister={this.handleNewProduct}
                        notification={this.productAdd}
                        type="edit"
                        product={this.state.product}
                    />
                </div>
                <div className="accordion accordionCostumers accordionStock">
                    <div className="header">
                        <div onClick={this.handleAccordion}>
                            <p className="Medium-Text-Bold">{category}</p>
                            {products.length === 1 ?
                                <p className="Medium-Text-Regular">[ {products.length} produto ]</p>
                                :
                                <p className="Medium-Text-Regular">[ {products.length} produtos ]</p>
                            }
                            
                        </div>
                        <div className="headerRight">
                            <p className="buttonProduct Medium-Text-Regular options" onClick={this.handleEditCategory}>editar</p>
                            <p className="buttonProduct Medium-Text-Regular options" onClick={this.removeCategory}>remover</p>
                        </div>
                    </div>
                    {this.state.accordion &&
                    <>
                        {products.map((item) => (
                            <div className="container">
                                <div className="containerProduct">
                                    <img src={`data:image/jpg;base64,${item.photo}`} />
                                    <div>
                                        <div className="containerTitleProduct">
                                            <p className="Large-Text-Bold titleProduct">{item.name}</p>
                                            <p className="buttonProduct Medium-Text-Regular" onClick={() => this.handleNewProduct(item)}>editar</p>
                                            <p className="buttonProduct Medium-Text-Regular" onClick={() => this.deleteProduct(item.id)}>remover</p>
                                        </div>
                                        {item.amount > 0 ?
                                            <p className="Small-Text-Regular">Em estoque</p>
                                            :
                                            <p className="Small-Text-Regular">Sem estoque</p>
                                        }
                                        
                                    </div>
                                </div>
                                <article>
                                    <p className="Medium-Text-Regular">Restantes:</p>
                                    <p className="Medium-Text-Bold">{item.amount}</p>
                                </article>
                                <article>
                                    <p className="Medium-Text-Regular">Preço:</p>
                                    <p className="Medium-Text-Bold">{"R$ " + item.price}</p>
                                </article>
                            </div>
                        ))}
                    </>
                    }
                </div>
            </>
        );
    }
}

export default withRouter(ProductStock);