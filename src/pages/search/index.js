import React, { Fragment, useState, useEffect } from "react";
import { Input, Tag, Card, Icon, Button, Collapse, Empty, Spin } from "antd";
import { Link } from "react-router-dom"
import axios from "axios";
import "./index.scss";
const { Search } = Input;
const { Panel } = Collapse;

const colorOfSearchItemList = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];

const baseUrl = "//xiaomy6666.xiaomy.net"
 

const SearchPage = function (props) {
    const [historyList, setHistoryList] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [greateVideo, setGreateVideo] = useState([]);
    const [spiderVideo, setSpiderVideo] = useState([]);

    useEffect(() => {
        let hList = window.localStorage.getItem("gligli-historyList") || '[]';
        setHistoryList(JSON.parse(hList));
    }, []);

    const handleSearch = function (value) {
        value = "" + value;
        value = value.trim();
        if (value === "") {
            setIsSearch(false);
            return;
        }
        const list = [...historyList];
        let index;
        if ((index = list.indexOf(value)) === -1) {
            list.unshift(value);
        } else {
            list.splice(index, 1);
            list.unshift(value);
        }
        setHistoryList(list);
        window.localStorage.setItem("gligli-historyList", JSON.stringify(list));
        
        setIsLoading(true);

        //发生请求
        const url = baseUrl + "/api/searchpage/fetch/video";
        
        axios.get(url, {
            params: {
                name: value
            }
        }).then((data) => {
            setIsLoading(false);
            setGreateVideo(data.data.greateVideo);
            setSpiderVideo(data.data.spiderVideo);
            setIsSearch(true);
        })
    }

    const handleDeleteAll = function(event) {
        setHistoryList([]);
        window.localStorage.setItem("gligli-historyList", JSON.stringify([]))
    }

    return (<Fragment>
        <div className="search-page-wrap">
            <div className="search-page-searchbox">
                <Search  
                    placeholder="搜索视频，up主等"   
                    onSearch={value => handleSearch(value)}
                />
            </div>
            <div className="search-page-searchcontent-wrap">
                {
                    isLoading 
                    ? <Spin tip="Loading..." />
                    : (<Collapse style={ !isSearch ? {display: "none"} : {display: "block"}}>
                            <Panel header="爬虫动漫">
                                <ul>
                                    {
                                        spiderVideo.length === 0 
                                        ?  <Empty />
                                        :  spiderVideo.map((item, index) => {
                                            return (<Link to={`/play/${item._id}/2`} key={index}> 
                                                    <li>
                                                        <img src={item.bgImg} alt="gligli-img" />
                                                        <div className="content-right">
                                                            <h4>番名：{item.name}</h4>
                                                            <span>导演：{item.director || "暂无"}</span>
                                                            <span style={{color: "#FA8072"}}>{item.status || "暂无"}</span>
                                                            <p>简介：{item.desc || "暂无"}</p>
                                                        </div>
                                                    </li>
                                            </Link>)
                                        })
                                    }
                                </ul>
                            </Panel>  
                            <Panel header="精品动漫">
                                <ul>
                                    {
                                        greateVideo.length === 0 
                                        ?  <Empty />
                                        :  greateVideo.map((item, index) => {
                                            return (<Link to={`/play/${item._id}/1`} key={index}> 
                                                    <li>
                                                        <img src={item.bgImg} alt="gligli-img" />
                                                        <div className="content-right">
                                                            <h4>番名：{item.name}</h4>
                                                            <span>导演：{item.director || "暂无"}</span>
                                                            <span style={{color: "#FA8072"}}>{item.status || "暂无"}</span>
                                                            <p>简介：{item.desc || "暂无"}</p>
                                                        </div>
                                                    </li>
                                            </Link>)
                                        })
                                    }
                                </ul>
                            </Panel>
                        </Collapse> )}
            </div>
            <div className="search-page-search-item">
                <Card title="热搜词汇" extra={<Icon type="fire"   theme="twoTone" twoToneColor="#eb2f96" />} >
                     { new Array(10).fill(1).map((item, index) => {
                         return (<Tag key={index} color={colorOfSearchItemList[index % colorOfSearchItemList.length]}>volcano</Tag>)
                     })}
                </Card>
                <Card title="历史记录"   extra={<Icon type="history" spin />} style={{marginTop: "10px"}}>
                     { historyList.map((item, index) => {
                         return (<Tag key={index}>{item}</Tag>)
                     })}
                </Card>
                <Button onClick={(e) => { handleDeleteAll(e) }} block style={{borderRadius: "0px"}}><span style={{color: "#bbb", fontWeight: "800"}}>清除全部历史记录</span></Button>
            </div>
        </div>
    </Fragment>)
}

export default SearchPage;