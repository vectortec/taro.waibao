import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import { AtTabs, AtTabsPane, AtSwipeAction, AtButton  } from 'taro-ui'
// import AllImage from './u3523.png'
// import learnImage from '../../images/swiper/0.jpg'
import styles from './index.module.scss'


@connect(state => state.counter, { add, minus, asyncAdd })
class LearningCenter extends Taro.Component {
  constructor(props) {
    super(props)
    this.state = {
      // showMenu: false,
      current: 0,
      collectList: [
        {
          title: 'Vue从入门到精通',
          src: 'http://img1.ph.126.net/SSvFbcJzwGBlqy4xon6FjA==/6608832342050415367.jpg',
          newPrice: '¥199',
          oldPrice: '¥299',
          charge: '收费',
          isOpened: false
        },
        {
          title: 'js从入门到进阶',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554973908508&di=01dfd653d065953d565d8500a3ccbd61&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fgames%2F3c3de2ce%2F20160105%2F3.jpg',
          charge: '免费',
          isOpened: false
        },
        {
          title: 'Vue从入门到精通',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554973908507&di=b3511dec3ffc2d1be28246cf75bc5fb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201402%2F14%2F20140214120558_2f4NN.jpeg',
          newPrice: '¥199',
          oldPrice: '¥299',
          charge: '收费',
          isOpened: false
        },
        {
          title: 'js从入门到进阶',
          src: 'http://img17.3lian.com/d/file/201702/21/6cc1d8469c7f8d020ddd97cdcd86488e.jpg',
          charge: '免费',
          isOpened: false
        }
      ],
      learnList: [
        {
          title: '小米硬件的原理讲解与操作实战大师班',
          src: 'http://img1.ph.126.net/SSvFbcJzwGBlqy4xon6FjA==/6608832342050415367.jpg',
          type: '已完结'

        },
        {
          title: '设计心法谈谈事理学认识论',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554973908508&di=01dfd653d065953d565d8500a3ccbd61&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fgames%2F3c3de2ce%2F20160105%2F3.jpg',
          type: '已冻结'
        },
        {
          title: '如何设计一个让客户喜欢的logo？就安静安静安静安静安静安静安静安静安静安静安静安静啊',
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554973908507&di=b3511dec3ffc2d1be28246cf75bc5fb5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201402%2F14%2F20140214120558_2f4NN.jpeg',
          type: '学习中'

        },
        {
          title: '会计资格考试培训',
          src: 'http://img17.3lian.com/d/file/201702/21/6cc1d8469c7f8d020ddd97cdcd86488e.jpg',
          type: '已完结'
        }
      ]
    }
  }
  config = {
    navigationBarTitleText: '学习中心首页'
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleChangeTab(value) {
    this.setState({
      current: value
    })
  }
  handleSingle() {
    this.setState({
      isOpened: true
    })
  }
  render() {
    const { collectList, learnList } = this.state
    const tabList = [{ title: '学习' }, { title: '收藏' }]
    return (
      <View className={styles.learningCenter}>
        <AtTabs animated={false} current={this.state.current} tabList={tabList} onClick={this.handleChangeTab.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className={styles.learn_container}>
              <View className={styles.learn_tabs}>
                <Text>全部</Text>
                <Text>按学习时间</Text>
                <Text>按加入时间</Text>
                <Text>选项</Text>
              </View>
              <View className={styles.learn_list}>
                {learnList.map((item, index) => {
                  return (
                    <View className={styles.learn_item} key={index}>
                      <View className={styles.learn_item_img}>
                        <Image className={styles.item_img} src={item.src} />
                      </View>
                      <View className={styles.learn_item_info}>
                        <View className={styles.learn_item_info_title}>{item.title}</View>
                        <View className={styles.learn_item_info_bottom}>
                          <Text>已学12/15课时</Text>
                          <Text>丨</Text>
                          <Text className={styles.learn_size}>{item.type}</Text>
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1} >
            <View className={styles.collect_container}>
              <View className={styles.collect_tabs}>
                <Text>全部</Text>
                <Text onClick={this.handleChangeCharge.bind(this)}>付费</Text>
                <Text onClick={this.handleChangeFree.bind(this)}>免费</Text>
              </View>
              {collectList.map((item, index) => {
                return (
                  <AtSwipeAction key={index} autoClose
                    onOpened={this.handleSingle.bind(this, index)}
                    isOpened={item.isOpened}
                    options={[
                      {
                        text: '取消收藏',
                        style: {
                          backgroundColor: '#FF4949'
                        }
                      }
                    ]}>
                    <View className={styles.collect_list}>
                      <View className={styles.collect_list_img}>
                        <Image style='width:132px; height:75px' src={item.src} />
                      </View>
                      <View className={styles.collect_list_info}>
                        <View className='title'>{item.title}</View>
                        <View className={styles.collect_number}>
                          <Text>{this.state.value}</Text>
                          <Text>（1999人学过）</Text>
                        </View>
                        {item.charge === '免费' ? <Text className='free'>免费</Text> :
                          <View>
                            <Text className={styles.collect_size}>{item.newPrice}</Text>
                            <Text className={styles.collect_size}>{item.oldPrice}</Text>
                          </View>}
                      </View>
                    </View>
                  </AtSwipeAction>
                )
              })}
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
export default LearningCenter
