import Taro, {Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import styles from './index.module.scss'

export default class AssessmentList extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    reviewList: []
  }
  render() {
    const { reviewList } = this.props
    const list = reviewList.map((item, k) => {
      return <View key={k} className={styles.reviewBox}>
        {/* 头像 */}
        <Text className={styles.reviewAvatar}>
          <Image src={item.avatar} />
        </Text>
        <View className={styles.reviewUserBox}>
          <View className={styles.reviewBoxTop}>
            <Text className={styles.reviewUserName}>{item.name}</Text>
            <Text className={styles.reviewUserStar}>
            {
              new Array(Number(item.score)).fill('star').map((i) => {
                return <Text key={i} className={`iconfont iconpingfen-xing ${styles.reviewUserStarIcon}`}></Text>
              })
            }
            {
              new Array(5 - Number(item.score)).fill('star').map((j) => {
                return <Text key={j} className={`iconfont iconpingfen-xing ${styles.reviewUserStarIconNo}`}></Text>
              })
            }
            </Text>
          </View>
          <View className={styles.reviewBoxMid}>
            <Text className={styles.reviewBoxMidStudy}>{item.courseTime}</Text>
            <Text className={styles.reviewBoxMidTime}>{item.creatTime}</Text>
          </View>
          <View className={styles.reviewBoxText}>
            <Text>
              {item.content}
            </Text>
          </View>
        </View>
      </View>
    })
    return(
      <View className={styles.reviewList}>
        {Boolean(list)? list: ''}
      </View>
    )
  }
}