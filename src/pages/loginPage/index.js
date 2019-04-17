import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'
import { setTitle } from 'utils/mixins-script'
import { AtButton, AtForm, AtInput } from 'taro-ui'
import getUnionId from '../../utils/getUnionId'


// setTitle('登录')

class LoginPage extends Component {

  config = {
    navigationBarTitleText: '登录'
  }
  componentWillMount() {
    if (Taro.getEnv() === 'WEAPP') {
      Taro.cloud.init()
      Taro.getUserInfo().then(res => {
        // console.log(res)
        const iv = res.iv
        const encryptedData = res.encryptedData
        Taro.login({
          success: function (res) {
            Taro.cloud.callFunction({
              // 云函数名称
              name: 'login',
              // 传给云函数的参数
              data: {
                code: res.code
              }
            }).then(res => {
              Taro.cloud.callFunction({
                // 云函数名称
                name: 'decode',
                // 传给云函数的参数
                data: {
                  sessionKey: res.result.parsed.session_key,
                  appId: 'wx7dc6e6f5e318010f',
                  iv,
                  encryptedData
                }
              }).then(res => {
                // console.log(res)
              })
              // console.log(res)
              // const data = getUnionId(encryptedData, "wx7dc6e6f5e318010f", res.result.parsed.session_key, iv)
              // console.log(data)
            })
          }
        }).then(res => {
          console.log(res, 'login')
        })
      })
    }

  }
  handleChange () {

  }
  render() {

    return (
      <View className={styles.loginPage}>
        <AtForm>
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='账户'
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='密码'
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <View className={styles.gap}></View>
          <AtButton type='primary'>登录</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default LoginPage
