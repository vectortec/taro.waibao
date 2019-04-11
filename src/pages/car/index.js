import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Loading from '@/components/loading'
import styles from './index.module.scss'
import CarList from './carList/CarList'
import CarFooter from './carFooter/carFooter'
import { AtNavBar } from 'taro-ui'


class Car extends Component {
  constructor(props){
    super(props);
      this.state={
        loading: true,
        allChecked:false,//底部全选,
        DataLength:10
    }
  }
  config = {
    navigationBarTitleText: 'Car'
  }
  componentDidMount() {
    let timer = setTimeout(() => {
      this.setState({loading: false})
      clearTimeout(timer)
    }, 1000)
    //这里获取数据
  }
  selectAll(){
    let {allChecked}=this.state
    this.setState({allChecked:!allChecked})
  }
  onChangeState = (stateName) => {
    this.setState({allChecked:stateName.length===this.state.DataLength})
  }
  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <View className={styles.car}>
         {/* -------------------头部 ---------------*/}
          <View className={styles.header}>
            <AtNavBar
              onClickLeftIcon={this.handleClick}
              color='#000'
              title='购物车'
              leftIconType='chevron-left'
            />
          </View>         
          {/*--------------- 购物车内容--------------------- */}
          <View className={styles.body}>
            <CarList 
              DataLength={this.state.DataLength}
              onClicked={this.onChangeState}             
            />
          </View>
           {/*--------------- 购物车底部--------------------- */}
           <View className={styles.foot}> 
              <CarFooter allChecked={this.state.allChecked} change={()=>{this.selectAll()}} />
           </View>
      </View>
    )
  }
}

export default Car
