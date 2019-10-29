import React from "react";
import { Carousel } from 'antd';
import "./index.scss";

const CarouselWrap = function(props) {
    return (<Carousel effect="fade" autoplay class="carousel-wrap">
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
    </Carousel>)
}

export default CarouselWrap;