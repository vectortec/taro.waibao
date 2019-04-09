import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image} from '@tarojs/components'
import './CarList.scss'
export default class CarList extends Component {
    constructor(){
        super()
    }
  render() {
    return (
       <View className='CarList'>
            {/* 头部 */}
            <View className='header'>
                <View className='tag'>
                     <Text>积分抵扣</Text>
                </View>
                <View className='require'>可用积分：4000</View>
            </View>
            {/* 购物车的内容 */}
            <View className='list'>
                <View className='selectBtn'>
                    <Text>删除</Text>
                </View>
                <View className='img'>    
                    <Image mode='widthFix' src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/jifen.png' />
                </View>
                <View className='title'>
                    <View className='titleName'>小米硬件的原理讲解与操作实战大师班</View>
                    <View className='date'>2012-02-02 失效</View>
                    <View className='price_score'>
                        <Text>￥199.00</Text>
                        <Text className='need_score'>所需积分：2000</Text>
                    </View>
                </View>
                <View className='selectBtn'> 
                    <Text>删除</Text>
                </View>
            </View>

            <View className='list'>
                <View className='selectBtn'>
                    <Text>删除</Text>
                </View>
                <View className='img'>    
                    <Image mode='widthFix' src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/jifen.png' />
                </View>
                <View className='title'>
                    <View className='titleName'>小米硬件的原理讲解与操作实战大师班</View>
                    <View className='date'>2012-02-02 失效</View>
                    <View className='price_score'>
                        <Text>￥199.00</Text>
                        <Text className='need_score'>所需积分：2000</Text>
                    </View>
                </View>
                <View className='selectBtn'> 
                    <Text>删除</Text>
                </View>
            </View>
            <View className='list'>
                <View className='selectBtn'>
                    <Text>删除</Text>
                </View>
                <View className='img'>    
                    <Image mode='widthFix' src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/jifen.png' />
                </View>
                <View className='title'>
                    <View className='titleName'>小米硬件的原理讲解与操作实战大师班</View>
                    <View className='date'>2012-02-02 失效</View>
                    <View className='price_score'>
                        <Text>￥199.00</Text>
                        <Text className='need_score'>所需积分：2000</Text>
                    </View>
                </View>
                <View className='selectBtn'> 
                    <Text>删除</Text>
                </View>
            </View>
       </View>
    )
  }
}

