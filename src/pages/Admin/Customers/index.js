import React, { Component } from 'react';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../components/BreadCrumb';
import AccordionCostumers from '../../../components/Accordions/Costumers';

class Customers extends Component {

    state = {
        clients: [
            {username: "johndoe123", name:"John Doe da Silva"}
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