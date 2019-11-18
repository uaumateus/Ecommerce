import React, {Component} from 'react';
import './style.css';
import api from '../../services/api';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import BreadCrumb from '../../components/BreadCrumb';
import ProductBag from '../../components/ProductBag';
import CardBag from '../../components/CardBag';

class Bag extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    state = {
        products: [],
        total: 0,
        amountProducts: 0
    }

    componentDidMount = () => {
        const productsCookies = this.props.cookies.get('userBag');
        if (productsCookies !== undefined){
            this.setState({products: this.props.cookies.get('userBag')});
            let aux = 0;
            for(let i = 0; i < productsCookies.length; i++){
                aux += productsCookies[i].amount;
                const getProduct = this.getProduct(productsCookies[i].key);
                getProduct.then(item => {
                    this.setState({total: this.state.total + item * productsCookies[i].amount})
                })
            }
            this.setState({amountProducts: aux});
        }
    }

    updateAmount = (e) => {
        this.setState({products: e, total: 0});
        let aux = 0;
        for(let i = 0; i < e.length; i++){
            aux += e[i].amount;
            const getProduct = this.getProduct(e[i].key);
            getProduct.then(item => {

                this.setState({total: this.state.total + item * e[i].amount})
            })
        }
        this.setState({amountProducts: aux})
    }

    getProduct = async (id) => {
        let resp;
        await api.get("/product/"+id).then(item => {
            resp = item.data.price;
        }).catch(err => {
            resp = 0;
        })
        return resp;
    }

    render(){
        const { products, amountProducts, total } = this.state;
        return(
            <div className="content bag">
                <BreadCrumb actualPage="Sacola de Compras"/>
                <div className="container">
                    <div>
                        {products.map(item => (
                            <ProductBag id={item.key} amount={item.amount} updateAmount={this.updateAmount}/>
                        ))}
                    </div>
                    <CardBag amount={amountProducts} total={total}/>
                </div>
            </div>
        )
    }
}

export default withRouter(withCookies(Bag));