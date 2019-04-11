import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import HeadBar from 'components/head-bar'
import SubmitOrder from './submit-order'
import PayResultWait from './pay-result-wait'
import styles from './index.module.scss'

export default class Payment extends Component {

  render () {

    const RenderComponent = PayResultWait

    return (
      <View className={`${styles.payWrap}`}>
        <HeadBar />
        {/* <SubmitOrder /> */}
        {RenderComponent}
      </View>
    )
  }
}