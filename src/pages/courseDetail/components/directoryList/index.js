import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
// import { AtAccordion, AtList, AtListItem } from "taro-ui";
import styles from "./index.module.scss";

class DirectoryList extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }
  chapterClick(value) {
    console.log(value, "value");
  }

  render() {
    const arr = [{aa:1}, {aa:2}, {aa:3}, {aa:4}];
    return (
      <View className={styles.directoryList}>
        {/* 章列表 */}
          <View className={styles.chapter}>
            <View
              className={styles.chapterBox}
              onClick={this.chapterClick.bind(this)}
            >
              <Text className={styles.chapterName}>
                第一章 如何做好商业海报
              </Text>
            </View>
            <View className={styles.knobList}>
              {/* 节列表 */}
              <View className={styles.knob}>
                <Text className={styles.knobName}>第一节 如何做好商业海商</Text>
                <Text className={styles.knobTag}>试看</Text>
                <Text className={styles.knobTime}>40:25</Text>
              </View>
              <View className={styles.knob}>
                <Text className={styles.knobName}>第一节 如何做好商业海商</Text>
                <Text className={styles.knobTag}>试看</Text>
                <Text className={styles.knobTime}>40:25</Text>
              </View>
              <View className={styles.knob}>
                <Text className={styles.knobName}>第一节 如何做好商业海商</Text>
                <Text className={styles.knobTag}>试看</Text>
                <Text className={styles.knobTime}>40:25</Text>
              </View>
            </View>
          </View>;
      </View>
    );
  }
}

export default DirectoryList;
