import React, {Component} from 'react';
import api from '../../services/api';
import { withRouter } from 'react-router-dom';
import './style.css';

import BreadCrumb from '../../components/BreadCrumb';
import Accordion from '../../components/Accordions/Historic';

class HistoricBuys extends Component{

    componentDidMount = async () => {
        await api.get('/admin/auth').then(resp => {
            if(resp.data.result){
                this.props.history.push('/');
            }
        }).catch(error => {
            this.props.history.push('/');
        })
    }

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

export default withRouter(HistoricBuys);