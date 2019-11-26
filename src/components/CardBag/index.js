import React, { Component } from 'react';
import { isAuthenticated } from '../../services/auth';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import api from '../../services/api';
import './style.css';

import Login from '../Modals/Login';
import Register from '../Modals/Register';
import FinishOrder from '../Modals/FinishOrder';
import AlertMessage from '../AlertMessage';

class CardBag extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            showRegister: false,
            showLogin: false,
            showFinishOrder: false,
            registerSuccess: false,
            finishOrder: false
        };
        this.handleModalRegister = this.handleModalRegister.bind(this);
        this.handleModalLogin = this.handleModalLogin.bind(this);
    }

    finishOrder = async () => {
        const productsCookies = this.props.cookies.get('userBag');
        await api.post('/purchase', productsCookies).then(res => {
            if(res.data.result){
                this.props.cookies.remove('userBag');
                this.handleModalFinishOrder();
                this.props.updateProducts();
                this.setState({finishOrder: true});
                setTimeout(()=>this.setState({finishOrder: false}), 3000);
            }
        }).catch(err => {
            console.log(err)
        })
    }

    handleModalRegister = () => {
        const showRegister = !this.state.showRegister;
        this.setState({ showRegister });
    };

    handleModalFinishOrder = () => {
        if(isAuthenticated()){
            const showFinishOrder = !this.state.showFinishOrder;
            this.setState({ showFinishOrder });
        }else{
            this.handleModalLogin();
        }
    };
    
    handleModalLogin = () => {
        const showLogin = !this.state.showLogin;
        this.setState({ showLogin });
    };

    registerSuccess = () => {
        this.setState({registerSuccess: true});
        setTimeout(()=>this.setState({registerSuccess: false}), 3000);
    }
    
    render(){
        const { amount, total } = this.props;
        return(
            <>
            <div className="bagModals">
                <Login 
                    show={this.state.showLogin}
                    onChangeState={this.handleModalLogin}
                    handlerRegister={this.handleModalRegister}
                />
                <Register 
                    show={this.state.showRegister}
                    onChangeState={this.handleModalRegister}
                    handlerLogin={this.handleModalLogin}
                    registerSuccess={this.registerSuccess}
                />
                <FinishOrder 
                    show={this.state.showFinishOrder}
                    onChangeState={this.handleModalFinishOrder}
                    price={total}
                    finish={this.finishOrder}
                />
            </div>
            <div className="cardBag">
                <article className="containerInfos">
                    <p className="Large-Text-Regular">Subtotal:</p>
                    <p className="Large-Text-Bold">R$ {total}</p>
                </article>
                <article className="containerInfos">
                    <p className="Large-Text-Regular">Quant. Itens:</p>
                    <p className="Large-Text-Bold">{amount}</p>
                </article>
                <button className="button buttonPrimary" onClick={this.handleModalFinishOrder}>Fechar Pedido</button>
            </div>
            {this.state.finishOrder &&
                <AlertMessage message="finishOrder"/>
            }
            </>
        );
    }
}

export default withCookies(CardBag);