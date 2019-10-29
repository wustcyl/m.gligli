import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import MainPage from "./pages/main";
import PlayPage from "./pages/play";
import './App.scss';
 

const { Sider } = Layout;

function App() {
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
            <Menu theme="dark" mode="inline"  defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/"> 
                  <Icon type="smile" />
                  <span className="nav-text">首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/detail"> 
                  <Icon type="more" />
                  <span className="nav-text">分类</span>
                </Link>
              </Menu.Item>
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
                <Link to="/user"> 
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
          <Route exact path="/search" component={() => (<div>search</div>)} />
          <Route exact path="/up" component={() => (<div>up</div>)} />
          <Route exact path="/home" component={() => (<div>home</div>)} />
          <Route exact path="/play" component={PlayPage} />
        </Switch>
      </Layout>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
