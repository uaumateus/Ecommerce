import React, { Component } from 'react';
import api from '../../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableThreeColumns from '../../../../components/Tables/ThreeColumns';

class MissingProducts extends Component {

    state = {
        products: [
            {tab1: "005", tab2: "CamisaMockup", tab3: "R$ 50,00"},
            {tab1: "006", tab2: "CamisaMockup", tab3: "R$ 120,00"},
            {tab1: "007", tab2: "CamisaMockup", tab3: "R$ 430,00"},
            {tab1: "005", tab2: "CamisaMockup", tab3: "R$ 210,00"},
            {tab1: "005", tab2: "CamisaMockup", tab3: "R$ 130,00"}
        ]
    }

    componentDidMount = async () => {
        await api.get('/admin/auth').then(resp => {
            if(!resp.data.result){
                this.props.history.push('/');
            }
        }).catch(error => {
            this.props.history.push('/');
        })
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

export default withRouter(MissingProducts);