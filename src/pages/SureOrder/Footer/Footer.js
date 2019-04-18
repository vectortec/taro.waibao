import Taro, { Component } from '@tarojs/taro'
import { View,Text} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './Footer.scss'
export default class carFooter extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View className='footer'>
        <View className='left'></View>
        <View className='right'>
              <View className='total_content'>
                  <View className='count'>
                      <Text>共计0件，总计：<Text className='price'>￥0.00</Text></Text>               
                  </View>
                  <View className='save_price'>
                      <Text>已为您节省：￥0.00</Text>               
                  </View>           
              </View>
              <AtButton type='primary'>去结算</AtButton>
        </View>
      </View>
    )
  }
}
