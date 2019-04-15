import Taro, { Component } from '@tarojs/taro'
import {View, Text, Image } from '@tarojs/components'
import styles from './index.module.scss'

export default class NoComments extends Component {
  render() {
    return(
      <View className={styles.noComments}>
        <View className={styles.noCommentsImgBox}>
          <Image className={styles.noCommentsImg}></Image>
        </View>
        <Text className={styles.noCommentsImgText}>暂无评价</Text>
      </View>
    )
  }
}