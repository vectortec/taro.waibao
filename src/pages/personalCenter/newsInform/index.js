import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import Loading from '@/components/loading'

import styles from './index.module.scss'
import '../staticPic/icon.scss'

@connect(state => state.counter, { add, minus, asyncAdd })
class NewsInform extends Component {

  config = {
    navigationBarTitleText: 'NewsInform'
  }

  state = {
    loading: true
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

  pageClick(e) { // 请求平台消息的数据
    console.log(e);
  }

  courseClick(e) { // 请求课程消息的数据
    console.log(e)
  }

  startClick() {
    this.timeOutEvent = setTimeout(function() { 
      this.timeOutEvent = 0
      document.getElementById('new').setAttribute('style','transform:translateX(-20px);')
      document.getElementById('del').setAttribute('style','display:block;')
      console.log(1111)
      }, 1000);
    }

  moveClick() {
    clearTimeout(this.timeOutEvent);  
    this.timeOutEvent = 0
  }

  endClick() {
    clearTimeout(this.timeOutEvent); 
    if (this.timeOutEvent != 0) {
        console.log('你点击了') 
    }  
    return false;  
  }
  
  deleteClick() {
    // 删除消息
    document.getElementById('new').setAttribute('style','transform:translateX(0px);')
    document.getElementById('del').setAttribute('style','display:none;')
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <View className={styles.content}>
        <View className={styles.componentsPage}>
          <View  className={styles.button} onClick={this.pageClick.bind(this)}>平台消息<Text className={styles.number}>3</Text></View>
          <View  className={styles.button} onClick={this.courseClick.bind(this)}>课程消息<Text className={styles.number}>3</Text></View>
        </View>
        <View className={styles.bottom}>
          <View className={styles.time}><Text className={styles.line}></Text> <Text style={{color:'#E1E3E5'}}>/</Text> 2018-10-10  19:28:22更新 <Text style={{color:'#E1E3E5'}}>/</Text> <Text className={styles.line}></Text></View>
          <View  id='new' className={styles.news} onTouchStart={this.startClick.bind(this)} onTouchMove={this.moveClick.bind(this)} onTouchEnd={this.endClick.bind(this)}>
            <View style={{position: 'relative'}}>
              <View className={styles.title}><Text className='iconfont icon-lingdang' style={{fontSize:'20px',position:'relative',color:'#FF5A1F'}}><Text className='iconfont icon-dian' style={{position:'absolute',left:'10px',top:'-8px',color:'#FF5A1F'}}></Text></Text>消息息标题最多一消息标题最多一行消息标题最多一行、消息标题最多一行消</View>
              <Text className='iconfont icon-right' style={{fontSize:'15px',position:'absolute',right:'11px',top:'28px'}}></Text>
            </View>
            <View className={styles.newsContent} style='-webkit-box-orient: vertical;'>消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行消息内容最多两行</View>
          </View>
          <Text id='del' className={styles.del} onClick={this.deleteClick.bind(this)}>删除</Text>
        </View>
      </View>
    )
  }
}

export default NewsInform
