import React, { Component } from 'react';
import api from '../../../../services/api';
import { withRouter } from 'react-router-dom';

import BreadCrumb from '../../../../components/BreadCrumb';
import TableTwoColumns from '../../../../components/Tables/TwoColumns';

class DailyValue extends Component {

    state = {
        values: [],
        date: '2019-11-27'
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
            // if(this.state.date !== ''){
                let array = [];
                let total = 0;
                for(var i = 0; i < resp.data.length; i++){
                    // if(resp.data[i].purchases.date_time !== undefined)
                    //     array.push({tab1: resp.data[i].id, tab2: resp.data[i].name, tab3: resp.data[i].purchases.length});
                    // else    
                    //     array.push({tab1: resp.data[i].id, tab2: resp.data[i].name, tab3: "0"});
                    if(resp.data[i].purchases !== undefined){
                        for(var j = 0; j <= resp.data[i].purchases.length; j++){
                            if(resp.data[i].purchases[j].date_time.split('T')[0] === this.state.date){
                                console.log(resp.data[i]);
                            }
                        }
                    }
                    // console.log(resp.data[i].)
                }
            // }
            console.log(resp.data)
        }).catch(err => {
            console.log(err)
        })
    }

    onChange = (e) => {
        this.setState({date: e.target.value});
    }

    render(){
        // if (!this.state.loading) return null;
        return(
            <div className="content">
                <BreadCrumb previousPage="Relatórios" actualPage="Valor Diário"/>
                {/* <input type="date" onChange={this.onChange}/> */}
                <TableTwoColumns report={this.state.values} tab1="Data" tab2="Valor Total"/>
            </div>
        )
    }
}

export default withRouter(DailyValue);