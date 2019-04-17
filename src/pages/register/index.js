import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'
import { AtForm } from 'taro-ui'
import styles from './index.module.scss'


@connect(state => state.counter, { add, minus, asyncAdd })
class Register extends Component {

  config = {
    navigationBarTitleText: '注册'
  }

  state = {
    actived: false
  }

  component_form_between(placeholder, right_side, type='text', onInput) {
    const leftSide = <Input type={type} placeholder={placeholder}></Input>
    onInput && (leftSide.props.onInput = onInput.bind(this))
    return (
      <View className={styles.input_wrap}>
        <View className='at-row at-row__justify--between at-row__align--center'>
          <View className='at-col at-col-8'>
            {leftSide}
          </View>
          {right_side ? <View className={['at-col at-col-1 at-col--auto', styles.right_side]}>
            {right_side}
          </View> : ''}
        </View>
      </View>
    )
  }

  componentDidMount() {
    console.log(Taro.getEnv())
    console.log(Taro.ENV_TYPE)
    let timer = setTimeout(_ => {
      this.setState({ loading: false })
      clearTimeout(timer)
    }, 1000)
  }
  render() {
    return (
      <View className={styles.register}>
        <View className={styles.input_wrap}>
          <Input placeholder='请输入手机号码'></Input>
        </View>
        {this.component_form_between(
          '图形验证码',
          <Image className={styles.taro_img} src='http://authorization.beta.hqjy.com/api/captcha-image'></Image>
        )}
        {this.component_form_between(
          '短信验证码',
          <View className={[styles.button_send, this.state.actived ? styles.avtive : '']}>获得验证码</View>,
          'text',
          ({detail}) => {
            this.setState({
              actived: Boolean(detail.value)
            })
          }
        )}
        {this.component_form_between(
          '输入密码，长度不小于6位',
          null, 'password'
        )}
        {this.component_form_between(
          '确认密码',
          null, 'password'
        )}
        <View className={styles.button_sure}>立即注册</View>
        <View className={styles.contract}>
          <Text>注册/登录表示同意</Text>&nbsp;
          <Text className={styles.agree}>行家教育协议</Text>
        </View>
      </View>
    )
  }
}

export default Register
