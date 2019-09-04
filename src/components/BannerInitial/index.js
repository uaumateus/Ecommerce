import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './style.css';

import image1 from './assets/banner_image.png';

const BannerInitial = () => {
    const content = [
        {image: image1, title: "Lorem ipsum fo shizzle", description: "Nullizzle sapizzle velizzle, crunk volutpizzle, ass quizzle, fo shizzle mah nizzle fo rizzle."},
        {image: image1, title: "Lorem ipsum fo shizzle", description: "Nullizzle sapizzle velizzle, crunk volutpizzle, ass quizzle, fo shizzle mah nizzle fo rizzle."},
        {image: image1, title: "Lorem ipsum fo shizzle", description: "Nullizzle sapizzle velizzle, crunk volutpizzle, ass quizzle, fo shizzle mah nizzle fo rizzle."},
        {image: image1, title: "Lorem ipsum fo shizzle", description: "Nullizzle sapizzle velizzle, crunk volutpizzle, ass quizzle, fo shizzle mah nizzle fo rizzle."}
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
                            <p className="Medium-Text-Regular">{item.description}</p>
                            <button className="button buttonSecundary">Ver Mais</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BannerInitial;