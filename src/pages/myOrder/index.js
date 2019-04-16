import Taro, { Component } from '@tarojs/taro'
import { View,Text} from '@tarojs/components'
import Loading from '@/components/loading'
// import { AtTabs, AtTabsPane } from 'taro-ui'
import All from './All/All'
import WaitPay from './WaitPay/WaitPay'
import AlreadyPay from './AlreadyPay/AlreadyPay'
import Complete from './Complete/Complete'
import Close from './Close/Close'
import NullCar from './NullCar/NullCar'
import styles from './index.module.scss'

class MyOrder extends Component {
  constructor(){
    super()
    this.state={
      loading: true,
      list:[
        {title:'全部',num:12},
        {title:'待支付',num:3},
        {title:'已支付',num:0},
        {title:'交易完成',num:0},
        {title:'交易关闭',num:0},
      ],
      current: 0, 
    }
  }
  config = {
    navigationBarTitleText: 'MyOrder'
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  // 慎用
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount() {
    let timer = setTimeout(()=> {
      this.setState({loading: false})
      clearTimeout(timer)
    }, 1000)
  }
  render () {
    let {list,current}=this.state
    if (this.state.loading) {
      return <Loading />
    }
    let ListComponent=null
    if(current===0){
      ListComponent=<All />
    }
    if(current===1){
      ListComponent=<WaitPay />//待支付

    }
    if(current===2){
      // ListComponent=<AlreadyPay />
      ListComponent=<NullCar />
    }
    if(current===3){
      ListComponent=<Complete />
    }
    if(current===4){
      ListComponent=<Close />
    }
  
    return (
      <View className={styles.MyOrder}>
        <View className={styles.head}>
          {
            list.map((item,index)=>{
              return  <View key={index} className={styles.list +' ' +(index===current?styles.active:'')}  onClick={()=>this.handleClick(index)}>
                {item.title}
                {
                  item.num!=0||item.num!=''?
                  <Text className={styles.num}>
                  {item.num}
                  </Text>:null
                }
                
              </View>
            })
          }
          </View>
        <View className={styles.body}>
          {
            ListComponent
          }
        </View>
      </View>
    )
  }
}

export default MyOrder
