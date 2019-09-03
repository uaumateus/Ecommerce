import React, {Component} from 'react';
import './style.css';

import BannerInitial from '../../components/BannerInitial';
import CardsBanner from '../../components/CardsBanner';

export default class Home extends Component{
    render(){
        return(
            <div>
                <BannerInitial />
                <div className="content">
                    <CardsBanner />
                </div>
            </div>
        )
    }
}