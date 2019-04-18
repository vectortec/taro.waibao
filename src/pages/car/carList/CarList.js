import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image,Checkbox} from '@tarojs/components'
import CarComponent from '../carComponent/carComponent'
import CarFooter from '../carFooter/carFooter'
import './CarList.scss'
export default class CarList extends Component {
    constructor(props){
        super(props)
        this.state={
            checkboxList:{},
            allChecked:false,//底部全选,
            dataLength:10,
            scoreList:[//积分抵扣
                {id: 1, title: 'Hello World', content: '小米硬件的原理讲解与操作实战大师班',price:33,score:1000},
                {id: 2, title: 'Installation', content: 'You can',price:44,score:1000}
              ],
              limitSecond:[//限时秒杀
                {id: 3, title: 'Hello World', content: '小米硬件的原理讲解与操作实战大师班2',price:33,score:1000},
                {id: 4, title: 'Installation', content: 'You can2',price:44,score:1000}
              ],
              limitBuy:[//限时抢购
                {id: 5, title: 'Hello World', content: '小米硬件的原理讲解与操作实战大师班4',price:33,score:1000},
                {id: 6, title: 'Installation', content: 'You can25',price:44,score:1000}
              ],
              Normal:[//以下课程不享受优惠
                {id: 7, title: 'Hello World', content: '小米硬件的原理讲解与操作实战大师班4',price:33,score:1000},
                {id: 8, title: 'Installation', content: 'You can25',price:44,score:1000}
              ],
              CantBuy:[//以下课程不享受优惠
                {id: 9, title: 'Hello World', content: '小米硬件的原理讲解与操作实战大师班4',price:33,score:1000},
                {id: 10, title: 'Installation', content: 'You can25',price:44,score:1000}
              ]        
        }
    }
    selectAllCar(e){//底部全选
        let {scoreList,limitSecond,limitBuy,Normal,CantBuy}=this.state;
       if(e.target.checked){
            this.setState({ checkboxList:{
                    score:scoreList.map(item=>item.id),
                    Second:limitSecond.map(item=>item.id),
                    buy:limitBuy.map(item=>item.id),
                    normal:Normal.map(item=>item.id),
                    cantBuy:CantBuy.map(item=>item.id)
            }})
            this.setState({allChecked:true})
       }else{
        this.setState({ checkboxList:{}})
        this.setState({allChecked:false})
       }
    }
    componentDidMount() {
    }
    handleInputChange(e,id,keys) {//反向选中
        let { checkboxList,dataLength}=this.state;
        if(!Array.isArray(checkboxList[keys])){
            checkboxList[keys]=[]
        }
        if(!checkboxList[keys].includes(id)){
            checkboxList[keys].push(id)
        }
        else{
            checkboxList[keys].splice(checkboxList[keys].indexOf(id),1)
        }
        let array=[],NewArray=[];
        this.setState({checkboxList},()=>{
            for(let key in checkboxList){
               array.push(checkboxList[key])
            }
            array.map(item=>item.map(it=>NewArray.push(it)))
           this.setState({allChecked:NewArray.length===dataLength})
        })
    }
    selectAll(e,keys,data){//分类全选
        let {dataLength, checkboxList}=this.state;
        if(e.target.checked){
            if(!Array.isArray(checkboxList[keys])){//没有这个属性时候增加一个
                checkboxList[keys]=[]
            }
            checkboxList[keys]=data.map(item=>item.id)
        }else{
            checkboxList[keys]=[]; 
        }
        let array=[],NewArray=[];
        this.setState({checkboxList},()=>{
            for(let key in checkboxList){
               array.push(checkboxList[key])
            }
            array.map(item=>item.map(it=>NewArray.push(it)))
            console.log(NewArray.length)
           this.setState({allChecked:NewArray.length===dataLength})
        })
        
    }
  render() {
    let {scoreList,limitSecond,limitBuy,Normal,CantBuy}=this.state;
    console.log('this.state.allChecked', this.state.allChecked)
    return (
       <View className='CarList'>
            {/* ------------积分抵扣------------- */}
            <View className='score'>
                {/* 积分抵扣头部 */}
                <View className='header'>
                    <Checkbox className='checkbox' onChange={(e)=>this.selectAll(e,'score',this.state.scoreList)} checked={(this.state.checkboxList['score']||[]).length===scoreList.length?true:false}></Checkbox>
                    <View className='tag'>
                        <Text>积分抵扣</Text>
                    </View>
                    <View className='require'>可用积分：4000</View>
                </View>
                <View className='list'>
                {
                    scoreList.map((item,index)=>{
                        return  <CarComponent checkboxList={this.state.checkboxList['score']} item={item} key={item.id} change={(e)=>this.handleInputChange(e,item.id,'score')} />
                    })
                }                  
                </View>              
            </View>
             {/* -----------限时秒杀------------- */}
            <View className='limit_second'>
                <View className='header'>
                    <Checkbox className='checkbox' onChange={(e)=>this.selectAll(e,'Second',this.state.limitSecond)} checked={(this.state.checkboxList['Second']||[]).length===limitSecond.length?true:false}></Checkbox>
                    <View className='tag'>
                        <Text>限时秒杀</Text>
                    </View>
                </View>               
                <View className='list'>
                {
                    limitSecond.map((item,index)=>{
                        return  <CarComponent item={item} key={item.id} checkboxList={this.state.checkboxList['Second']} change={(e)=>this.handleInputChange(e,item.id,'Second')} />
                    })
                }                  
                </View> 
            </View>
             {/* -----------限时抢购------------- */}
             <View className='limit_second'>
                <View className='header'>
                    <Checkbox className='checkbox' onChange={(e)=>this.selectAll(e,'buy',this.state.limitBuy)} checked={(this.state.checkboxList['buy']||[]).length===limitBuy.length?true:false}></Checkbox>
                    <View className='tag'>
                        <Text>限时抢购</Text>
                    </View>
                </View>
                <View className='list'>
                {
                    limitBuy.map((item,index)=>{
                        return  <CarComponent item={item} key={item.id} checkboxList={this.state.checkboxList['buy']} change={(e)=>this.handleInputChange(e,item.id,'buy')} />
                    })
                }                  
                </View> 
            </View>
            {/* -----------以下课程不享受优惠------------- */}
            <View className='limit_second'>
                <View className='header'>
                    <Checkbox className='checkbox' onChange={(e)=>this.selectAll(e,'normal',this.state.Normal)} checked={(this.state.checkboxList['normal']||[]).length===Normal.length?true:false}></Checkbox>
                    <View className='Normal'>
                        <Text>以下课程不享受优惠</Text>
                    </View>
                </View>
                <View className='list'>
                {
                    Normal.map((item,index)=>{
                        return  <CarComponent item={item} key={item.id} checkboxList={this.state.checkboxList['normal']} change={(e)=>this.handleInputChange(e,item.id,'normal')} />
                    })
                }                  
                </View> 
            </View>
             {/* -----------以下课程不能购买------------- */}
             <View className='cantBuy'>
                <View className='header'>
                    <Checkbox className='checkbox' onChange={(e)=>this.selectAll(e,'cantBuy',this.state.CantBuy)} checked={(this.state.checkboxList['cantBuy']||[]).length===Normal.length?true:false}></Checkbox>
                    <View className='Normal noSale'>
                        <Text>以下课程不能购买</Text>
                    </View>
                </View>
                <View className='list'>
                {
                    CantBuy.map((item,index)=>{
                        return  <CarComponent item={item} key={item.id} checkboxList={this.state.checkboxList['cantBuy']} change={(e)=>this.handleInputChange(e,item.id,'cantBuy')} />
                    })
                }                  
                </View> 
            </View>
            <View className='foot'> 
                <CarFooter allChecked={this.state.allChecked} change={(e)=>{this.selectAllCar(e)}} />   
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