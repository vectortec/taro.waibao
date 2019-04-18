import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import {getDemoList} from 'api/demo'
import Loading from '@/components/loading'

import styles from './checktxt.module.scss'
import '../../staticPic/icon.scss'



@connect(state => state.counter, {add, minus, asyncAdd})
class Checktxt extends Component {

  config = {
    navigationBarTitleText: '行家'
  }

  state = {
    loading: true,
    list: [1, 2, 3, 4]
  }
  goBackClick() {
    Taro.navigateBack({ delta: 1 })
  }
  // 慎用
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    console.log(Taro.getEnv())
    console.log(Taro.ENV_TYPE)
    let timer = setTimeout(_ => {
      this.setState({loading: false})
      clearTimeout(timer)
    }, 1000)
  }

  // 获取list
  getList () {
    // const res = await getDemoList({})
    // // or
    getDemoList.then(res => {
      let {code, data} = res 
    })
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }


    return (
      <View className={styles.checktxt}>
        <View className={styles.title}><Text className='iconfont icon-left' style={{ position: 'absolute', left: '21px' }} onClick={this.goBackClick.bind(this)}></Text>查看附件</View>
        {
          this.state.list.map((item ,index) => {
            return <View key={item}>
              {(index%2) === 0 && <View className={styles.txt} ><Text className='iconfont icon-weibiaoti--' style={{fontSize:'15px',marginRight:'18px'}}></Text>附件一  海报精修素材</View>}
              {(index%2) === 1 && <View className={styles.txt} style={{background:'#FFF5F5F5'}}><Text className='iconfont icon-weibiaoti--' style={{fontSize:'15px',marginRight:'18px'}}></Text>附件一  海报精修素材</View>}
            </View>
            
          })
        }
       
      </View>
    )
  }
}

export default Checktxt
