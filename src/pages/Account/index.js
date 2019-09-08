import React, {Component} from 'react';
import './style.css';

import BreadCrumb from '../../components/BreadCrumb';

export default class Account extends Component{
    render(){
        return(
            <div className="content account">
                <BreadCrumb actualPage="Conta" />
                <div className="container">
                    
                </div>
            </div>
        )
    }
}