import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import ProductShotComponent from '../productShot/index'
import styles from "./index.module.scss";

class CourseIntroduction extends Component {
  state = {}
  // 查看更多
  moreClick() {
    console.log('dianle');
  }
  render() {
    return (
      <View className={styles.courseIntroduction}>
        {/* 商品展示 */}
        <ProductShotComponent></ProductShotComponent>
        {/* 教师介绍 */}
        <View className={styles.courseIntroductionLecturer}>
          <Text className={styles.lecturer}>讲师介绍</Text>
          <View className={styles.lecturerIntroBox}>
            <Text className={styles.avatar}>
              <Image />
            </Text>
            <View className={styles.lecturerIntro}>
              <Text className={styles.lecturerName}>妲己老师</Text>
              <Text className={styles.lecturerText}>
                我是讲师的简介，字数控制在100字以内！支持多个介绍左右点击切换查看，随字数调节讲师介绍区域的高低，非写死
              </Text>
            </View>
          </View>
          <View className={styles.lecturerIntroBox}>
            <Text className={styles.avatar}>
              <Image />
            </Text>
            <View className={styles.lecturerIntro}>
              <Text className={styles.lecturerName}>刘备老师</Text>
              <Text className={styles.lecturerText}>
                我是讲师的简介，字数控制在100字以内！支持多个介绍左右点击切换查看，随字数调节讲师介绍区域的高低，非写死
              </Text>
            </View>
          </View>
          <View className={styles.more} onClick={this.moreClick.bind(this)}>
            <Text>查看全部<Text className={`iconfont iconbottom ${styles.bottomIcon}`}></Text></Text>
          </View>
        </View>
        {/* 商品介绍 */}
        <View className={styles.courseIntroductionGoods}>
          <Text className={styles.goodsIntro}>商品介绍</Text>
          <View className={styles.goodsText}>
            <Text>
              我是一大段商品介绍的话，支持图片（png、jpg），文本格式这个平台很棒，我这个商品卖的很多，我还是一大段话我是一大段商品介绍的话，支持图片文本格式这个平台很棒，我这个商品卖的很多，我还是一大段话…
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default CourseIntroduction;
