import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Spin, Button } from "antd";
import "./index.scss";

const showPicture = function (event) {
    event = event || window.event;
    const target = event.target || event.srcElement;
    const div = document.createElement("div");
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

const baseUrl = "//xiaomy6666.xiaomy.net"

 
const CardPage = function (props) {
    const [data, setData] = useState([]);
    const [from, setSize] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const size = 10;

    function fetchData () {
        const suv = window.localStorage.getItem("suv") || "gligli-user";
        const requestId = suv + (+Date.now());
        const url = baseUrl + "/api/cardpage" + "/fetch/card";
        if (isLoading) return;
        setLoading(true);
        axios.get(url, {
            params: {
                requestId,
                size,
                from
            }
        }).then((res) => {
           setData(curData=>curData.concat(res.data));
           setSize(from + size);
           setLoading(false);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (<Fragment>
        <div className="card-page-wrap" id="card-page-wrap">
            <ul>
                {
                    data.map((item, index) => {
                        return (<li key={index}><img src={item.imgSrc} alt="gligli-img" onClick={(event) => { showPicture(event) }}/></li>)
                    })   
                }
            </ul>
            { isLoading ? <Spin tip="Loading..." size="large" style={{ width: "100%", margin: "20px 0" }}/> : <Button type="primary" block style={{ margin: "20px 0" }} onClick={() => { fetchData() }}>加载更多</Button>}
        </div>
    </Fragment>)
}

export default CardPage;