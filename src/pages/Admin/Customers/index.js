import React, { Component } from 'react';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../components/BreadCrumb';
import AccordionCostumers from '../../../components/Accordions/Costumers';

class Customers extends Component {

    state = {
        clients: []
    }

    componentDidMount = async () => {
        await api.get('/admin/clients-purchase').then(resp => {
            this.setState({clients: resp.data})
            console.log(resp.data)
        }).catch(error => {
            console.log("Erro ao procurar clientes")
        })
    }

    render(){
        const { clients } = this.state;
        if(clients === []){ return null }
        return(
            <div className="content">
                <BreadCrumb actualPage="Clientes"/>
                {clients.map(item => (
                    <AccordionCostumers user={item}/>
                ))}
            </div>
        )
    }
}

export default withRouter(Customers);