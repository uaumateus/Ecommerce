import React, {Component} from 'react';
import './style.css';

import imageMockup from '../../assets/mockup.png';

import BreadCrumb from '../../components/BreadCrumb';
import Accordion from '../../components/Accordion';

export default class HistoricBuys extends Component{
    render(){
        return(
            <div className="content historicBuys">
                <BreadCrumb actualPage="Histórico de Compra"/>
                <div className="container">
                    <Accordion />
                    <Accordion />
                </div>
            </div>
        )
    }
}