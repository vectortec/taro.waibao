import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './DialogBox.scss'
export default class DialogBox extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View className='Dialog'>
         <View className='box'>
            <View className='title'>提示</View>
            <View className='content'>
                {this.props.content}
            </View>
            <View className='btnList'>
                <View className='back' onClick={this.props.quxiao}>{this.props.leftMenu}</View>
                <View className='sure' onClick={this.props.sure}>确定</View>
            </View>
         </View>
         <View className='cover'></View>
      </View>
    )
  }
}
