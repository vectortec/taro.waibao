import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import styles from './index.module.scss'

class Home extends Component {

  config = {
    navigationBarTitleText: 'Home'
  }

  redirectTo = (url) => {
    Taro.redirectTo({url})
  }

  render () {

    return (
      <View className={styles.demo}>
        <View>
          <Text className={styles.link} onClick={this.redirectTo.bind(this, '/pages/payment/index')}>支付页</Text>
        </View>
      </View>
    )
  }
}

export default Home
