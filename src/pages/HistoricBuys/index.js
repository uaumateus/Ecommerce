import React, {Component} from 'react';
import api from '../../services/api';
import { withRouter } from 'react-router-dom';
import './style.css';

import BreadCrumb from '../../components/BreadCrumb';
import Accordion from '../../components/Accordions/Historic';

class HistoricBuys extends Component{
    state = {
        // loading: false
        purchases: []
    }

    componentDidMount = async () => {
        // await api.get('/admin/auth').then(resp => {
        //     if(resp.data.result){
        //         this.props.history.push('/');
        //     }
        //     else this.setState({loading: true});
        // }).catch(error => {
        //     this.props.history.push('/');
        // })
        const user = JSON.parse(localStorage.getItem('@compreaqui-User'));
        await api.get('/historic/'+user.id).then(resp => {
            this.setState({purchases: resp.data});
            console.log(resp.data)
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        // if (!this.state.loading) return null;
        const { purchases } = this.state;
        return(
            <div className="content historicBuys">
                <BreadCrumb actualPage="Histórico de Compra"/>
                <div className="container">
                    {purchases.map(item => (
                        <Accordion purchase={item}/>
                    ))}
                    
                </div>
            </div>
        )
    }
}

export default withRouter(HistoricBuys);