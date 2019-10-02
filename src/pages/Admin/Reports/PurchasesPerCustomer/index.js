import React, { Component } from 'react';
import api from '../../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableThreeColumns from '../../../../components/Tables/ThreeColumns';

class PurchasesPerCustomer extends Component {

    state = {
        clients: [
            {tab1: "005", tab2: "John Doe da Silva", tab3: "13"},
            {tab1: "006", tab2: "Mateus Pereira dos Santos", tab3: "3"},
            {tab1: "007", tab2: "Andrew Noronha", tab3: "10"},
            {tab1: "005", tab2: "John Doe da Silva", tab3: "54"},
            {tab1: "005", tab2: "John Doe da Silva", tab3: "2"}
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
                <BreadCrumb previousPage="Relatórios" actualPage="Compras por Cliente"/>
                <TableThreeColumns report={this.state.clients} tab1="ID" tab2="Nome do Cliente" tab3="Quant. de Compras"/>
            </div>
        )
    }
}

export default withRouter(PurchasesPerCustomer);