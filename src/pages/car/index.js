import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Loading from '@/components/loading'
import styles from './index.module.scss'
import Score from './carList/score'
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
          {/*--------------- 积分抵扣--------------------- */}
          这里是积分抵扣
          <Score 
            scoreList={this.state.scoreList}
          />


      </View>
    )
  }
}

export default Car
