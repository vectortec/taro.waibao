import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SureOrderList from './SureOrderList/SureOrderList'
import { AtNavBar} from 'taro-ui'
import styles from './index.module.scss'
import Footer from './Footer/Footer'
import Dialog from './Dialog/Dialog'
export default class SureOrder extends Component {
  render() {
    return (
      <View className={styles.sureOrder}>
            {/* 头部 */}
          <View className={styles.header}>
            <AtNavBar
              onClickLeftIcon={this.handleClick}
              color='#000'
              title='确认订单'
              leftIconType='chevron-left'
            />
          </View>   
          {/* body */}
          <View className={styles.body}>
            <View className={styles.list}>
                <SureOrderList />
                <SureOrderList />
            </View>
          </View>
          {/* footer */}
          <View className={styles.footer}>
            <Footer />
          </View>
          {/* <View>
              <Dialog />
          </View> */}
      </View>
    )
  }
}
