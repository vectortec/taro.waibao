import { add, asyncAdd, minus } from '@/actions/counter';
import Loading from '@/components/loading';
import banner from '@/utils/image/main.jpg';
import { Image, View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Taro, { Component } from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import styles from './index.module.scss';


@connect(state => state.counter, { add, minus, asyncAdd })
class Home extends Component {

  config = {
    navigationBarTitleText: 'Home'
  }

  state = {
    loading: true
  }

  // 慎用
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    let timer = setTimeout(_ => {
      this.setState({ loading: false })
      clearTimeout(timer)
    }, 1000)
  }
  navigateTo (target) {
    Taro.navigateTo({
      url: target
    })
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <View className={styles.home}>
        <Image src={banner} className={styles.banner}></Image>
        <View className={styles.gap}></View>
        <AtButton type='primary' onClick={() => this.navigateTo('/pages/cmcc_party/overcastDetail/index')}>公告</AtButton>
        <View className={styles.gap}></View>
        <View className={styles.gap}></View>
        <AtButton type='primary' onClick={() => this.navigateTo('/pages/cmcc_party/statistics/index')}>积分统计</AtButton>
      </View>
    )
  }
}

export default Home
