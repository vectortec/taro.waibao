import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import styles from './index.module.scss'

export default class CheckBox extends Component {

  static defaultProps = {
    optionList: [],
    key: 'id',
    defaultValue: '',
    checkClick: () => {}
  }

  render () {

    const {optionList, key, checkClick, defaultValue} = this.props

    const optionView = optionList.map(item => {
      let iconStyle = {
        color: item.color || '#FF7847'
      }
      return <View onClick={checkClick.bind(this, item)} className={styles.wrap}>
        {
          item.icon
          ?
          <Text
            style={iconStyle }
            className={`${styles.icon} ${item.icon} iconfont`}>
          </Text>
          :
          null
        }
        <Text className={styles.text}>{item.text}</Text>
        <Text className={`${item[key] === defaultValue ? 'iconxuanzhong' : 'iconweixuanzhong'}
          ${item[key] === defaultValue ? styles.checked : styles.check} iconfont`}></Text>
      </View>
    })

    return (
      <View>
        {optionView}
      </View>
    )
  }
}