import Taro, { Component } from '@tarojs/taro'
import { View,Image} from '@tarojs/components'
import CarFooter from '../carFooter/carFooter'
import './nullCar.scss'
export default class nullCar extends Component {
  render() {
    return (
      <View className='nullCar'>
        <View className='car_img'>
             <Image className='img' src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/empty-shopcar.png' />
        </View>
        <View className='Myname'>叫我小清新:</View>
        <View className='txt'>您的购物车中占无商品,</View>
        <View className='txt'>去首页选择并加入购物车可同时购买多个商品。</View>
        <View className='foot'> 
            <CarFooter />   
        </View>
      </View>
    )
  }
}
