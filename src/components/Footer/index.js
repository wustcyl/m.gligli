import React from "react";
import { Layout} from "antd";
const { Footer } = Layout;

const G_Footer = function (props) {
    return <Footer style={{ textAlign: 'center', background: "#001529", color: "#fff", marginTop: "20px" }}>
          gligli.com © Made with <span style={{color: "red"}}>❤</span> by CYL
    </Footer>
}

export default G_Footer