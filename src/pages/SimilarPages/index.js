import React, { Component } from 'react';
import api from '../../services/api';

import BreadCrumb from '../../components/BreadCrumb';
import CardList from '../../components/CardList';

import imageMockup from '../../assets/mockup.png';

const products = [
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
]

export default class SimilarPages extends Component {
  state = {
    loading: false
  }

  componentDidMount = async () => {
    await api.get('/admin/auth').then(resp => {
        if(resp.data.result){
            this.props.history.push('/');
        }
        else this.setState({loading: true});
    }).catch(error => {
        this.props.history.push('/');
    })
}

  render() {
    const { match, location } = this.props;
    if (location.pathname == "/favoritos" && !this.state.loading) return null;
    return (
        <div className="content">
          {location.pathname == "/favoritos" &&
            <BreadCrumb actualPage="Meus favoritos" />
          }
          {match.params.description &&
            <BreadCrumb actualPage={match.params.description} />
          }
          {match.params.term &&
            <BreadCrumb actualPage={"Busca por: ''" + match.params.term + "''"} />
          }

          <CardList products={products} />
            
        </div>
    );
  }
}
