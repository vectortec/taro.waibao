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
    formData: [],
    showCalender: false
  }

  // 慎用
  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
    this.props.asyncLogin().then(() => {
      Taro.request({
        url: 'http://221.176.65.6:808/pm/demandapi/demand/PartyGroupRest/queryIntegralDetailedByUserId',
        method: 'get',
        data: {
          token: this.props.token
        }
      }).then(res => {
        this.setState({
          formData: res.data.rows
        })
      })
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
      <View className='campaign'>
				<Text className='title'>党员{this.props.user.userName}同志活动积分详细列表</Text>
        <Table title={this.state.title} formData={this.state.formData}></Table>
      </View>
    )
  }
}

export default SumbitOrder
