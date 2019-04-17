import Taro, { Component } from '@tarojs/taro'
import { View, RichText, Text} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'

import styles from './withUs.module.scss'
import '../staticPic/icon.scss'


@connect(state => state.counter, {add, minus, asyncAdd})
class ServicePro extends Component {

  config = {
    navigationBarTitleText: '行家'
  }

  state = {
    loading: true,
    nodes: '<div style="font-size:12px;">欢迎使用行家网校，为了保障您的权益，请在使用行家网校服务之前，详细阅读此服务协议（以下简称“本协议”）所有内容，特别是加粗部分。本协议内容包括协议正文、本协议下述协议明确援引的其他协议、上海恒企教育培训有限公司（以下简称“恒企”）已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，您使用行家网校服务均受本协议约束。一、定义    行家网校指恒企所有和经营的有关教育、学习等数字内容聚合、管理和分发的平台产品，旨在为用户提供教学内容的生成、传播和消费服务。二、行家网校服务协议的修订</div>'
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
  
  goBackClick() {
    Taro.navigateBack({ delta: 1 })
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.content}>
        <View className={styles.title}><Text className='iconfont icon-left' style={{ position: 'absolute', left: '21px' }} onClick={this.goBackClick.bind(this)}></Text>服务协议</View>
        <RichText className={styles.richtext}  nodes={this.state.nodes} />
      </View>
    )
  }
}

export default ServicePro
