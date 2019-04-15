import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtActionSheet } from "taro-ui";
import styles from "./index.module.scss";

export default class ShareComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View className={styles.share}>
        <AtActionSheet
          isOpened={this.props.name}
          cancelText="取消"
          title="分享到"
        >
          <View className={styles.shareModelBox} />{" "}
        </AtActionSheet>{" "}
      </View>
    );
  }
}
