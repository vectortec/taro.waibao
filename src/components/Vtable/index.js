import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'


class SumbitOrder extends Taro.Component {
  render() {
    const FormData2table = () => {
      const keyDict = {}
      const leng = this.props.title.length
      this.props.title.map((item, index) => {
        keyDict[item.key] = { ...item, index }
      })
      const res =  this.props.formData.map(item => {
        const Row = new Array(leng).fill(<View className='td'>无数据</View>, 0)
        // Row.fill('空', 0, leng)
        for (let key in item) {
          keyDict[key] && (Row[keyDict[key].index] = <View className='td'>{item[key]}</View>)
        }
        // console.log(Row)
        // return Row
        return <View className='tr'>{Row}</View>
      })
      return res
      console.log(res)
    }
    return (
      <View className='statistics'>
        <View className='container'>
          <View className='table'>
            <View className='tr'>
              {this.props.title.map(item => (
                <View className='th'>{item.label}</View>
              ))}
            </View>
            {FormData2table.call(this)}
          </View>
        </View>
      </View>
    )
  }
}

export default SumbitOrder
