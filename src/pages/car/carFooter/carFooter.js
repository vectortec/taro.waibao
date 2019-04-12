import Taro, { Component } from '@tarojs/taro'
import { View,Checkbox,Label,Text} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './carFooter.scss'
export default class carFooter extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View className='footer'>
        <View className='left'>
            <Label className='checkbox-list__label'>
                <Checkbox className='checkbox' checked={this.props.allChecked} onChange={this.props.change}>删除</Checkbox>          
            </Label>
        </View>
       <View className='right'>
            <View className='total_content'>
                <View className='count'>
                    <Text>共计0件，总计：<Text className='price'>￥0.00</Text></Text>               
                </View>
                <View className='save_price'>
                    <Text>已为您节省：￥0.00</Text>               
                </View>           
            </View>
            <AtButton type='primary'>确认兑换</AtButton>
       </View>
      </View>
    )
  }
}
