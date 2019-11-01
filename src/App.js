import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import MainPage from "./pages/main";
import PlayPage from "./pages/play";
import SearchPage from "./pages/search"
import DescPage from "./pages/desc";
import './App.scss';
const { Sider } = Layout;
const { SubMenu } = Menu;

function App(props) {
  
  return (
    <BrowserRouter> 
      <Layout>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            defaultCollapsed
            onBreakpoint={broken => {
              //console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              //console.log(collapsed, type);
            }}
        >
          <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1">
                <Link to="/"> 
                  <Icon type="smile" />
                  <span className="nav-text">首页</span>
                </Link>
              </Menu.Item>
              <SubMenu
                  key="2"
                  title={
                    <span>
                      <Icon type="more" />
                      <span className="nav-text">分类</span>
                    </span>
                  }
              >
              <Menu.Item key="first">
                <Link to="/kinds/greate"> 
                    <Icon type="video-camera" />
                    <span className="nav-text">精品动漫</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="second">
                <Link to="/kinds/spider"> 
                      <Icon type="bug" />
                      <span className="nav-text">爬虫动漫</span>
                  </Link>
              </Menu.Item>
            </SubMenu>
              <Menu.Item key="3">
                <Link to="/cards"> 
                  <Icon type="picture" />
                  <span className="nav-text">图片</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/search"> 
                  <Icon type="search" />
                  <span className="nav-text">热搜</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/up"> 
                  <Icon type="usb" />
                  <span className="nav-text">up主推荐</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/home"> 
                  <Icon type="user" />
                  <span className="nav-text">个人中心</span>
                </Link>
              </Menu.Item>
            </Menu>
        </Sider>
      <Layout>  
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/cards" component={() => (<div>cards</div>)} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/up" component={() => (<div>功能暂无</div>)} />
          <Route exact path="/home" component={() => (<div>功能暂无</div>)} />
          <Route exact path="/play" component={PlayPage} />
          <Route exact path="/kinds/*" component={() => (<div>动漫资源</div>)} />
          <Route exact path="/desc" component={DescPage} />
        </Switch>
      </Layout>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
