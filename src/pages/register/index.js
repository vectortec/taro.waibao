import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
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
          <View className={['at-col at-col-5', styles.right_side]}>
            <Image src='http://authorization.hqbis.cn/api/captcha-image?Mon%20Apr%2015%202019%2018:01:04%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)'></Image>
          </View>
        </View>
        </View>
      </View>
    )
  }
}

export default Register
