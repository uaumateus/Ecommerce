import React, {Component} from 'react';
import './style.css';

import imageMockup from '../../assets/mockup.png';

import BreadCrumb from '../../components/BreadCrumb';
import ProductBag from '../../components/ProductBag';
import CardBag from '../../components/CardBag';

export default class Bag extends Component{
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