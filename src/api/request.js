import Taro from '@tarojs/taro'

/**
 * 简易封装网络请求
 * @param {*} options
 */
const CODE_SUCCESS = 200

export default function fetch(options) {
  const { url='', data={}, method = 'GET', header={}} = options

  return new Promise((resolve, reject) => {
    Taro.request({
      url,
      method,
      data,
      header
    }).then(res => {
      let code = res.code
      if (code === CODE_SUCCESS) {
        resolve(res.data)
      } else if (code === '其它') {
        // 这块等了解项目后再具体处理
        // token失效重新获取
        // 非正常code统一提示
        // ...
       } else {
         reject(res)
       }
    })
  })
}
