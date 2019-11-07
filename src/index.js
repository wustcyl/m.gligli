import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


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
 
