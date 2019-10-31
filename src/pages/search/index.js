import React, { Fragment } from "react";
import { Input, Tag, Card, Icon, Button } from "antd";
import "./index.scss";
const { Search } = Input;

const colorOfSearchItemList = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"];

const SearchPage = function (props) {
    return (<Fragment>
        <div className="search-page-wrap">
            <div className="search-page-searchbox">
                <Search  
                    placeholder="搜索视频，up主等"   
                    onSearch={value => console.log(value)}
                />
            </div>
            <div className="search-page-search-item">
                <Card title="热搜词汇" extra={<Icon type="fire"   theme="twoTone" twoToneColor="#eb2f96" />} >
                     { new Array(10).fill(1).map((item, index) => {
                         return (<Tag key={index} color={colorOfSearchItemList[index % colorOfSearchItemList.length]}>volcano</Tag>)
                     })}
                </Card>
                <Card title="历史记录"   extra={<Icon type="history" spin />} style={{marginTop: "10px"}}>
                     { new Array(10).fill(1).map((item, index) => {
                         return (<Tag key={index} closable  onClose={(e) => { console.log(e)}}>volcano</Tag>)
                     })}
                </Card>
                <Button block style={{borderRadius: "0px"}}>清除全部历史记录</Button>
            </div>
        </div>
    </Fragment>)
}

export default SearchPage;