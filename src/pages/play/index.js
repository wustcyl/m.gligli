import React, { Fragment, useEffect, useState } from "react";
import { Layout, Tabs, Icon, Input } from 'antd';
import axios from "axios";
import "./index.scss";
const { Content } = Layout;
const { TabPane } = Tabs;


const handleInput = function(event) {
    const message = document.getElementById("message");
    const li = document.createElement("li");
    li.innerText = event.target.value;
    message.appendChild(li);
    event.target.value = null;
}
const PlayPage = function (props) {
    const [videoSrc, setVideoSrc] = useState("");
    useEffect(() => {
        axios.get("//localhost:8080/api/playpage/fetch/video").then((data) => {
            console.log("data", data)
            setVideoSrc(data.data.src || "");
        })
    }, [])
    return (<Fragment>
        <Layout className="play-page-wrap">
            <header className="play-page-header">
                <e-player src={videoSrc} type="video/mp4" />
            </header>
            <Content className="play-page-content">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="file" />简介</span>}
                        key="1"
                    >
                        Tab 1
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
    </Fragment>)
}

export default PlayPage;