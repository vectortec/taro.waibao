import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/demo/index'
import 'taro-ui/dist/style/index.scss'

import configStore from './store'

import './styles/index.scss'
import './styles/iconfont.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/register/index',
      'pages/loginPage/index',
      'pages/learningCenter/index',
      'pages/OrderDetail/index',
      'pages/myOrder/index',
      'pages/home/index',
      'pages/menu/index',
      // 'pages/demo/index',
      'pages/aboutUs/index',
      // 'pages/car/index',
      'pages/SureOrder/index',
      'pages/car/index',
      'pages/confirmOrder/index',
      'pages/confirmOrder/checkAgreement', //订单--服务协议
      'pages/courseDetail/index',
      'pages/courseList/index',
      'pages/forgetPassword/index',
      'pages/learningCenterDetail/index',
      'pages/messageCenter/index',
      'pages/newsDetail/index',
      'pages/newsList/index',
      'pages/personalCenter/guideAboutus/aboutUs', // 关于我们--总
      'pages/personalCenter/index', // 个人中心
      'pages/personalCenter/signLog/index', // 注册--服务协议
      'pages/personalCenter/guideAboutus/index', // 新手指南
      'pages/personalCenter/guideAboutus/copyright', // 版权说明
      'pages/personalCenter/newsInform/index', // 消息
      'pages/personalCenter/newsInform/newsDetails/index', // 消息详情
      'pages/personalCenter/guideAboutus/servicePro', // 服务协议
      'pages/personalCenter/guideAboutus/concatUs', // 联系我们
      'pages/personalCenter/guideAboutus/withUs', // 关于我们
      'pages/personalCenter/newsInform/newsDetails/checktxt', // 附件
      'pages/register/index',
      'pages/personalCenter/index',
      'pages/submitOrder/index',
      'pages/payment/submit-order/index',
      'pages/payment/pay-result-success/index',
      'pages/payment/pay-result-wait/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
