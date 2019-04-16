import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Icon } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'

import styles from './index.module.scss'


@connect(state => state.counter, {add, minus, asyncAdd})
class Register extends Component {

  config = {
    navigationBarTitleText: '注册'
  }

  state = {
    loading: true
  }

  // 慎用
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    console.log(Taro.getEnv())
    console.log(Taro.ENV_TYPE)
    let timer = setTimeout(_ => {
      this.setState({loading: false})
      clearTimeout(timer)
    }, 1000)
  }
  render () {
    return (
      <View className={styles.register}>
        <View className={styles.input_wrap}>
        <View className={styles.input_wrap}>
          <Input placeholder='请输入手机号码'></Input>
        </View>
        <View className='at-row at-row__justify--between'>
          <View className='at-col at-col-6'>
            <Input placeholder='图形验证码'></Input>
          </View>
          <View className={['at-col at-col-6', styles.right_side]}>
            <Image style='width: 160;height: 60px;' className='taro_img' src='http://authorization.beta.hqjy.com/api/captcha-image'></Image>
          </View>
        </View>
        </View>
      </View>
    )
  }
}

export default Register
