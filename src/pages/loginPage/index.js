import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Text, WebView } from '@tarojs/components'
// import { add, minus, asyncAdd } from '@/actions/counter'
// import Loading from '@/components/loading'
// import { AtForm } from 'taro-ui'
import styles from './index.module.scss'


class Register extends Taro.Component {

  config = {
    navigationBarTitleText: '登陆'
  }

  state = {
    actived: false,
    formData: {
      name: null,
      password: null
    }
  }
  onAccountChange (value) {
    const formData = this.state.formData
    formData.name = value.detail.value
    this.setState({
      formData,
      actived: Boolean(Object.entries(formData).find(([Index, item]) => {
        console.log(Index, item)
        return item
      }))
    })

  }
  onPassowrdChange (value) {
    const formData = this.state.formData
    formData.password = value.detail.value
    this.setState({
      formData,
      actived: Boolean(Object.entries(formData).find(([Index, item]) => {
        console.log(Index, item)
        return item
      })) 
    })
  }
  render() {
    // function component_form_between(placeholder, type = 'text', onInput) {
    //   const leftSide = <Input type={type} placeholder={placeholder}></Input>
    //   onInput && (leftSide.props.onInput = onInput.bind(this))
    //   return (
    //     <View className={styles.input_wrap}>
    //       <View className='at-row at-row__justify--between at-row__align--center'>
    //         <View className='at-col at-col-8'>
    //           {leftSide}
    //         </View>
    //       </View>
    //     </View>
    //   )
    // }
    return (
      <View className={styles.login}>
        <View className={styles.title}>
          <Text className={['iconfont iconhangjia-xuanzhong', styles.icon]}></Text>&nbsp;
          <Text>行家</Text>
        </View>
        {/* {this.component_form_between(
          '手机号',
          this.onAccountChange.bind(this)
        )}
        {this.component_form_between(
          '密码',
           'password',
           this.onPassowrdChange.bind(this)
        )} */}
        <View className={[styles.button_sure, this.state.actived ? styles.actived : '']}>登录</View>
        <WebView src='http://www.hengqihj.com:5000/'></WebView>
      </View>
    )
  }
}

export default Register
