import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import OrderList from '../../SureOrder/SureOrderList/SureOrderList'
import DialogBox from '../DialogBox/DialogBox'
import { AtFloatLayout } from "taro-ui"
import './All.scss'
export default class All extends Component {
    constructor(props){
        super(props)
        this.state={
            DialogShow:false,
        }
    }
    handleClose(){
        
    }
    request(){
        this.setState({DialogShow:true})
    }
    sureEvent(){
        alert('我是确定')
    }
    quxiao(){
        this.setState({DialogShow:false})
    }
  render() {
      let dalog=null
      let {DialogShow}=this.state
      if(DialogShow){
        dalog=<DialogBox  content='是否确认取消订单?'  leftMenu='取消'  sure={()=>this.sureEvent()} quxiao={()=>this.quxiao()} />
      }
    return (
      <View className='All'>        
          <View className='list'>
           {/* 待支付 */}
             <View className='head'>
                <View className='time'>
                    <Text>2018-10-10</Text>
                    <Text className='detailTime'>19:28:22</Text>
                </View>
                <View className='status'>
                    待支付
                </View>
             </View>
            <OrderList /> 
            <OrderList /> 
            <View className='detail'>
                <View className='foot'>
                    <Text className='price_save'></Text>
                    <Text className='real_pay'>共2件商品, 实付：￥<Text className='price'>998.00</Text></Text>     
                </View>
                {/* 待支付----------取消订单  去支付 或者    交易关闭-------- 删除 从新购买*/}
                <View className='statusEvent'>
                    <Text className='request' onClick={()=>this.request()}>取消订单</Text>
                    <Text className='goPayFor'>去支付</Text>
                </View>   
            </View>
          </View>
          <View className='list'>
            <View className='head'>
                <View className='time'>
                    <Text>2018-10-10</Text>
                    <Text className='detailTime'>19:28:22</Text>
                </View>
                <View>
                    已支付
                </View>
            </View>
            <OrderList /> 
            <View className='detail'>
                <View className='foot'>
                    <Text className='price_save'></Text>
                    <Text className='real_pay'>共2件商品, 实付：￥<Text className='price'>998.00</Text></Text>     
                </View>           
            </View>
            {/* ----------弹框------- */}
            {
                dalog
            }
            {/* <AtFloatLayout isOpened title="这是个标题" onClose={this.handleClose.bind(this)}>
                这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
                随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
            </AtFloatLayout> */}
          </View>
      </View>
    )
  }
}
