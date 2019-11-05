import React, { Fragment, useEffect, useState } from "react";
import { Layout, Tabs, Icon, Input, Descriptions } from 'antd';
import Loading from "../../components/Loading";
import axios from "axios";
import "./index.scss";
const { Content } = Layout;
const { TabPane } = Tabs;

const baseUrl = "//cyl.2048game.xiaomy.net";

const handleInput = function(event) {
    const message = document.getElementById("message");
    const li = document.createElement("li");
    li.innerText = event.target.value;
    message.appendChild(li);
    event.target.value = null;
}
const PlayPage = function (props) {
    const [dataInfo, setDataInfo] = useState({});
    const [isActive, setActive] = useState(0);
    const [videoSrc, setVideoSrc] = useState("");
    const { params } = props.match;
    const _id = params._id || "";
    const type = params.type || 1;
    useEffect(() => {
        let url = baseUrl;
        url += (type == 1 ? "/api/playpage/fetch/greatevideo" : "/api/playpage/fetch/animevideo");
        axios.get(url, {
            params: {
                _id
            }
        }).then((data) => {
            setDataInfo(data.data[0] || {});
            setVideoSrc(data.data[0].resource[0]);
        })
    }, []);
    const handleClick = function(event) {
        event = event || window.event;
        const target = event.target || event.srcElement;
        const index = target.getAttribute("dataindex");
        setActive(index);
        setVideoSrc(dataInfo.resource[index])
    }
    return videoSrc ? (<Fragment>
        <Layout className="play-page-wrap">
            <header className="play-page-header">
                {
                    (type == 1)
                    ? (<e-player type="mp4" src={videoSrc} style={{width: "100%", height: '300px'}}></e-player>)
                    : (<iframe src={videoSrc} allowtransparency="true" frameBorder="0" title="" allowFullScreen={true} style={{width: "100%", height: '300px', scrolling: "yes", border: "0"}}/>)
                } 
            </header>
            <Content className="play-page-content">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="file" />简介</span>}
                        key="1"
                    >
                        <div className="all-video-wrap">
                            <div style={{display: "flex", justifyContent: "space-between", padding: "0px 15px"}}><h3 style={{color: "#999"}}>选集</h3><h3 style={{color: "#999"}}>{`全${(dataInfo.resource || []).length}集`}</h3></div>
                           
                            <ul onClick={(e) => handleClick(e) }>
                                {(dataInfo.resource || []).map((item, index) => {
                                    return <li key={index} className={isActive == index ? "active" : "" } dataindex={index}>{`第${index+1}话`}</li>
                                })}
                            </ul>
                        </div>
                        <Descriptions title={""} size="small" bordered="true">
                            <Descriptions.Item label="番名">{dataInfo.name}</Descriptions.Item>
                            <Descriptions.Item label="简介">{dataInfo.desc}</Descriptions.Item>
                            <Descriptions.Item label="状态">{dataInfo.status}</Descriptions.Item>
                            <Descriptions.Item label="主演">{dataInfo.starring}</Descriptions.Item>
                            <Descriptions.Item label="评分">{dataInfo.score}</Descriptions.Item>
                            <Descriptions.Item label="热度">{dataInfo.hot}</Descriptions.Item>
                            <Descriptions.Item label="图片"><img src={dataInfo.bgImg} alt="gligli-img" className="desc-img"></img></Descriptions.Item>
                        </Descriptions>
                    </TabPane>
                    <TabPane tab=""
                        key="2"
                        
                    > </TabPane>
                    <TabPane tab={<span><Icon type="message" />评论</span>}
                        key="3"
                    >
                        <div className="play-page-content-message" >
                            <ul id="message"></ul>
                            <div className="play-page-content-message-input"> 
                             <Input  placeholder="留下什么吧！" onPressEnter={ (event) => { handleInput(event); }}/>
                             </div>
                        </div>
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    </Fragment>) : <Loading />
}

export default PlayPage;