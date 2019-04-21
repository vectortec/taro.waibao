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
    selector: [],
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
    formData: [],
    option: {
      startTime: '',
      endTime: '',
      search: '',
      partyGroupId: '',
      partyGroupName: ''
    },
    showCalender: false,
    page: {
      total: 0,
      current: 1
    }
  }

  // 慎用
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    this.props.asyncLogin().then(() => {
      Taro.request({
        url: 'http://221.176.65.6:808/pm/demandapi/demand/PartyGroupRest/getGroup',
        method: 'get',
        data: {
          token: this.props.token
        }
      }).then(({ data }) => {
        this.setState({
          selector: data.map(item => ({ value: item.partyGroupId, label: item.partyGroupName }))
        })
      })
      this.search()
    })
  }
  handleClick() {
    this.setState({
      showCalender: true
    })
  }
  choseGroup(event) {
    const option = this.state.option
    const item = this.state.selector[event.detail.value]
    option.partyGroupId = item.value
    option.partyGroupName = item.label
    this.setState({
      option
    })
  }
  search(page) {
    Taro.request({
      url: 'http://221.176.65.6:808/pm/demandapi/demand/PartyGroupRest/queryIntegralStatisticsByPage',
      method: 'get',
      data: {
        token: this.props.token,
        pageNo: page && page.current ? page.current : 1,
        ...this.state.option
      }
    }).then(({ data }) => {
      this.setState({
        formData: data.rows,
        page: {
          total: data.total,
          current: data.pageNo
        }
      })
    })
  }
  ItemClick(item) {
    Taro.navigateTo({
      url: `/pages/cmcc_party/campaign/index?id=${item.groupMemberUserId}`,
    })
  }
  nameChange(search) {
    console.log(search)
    this.setState({
      option: JSON.parse(JSON.stringify({
        ...this.state.option,
        search
      }))
    })
  }
  onDateChange({ value }) {
    save = value
  }
  reset() {
    this.setState({
      option: {
        startTime: '',
        endTime: '',
        search: '',
        partyGroupId: '',
        partyGroupName: ''
      }
    })
  }
  sureCalender() {
    const option = this.state.option
    option.startTime = save.start
    option.endTime = save.end
    this.setState({
      option,
      showCalender: false
    })
  }
  render() {
    const { option } = this.state
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
          <AtListItem title='开始-结束' onClick={this.handleClick.bind(this)} arrow='right' extraText={option.startTime ? '' : '请选择'} note={option.startTime ? `${option.startTime || ''} - ${option.endTime || ''}` : ''} />
          <AtListItem title='党小组' extraText={
            <Picker rangeKey='label' mode='selector' range={this.state.selector} onChange={this.choseGroup.bind(this)}>
              <View className='picker'>
                {this.state.option.partyGroupName ? this.state.option.partyGroupName : '请选择'}
              </View>
            </Picker>
          } />
        </AtList>
        <AtInput
          name='name'
          title='姓名'
          type='text'
          placeholder='请输入'
          value={this.state.option.search}
          onChange={this.nameChange.bind(this)}
          placeholderStyle={{
            'text-align': 'right'
          }}
        />
        <View className='at-row at-row__justify--end button_wrap'>
          <View className='at-col at-col-2'>
            <AtButton type='primary' size='small' onClick={this.search.bind(this)}>查询</AtButton>
          </View>
          <View className='at-col at-col-2'>
            <AtButton type='secondary' size='small' onClick={this.reset.bind(this)}>重置</AtButton>
          </View>
        </View>
        <View className='table_wrap'>
          <Table title={this.state.title} ItemClick={this.ItemClick.bind(this)} formData={this.state.formData}></Table>
        </View>
        <AtPagination
          icon
          pageSize={10}
          onPageChange={this.search.bind(this)}
          total={this.state.page.total}
          current={this.state.page.current}
        ></AtPagination>
      </View>
    )
  }
}

export default SumbitOrder
