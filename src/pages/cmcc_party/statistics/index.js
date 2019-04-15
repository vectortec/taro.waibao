import Taro, { Component } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '@/actions/counter'
import { AtFloatLayout, AtCalendar, AtList, AtListItem, AtInput, AtButton, AtPagination } from "taro-ui"
import './index.scss'
import Table from 'components/Vtable/index'
import { asyncLogin } from '@/actions/login'
let save = {}

@connect(state => state.loginReducer, { asyncLogin })
class SumbitOrder extends Taro.Component {

  config = {
    navigationBarTitleText: '积分统计'
  }

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    name: '',
    title: [{
      label: '排名',
      key: 'ranking'
    }, {
      label: '姓名',
      key: 'groupMemberUserName'
    }, {
      label: '党小组',
      key: 'partyGroupName'
    }, {
      label: '原始总积分',
      key: 'yuanshi'
    }, {
      label: '出席率',
      key: 'chuxi'
    }, {
      label: '最终积分',
      key: 'zuizhong'
    }],
    formData: [{
      ranking: 0,
      groupMemberUserName: 'lee',
      partyGroupName: 'b',
      yuanshi: 66,
      zuizhong: 99,
      // chuxi: 55
    }],
    option: {
      startTime: '',
      endTime: '',
      search: '',
      partyGroupId: ''
    },
    showCalender: false
  }

  // 慎用
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.asyncLogin().then(() => {
      Taro.request({
        url: 'http://221.176.65.6:808/pm/demandapi/demand/PartyGroupRest/queryIntegralStatisticsByPage',
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
  onDateChange({value}) {
    save = value
  }
  sureCalender () {
    const option = this.state.option
    option.startTime = save.start
    option.endTime = save.end
    this.setState({
      option,
      showCalender: false
    })
  }
  render() {
    const {option} = this.state
    return (
      <View className='statistics'>
        <AtFloatLayout isOpened={this.state.showCalender}>
          <View className='at-row at-row__justify--end button_wrap'>
            <View className='at-col at-col-2'>
              <AtButton type='primary' size='small' onClick={this.sureCalender.bind(this)}>确定</AtButton>
            </View>
          </View>
          <AtCalendar onSelectDate={this.onDateChange.bind(this)} isMultiSelect></AtCalendar>
        </AtFloatLayout>
        <AtList>
          <AtListItem title='开始-结束' onClick={this.handleClick.bind(this)} arrow='right' extraText={option.startTime ? '' : '请选择'} note={option.startTime ? `${option.startTime||''} - ${option.endTime||''}` : ''} />
          <AtListItem title='党小组' onClick={this.handleClick} extraText={
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <View className='picker'>
                {this.state.selectorChecked ? this.state.selectorChecked : '请选择'}
              </View>
            </Picker>
          } />
        </AtList>
        <AtInput
          name='name'
          title='姓名'
          type='text'
          placeholder='请输入'
          value={this.state.name}
          onChange={this.nameChange.bind(this)}
          placeholderStyle={{
            'text-align': 'right'
          }}
        />
        <View className='at-row at-row__justify--end button_wrap'>
          <View className='at-col at-col-2'>
            <AtButton type='primary' size='small'>查询</AtButton>
          </View>
          <View className='at-col at-col-2'>
            <AtButton type='secondary' size='small'>重置</AtButton>
          </View>
        </View>
        <Table title={this.state.title} formData={this.state.formData}></Table>
        <AtPagination className=''></AtPagination>
      </View>
    )
  }
}

export default SumbitOrder
