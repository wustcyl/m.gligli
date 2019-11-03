import React from "react";
import { Spin } from "antd";

const Loading = function (props) {
    return <Spin tip="Loading..." size="large" style={{position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}/>
}

export default Loading;