import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,Checkbox} from '@tarojs/components'
import './SureOrderList.scss'
export default class CarComponent extends Component {
    constructor(props){
        super(props)
    }
  render() {

    return (
            <View className='list_car'>
                <View className='car'>
                    <View className='list'>
                        <Image style={{borderRadius:'4px'}} src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/jifen.png' />
                    </View>
                    <View className='content'> 
                        <View className='title'>
                            <Text>
                                神秘博士的插画设计，包豪斯100周年纪念日，快来看本期...
                            </Text>
                        </View>
                        <View className='activeName'>
                            <Text className='active'>积分</Text>
                            <Text className='price'>￥0.00</Text>
                            <Text className='real_price'>￥199.00</Text>
                        </View>    
                    </View>
                </View>
                <View className='detail'>
                    <Text className='price_save'>已抵销20000积分，为您节省￥1990.0</Text>
                    <Text className='real_pay'>实付：￥<Text className='price'>998.00</Text></Text>
                </View>
            </View>
         )
    }
}
