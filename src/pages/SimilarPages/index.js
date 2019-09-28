import React, { Component } from 'react';
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
  render() {
    const { match } = this.props;
    return (
        <div className="content">
          {match.params.idCat &&
            <BreadCrumb actualPage={match.params.idCat} />
          }
          {match.params.favoritos == "favoritos" &&
            <BreadCrumb actualPage="Meus favoritos" />
          }
          

          <CardList products={products} />
            
        </div>
    );
  }
}
