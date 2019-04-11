import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import styles from "./index.module.scss";

class ReviewComponent extends Component {
  render() {
    return (
      <View className={styles.review}>
        <View className={styles.reviewTop}>
          <Text className={styles.reviewTopName}>整体评价</Text>
          <View className={styles.reviewStarBox}>
            <Text className={styles.reviewStar}>
              <Text className={styles.reviewGrade}>4.0</Text>
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
            </Text>
            <Text className={styles.reviewUser}>
              <Text className={styles.reviewUserPer}>90%</Text> 用户推荐此课程
            </Text>
          </View>
        </View>
        {/* 评论列表 */}
        <View className={styles.reviewList}>
          <View className={styles.reviewBox}>
            {/* 头像 */}
            <Text className={styles.reviewAvatar} />
            <View className={styles.reviewUserBox}>
              <View className={styles.reviewBoxTop}>
                <Text className={styles.reviewUserName}>小黄同学</Text>
                <Text className={styles.reviewUserStar}>
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
                </Text>
              </View>
              <View className={styles.reviewBoxMid}>
                <Text className={styles.reviewBoxMidStudy}>学习2个课时</Text>
                <Text className={styles.reviewBoxMidTime}>2019-03-09</Text>
              </View>
              <View className={styles.reviewBoxText}>
                <Text>
                  特别赞同老师的观点，明显感受到进步，老
                  师们都很热心和耐心，推荐！
                </Text>
              </View>
            </View>
          </View>
          <View className={styles.reviewBox}>
            {/* 头像 */}
            <Text className={styles.reviewAvatar} />
            <View className={styles.reviewUserBox}>
              <View className={styles.reviewBoxTop}>
                <Text className={styles.reviewUserName}>小黄同学</Text>
                <Text className={styles.reviewUserStar}>
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
                </Text>
              </View>
              <View className={styles.reviewBoxMid}>
                <Text className={styles.reviewBoxMidStudy}>学习2个课时</Text>
                <Text className={styles.reviewBoxMidTime}>2019-03-09</Text>
              </View>
              <View className={styles.reviewBoxText}>
                <Text>
                  特别赞同老师的观点，明显感受到进步，老
                  师们都很热心和耐心，推荐！
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ReviewComponent;
