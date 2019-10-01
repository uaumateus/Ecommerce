import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './style.css';

import image1 from './assets/image1.png';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

const BannerInitial = () => {
    const content = [
        {image: image1, title: "Black Friday antecipada!", description: "Descontos de até 80% OFF em toda a loja!"},
        {image: image2, title: "Frete Grátis", description: "Em compras acima de R$150,00 você ganha frete gratuito e pode parcelar em ate 10x sem juros!"},
        {image: image3, title: "Moda Praia", description: "Encontre o melhor em moda praia com até 70% de desconto!"},
    ]
    return(
        <div className="containerBanner">
            <div></div>
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: 'cover' }}
                    >
                        <div className="center">
                            <h1 className="Large-Text-Banner">{item.title}</h1>
                            <p className="Large-Text-Regular">{item.description}</p>
                            <button className="button buttonSecundary">Ver Mais</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BannerInitial;