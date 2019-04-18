import Taro, {
  Component
} from '@tarojs/taro'
import {View, Text } from '@tarojs/components'
import styles from './index.module.scss'

class ProductShotComponent extends Component {
  constructor() {
    super();
    this.state = {
      h: null,
      m: null,
      s: null,
    };
    this.countTime = this.countTime.bind(this)
  }
  componentDidMount() {
    // setTimeout(this.countTime, 1000);
    this.countTime()
  }
  
  // 计时器
  countTime() {
    let endTime = Number(new Date('2019-04-18 00:00:00'));
    //获取当前时间
    let nowTime = Date.now();
    // var nowTime=new Date().getTime();
    //获取时间差
    let timediff = Math.round((endTime - nowTime) / 1000);
    //获取还剩多少小时
    let hour = parseInt(timediff / 3600 % 24);
    //获取还剩多少分钟
    let minute = parseInt(timediff / 60 % 60);
    //获取还剩多少秒
    let second = timediff % 60;
    
    //输出还剩多少时间
    this.setState({
      h: hour,
      m: minute,
      s: second,
    })
    setTimeout(this.countTime, 1000);
    if(timediff==0){return;}
  }

  render() {
    let courseType = '2'
    return(
      <View className={styles.courseIntroductionTop}>
      <View className={styles.courseTitle}>
        <Text className={styles.courseLabel}>{courseType == '1'? '秒杀': '积分'}</Text>
        <Text className={styles.course}>
          品名称，字数太多就两行吧，字数太多就两行吧，字数太多就两行吧，字数太多就两行吧...
        </Text>
      </View>
      <View className={styles.courseStateBox}>
        <View className={styles.courseState}>
          <Text className={styles.user}>199人学过</Text>
          <Text className={styles.timeOut}>2020年2月25日失效</Text>
        </View>
        <View className={styles.starBox}>
          <Text className={styles.star}>
            <Text className={`iconfont iconpingfen-xing ${styles.starIcon}`}></Text>
            <Text className={`iconfont iconpingfen-xing ${styles.starIcon}`}></Text>
            <Text className={`iconfont iconpingfen-xing ${styles.starIcon}`}></Text>
            <Text className={`iconfont iconpingfen-xing ${styles.starIcon}`}></Text>
            <Text className={`iconfont iconpingfen-xing ${styles.starIconNo}`}></Text>
            <Text className={styles.grade}>4.0</Text>
          </Text>
        </View>
      </View>
      {/* 倒计时 */}
      <View className={styles.contest}>
        <View className={styles.price}>
          <Text>{courseType == '1'? '￥199.00': '200积分'}</Text>
          <Text className={styles.par}>￥200.00<Text className={styles.line}></Text></Text>
        </View>
        <Text className={styles.timerText}>距结束</Text>
        <Text className={styles.timer}>
          <Text className={styles.hour}>{this.state.h > 9? this.state.h: '0' + this.state.h}</Text>
          <Text className={styles.time}>时</Text>
          <Text className={styles.hour}>{this.state.m > 9? this.state.m: '0' + this.state.m}</Text>
          <Text className={styles.time}>分</Text>
          <Text className={styles.hour}>{this.state.s > 9? this.state.s: '0' + this.state.s}</Text>
          <Text className={styles.time}>秒</Text>
        </Text>
      </View>
    </View>
    )
  }
}

export default ProductShotComponent
