import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,Checkbox} from '@tarojs/components'
import './carComponent.scss'


export default class CarComponent extends Component {
    constructor(props){
        super(props)
        console.log(props.checkboxList)
    }
  render() {
    return (
    //   <View className='list'>
            // { 
                // List.map((item,index)=>{
                //     return(
                            <View className='list_car'>
                                <View className='selectBtn'>
                                    <Checkbox className='checkbox'  onChange={this.props.change}></Checkbox>
                                </View>
                                <View className='img'>    
                                    <Image mode='widthFix' style={{borderRadius:'4px'}} src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/jifen.png' />
                                </View>
                                <View className='title'>
                                    <View className='titleName'>{this.props.content}</View>
                                    <View className='date'>2012-02-02 失效</View>
                                    <View className='price_score'>
                                        <Text>￥{this.props.price}</Text>
                                        <Text className='need_score'>所需积分：{this.props.score}</Text>
                                    </View>
                                </View>
                                <View className='selectBtn'> 
                                    <View className='delete'>
                                        <Text>删</Text>
                                    </View>
                                </View>
                        </View>
                    )
                // })
                // }
    //   </View>
    // )
  }
}
