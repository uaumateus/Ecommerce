import React, {Component} from 'react';
import './style.css';
import api from '../../services/api';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import imageMockup from '../../assets/mockup.png';

import BreadCrumb from '../../components/BreadCrumb';
import ProductBag from '../../components/ProductBag';
import CardBag from '../../components/CardBag';

class Bag extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    state = {
        products: []
    }

    componentDidMount = () => {
        const productsCookies = this.props.cookies.get('userBag');
        if (productsCookies !== undefined)
            this.setState({products: this.props.cookies.get('userBag')});
    }

    render(){
        const { products } = this.state;
        return(
            <div className="content bag">
                <BreadCrumb actualPage="Sacola de Compras"/>
                <div className="container">
                    <div>
                        {products.map(item => (
                            <ProductBag product={{title: "Camisa Mockup", price: "120", image: imageMockup}} id={item.key} amount={item.amount} />
                        ))}
                    </div>
                    <CardBag />
                </div>
            </div>
        )
    }
}

export default withRouter(withCookies(Bag));