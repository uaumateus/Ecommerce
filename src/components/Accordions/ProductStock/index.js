import React, { Component } from 'react';
import api from '../../../services/api';
import '../style.css';
import EditCategory from '../../Modals/EditCategory';
import imgMockup from '../../../assets/mockup.png';
import iconClose from '../assets/close_icon.svg';

export default class ProductStock extends Component{

    state = {
        accordion: false,
        showEditCategory: false,
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

    render(){
        const { category, categoryKey, products } = this.props;
        return(
            <>
                <div className="modals">
                    <EditCategory 
                        show={this.state.showEditCategory}
                        onChangeState={this.handleEditCategory}
                        categoryKey={categoryKey}
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
                                            <p className="buttonProduct Medium-Text-Regular">editar</p>
                                            <p className="buttonProduct Medium-Text-Regular">remover</p>
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
                                    <p className="Medium-Text-Bold">{item.price}</p>
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