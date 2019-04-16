import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
// import {getDemoList} from 'api/demo'
import Loading from '@/components/loading'

import styles from './index.module.scss'
import '../../staticPic/icon.scss'
import qw from './qw.jpg'



@connect(state => state.counter, {add, minus, asyncAdd})
class newsDetails extends Component {
  config = {
    navigationBarTitleText: '行家'
  }

  state = {
    loading: true,
  }
  goDetails() { // 跳转
    Taro.navigateTo({
      url: '/pages/personalCenter/newsInform/newsDetails/checktxt'
    })
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

  defaultProps = {
    mark: ""
}
  
goBackClick() {
  Taro.navigateBack({ delta: 1 })
  console.log(1111)
}


  render () {
    if (this.state.loading) {
      return <Loading />
    }


    return (
      <View className={styles.details}>
         <View className={styles.title}><Text className='iconfont icon-left' style={{ position: 'absolute', left: '21px' }} onClick={this.goBackClick.bind(this)}></Text>消息详情</View>
         <Image src={qw} className={styles.img} />
         <View className={styles.div}>
          <View className={styles.newsInfrom}>新的考试通知</View>
          <View className={styles.timer}> <Text className='iconfont icon-shijian' style={{fontSize:'15px',marginRight:'5px'}}></Text>2017.02.02 11:30</View>
          <View className={styles.text}>啊十大高手接电话俺还是个大好时光的哈干啥干啥哈根杀啊十大高手接电话俺还是个大好时光的哈干啥干啥哈根杀手哈桑个大好时光的痕迹就好噶似的韩国撒谎手哈桑个大好时光的痕迹就好噶似的韩国撒谎</View>
          <View onClick={this.goDetails.bind(this)} className={styles.txt}><Text className='iconfont icon-weibiaoti--' style={{fontSize:'15px',marginRight:'5px'}}></Text>查看附件</View>
         </View>
      </View>
    )
  }
}

export default newsDetails
