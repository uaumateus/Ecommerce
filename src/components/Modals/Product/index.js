import React, {Component} from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import '../Register/style.css';
import './style.css';

import close from '../assets/close.svg';

import ControllAmount from '../../ControllAmount';
import AlertMessage from '../../AlertMessage';

class Product extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

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
        const { product, cookies } = this.props;
        let cookie = cookies.get('userBag');
        if(cookie === undefined){
            cookies.set("userBag", [{key: product.id, amount: 1}], '/');
            this.setState({addBag: true});
            setTimeout(()=>this.setState({addBag: false}), 3000);
        }else{
            let aux = false;
            for(var item in cookie){
                if(cookie[item].key === product.id)
                    aux = true;
            }
            if(!aux){
                cookies.set("userBag", cookie.concat({key: product.id, amount: 1}), '/');
                this.setState({addBag: true});
                setTimeout(()=>this.setState({addBag: false}), 3000);
            }
        }
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
                            <img src={`data:image/jpg;base64,${product.photo}`} />
                        </div>
                        <div className="infosProduct">
                            <p className="Large-Text-Bold titleProduct">{product.name}</p>
                            {product.amount !== 0 ?
                                <p className="Large-Text-Light">{"R$ "+product.price}</p>
                            :
                                <p className="Large-Text-Light">Fora de estoque</p>
                            }
                            <p className="Medium-Text-Regular">{product.description}</p>
                            {product.amount !== 0 &&
                                <div>
                                    <button className="button buttonPrimary" onClick={this.addBag}>Adicionar à sacola</button>
                                </div>
                            }
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

export default withCookies(Product);