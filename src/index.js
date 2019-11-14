import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { isPc } from "./util";
import App from './App';

//非PC端
if (!isPc()) {
    ReactDOM.render(<App />, document.getElementById('root'));
} else {
    ReactDOM.render(<h2>对不起，暂时不支持PC，请使用移动设备打开~~~</h2>,document.getElementById('root'))
}


window.onload = function () {
    const img = new Image();
    img.src = `//cyl.2048game.xiaomy.net/sv.gif`;

    const suv = window.localStorage.getItem("suv");
    if (!suv) {
        const rands = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let suv = res.map(() => rands[parseInt(Math.random() * rands.length)]).join('');
        suv = "gligli-" + suv;
        window.localStorage.setItem("suv", suv);
    }
}
 
