import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/demo/index'
import 'taro-ui/dist/style/index.scss'

import configStore from './store'

import './styles/index.scss'
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
      'pages/personalCenter/guideAboutus/aboutUs', // 关于我们--总
      'pages/home/index',
      'pages/loginPage/index',
      'pages/menu/index',
      // 'pages/demo/index',
      'pages/aboutUs/index',
      // 'pages/car/index',
      'pages/confirmOrder/index',
      'pages/courseDetail/index',
      'pages/courseList/index',
      'pages/forgetPassword/index',
      'pages/learningCenter/index',
      'pages/learningCenterDetail/index',
      'pages/messageCenter/index',
      'pages/myOrder/index',
      'pages/newsDetail/index',
      'pages/newsList/index',
      'pages/personalCenter/index', // 个人中心
      'pages/personalCenter/newsInform/index', // 消息通知
      'pages/personalCenter/guideAboutus/index', // 新手指南
      'pages/personalCenter/guideAboutus/copyright', // 版权说明
      'pages/personalCenter/newsInform/newsDetails/index', // 消息详情
      'pages/personalCenter/guideAboutus/servicePro', // 服务协议
      'pages/personalCenter/guideAboutus/concatUs', // 联系我们
      'pages/personalCenter/guideAboutus/withUs', // 关于我们
      'pages/personalCenter/newsInform/newsDetails/checktxt', // 附件
      'pages/register/index',
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
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#2A8CE5',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/personalCenter/newsInform/newsDetails/index',
        text: '消息详情',
        // iconPath: './asset/images/index.png',
        // selectedIconPath: './asset/images/index_focus.png'
      },{
        pagePath: 'pages/personalCenter/guideAboutus/index',
        text: '新手指南',
        // iconPath: './asset/images/discovery.png',
        // selectedIconPath: './asset/images/discovery_focus.png'
      }, 
      {
        pagePath: 'pages/personalCenter/guideAboutus/aboutUs', // 关于我们--总,
        text: '关于我们',
        // iconPath: './asset/images/burger.png',
        // selectedIconPath: './asset/images/burger_focus.png'
      },
      {
        pagePath: 'pages/personalCenter/newsInform/index',
        text: '消息通知',
        // iconPath: './asset/images/burger.png',
        // selectedIconPath: './asset/images/burger_focus.png'
      }]
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
