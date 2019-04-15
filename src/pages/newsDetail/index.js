/*
 * @Author: 蔡江旭
 * @Description: 资讯详情页
 * @props: 
 * @event: 
 * @LastEditors: 蔡江旭
 * @Date: 2019-04-02 17:22:27
 * @LastEditTime: 2019-04-15 09:50:53
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
// import { connect } from '@tarojs/redux'
// import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'

import styles from './index.module.scss'


// @connect(state => state.counter, {add, minus, asyncAdd})
class NewsDetail extends Component {

  config = {
    navigationBarTitleText: 'NewsDetail'
  }

  state = {
    loading: false,
    shareIconList: [{
      icon: 'wechat',
    }, {
      icon: 'qq',
    }, {
      icon: 'wefriend',
    }, {
      icon: 'weibo',
    }]
  }

  // 慎用
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    console.log(Taro.getEnv())
    console.log(Taro.ENV_TYPE)
  }
  render () {
    const { shareIconList } = this.state;
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.newsDetail}>
        <View className={styles.title}>写给产品经理们|团队的重要性，会让改变世界的路上更加有趣</View>
        <View className={styles.newsInfo}>
          <Text className={styles.date}>11.14</Text>
          <Text className={styles.time}>16:24</Text>
          <Text className={styles.viewNum}>
            <Text
              className={classNames(styles.icon, 'iconfont', 'iconchakankanziliao')}
            ></Text>
            123
          </Text>
        </View>
        <Text>CourseDetail page</Text>
        {/* 点赞 */}
        <View className={styles.likeBox}>
          <View className={styles.likeBtn}>
            <Text>点赞</Text>
          </View>
        </View>
        {/* 分享 */}
        <View className={styles.shareBox}>
          {/* 标题 */}
          <View className={styles.shareTitle}>
            <View className={styles.titleTextBox}>
              <Text className={styles.titleText}>分享至</Text>
            </View>
          </View>
          {/* icon */}
          <View className={styles.shareList}>
            {shareIconList.map((ele, index) => (
              <View className={classNames(styles.shareBtn, ele.icon)} key={index}>{ele.icon}</View>
            ))}
          </View>
        </View>
      </View>
    )
  }
}

export default NewsDetail
