import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import './index.scss'
import Table from 'components/Vtable/index'


@connect(state => state.counter, { add, minus, asyncAdd })
class SumbitOrder extends Taro.Component {

  config = {
    navigationBarTitleText: '积分统计'
  }

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    name: '',
    title: [{
      label: '活动类别',
      key: 'type'
    }, {
      label: '活动时间',
      key: 'time'
    }, {
      label: '积分',
      key: 'score'
    }, {
      label: '原因',
      key: 'reason'
    }],
    formData: [{
      type: 0,
      time: '1999-09-08',
      score: 456,
      reason: '原因',
      // attend: 55
    }],
    showCalender: false
  }

  // 慎用
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
  }
  handleClick() {
    this.setState({
      showCalender: true
    })
  }
  onChange() {

  }
  nameChange() {

  }
  render() {
    return (
      <View className='detail'>
				<Text className='title'>党员XXX同志活动积分详细列表</Text>
        <Table title={this.state.title} formData={this.state.formData}></Table>
      </View>
    )
  }
}

export default SumbitOrder
