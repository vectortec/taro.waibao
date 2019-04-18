import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

export default class GlobalAssessment extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    score: null,
    per: null,
  }
  
  render() {
    const { score, per } = this.props.globalReview
    
    return(
      <View className={styles.reviewTop}>
        <Text className={styles.reviewTopName}>整体评价</Text>
        <View className={styles.reviewStarBox}>
          <Text className={styles.reviewStar}>
            <Text className={styles.reviewGrade}>{score}</Text>
            {
              new Array(Number(score)).fill('star').map((i) => {
                return <Text key={i} className={`iconfont iconpingfen-xing ${styles.reviewStarIcon}`}></Text>
              })
            }
            {
              new Array(5 - Number(score)).fill('star').map((k) => {
                return <Text key={k} className={`iconfont iconpingfen-xing ${styles.reviewStarIconNo}`}></Text>
              })
            }
          </Text>
          <Text className={styles.reviewUser}>
            <Text className={styles.reviewUserPer}>{per}</Text> 用户推荐此课程
          </Text>
        </View>
      </View>
    )
  }
}