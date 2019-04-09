import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { getSessionKey } from 'api/login'
import styles from './index.module.scss'
import {setTitle} from 'utils/mixins-script'


setTitle('登录')

class LoginPage extends Component {

  // config = {
  //   navigationBarTitleText: 'LoginPage'
  // }

  componentDidMount() {
    wx.login({
      success(res){
        console.log('success',res)
        getSessionKey(res.code)
      },
      fail(err){
        console.log('err',err)
      }
    })
  }
  render () {

    return (
      <View className={styles.demo}>
        <Text>LoginPage page</Text>
      </View>
    )
  }
}

export default LoginPage
