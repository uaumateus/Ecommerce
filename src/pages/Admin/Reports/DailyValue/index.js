import React, { Component } from 'react';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableTwoColumns from '../../../../components/Tables/TwoColumns';

export default class DailyValue extends Component {

    state = {
        values: [
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"},
            {tab1: "07/09/2019", tab2: "R$ 1.500,00"}
        ]
    }

    render(){
        return(
            <div className="content">
                <BreadCrumb previousPage="Relatórios" actualPage="Valor Diário"/>
                <TableTwoColumns report={this.state.values} tab1="Data" tab2="Valor Total"/>
            </div>
        )
    }
}