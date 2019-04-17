import Taro, { Component } from '@tarojs/taro'
import { View,Text} from '@tarojs/components'
import SureOrderList from './SureOrderList/SureOrderList'
import { AtNavBar} from 'taro-ui'
import styles from './index.module.scss'
import Footer from './Footer/Footer'
import Dialog from './Dialog/Dialog'
export default class SureOrder extends Component {
  constructor(props){
    super(props)
  }
  sure(){
    alert('我是确定')
  }
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
                <View className={styles.detail}>
                    <Text className={styles.price_save}>已抵销20000积分，为您节省￥1990.0</Text>
                    <Text className={styles.real_pay}>实付：￥<Text className='price'>998.00</Text></Text>
                </View>
            </View>
            <View className={styles.list}>
                <SureOrderList />
                <SureOrderList />
                <View className={styles.detail}>
                    <Text className={styles.price_save}>已抵销20000积分，为您节省￥1990.0</Text>
                    <Text className={styles.real_pay}>实付：￥<Text className='price'>998.00</Text></Text>
                </View>
            </View>
          </View>
          {/* footer */}
          <View className={styles.footer}>
            <Footer />
          </View>
          <View>
              <Dialog sure={()=>{this.sure()}} />
          </View>
      </View>
    )
  }
}
