import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import styles from "./index.module.scss";

class CourseIntroduction extends Component {
  render() {
    return (
      <View className={styles.courseIntroduction}>
        <View className={styles.courseIntroductionTop}>
          <View className={styles.courseTitle}>
            {" "}
            <Text className={styles.courseLabel}> 抢购 </Text>
            <Text className={styles.course}>
              品名称，字数太多就两行吧，字数太多就两行吧，字数太多就两行吧，字数太多就两行吧...
            </Text>{" "}
          </View>{" "}
          <View className={styles.courseStateBox}>
            <View className={styles.courseState}>
              <Text className={styles.user}>199人学过</Text>
              <Text className={styles.timeOut}>2020年2月25日失效</Text>
            </View>{" "}
            <View className={styles.starBox}>
              <Text className={styles.star}>
                <AtIcon value="star-2" size="18" color="#FFBD00">
                  {" "}
                </AtIcon>{" "}
                <AtIcon value="star-2" size="18" color="#FFBD00">
                  {" "}
                </AtIcon>{" "}
                <AtIcon value="star-2" size="18" color="#FFBD00">
                  {" "}
                </AtIcon>{" "}
                <AtIcon value="star-2" size="18" color="#FFBD00">
                  {" "}
                </AtIcon>{" "}
                <AtIcon value="star" size="18" color="#999">
                  {" "}
                </AtIcon>{" "}
                <Text className={styles.grade}>4.0</Text>{" "}
              </Text>{" "}
            </View>{" "}
          </View>{" "}
          {/* 倒计时 */}
          <View className={styles.contest}>
            <View className={styles.price}>
              <Text>￥</Text>
              <Text>199.00</Text>
              <Text className={styles.par}>200.00</Text>
            </View>
            <Text className={styles.timerText}>距结束</Text>
            <Text className={styles.timer}>
              <Text className={styles.hour}>02</Text>
              <Text className={styles.time}>时</Text>
              <Text className={styles.hour}>05</Text>
              <Text className={styles.time}>分</Text>
              <Text className={styles.hour}>55</Text>
              <Text className={styles.time}>秒</Text>
            </Text>
          </View>
        </View>
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
          <View className={styles.more}>
            <Text>查看全部</Text>
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
