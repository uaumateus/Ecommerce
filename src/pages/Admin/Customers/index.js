import React, { Component } from 'react';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../components/BreadCrumb';
import AccordionCostumers from '../../../components/Accordions/Costumers';

class Customers extends Component {

    state = {
        clients: [
            {username: "johndoe123", name:"John Doe da Silva"}
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
                <BreadCrumb actualPage="Clientes"/>
                <AccordionCostumers />
                <AccordionCostumers />
                <AccordionCostumers />
                <AccordionCostumers />
            </div>
        )
    }
}

export default withRouter(Customers);