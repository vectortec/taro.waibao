import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import HeadBar from 'components/head-bar'
import SubmitOrder from './component/submit-order'
import styles from './index.module.scss'

export default class Payment extends Component {

  render () {

    return (
      <View className={`${styles.payWrap} gray-background`}>
        <HeadBar />
        <SubmitOrder />
      </View>
    )
  }
}