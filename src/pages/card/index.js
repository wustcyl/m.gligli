import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";

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

const baseUrl = "//cyl.2048game.xiaomy.net"

 
const CardPage = function (props) {
    const [data, setData] = useState([]);
    const [from, setSize] = useState(1);
    const size = 10;

    function fetchData () {
        const suv = window.localStorage.getItem("suv") || "gligli-user";
        const requestId = suv + (+Date.now());
        const url = baseUrl + "/api/mainpage" + "/fetch/card";
        axios.get(url, {
            params: {
                requestId,
                size,
                from
            }
        }).then((res) => {
           // console.log("请求成功！")
            const curData = [...data, ...res.data];
            setData(curData);
            setSize(from + size);
        })
    }
    useEffect(() => {
        fetchData();
         window.onscroll = function() {
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            const $cardWrap = document.getElementById("card-page-wrap");
            const domHeight = +window.getComputedStyle($cardWrap).height.match(/[0-9]*/)[0];
            //console.log(windowHeight, scrollTop, domHeight);
            if ((windowHeight + scrollTop) - domHeight < -20) {
                fetchData();
            }
         };
        
    }, [])
    return (<Fragment>
        <div className="card-page-wrap" id="card-page-wrap">
                <ul>
                    {
                        data.map((item) => {
                            return (<li><img src={item.imgSrc} alt="gligli-img" onClick={(event) => { showPicture(event) }}/></li>)
                        })
                    }
                </ul>
                
    
        </div>
    </Fragment>)
}

export default CardPage;