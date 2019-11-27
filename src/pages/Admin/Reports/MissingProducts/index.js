import React, { Component } from 'react';
import api from '../../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableThreeColumns from '../../../../components/Tables/ThreeColumns';

class MissingProducts extends Component {

    state = {
        products: [],
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
        await api.get('/admin/products-outstock').then(resp => {
            let array = [];
            for(var i = 0; i < resp.data.length; i++){
                array.push({tab1: resp.data[i].id, tab2: resp.data[i].name, tab3: "R$ "+resp.data[i].price});
            }
            this.setState({products: array});
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        // if (!this.state.loading) return null;
        return(
            <div className="content">
                <BreadCrumb previousPage="Relatórios" actualPage="Produtos em Falta"/>
                <TableThreeColumns report={this.state.products} tab1="ID" tab2="Nome do Produto" tab3="Preço"/>
            </div>
        )
    }
}

export default withRouter(MissingProducts);