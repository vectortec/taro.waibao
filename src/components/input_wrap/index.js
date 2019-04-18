import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './index.scss'


// setTitle('登录')

class InputWrap extends Component {

  render() {
    const leftSide = <Input type={this.props.type} placeholder={this.props.placeholder}></Input>
    onInput && (leftSide.props.onInput = onInput)
    return (
      <View className={styles.input_wrap}>
        <View className='at-row at-row__justify--between at-row__align--center'>
          <View className='at-col at-col-8'>
            {this.props.left_side}
          </View>
          {this.props.right_side ? <View className={['at-col at-col-1 at-col--auto', styles.right_side]}>
            {this.props.right_side}
          </View> : ''}
        </View>
      </View>
    )
  }
}

export default LoginPage
