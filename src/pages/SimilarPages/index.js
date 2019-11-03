import React, { Component } from 'react';
import api from '../../services/api';

import BreadCrumb from '../../components/BreadCrumb';
import CardList from '../../components/CardList';

import imageMockup from '../../assets/mockup.png';

const productsTest = [
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
    loading: true,
    products: []
  }

  componentDidMount = () => {
    if(this.props.match.params.description){
      this.getProductsCategorie(this.props.location.state.categorie.id);
    }
  }

  componentDidUpdate(){
    if(this.props.match.params.description){
      this.getProductsCategorie(this.props.location.state.categorie.id);
    }
  }

  getProductsCategorie = async (e) => {
    await api.get('/category-products/'+e).then(resp => {
        this.setState({ products: resp.data }) 
    }).catch(error => {
        console.log("Erro ao buscar produtos")
    })
  }

  // componentDidMount = async () => {
  //   await api.get('/admin/auth').then(resp => {
  //       if(resp.data.result){
  //           this.props.history.push('/');
  //       }
  //       else this.setState({loading: true});
  //   }).catch(error => {
  //       this.props.history.push('/');
  //   })
  // }

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

          {match.params.description ?
            <CardList products={this.state.products} />
            :
            <CardList products={productsTest} />
          }
            
        </div>
    );
  }
}
