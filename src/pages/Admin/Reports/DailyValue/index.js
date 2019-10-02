import React, { Component } from 'react';
import api from '../../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableTwoColumns from '../../../../components/Tables/TwoColumns';

class DailyValue extends Component {

    state = {
        values: [
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"}
        ],
        loading: false
    }

    componentDidMount = async () => {
        await api.get('/admin/auth').then(resp => {
            if(!resp.data.result){
                this.props.history.push('/');
            }
            else this.setState({loading: true});
        }).catch(error => {
            this.props.history.push('/');
        })
    }

    render(){
        if (!this.state.loading) return null;
        return(
            <div className="content">
                <BreadCrumb previousPage="Relatórios" actualPage="Valor Diário"/>
                <TableTwoColumns report={this.state.values} tab1="Data" tab2="Valor Total"/>
            </div>
        )
    }
}

export default withRouter(DailyValue);