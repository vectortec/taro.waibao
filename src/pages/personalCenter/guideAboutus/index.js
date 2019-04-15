import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, RichText} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'

import styles from './index.module.scss'


@connect(state => state.counter, {add, minus, asyncAdd})
class GuideAboutus extends Component {

  config = {
    navigationBarTitleText: 'GuideAboutus'
  }

  state = {
    loading: true,
    currentNavtab: 0,
    navTab: ['注册登录', '选购课程', '课程学习', '其他问题'],
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

  switchTab(e) {
    // 点击事件判断渲染内容
    // console.log(e, index)
    this.setState({
      currentNavtab: e
    });
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.pageContent}>
      <Text className={styles.guide}>新手指南</Text>
        <View className={styles.top} >
        {
          this.state.navTab.map((item,index) => {
            return (<View className={this.state.currentNavtab === index ? (styles.topbar && styles.active) : styles.topbar} key={index} onClick={this.switchTab.bind(this,index)}>
              {item}
            </View>)
          })
        }
        </View>
        <ScrollView scroll-y>
          <View hidden={this.state.currentNavtab==0 ? false : true}>
              <Text className={styles.content}><RichText className={styles.richtext}  nodes={this.state.nodes} /></Text>
          </View>
            <View hidden={this.state.currentNavtab==1 ? false : true}>
              <Text className={styles.content}><RichText className={styles.richtext}  nodes={this.state.nodes} /></Text>
            </View>
            <View hidden={this.state.currentNavtab==2 ? false : true}>
              <Text className={styles.content}><RichText className={styles.richtext}  nodes={this.state.nodes} /></Text>
            </View>
            <View hidden={this.state.currentNavtab==3 ? false : true}>
              <Text className={styles.content}><RichText className={styles.richtext}  nodes={this.state.nodes} /></Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default GuideAboutus
