import '@tarojs/async-await';
import { Provider } from '@tarojs/redux';
import Taro, { Component } from '@tarojs/taro';
import 'taro-ui/dist/style/index.scss';
import './app.scss';
import Index from './pages/demo/index';
import configStore from './store';
import './styles/index.scss';


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/cmcc_party/overcastDetail/index',
      'pages/cmcc_party/campaign/index',
      'pages/cmcc_party/statistics/index'
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
