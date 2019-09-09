import React, { Component } from 'react';

import BreadCrumb from '../../../components/BreadCrumb';
import AccordionCostumers from '../../../components/Accordions/Costumers';

export default class Customers extends Component {

    state = {
        clients: [
            {username: "johndoe123", name:"John Doe da Silva"}
        ]
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