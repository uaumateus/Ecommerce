import React from 'react';
import './style.css';
import iconCard from './assets/card_icon.svg';
import iconPackage from './assets/package_icon.svg';
import iconSale from './assets/sale_icon.svg';

const CardsBanner = () => {
    return(
        <div className="cardsBanner">
            <div className="cardItem">
                <article>
                    <img src={iconPackage} style={{height: '70%'}} />
                </article>
                <p className="Medium-Text-Regular">Produtos à pronta entrega com rastreamento</p>
            </div>

            <div className="cardItem">
                <article>
                    <img src={iconCard} style={{width: '70%'}} />
                </article>
                <p className="Medium-Text-Regular">Parcelas facilitadas em até 5 vezes sem juros</p>
            </div>

            <div className="cardItem">
                <article>
                    <img src={iconSale} style={{width: '80%'}} />
                </article>
                <p className="Medium-Text-Regular">Toda semana promoção garantida em todo o site</p>
            </div>
        </div>
    )
}
export default CardsBanner;