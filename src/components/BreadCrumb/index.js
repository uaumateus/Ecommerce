import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import iconHome from './assets/home_icon.svg';

const BreadCrumb = ({ actualPage }) => {
    return(
        <article className="breadcrumb">
            <Link to="/"><img src={iconHome} className="iconHome"/></Link>
            <p className="Title-Text-Regular">/</p>
            <p className="Title-Text-Regular">{actualPage}</p>
        </article>
    );
}

export default BreadCrumb;