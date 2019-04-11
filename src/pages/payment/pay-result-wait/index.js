import Taro, {Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import {AtButton} from 'taro-ui'
import styles from './index.module.scss'
import PayFailure from './pay_failure.png'

export default class PayResultWait extends Component {

  render () {

    return (
      <View className={styles.payResultWait}>
        <Image className={styles.image} src={PayFailure} />
        <View className={styles.waitPay}>
          <Text>等待支付</Text>
        </View>
        <View className={styles.countDown}>
          <Text>
            您的订单尚未支付成功，您可以继续支付
          </Text>
          <br/>
          <Text className={styles.countDownTips}>
            距离超时还有：<Text className={styles.countDownNum}>12:09:32</Text>
          </Text>
        </View>
        <View className={styles.button}>
          <View className={styles.buttonLeft}>
            <AtButton type='secondary'>重新选择支付方式</AtButton>
          </View>
          <View className={styles.buttonRight}>
            <AtButton type='primary'>继续支付</AtButton>
          </View>
        </View>
      </View>
    )
  }
}