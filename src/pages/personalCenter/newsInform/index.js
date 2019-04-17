import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'
import { AtSwipeAction, AtLoadMore } from "taro-ui"

import styles from './index.module.scss'
import '../staticPic/icon.scss'

@connect(state => state.counter, { add, minus, asyncAdd })
class NewsInform extends Component {

  config = {
    navigationBarTitleText: '行家'
  }

  state = {
    loading: true,
    list: [1, 2, 3, 4],
    status: 'more'
  }

  // 慎用
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    console.log(this.state.loading, '加载的状态')

    console.log(Taro.getEnv())
    console.log(Taro.ENV_TYPE)
    let timer = setTimeout(_ => {
      this.setState({ loading: false })
      clearTimeout(timer)
    }, 1000)

    this.pageClick = (e) => { // 请求平台消息的数据
      console.log(e);
    }

    this.courseClick = (e) => { // 请求课程消息的数据
      console.log(e)
    }
  }


  goDetails() { // 跳转
    Taro.navigateTo({
      url: '/pages/personalCenter/newsInform/newsDetails/index'
    })
  }



  loadClick = () => {
    this.setState({
      status: 'loading'
    })
    setTimeout(() => {
      // 没有更多了,后台返回消息到尽头的标示
      this.setState({
        status: 'noMore'
      })
    }, 2000)
    if (this.state.loading) {
      return
    }
    // Taro.showLoading({ title: '加载中' })
    console.log('上拉到底部触发事jian ')
  }
  render() {
    const isLoggedIn = true;  // 控制消息铃铛颜色
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.content}>

        <View className={styles.componentsPage}>
          <View className={styles.button} onClick={this.pageClick.bind(this)}>平台消息<Text className={styles.number}>3</Text></View>
          <View className={styles.button} onClick={this.courseClick.bind(this)}>课程消息<Text className={styles.number}>3</Text></View>
        </View>

        <ScrollView
          scrollY
          scrollWithAnimation
          scrollTop='0'
          style='auto'
          lowerThreshold='20'
          upperThreshold='20'
          onScrollToLower={this.loadClick}
        >
          {
            this.state.list.map(item => {
              return <View key={item}>
                <View className={styles.time}><Text className={styles.line}></Text> <Text style={{ color: '#E1E3E5' }}>/</Text> 2018-10-10  19:28:22更新 <Text style={{ color: '#E1E3E5' }}>/</Text> <Text className={styles.line}></Text></View>
                <AtSwipeAction options={[
                  {
                    className: 'iconfont icon-shanchu',
                    style: {
                      backgroundColor: '#f2f2f2',
                      color: '#999',
                      fontSize: '18px',
                      marginRight: '20px',
                    }
                  }
                ]}>
                  <View className={styles.bottom}>
                    <View  className={styles.news}>
                      <View style={{ position: 'relative' }}>
                        <View className={styles.title}>
                        {isLoggedIn && <Text className='iconfont icon-lingdang-copy' style={{ fontSize: '20px', position: 'relative',color:'#FF5A1F'}}><Text className='iconfont icon-dian-copy' style={{ position: 'absolute', left: '10px', top: '-8px', color: '#FF5A1F' }}></Text></Text>}
                        {!isLoggedIn && <Text className='iconfont icon-lingdang-copy' style={{ fontSize: '20px',color:'#999'}}></Text>}
                        <Text style={{color:'#333'}}>消息息标题最多一消息标题最多一行消息标题最多一行、消息标题最多一行消</Text></View>
                        <Text className='iconfont icon-right' style={{ fontSize: '15px', position: 'absolute', right: '11px', top: '28px' }} onClick={this.goDetails.bind(this)}></Text>
                      </View>
                      <View className={styles.newsContent} style='-webkit-box-orient: vertical;'>消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行</View>
                    </View>
                  </View>
                </AtSwipeAction>
              </View>
            })
          }
          <AtLoadMore onClick={this.loadClick.bind(this)} status={this.state.status} noMoreTextStyle={{
            width: '100%',
            height: '15px',
            lineHeight: '15px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#ccc',
            marginTop: '19px',
            border: 'none'
          }} noMoreText='已无更多消息' moreBtnStyle={{
            width: '100%',
            height: '15px',
            lineHeight: '15px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#ccc',
            marginTop: '19px',
            border: 'none'
          }} />
        </ScrollView>
      </View>
    )
  }
}

export default NewsInform
