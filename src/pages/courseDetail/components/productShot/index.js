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
  }
  componentDidMount() {
    // setTimeout(this.countTime, 1000);
  }

  // 计时器
  // countTime() {
  //   let date = new Date()
  //   let now = date.getTime()

  //   let str="2019/4/18 00:00:00"
  //   let endDate = new Date(str)
  //   let end = endDate.getTime()

  //   //时间差
  //   let leftTime = end - now;
  //   //定义变量 d,h,m,s保存倒计时的时间
  //   let h, m, s;
  //   if (leftTime >= 0) {
  //     // d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
  //     h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
  //     m = Math.floor((leftTime / 1000 / 60) % 60);
  //     s = Math.floor((leftTime / 1000) % 60);
  //   } 
  //   this.seState({
  //     h: h,
  //     m: m,
  //     s: s,
  //   })
  // }

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
          <Text className={styles.hour}>{this.state.h}</Text>
          <Text className={styles.time}>时</Text>
          <Text className={styles.hour}>{this.state.m}</Text>
          <Text className={styles.time}>分</Text>
          <Text className={styles.hour}>{this.state.s}</Text>
          <Text className={styles.time}>秒</Text>
        </Text>
      </View>
    </View>
    )
  }
}

export default ProductShotComponent
