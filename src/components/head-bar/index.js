import Taro, {Component} from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import styles from './index.module.scss'

export default class HeadBar extends Component {

  static defaultProps = {
    title: '行家网校',
    backPath: null,
    backEvent: () => {}
  }

  backClick = () => {
    if (this.props.backPath) {
      Taro.redirectTo({url: this.props.backPath})
    }
    this.props.backEvent()
  }

  render () {

    const {title} = this.props

    return (
      <View className={styles.headBar}>
        <View onClick={this.backClick} className={styles.left}>
          <Text className={`iconfont iconLeft ${styles.backIcon}`}></Text>
        </View>
        <Text className={styles.title}>{title}</Text>
      </View>
    )
  }
}