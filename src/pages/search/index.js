import React, { Fragment, useState, useEffect } from "react";
import { Input, Tag, Card, Icon, Button, Collapse, Empty  } from "antd";
import { Link } from "react-router-dom"
import axios from "axios";
import "./index.scss";
const { Search } = Input;
const { Panel } = Collapse;

const colorOfSearchItemList = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];


 

const SearchPage = function (props) {
    const [historyList, setHistoryList] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
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

        //发生请求
        // axios.get().then((data) => {
        //     setIsSearch(true);
        //     setGreateVideo()
        //     setSpiderVideo();
        // })
        setIsSearch(true);
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
                <Collapse style={ !isSearch ? {display: "none"} : {display: "block"}}>
                   <Panel header="爬虫动漫">
                        <ul>
                            {
                               spiderVideo.length === 0 
                               ?  <Empty />
                               :  spiderVideo.map((item, index) => {
                                   return (<Link to="/play/5d8076c843bd402b408dd18d/2" > 
                                            <li>
                                                <img src="http://www.baiwanzy.com/upload/vod/2019-02-24/15509947415.jpg" alt="gligli-img" />
                                                <div className="content-right">
                                                    <h4>水岛精二</h4>
                                                    <p>安济知佳,安野希世乃</p>
                                                    <p style={{color: "#FA8072"}}>连载2集</p>
                                                    <p>《eschachron》讲述的是在黑白的末日世界中，以两位少女为中心所展开的故事。如日月般对照的两人，在现实世界中触碰到光与声音，将未来引向鲜活明亮的世界。@www.qiuxiays.com/</p>
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
                                   return (<Link to="/play/5d8076c843bd402b408dd18d/2" > 
                                            <li>
                                                <img src="http://www.baiwanzy.com/upload/vod/2019-02-24/15509947415.jpg" alt="gligli-img" />
                                                <div className="content-right">
                                                    <h4>水岛精二</h4>
                                                    <p>安济知佳,安野希世乃</p>
                                                    <p style={{color: "#FA8072"}}>连载2集</p>
                                                    <p>《eschachron》讲述的是在黑白的末日世界中，以两位少女为中心所展开的故事。如日月般对照的两人，在现实世界中触碰到光与声音，将未来引向鲜活明亮的世界。@www.qiuxiays.com/</p>
                                                </div>
                                            </li>
                                    </Link>)
                               })
                            }
                        </ul>
                   </Panel>
                </Collapse> 
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