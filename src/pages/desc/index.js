import React, { Fragment } from "react";
import { Card } from "antd";
import DescPageImg from "../../static/img/desc-img.jpg";

const DescPage = function (props) {
    return (<Fragment>
        <Card style={{textAlign: "center"}} title={<img src={DescPageImg}  alt="gligli-desc-img" style={{width: "80%"}}/>}>网站正在完善当中，站主正在疯狂写代码</Card>
    </Fragment>)
}

export default DescPage;