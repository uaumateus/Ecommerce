import React, { Component } from 'react';

import BreadCrumb from '../../../components/BreadCrumb';
import ProductStock from '../../../components/Accordions/ProductStock';

export default class Stock extends Component {

    render(){
        return(
            <div className="content">
                <BreadCrumb actualPage="Estoque"/>
                <ProductStock category="Camisas"/>
                <ProductStock category="Bermudas"/>
            </div>
        )
    }
}