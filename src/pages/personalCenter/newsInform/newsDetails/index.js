import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, RichText } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
// import {getDemoList} from 'api/demo'
import Loading from '@/components/loading'

import styles from './index.module.scss'
import time from '../timer.png'



@connect(state => state.counter, {add, minus, asyncAdd})
class newsDetails extends Component {

  state = {
    loading: true,
    nodes: '<b>内容</b><hr/><b style="font-size:12px;">欢迎使用行欢迎使用行家，为了保障您的权益，请在使用行家服务之前，详细阅读此服务协议（以下简称“本协议”）所有内容，特别是加粗部分。本协议内容包括协议正文、本协议下述协议明确援引的其他协议、上海恒企教育培训有限公司（以下简称“恒企”）已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，您使用行家服务均受本协议约束。家，为了保障您的权益，请在使用行家服务之前，详细阅读此服务协议（以下简称“本协议”）所有内容，特别是加粗部分。本协议内容包括协议正文、本协议下述协议明确援引的其他协议、上海恒企教育培训有限公司（以下简称“恒企”）已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。欢迎使用行欢迎使用行家，为了保障您的权益，请在使用行家服务之前，详细阅读此服务协议（以下简称“本协议”）所有内容，特别是加粗部分。本协议内容包括协议正文、本协议下述协议明确援引的其他协议、上海恒企教育培训有限公司（以下简称“恒企”）已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，您使用行家服务均受本协议约束。家，为了保障您的权益，请在使用行家服务之前，详细阅读此服务协议（以下简称“本协议”）所有内容，特别是加粗部分。本协议内容包括协议正文、本协议下述协议明确援引的其他协议、上海恒企教育培训有限公司（以下简称“恒企”）已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，您使用行家服务均受本协议约束。除另行明确声明外，您使用行家服务均受本协议约束。</b>'
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

  defaultProps = {
    mark: ""
}


  render () {
    if (this.state.loading) {
      return <Loading />
    }


    return (
      <View className={styles.details}>
        <View className={styles.title}>新的考试通知</View>
        <View className={styles.text}><Image src={time} className={styles.img} />2018-05-21 12:00</View>
        <RichText className={styles.richtext}  nodes={this.state.nodes} />
        <Button className={styles.checktxt}>查看附件</Button>
      </View>
    )
  }
}

export default newsDetails
