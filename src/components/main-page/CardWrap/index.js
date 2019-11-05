import React , { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import axios from "axios";
import { Card } from "antd";
import "./index.scss";
const { Meta } = Card;

const baseUrl = "//cyl.2048game.xiaomy.net"
//const baseUrl = "//localhost:8080"
const showPicture = function (event) {
    event = event || window.event;
    const target = event.target || event.srcElement;
    const div = document.createElement("div");
    console.log("click")
    const $body = document.querySelector("body");
    div.className = "show-picture";

    div.innerHTML = `
        <img src=${target.src} alt="gligli-img" style="width: 100%; position: absolute; top: 50%; transform: translateY(-50%);"/>
    `
    div.addEventListener("touchend", function (event) {
        event = event || window.event;
        event.preventDefault();
        div.remove();
    });
    $body.appendChild(div);

}
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
        case 3: {
            url = baseUrl + "/api/mainpage" + "/fetch/card";
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
                ((+props.type) !== 3)
                ? (<Card
                    key={index}
                    hoverable="true"
                    size="small"
                    style={{ width: "48%", maxWidth: "210px",borderRadius: "5px", marginBottom: "15px", maxHeight: "335px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
                    cover={<Link to={`/play/${item._id}/${+props.type}`}><img alt="gligli-img" src={item.bgImg} style={{width: "100%", maxHeight: "228px", borderRadius: "5px"}} /></Link>}
                >
                    <Link to={`/play/${item._id}/${+props.type}`}><Meta title={item.name} description={item.director} style={{whiteSpace: "nowrap", overflow: "hidden"}}/></Link>
                </Card>)
                : <img onClick={(event) => { showPicture(event) }} alt="gligli-img" src={item.imgSrc} style={{width: "48%",  maxWidth: "210px", maxHeight: "250px", borderRadius: "10px", marginBottom: "10px", padding: "10px", boxShadow: "0 0 10px #9a9a9a"  }} key={index}/>
            )
                 
        })}
    </Fragment> : <Loading />
}

export default CardWrap;