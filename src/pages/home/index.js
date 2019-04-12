import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import styles from './index.module.scss'

class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  redirectTo = (url) => {
    Taro.redirectTo({url})
  }

  componentDidMount() {
    let timer = setTimeout(_ => {
      this.setState({loading: false})
      clearTimeout(timer)
    }, 1000)
  }
  render () {

    return (
      <View className={styles.demo}>
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
