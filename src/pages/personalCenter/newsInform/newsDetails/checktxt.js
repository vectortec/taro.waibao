import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import {getDemoList} from 'api/demo'
import Loading from '@/components/loading'

import styles from './checktxt.module.scss'



@connect(state => state.counter, {add, minus, asyncAdd})
class Checktxt extends Component {

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
  async getList () {
    const res = await getDemoList({})
    // or
    getDemoList.then(res => {
      let {code, data} = res 
    })
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }


    return (
      <View className={styles.checktxt}>
        <View className={styles.txt}>附件一-附件名称最多显示一行.png</View>

        <View className={styles.txt}>附件2-附件名.jpg</View>
      </View>
    )
  }
}

export default Checktxt
