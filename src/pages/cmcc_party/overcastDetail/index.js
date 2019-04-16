import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { asyncLogin } from '@/actions/login'
import { AtPagination } from "taro-ui"
import './index.scss'
import Table from 'components/Vtable/index'


@connect(state => state.loginReducer, { asyncLogin })
class SumbitOrder extends Taro.Component {

  config = {
    navigationBarTitleText: '活动公告'
  }

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    name: '',
    title: [{
      label: '活动序号',
      key: 'activityNo'
    }, {
      label: '活动日期',
      key: 'activityTime'
    }, {
      label: '活动类别',
      key: 'activityType'
    }, {
      label: '活动备注',
      key: 'activityRemarks'
    }],
    formData: [],
    showCalender: false,
    page: {
      total: 0,
      current: 1
    }
  }

  componentDidMount() {
    this.search()
  }
  search (page) {
    this.props.asyncLogin().then(() => {
      Taro.request({
        url: 'http://221.176.65.6:808/pm/demandapi/demand/PartyGroupRest/queryActivityBulletinByPage',
        method: 'get',
        data: {
          token: this.props.token,
          pageNo: page && page.current ? page.current : 1
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
      <View className='detail'>
				<Text className='title'>活动公告列表</Text>
        <Table title={this.state.title} formData={this.state.formData}></Table>
        <AtPagination
          icon
          onPageChange={this.search.bind(this)}
          total={this.state.page.total}
          pageSize={10}
          current={this.state.page.current}
        ></AtPagination>
      </View>
    )
  }
}

export default SumbitOrder
