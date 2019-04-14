import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'


class SumbitOrder extends Taro.Component {
  FormData2table() {
    const keyDict = {}
    const leng = this.props.title.length
    this.props.title.map((item, index) => {
      keyDict[item.key] = { ...item, index }
    })
    return this.props.formData.map(item => {
      const Row = new Array(leng).fill(<View className="td">无数据</View>, 0)
      // Row.fill('空', 0, leng)
      for (let key in item) {
        Row[keyDict[key].index] = <View className="td">{item[key]}</View>
      }
      return Row
    })
  }
  render() {
    return (
      <View className='statistics'>
        <View className="container">
          <View className="table">
            <View className="tr">
              {this.props.title.map(item => (
                <View className="th">{item.label}</View>
              ))}
            </View>
            <View className="tr">
              {this.FormData2table.call(this)}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default SumbitOrder
