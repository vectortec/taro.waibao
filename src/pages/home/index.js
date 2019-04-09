import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'
import { AtSteps,AtButton } from 'taro-ui'

import styles from './index.module.scss'


@connect(state => state.counter, {add, minus, asyncAdd})
class Home extends Component {

  config = {
    navigationBarTitleText: 'Home'
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
    if (this.state.loading) {
      return <Loading />
    }

    const items = [
      { 'title': '步骤一', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤二', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤三', 'desc': '这里是额外的信息，最多两行' }
    ]

    return (
      <View className={styles.demo}>
        <Text>Home page</Text>
        <Text className="iconfont iconceshi"></Text>
        <AtSteps
          items={items}
          current={0}
        />
      </View>
    )
  }
}

export default Home
