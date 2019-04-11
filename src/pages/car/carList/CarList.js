import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,Checkbox} from '@tarojs/components'
import CarComponent from '../carComponent/carComponent'
import './CarList.scss'
export default class CarList extends Component {
    constructor(){
        super()
        this.state={
            checkboxList:[],
            allselect:false,
            scoreList:[//积分抵扣
                {id: 1, title: 'Hello World', content: '小米硬件的原理讲解与操作实战大师班',price:33,score:1000},
                {id: 2, title: 'Installation', content: 'You can',price:44,score:1000}
              ],
              limitSecond:[//积分抵扣
                {id: 3, title: 'Hello World', content: '小米硬件的原理讲解与操作实战大师班2',price:33,score:1000},
                {id: 4, title: 'Installation', content: 'You can2',price:44,score:1000}
              ],
        }
    }
    handleInputChange(e,id) {
        let {checkboxList,scoreList,allselect}=this.state;
        if(!checkboxList.includes(id)){
            checkboxList.push(id)
        }
        else{
            checkboxList.splice(checkboxList.indexOf(id),1)
        }
        allselect=checkboxList.length===scoreList.length?true:false
        this.setState({checkboxList,allselect})
    }
  render() {
    let {allselect,scoreList,limitSecond}=this.state;
    return (
       <View className='CarList'>
            {/* ------------积分抵扣------------- */}
            <View className='score'>
                {/* 积分抵扣头部 */}
                <View className='header'>
                    <Checkbox className='checkbox' checked={allselect}></Checkbox>
                    <View className='tag'>
                        <Text>积分抵扣</Text>
                    </View>
                    <View className='require'>可用积分：4000</View>
                </View>
                <View className='list'>
                {
                    scoreList.map((item,index)=>{
                        return  <CarComponent checkboxList={this.state.checkboxList} key={item.id} ids={item.id} content={item.content} price={item.price} score={item.score} change={(e)=>this.handleInputChange(e,item.id)} />
                    })
                }                  
                </View>              
            </View>
             {/* -----------限时秒杀------------- */}
            <View className='limit_second'>
                <View className='header'>
                    <Checkbox className='checkbox'></Checkbox>
                    <View className='tag'>
                        <Text>限时秒杀</Text>
                    </View>
                </View>               
                <View className='list'>
                {
                    limitSecond.map((item,index)=>{
                        return  <CarComponent key={item.id} content={item.content} price={item.price} score={item.score} change={(e)=>this.handleInputChange(e,item.id)} />
                    })
                }                  
                </View> 
            </View>
             {/* -----------限时抢购------------- */}
             <View className='limit_second'>
                <View className='header'>
                    <Checkbox className='checkbox'></Checkbox>
                    <View className='tag'>
                        <Text>限时抢购</Text>
                    </View>
                </View>
                <View className='list'>
                {
                    limitSecond.map((item,index)=>{
                        return  <CarComponent key={item.id} content={item.content} price={item.price} score={item.score} change={(e)=>this.handleInputChange(e,item.id)} />
                    })
                }                  
                </View> 
            </View>
            {/* -----------以下课程不享受优惠------------- */}
            <View className='limit_second'>
                <View className='header'>
                    <Checkbox className='checkbox'></Checkbox>
                    <View className='Normal'>
                        <Text>以下课程不享受优惠</Text>
                    </View>
                </View>
                <View className='list'>
                {
                    limitSecond.map((item,index)=>{
                        return  <CarComponent key={item.id} content={item.content} price={item.price} score={item.score} change={(e)=>this.handleInputChange(e,item.id)} />
                    })
                }                  
                </View> 
            </View>
             {/* -----------以下课程不能购买------------- */}
             <View className='cantBuy'>
                <View className='header'>
                    <Checkbox className='checkbox'></Checkbox>
                    <View className='Normal noSale'>
                        <Text>以下课程不享受优惠</Text>
                    </View>
                </View>
                <View className='list'>
                {
                    limitSecond.map((item,index)=>{
                        return  <CarComponent key={item.id} content={item.content} price={item.price} score={item.score} change={(e)=>this.handleInputChange(e,item.id)} />
                    })
                }                  
                </View> 
            </View>
       </View>
    )
  }
}

{/* <View className='list'>
                    <View className='selectBtn'>
                        <Checkbox className='checkbox'></Checkbox>
                    </View>
                    <View className='img'>    
                        <Image mode='widthFix' style={{borderRadius:'4px'}} src='https://hq-expert-online-school.oss-cn-shenzhen.aliyuncs.com/demo_img/jifen.png' />
                    </View>
                    <View className='title'>
                        <View className='titleName noSale'>小米硬件的原理讲解与操作实战大师班</View>
                        <View className='date noSale'>2012-02-02 失效</View>
                        <View className='price_score noSale'>
                            <Text className='noSale'>￥199.00</Text>
                            {/* <Text className='need_score noSale'>所需积分：2000</Text> */}
                //         </View>
                //     </View>
                //     <View className='selectBtn'> 
                //         <View className='delete'>
                //             <Text className='noSale'>删</Text>
                //         </View>
                //     </View>
                // </View> */}