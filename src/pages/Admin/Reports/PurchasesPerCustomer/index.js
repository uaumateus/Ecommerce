import React, { Component } from 'react';
import api from '../../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableThreeColumns from '../../../../components/Tables/ThreeColumns';

class PurchasesPerCustomer extends Component {

    state = {
        clients: [],
        // loading: false
    }

    componentDidMount = async () => {
        // await api.get('/admin/auth').then(resp => {
        //     if(!resp.data.result){
        //         this.props.history.push('/');
        //     }
        //     else this.setState({loading: true});
        // }).catch(error => {
        //     this.props.history.push('/');
        // })
        await api.post('/admin/clients-purchase-date', {minDate: "20-11-2019, 00:00:00 PM", maxDate: "28-11-2019, 00:00:00 PM"}).then(resp => {
            let array = [];
            for(var i = 0; i < resp.data.length; i++){
                if(resp.data[i].purchases !== undefined)
                    array.push({tab1: resp.data[i].id, tab2: resp.data[i].name, tab3: resp.data[i].purchases.length});
                else    
                array.push({tab1: resp.data[i].id, tab2: resp.data[i].name, tab3: "0"});
            }
            this.setState({clients: array});
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        if (this.state.clients === []) return null;
        return(
            <div className="content">
                <BreadCrumb previousPage="Relatórios" actualPage="Compras por Cliente"/>
                <TableThreeColumns report={this.state.clients} tab1="ID" tab2="Nome do Cliente" tab3="Quant. de Compras"/>
            </div>
        )
    }
}

export default withRouter(PurchasesPerCustomer);