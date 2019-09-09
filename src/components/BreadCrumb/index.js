import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import iconHome from './assets/home_icon.svg';

const BreadCrumb = ({ actualPage, previousPage }) => {
    return(
        <article className="breadcrumb">
            <Link to="/"><img src={iconHome} className="iconHome"/></Link>
            {previousPage &&
                <>
                    <p className="Title-Text-Regular space">/</p>
                    <p className="Title-Text-Regular">{previousPage}</p>
                </>
            }
            <p className="Title-Text-Regular space">/</p>
            <p className="Title-Text-Regular">{actualPage}</p>
        </article>
    );
}

export default BreadCrumb;