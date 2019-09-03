import React, {Component} from 'react';
import './style.css';
import imageMockup from '../../assets/mockup.png';

import BannerInitial from '../../components/BannerInitial';
import CardsBanner from '../../components/CardsBanner';
import CardProduct from '../../components/CardProduct';

const products = [
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
    {title: "Camisa Mockup", price: "120", image: imageMockup},
]

export default class Home extends Component{
    render(){
        return(
            <div>
                <BannerInitial />
                <div className="content">
                    <CardsBanner />
                    <div className="cards">
                        {products.map((item, index) => (
                            <CardProduct product={item} />  
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}