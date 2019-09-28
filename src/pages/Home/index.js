import React, {Component} from 'react';
import './style.css';
import imageMockup from '../../assets/mockup.png';

import BannerInitial from '../../components/BannerInitial';
import CardsBanner from '../../components/CardsBanner';
import CardList from '../../components/CardList';

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
];

export default class Home extends Component{
    render(){
        return(
            <div className="home">
                <BannerInitial />
                <div className="content">
                    <CardsBanner />
                    <CardList products={products}/>
                </div>
            </div>
        )
    }
}