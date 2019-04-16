import {
    LOGIN
} from '../constants/counter'
import Taro from '@tarojs/taro'
let openid = null
export const login = (res) => {
    return {
        type: LOGIN,
        user: res
    }
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const search = window.location.href.substr(1).replace(/^[^?]*\?/, '')
    var r = search.match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
// 异步的action
export function asyncLogin() {
    openid = getQueryString('openid') ? getQueryString('openid') : openid
    var newurl = updateQueryStringParameter(window.location.href, 'openid', openid);
    //向当前url添加参数，没有历史记录
    window.history.replaceState({
        path: newurl
    }, '', newurl);
    
    function updateQueryStringParameter(uri, key, value) {
        if(!value) {
            return uri;
        }
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }
    return dispatch => {
        return Taro.request({
            url: 'http://221.176.65.6:80/userapi/management/ssoRest/wxLogin',
            method: 'post',
            data: {
                openid
            },
            header: {
                'content-type': 'application/json'
            }
        }).then(({data}) => {
            dispatch(login(data))
        })
    }
}
