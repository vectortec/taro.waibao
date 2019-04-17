import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,Button} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './NullCar.scss'

export default class NullCar extends Component {
  render() {
    return (
      <View className='NullCar'>
        <Image className='img' src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/empty-shopcar.png' /> 
        <View className='txt'>
            很抱歉，占时没有该状态的订单，<br/>
            赶紧去选课吧
        </View>
        <AtButton type='primary'>前往首页选课</AtButton>
      </View>
    )
  }
}

