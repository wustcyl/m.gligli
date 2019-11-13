import React from "react";
import { Carousel } from 'antd';
import "./index.scss";

const CarouselWrap = function(props) {
    return (<Carousel effect="fade" autoplay class="carousel-wrap">
        <div>
            <div className="item-wrap">
                <img src="https://ae01.alicdn.com/kf/Ha36a8ad7f704479192ee7cdc6ebd143f0.jpg" style={{width: "100%", height: "100%"}}/>
                <span>鬼灭之刃</span>
            </div>
        </div>
        <div>
            <div><img src="https://ae01.alicdn.com/kf/H20cafff2b3cc451f9692c46d071ba350t.jpg" style={{width: "100%", height: "100%"}}/></div>
        </div>
        <div>
            <div><img src="https://puui.qpic.cn/fans_admin/0/3_1359855289_1557544075974/0" style={{width: "100%", height: "100%"}}/></div>
        </div>
        <div>
            <div><img src="https://p.pstatp.com/origin/ff7f000135c61f6c93b7" style={{width: "100%", height: "100%"}}/></div>
        </div>
    </Carousel>)
}

export default CarouselWrap;