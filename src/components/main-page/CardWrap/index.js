import React , { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;

const baseUrl = "//cyl.2048game.xiaomy.net"
//const baseUrl = "//localhost:8080"
const CardWrap = function (props) {
    let url = "";
    switch(+props.type) {
        case 1: {
            url = baseUrl + "/api/mainpage" + "/fetch/greatevideo";
            break;
        }
        case 2: {
            url = baseUrl + "/api/mainpage" + "/fetch/spidervideo";
            break;
        }
        default: break;
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url).then((data) => {
            setData(data.data);
        })
    }, []);
    return data.length !== 0 ? <Fragment>
        {data.map((item, index) => {
            return (
                <Card
                    key={index}
                    hoverable
                    size="small"
                    style={{ width: "48%", maxWidth: "210px",borderRadius: "5px", marginBottom: "15px", maxHeight: "335px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
                    cover={<Link to={`/play/${item._id}/${+props.type}`}><img alt="gligli-img" src={item.bgImg} style={{width: "100%", maxHeight: "228px", borderRadius: "5px"}} /></Link>}
                >
                    <Link to={`/play/${item._id}/${+props.type}`}><Meta title={item.name} description={item.director} style={{whiteSpace: "nowrap", overflow: "hidden"}}/></Link>
                </Card>)
        })}
    </Fragment> : <Loading />
}

export default CardWrap;