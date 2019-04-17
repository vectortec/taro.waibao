import Taro, { Component } from '@tarojs/taro'
import { View,Text} from '@tarojs/components'
import OrderList from '../SureOrder/SureOrderList/SureOrderList'
import styles from './index.module.scss'
import { AtNavBar} from 'taro-ui'
export default class OrderDetail extends Component {
    constructor(props){
        super(props)
    }
  handleClick(){
      
  }  
  render() {
    return (
      <View className={styles.OrderDetail}>
        {/* 头部 */}
        <View className={styles.header}>
            <AtNavBar
              onClickLeftIcon={this.handleClick}
              color='#000'
              title='订单详情'
              leftIconType='chevron-left'
            />
        </View>
        <View className={styles.body}>
            <View className={styles.head}>
                <View className={styles.left}>
                    <Text></Text>
                    <Text>等待支付</Text>
                </View>
                <View className={styles.right}>
                    <Text>距离超时还有</Text>
                    <Text className={styles.time}>02:12:12</Text>
                </View>
            </View>
            <View className={styles.content}>
                <OrderList />
                <View className={styles.detail}>
                    <Text className={styles.price_save}></Text>
                    <Text className={styles.real_pay}>共1件商品，实付：<Text className={styles.price}>98.00</Text>币</Text>
                </View>
            </View> 
            <View className={styles.type}>
                <View className={styles.style}>支付方式：余额支付</View>
                <View className={styles.OrderList}>
                    <View className={styles.left}>
                        <View>订单编号：201904022222</View>
                        <View>2019-03-22 <Text>12:12:12</Text></View>
                    </View>
                    <View className={styles.right}>
                        <Text>复制</Text>
                    </View>
                </View>
            </View>
            <View className={styles.kefu}>
                <Text></Text>咨询客服
            </View>  
        </View>
      </View>
    )
  }
}
