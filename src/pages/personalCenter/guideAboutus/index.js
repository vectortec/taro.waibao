import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtAccordion, AtList } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'

import styles from './index.module.scss'


@connect(state => state.counter, { add, minus, asyncAdd })
class GuideAboutus extends Component {

  config = {
    navigationBarTitleText: '行家'
  }

  state = {
    Array: [],
    Array2: [],
    Array3: [],
    Array4: [],
    loading: true,
    currentNavtab: 0,
    navTab: ['注册登录', '选购课程', '课程学习', '其他问题'],
    navTab1: ['注册登录', '选购课程', '课程学习', '其他问题'],
    navTab2: ['注册登录', '选购课程', '课程学习', '其他问题'],
    navTab3: ['注册登录', '选购课程', '课程学习', '其他问题'],
    navTab4: ['注册登录', '选购课程', '课程学习', '其他问题'],
  }

  handleClick = (value) => {
    const { Array } = this.state;
    const isExpend = Array.indexOf(value);
    if (isExpend > -1) {
      Array.splice(isExpend, 1)
    } else {
      Array.push(value)
    }
    this.setState({
      Array,
    })
  }
 
  handleCourse = (value) => {
    const { Array2 } = this.state;
    const isExpend = Array2.indexOf(value);
    if (isExpend > -1) {
      Array2.splice(isExpend, 1)
    } else {
      Array2.push(value)
    }
    this.setState({
      Array2,
    })
  }

  handleStudy = (value) => {
    const { Array3 } = this.state;
    const isExpend = Array3.indexOf(value);
    if (isExpend > -1) {
      Array3.splice(isExpend, 1)
    } else {
      Array3.push(value)
    }
    this.setState({
      Array3,
    })
  }

  handleQuestion = (value) => {
    const { Array4 } = this.state;
    const isExpend = Array4.indexOf(value);
    if (isExpend > -1) {
      Array4.splice(isExpend, 1)
    } else {
      Array4.push(value)
    }
    this.setState({
      Array4,
    })
  }
  // 慎用
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    console.log(Taro.getEnv())
    console.log(Taro.ENV_TYPE)
    let timer = setTimeout(_ => {
      this.setState({ loading: false })
      clearTimeout(timer)
    }, 1000)
  }

  switchTab(e) {
    // 点击事件判断渲染内容
    // console.log(e, index)
    this.setState({
      currentNavtab: e
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.pageContent}>
        <Text className={styles.guide}>新手指南</Text>
        <View className={styles.top} >
          {
            this.state.navTab.map((item, index) => {
              return (<View className={this.state.currentNavtab === index ? (styles.topbar && styles.active) : styles.topbar} key={index} onClick={this.switchTab.bind(this, index)}>
                {item}
              </View>)
            })
          }
        </View>
        <ScrollView scroll-y>
          <View hidden={this.state.currentNavtab == 0 ? false : true}>
            <Text className={styles.content}>
              {this.state.navTab1.map((item, index) => {
                return (
                  <AtAccordion open={this.state.Array.includes(index)} onClick={() => this.handleClick(index)} title={item} key={index}>
                    <AtList hasBorder={false}>
                      <View style={{ fontSize: '14px', color: '#666', margin: '15px 53px 15px 30px' }}>{item}</View>
                    </AtList>
                  </AtAccordion>
                )
              })}
            </Text>
          </View>
          <View hidden={this.state.currentNavtab == 1 ? false : true}>
            <Text className={styles.content}>
              {this.state.navTab2.map((item, index) => {
                return (
                  <AtAccordion open={this.state.Array2.includes(index)} onClick={() => this.handleCourse(index)} title={item} key={index}>
                    <AtList hasBorder={false}>
                      <View style={{ fontSize: '14px', color: '#666', margin: '15px 53px 15px 30px' }}>{item}</View>
                    </AtList>
                  </AtAccordion>
                )
              })}
            </Text>
          </View>
          <View hidden={this.state.currentNavtab == 2 ? false : true}>
            <Text className={styles.content}>
              {this.state.navTab3.map((item, index) => {
                return (
                  <AtAccordion open={this.state.Array3.includes(index)} onClick={() => this.handleStudy(index)} title={item} key={index}>
                    <AtList hasBorder={false}>
                      <View style={{ fontSize: '14px', color: '#666', margin: '15px 53px 15px 30px' }}>{item}</View>
                    </AtList>
                  </AtAccordion>
                )
              })}
            </Text>
          </View>
          <View hidden={this.state.currentNavtab == 3 ? false : true}>
            <Text className={styles.content}>
              {this.state.navTab4.map((item, index) => {
                return (
                  <AtAccordion open={this.state.Array4.includes(index)} onClick={() => this.handleQuestion(index)} title={item} key={index}>
                    <AtList hasBorder={false}>
                      <View style={{ fontSize: '14px', color: '#666', margin: '15px 53px 15px 30px' }}>{item}</View>
                    </AtList>
                  </AtAccordion>
                )
              })}
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default GuideAboutus
