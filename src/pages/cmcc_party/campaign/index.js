import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { asyncLogin } from '@/actions/login'
import './index.scss'
import Table from 'components/Vtable'


@connect(state => state.loginReducer, { asyncLogin })
class SumbitOrder extends Taro.Component {

  config = {
    navigationBarTitleText: '积分统计'
  }

  state = {
    name: '',
    title: [{
      label: '活动序号',
      key: 'type'
    }, {
      label: '活动日期',
      key: 'time'
    }, {
      label: '活动类别',
      key: 'score'
    }, {
      label: '活动备注',
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
  }

  componentDidMount() {
    console.log(this.$router)
    this.props.asyncLogin()
    Taro.request({
      url: 'http://221.176.65.6:808/pm/demandapi/demand/PartyGroupRest/queryActivityBulletinByPage',
      method: 'get'
    }).then(res => {
      console.log(res)
    })
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
