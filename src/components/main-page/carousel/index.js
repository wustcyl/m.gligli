import React, { useState, useEffect } from "react";
import { Carousel } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.scss";

const baseUrl = "//xiaomy6666.xiaomy.net";

const CarouselWrap = function(props) {
    const [swiperData, setSwiperData] = useState([]);

    useEffect(() => {
        let url = baseUrl + "/api/mainpage" + "/fetch/swiper";
        axios.get(url).then((data) => {
            setSwiperData(data.data);
        })
    }, [])
    return (<Carousel effect="fade" autoplay class="carousel-wrap">
        {
            swiperData.map((item, index) => {
                return (<Link to={`/play/${item._id}/1`}><div className="item-wrap" key={index}>
                    <img src={item.bgImg} style={{width: "100%", height: "100%"}}/>
                    <span>{item.name} {`更新至${item.resource.length}话`}</span>
                </div></Link>)
            })
        }
    </Carousel>)
}

export default CarouselWrap;