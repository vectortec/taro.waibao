import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import {getDemoList} from 'api/demo'
import Loading from '@/components/loading'

import styles from './index.module.scss'


@connect(state => state.counter, {add, minus, asyncAdd})
class Demo extends Component {

  config = {
    navigationBarTitleText: '首页'
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

  // 获取list
  render () {
    if (this.state.loading) {
      return <Loading />
    }


    return (
      <View className={styles.demo}>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.num}</Text></View>
        <View>
          <Text className="iconfont iconceshi"></Text>
          <Text>Hello, World</Text>
        </View>
      </View>
    )
  }
}

export default Demo
