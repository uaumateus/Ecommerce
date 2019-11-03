import React, {Component} from 'react';
import './style.css';
import imageMockup from '../../assets/mockup.png';
import api from '../../services/api';

import BannerInitial from '../../components/BannerInitial';
import CardsBanner from '../../components/CardsBanner';
import CardList from '../../components/CardList';

export default class Home extends Component{

    state = {
        products: []
    }

    componentDidMount = async () => {
        await api.get('/products').then(resp => {
            this.setState({products: resp.data});    
        }).catch(error => {
            console.log("Erro ao buscar produtos")
        })
    }

    render(){
        return(
            <div className="home">
                <BannerInitial />
                <div className="content">
                    <CardsBanner />
                    <CardList products={this.state.products}/>
                </div>
            </div>
        )
    }
}