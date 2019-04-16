import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import OrderList from '../../SureOrder/SureOrderList/SureOrderList'
// import DialogBox from '../DialogBox/DialogBox'
import { AtModal,AtFloatLayout } from "taro-ui"
import './All.scss'
export default class All extends Component {
    constructor(props){
        super(props)
        this.state={
            DialogShow:false,
            downDialog:false,
            content:''
        }
    }
    request(content){
        this.setState({DialogShow:true,content})
    }
   
    handleCancel(){
        this.setState({DialogShow:false})
    }
    handleConfirm(){
        alert("确认")
    }
    handleClose(){
        
    }
    goBuy(){
        this.setState({downDialog:true})
    }
    handleCloseDown(){
        this.setState({downDialog:false})
    }
  render() {
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
                    <Text className='request' onClick={()=>this.request('是否确认取消订单？')}>取消订单</Text>
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
          </View>
          {/*交易关闭  */}
          <View className='list'>
            <View className='head'>
                <View className='time'>
                    <Text>2018-10-10</Text>
                    <Text className='detailTime'>19:28:22</Text>
                </View>
                <View>
                    交易关闭
                </View>
            </View>
            <OrderList /> 
            
            <View className='detail'>
                <View className='foot'>
                    <Text className='price_save'></Text>
                    <Text className='real_pay'>共2件商品, 实付：￥<Text className='price'>998.00</Text></Text>     
                </View>   
                <View className='statusEvent'>
                    <Text className='request' onClick={()=>this.request('是否确认删除订单记录？')}>删除</Text>
                    <Text className='goPayFor'onClick={()=>this.goBuy()}>重新购买</Text>
                </View>         
            </View>         
          </View>
           {/* ----------弹框------- */}
           <AtModal
            isOpened={this.state.DialogShow}
            title='标题'
            cancelText='取消'
            confirmText='确认'
            onClose={this.handleClose} 
            onCancel={()=>this.handleCancel()}
            onConfirm={()=>this.handleConfirm()}
            content={this.state.content}
            />
            {/* 底部抽屉 */}
            <AtFloatLayout  isOpened={this.state.downDialog} onClose={this.handleCloseDown.bind(this)}>
                <View className='title'>确认支付</View>
                <View className='content'>
                    <View className='price'>
                        <Text>实付金额:</Text>
                        <Text><Text className='real_price'>199.00</Text>行家币</Text>
                    </View>
                    <View className='price'>
                        <Text>当前余额:</Text>
                        <Text><Text className='real_price'>2000.00</Text>行家币</Text>
                    </View>
                    <Button className='btns'>支付</Button>
                </View>
            </AtFloatLayout>

      </View>
    )
  }
}
