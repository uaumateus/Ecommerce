import React, {Component} from 'react';
import './style.css';
import api from '../../services/api';
import { withRouter } from 'react-router-dom';

import imageMockup from '../../assets/mockup.png';

import BreadCrumb from '../../components/BreadCrumb';
import ProductBag from '../../components/ProductBag';
import CardBag from '../../components/CardBag';

class Bag extends Component{

    componentDidMount = async () => {
        await api.get('/admin/auth').then(resp => {
            if(resp.data.result){
                this.props.history.push('/');
            }
        }).catch(error => {
            this.props.history.push('/');
        })
    }

    render(){
        return(
            <div className="content bag">
                <BreadCrumb actualPage="Sacola de Compras"/>
                <div className="container">
                    <div>
                        <ProductBag product={{title: "Camisa Mockup", price: "120", image: imageMockup}} />
                        <ProductBag product={{title: "Camisa Mockup", price: "150", image: imageMockup}} />
                    </div>
                    <CardBag />
                </div>
            </div>
        )
    }
}

export default withRouter(Bag);