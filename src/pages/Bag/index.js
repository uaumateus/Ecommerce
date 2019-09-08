import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import iconHome from './assets/home_icon.svg';
import imageMockup from '../../assets/mockup.png';

import ProductBag from '../../components/ProductBag';
import CardBag from '../../components/CardBag';

export default class Bag extends Component{
    render(){
        return(
            <div className="content bag">
                <article className="breadcrumb">
                    <Link to="/"><img src={iconHome} className="iconHome"/></Link>
                    <p className="Title-Text-Regular">/</p>
                    <p className="Title-Text-Regular">Sacola de Compras</p>
                </article>
                <div className="container">
                    <div>
                        <ProductBag product={{title: "Camisa Mockup", price: "120", image: imageMockup}} />
                        <ProductBag product={{title: "Camisa Mockup", price: "150", image: imageMockup}} />
                    </div>
                    <CardBag />
                </div>
            </div>
        )
    }
}