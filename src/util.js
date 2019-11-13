
const isPc = function () {
    const useAgent = navigator.userAgent;
    const agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let isPc = true, len = agents.length;
    for (let i=0; i<len; i++) {
        if(useAgent.indexOf(agents[i]) !== -1) {
            isPc = false;
            break;
        }
    }
    return isPc;
}


export { isPc };