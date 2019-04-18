import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import {getDemoList} from 'api/demo'
import Loading from '@/components/loading'

import styles from './aboutUs.module.scss'
import '../staticPic/icon.scss'


@connect(state => state.counter, {add, minus, asyncAdd})
class Aboutus extends Component {

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

  // 获取list
  getList () {
    // or
    // getDemoList({}).then(res => {
    //   let {code, data} = res 
    // })
  }

  aboutUsClick() {
    Taro.navigateTo({
      url: '/pages/personalCenter/guideAboutus/withUs',
    })
  }
  concatUsClick() {
    Taro.navigateTo({
      url: '/pages/personalCenter/guideAboutus/concatUs',
    })
  }
  serviceProClick() {
    Taro.navigateTo({
      url: '/pages/personalCenter/guideAboutus/servicePro',
    })
  }
  versionClick() {
    Taro.navigateTo({
      url: '/pages/personalCenter/guideAboutus/copyright',
    })
  }


  render () {
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.aboutus}>
        <View className={styles.abus}><Text className='iconfont icon-left' style={{position:'absolute',left:'21px'}}></Text>关于我们</View>
        <View className={styles.title}>关于我们<Text className='iconfont icon-right' style={{float:'right'}} onClick={this.aboutUsClick.bind(this)}></Text></View>
        <View className={styles.line}>联系我们<Text  className='iconfont icon-right' style={{float:'right'}} onClick={this.concatUsClick.bind(this)}></Text></View>
        <View className={styles.title}>服务协议<Text className='iconfont icon-right' style={{float:'right'}} onClick={this.serviceProClick.bind(this)}></Text></View>
        <View className={styles.title}>版权说明<Text className='iconfont icon-right' style={{float:'right'}} onClick={this.versionClick.bind(this)}></Text></View>
      </View>
    )
  }
}

export default Aboutus
