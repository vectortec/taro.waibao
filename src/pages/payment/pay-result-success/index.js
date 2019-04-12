import Taro, {Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import {AtButton} from 'taro-ui'
import styles from './index.module.scss'
import PaySuccess from './pay_successful.png'

export default class PayResultSuccess extends Component {

  render() {
    
    return (
      <View className={styles.wrap}>
        <View className={styles.imageWrap}>
          <Image className={styles.image} src={PaySuccess} />
        </View>
        <View className={styles.successPay}>
          <Text>支付成功</Text>
        </View>
        <View className={styles.detail}>
          <View className={styles.item}>
            <Text>商品订单号：HQ13454646545641654</Text>
          </View>
          <View className={styles.item}>
            <Text>商品名称：小米硬件的原理讲解与操作实战大师班班班班啥叫啥也一样</Text>
          </View>
          <View className={styles.item}>
            <Text>实付行家币：199币</Text>
          </View>
          <View className={styles.item}>
            <Text>支付方式：余额支付</Text>
          </View>
          <View className={styles.item}>
            <Text>购买时间：2019-12-31 12:12:12</Text>
          </View>
        </View>
        <View className={styles.buttonWrap}>
          <View className={styles.button}>
            <AtButton type='primary'>确认支付</AtButton>
          </View>
        </View>
      </View>
    )
  }
}