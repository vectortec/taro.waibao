import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image} from '@tarojs/components'
import { AtSwipeAction } from "taro-ui"
import './SureOrderList.scss'
export default class SureOrderList extends Component {
    constructor(props){
        super(props)
        this.state={
            txt:'神秘博士的插画设计，包豪斯100周年纪念日，快来看本期 神秘博士的插画设计'    
        }
    }
    handleOpened(){
        alert("确定")
    }
    handleClosed(){
        alert("关闭")
    }
    TextOverHidden(txt,num){
        return txt.length > num ? txt.slice(0, num) + '...' : txt ;
    }
  render() {

    return (
                <AtSwipeAction
                    options={[
                        {
                            text: '删除',
                            style: {
                            backgroundColor: '#ff7847'
                            }
                        }
                        ]}
                        onClick={this.handleOpened.bind(this)}
                    >
                <View className='list_car'>
                    <View className='car'>
                        <View className='list'>
                            <Image style={{borderRadius:'4px'}} src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/jifen.png' />
                        </View>
                        <View className='content'> 
                            <View className='title'>
                                <Text style={{ whiteSpace: 'normal'}}>
                                    {this.TextOverHidden(this.state.txt,22)}
                                </Text>
                            </View>
                            <View className='activeName'>
                                <Text className='active'>积分</Text>
                                <Text className='price'>￥0.00</Text>
                                <Text className='real_price'>￥199.00</Text>
                            </View>    
                        </View>
                    </View>
                </View>
            </AtSwipeAction>
         )
    }
}
