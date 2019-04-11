import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import CheckBox from 'components/check-box'
import { AtButton } from 'taro-ui'
import styles from './index.module.scss'

export default class SubmitOrder extends Component {

  static externalClasses = ['submit-order']

  state = {
    payType: 'wx'
  }

  changePayType = (item) => {
    this.setState({payType: item.id})
  }

  render () {

    const optionList = [
      {
        icon: 'iconweixinzhifu1',
        text: '微信支付',
        id: 'wx',
        color: '#1BC764'
      },
      {
        icon: 'iconzhifubaozhifu',
        text: '支付宝支付',
        id: 'zfb',
        color: '#56ADFF'
      }
    ]

    return (
      <View className={`gray-background ${styles.submitOrder}`}>
        <View className={styles.order}>
          <Text>订单编号：{`HQ201936637237253257`}</Text>
        </View>
        <View className={styles.payOption}>
          <View className={styles.payType}>
            <Text>支付方式</Text>
          </View>
          <CheckBox checkClick={this.changePayType} defaultValue={this.state.payType} optionList={optionList} />
        </View>
        <View className={styles.submitWrap}>
          <View className={styles.submit}>
            <AtButton type='primary'>确认支付</AtButton>
          </View>
          <View className={styles.tips}>
            <Text className={styles.tipsText}>提交订单则标识您同意</Text>
            <Text className={styles.tipsAgreement}>《行家服务协议》</Text>
          </View>
        </View>
        <View className={styles.customer}>
          <Text className={styles.customerText}>
            支付遇到问题？点击
            <Text className={styles.customerLink}>联系客服</Text>
            获得
          </Text>
        </View>
      </View>
    )
  }
}