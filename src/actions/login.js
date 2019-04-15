import {
    LOGIN
} from '../constants/counter'
import Taro from '@tarojs/taro'

export const login = () => {
    return {
        type: LOGIN
    }
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const search = window.location.href.substr(1).replace(/^[^?]*\?/, '')
    console.log(search, 'search');
    var r = search.match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
// 异步的action
export function asyncLogin() {
    const openid = getQueryString('openid')
    return dispatch => {
        return Taro.request({
            url: 'http://221.176.65.6:80/userapi/management/ssoRest/wxLogin',
            method: 'post',
            data: {openid}
        }).then(res => {
            dispatch(login())
        })
    }
}
