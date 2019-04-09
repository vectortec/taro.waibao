import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Loading from '@/components/loading'
import styles from './index.module.scss'
import CarList from './carList/CarList'
import { AtNavBar } from 'taro-ui'


class Car extends Component {
  constructor(props){
    super(props);
      this.state={
      scoreList:[
          {id:1,title:"我是标题1"},
          {id:2,title:"我是标题2"},
          {id:3,title:"我是标题3"}
      ],
      loading: true
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
  }
  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <View className={styles.car}>
         {/* -------------------头部 ---------------*/}
          <AtNavBar
            onClickLeftIcon={this.handleClick}
            color='#000'
            title='购物车'
            leftIconType='chevron-left'
          />
          {/*--------------- 积分抵扣--------------------- */}
          <CarList 
            scoreList={this.state.scoreList}
          />
      </View>
    )
  }
}

export default Car
