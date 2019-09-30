import React, {Component} from 'react';
import '../Register/style.css';
import './style.css';

import close from '../assets/close.svg';

import ControllAmount from '../../ControllAmount';
import AlertMessage from '../../AlertMessage';

export default class Product extends Component {
    state = {
        amountProduct: 1,
        addBag: false
    }

    closeModal = () => {
        this.props.onChangeState();
    };

    openModalRegister = () => {
        this.props.onChangeState();
        this.props.handlerRegister();
    };

    addAmountProduct = () => {
        this.setState({amountProduct: this.state.amountProduct+1});
    }

    removeAmountProduct = () => {
        if(this.state.amountProduct > 1)
            this.setState({amountProduct: this.state.amountProduct-1});
    }

    addBag = () => {
        this.setState({addBag: true});
        setTimeout(()=>this.setState({addBag: false}), 3000);
    }
    
    render(){
        const { product } = this.props;

        if (!this.props.show) {
            return null;
        }
        return(
            <>
                <div className="backgroundModal backgroundModalProduct" onClick={this.closeModal}/>
                <div className="modal modalProduct" style={{marginTop: '1vh'}}>
                    <div className="headerModal">
                        <p className="Medium-Text-Bold"></p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal contentModalProduct">
                        <div className="imgProduct">
                            <img src={product.image} />
                        </div>
                        <div className="infosProduct">
                            <p className="Large-Text-Bold titleProduct">{product.title}
                            </p>
                            <p className="Large-Text-Light">{"R$ "+product.price}</p>
                            <p className="Medium-Text-Regular">Lorem ipsum augue litora congue dolor, dictumst blandit aptent etiam phasellus, massa scelerisque consequat feugiat. interdum porta malesuada</p>
                            <div>
                                <ControllAmount 
                                    add={this.addAmountProduct}
                                    remove={this.removeAmountProduct}
                                    value={this.state.amountProduct}
                                />
                                <button className="button buttonPrimary" onClick={this.addBag}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.addBag &&
                    <AlertMessage message="addBag"/>
                }
            </>
        )
    }
}