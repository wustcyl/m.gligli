import React , { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;

const CardWrap = function (props) {
    let baseUrl = "";
    switch(+props.type) {
        case 1: {
            baseUrl = "";
            break;
        }
        case 2: {
            baseUrl = "//localhost:8080/api/playpage/fetch/video";
            break;
        }
        default: break;
    }
    console.log(baseUrl)
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(baseUrl).then((data) => {
            setData(data.data);
        })
    }, []);
    return <Fragment>
        {data.map((item, index) => {
            return (<Card
                key={index}
                hoverable
                size="small"
                style={{ width: "48%", maxWidth: "210px", marginBottom: "15px", maxHeight: "335px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
                cover={<img alt="gligli-img" src={item.bgImg} style={{maxHeight: "228px"}} />}
            >
                <Meta title={item.name} description={item.director} style={{whiteSpace: "nowrap", overflow: "hidden"}}/>
            </Card>)
        })}
    </Fragment>
}

export default CardWrap;