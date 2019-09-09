import React, { Component } from 'react';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableThreeColumns from '../../../../components/Tables/ThreeColumns';

export default class MissingProducts extends Component {

    state = {
        products: [
            {tab1: "005", tab2: "CamisaMockup", tab3: "R$ 50,00"},
            {tab1: "006", tab2: "CamisaMockup", tab3: "R$ 120,00"},
            {tab1: "007", tab2: "CamisaMockup", tab3: "R$ 430,00"},
            {tab1: "005", tab2: "CamisaMockup", tab3: "R$ 210,00"},
            {tab1: "005", tab2: "CamisaMockup", tab3: "R$ 130,00"}
        ]
    }

    render(){
        return(
            <div className="content">
                <BreadCrumb previousPage="Relatórios" actualPage="Produtos em Falta"/>
                <TableThreeColumns report={this.state.products} tab1="ID" tab2="Nome do Produto" tab3="Preço"/>
            </div>
        )
    }
}