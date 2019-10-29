import React, { Fragment } from "react";
import { Layout, Tabs, Icon, Input } from 'antd';
import G_Footer from "../../components/Footer";
import "./index.scss";
const {Footer, Content } = Layout;
const { TabPane } = Tabs;


const handleInput = function(event) {
    const message = document.getElementById("message");
    const li = document.createElement("li");
    li.innerText = event.target.value;
    message.appendChild(li);
    event.target.value = null;
}
const PlayPage = function (props) {
    return (<Fragment>
        <Layout className="play-page-wrap">
            <header className="play-page-header">
                <video controls style={{width: "100%"}} controlsList="nodownload">
                    <source src="https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_83604d07647fb49c5fbe135b3f3a13a5.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    您的浏览器不支持Video标签。
                </video>
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