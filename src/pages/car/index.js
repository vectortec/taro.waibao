import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'
import { AtTabs, AtTabsPane } from 'taro-ui'
import styles from './index.module.scss'
import 'taro-ui/dist/style/components/tabs.scss';

@connect(state => state.counter, {add, minus, asyncAdd})
class Car extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      count:88
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  config = {
    navigationBarTitleText: 'Car'
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
    let timer = setTimeout(() => {
      this.setState({loading: false})
      clearTimeout(timer)
    }, 1000)
  }
  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <View className={styles.car}>
        <AtTabs
          current={this.state.current}
          scroll
          tabList={[
            { title: `全部订单(${this.state.count})`},
            { title: '待支付(23)' },
            { title: '已支付(2)' },
            { title: '交易完成(8)' },
            { title: '交易关闭(89)' }
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Car
