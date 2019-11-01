import React, { Fragment } from "react";
import { Layout, Card, Input, Avatar, Icon, Tabs } from 'antd';
import { Link } from  "react-router-dom"
import CarouselWrap  from "../../components/main-page/carousel";
import G_Footer from "../../components/Footer";
import CardWrap from "../../components/main-page/CardWrap";
import "./index.scss";
const { Header, Content } = Layout;
const { Meta } = Card;
const { TabPane } = Tabs;

const SourceMap = new Array(10).fill(1);

const MainPage = function (props) {
    return (<Fragment>
        <Header style={{ background: '#fff', textAlign: 'center' }} >
            <div className="main-page-header-left">
                <Avatar src="https://avatar.csdnimg.cn/3/5/1/2_wust_cyl.jpg" />
                <Input  
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    placeholder="搜索动漫, up主" 
                    style={{ borderRadius: "10px"}} 
                    onPressEnter={(event) => {window.location.href= "/search" + "?" + "keywords=" + event.target.value}}
                />
            </div>
            <div className="main-page-header-right">
                <Link to="/desc" >
                    <Icon type=""/>
                    <Icon type="info-circle" />
                </Link>
            </div>
        </Header>
        <Content style={{ margin: '24px 16px 0'}} className="main-page-content">
            <div style={{ background: '#fff', minHeight: 360 }}>
                <div className="carousel-wrap">
                    <CarouselWrap />
                </div>
                <div style={{height: "20px"}}>推送</div>
                <Tabs defaultActiveKey="1">
                    <TabPane  tab={<span><Icon type="video-camera" />精品动漫</span>}
                        key="1"
                        style={{marginBottom: "-15px"}}
                    >
                        <div className="boutique-video-wrap">
                            {SourceMap.map((item, index) => {
                                return (<Card
                                    key={index}
                                    hoverable
                                    size="small"
                                    style={{ width: "48%", maxWidth: "210px", marginBottom: "15px"}}
                                    cover={<img alt="gligli-img" src="https://ae01.alicdn.com/kf/Hacccaa1c8347468eaa94940c2723d60bM.jpg" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com2222222222222222222222222222222" />
                                </Card>)
                            })}
                        </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="bug" />爬虫动漫</span>}
                        key="2"
                    >
                       <div className="boutique-video-wrap">
                            <CardWrap type="2" />
                        </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="eye" />唯美卡片</span>}
                        key="3"
                    >
                       Tab 2
                    </TabPane>
                    <TabPane tab={<span><Icon type="sound" />在线音乐</span>}
                        key="4"
                    >
                       Tab 2
                    </TabPane>
                </Tabs>
            </div>
        </Content>
        <G_Footer />
    </Fragment>)
}

export default MainPage;