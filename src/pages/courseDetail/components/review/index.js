import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import GlobalAssessment from '../../../../components/global-assessment/index'
import AssessmentList from '../../../../components/assessment-list/index'
import styles from "./index.module.scss";

class ReviewComponent extends Component {
  state = {
  }
  render() {
    let globalReview = {
      score: '3.0',
      per: '90%',
    }
    let list = [
      {
        avatar: '',
        name: '小黄同学',
        courseTime: '学习两个课时',
        score: '3.0',
        creatTime: '2019-03-09',
        content: '这个课程太棒了！太棒了！太棒了！'
      },
      {
        avatar: '',
        name: '小黄同学12',
        courseTime: '学习两个课时',
        score: '2.0',
        creatTime: '2019-03-09',
        content: '这个课程太棒了！太棒了！太棒了！'
      }
    ]
    return (
      <View className={styles.review}>
        {/* 整体评价 */}
        <GlobalAssessment globalReview={globalReview} />
        {/* 评论列表 */}
        <AssessmentList reviewList={list} />
      </View>
    );
  }
}

export default ReviewComponent;
