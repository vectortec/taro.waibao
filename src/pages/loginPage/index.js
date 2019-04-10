import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'
import {setTitle} from 'utils/mixins-script'
import { AtButton, AtForm, AtInput } from 'taro-ui'


setTitle('登录')

class LoginPage extends Component {

  // config = {
  //   navigationBarTitleText: 'LoginPage'
  // }

  componentDidMount() {
  }
  render () {

    return (
      <View className={styles.demo}>
        <AtForm>
          <AtButton type='primary'>登录</AtButton>
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </AtForm>
      </View>
    )
  }
}

export default LoginPage
