import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../Slider/Slider';
const Banner = () => {
    return (
        <Carousel>
            <Slider text='This is Best Tv For See Moview' img='https://m.media-amazon.com/images/I/81G49Dp71ML._AC_SX679_.jpg'></Slider>
            <Slider text='This is Best Tv For See Moview' img='https://m.media-amazon.com/images/I/81G49Dp71ML._AC_SX679_.jpg'></Slider>
            <Slider text='This is Best Tv For See Moview' img='https://m.media-amazon.com/images/I/81G49Dp71ML._AC_SX679_.jpg'></Slider>
        </Carousel>
    );
};

export default Banner;