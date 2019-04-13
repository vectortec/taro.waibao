import { add, asyncAdd, minus } from '@/actions/counter';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Taro, { Component } from '@tarojs/taro'
import { AtTabsPane, AtTabs, AtTag } from 'taro-ui';
import './index.scss';


@connect(state => state.counter, { add, minus, asyncAdd })
class SumbitOrder extends Component {
    config = {
        navigationBarTitleText: '轻问诊'
    }

    state = {
        current: 0
    }

    // 慎用
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentDidMount() {
    }
    handleClick(value) {
        this.setState({
            current: value
        })
    }
    render() {
        const tabList = [{ title: '区域' }, { title: '科室' }]
        return (
            <View className='kc_inquiry'>
                <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={this.state.current} index={0} >
                        {
                            [1, 2, 3].map((key) => (
                                <View className='card_wrap' key={key}>
                                    <View className='at-row'>
                                        <View className='at-col at-col-3'>
                                            <Image className='img' src='http://odk-server-pro.bj.bcebos.com/image/1550914991460-11748-3dc43cb8-b417-46c7-80ed-9b1efae1c8a8.jpg@!nature' />
                                        </View>
                                        <View className='at-col at-col-9'>
                                            <View className='info'>
                                                <View className='name'>马大夫</View>
                                                <View className='desc'>
                                                    <AtTag className='tag' size='small' active>消化内科</AtTag><AtTag className='tag' size='small' active>主任医师</AtTag> <AtTag className='tag' size='small' active>广州医学院第一附属医院</AtTag></View>
                                                <View className='desc'>擅长：胃痛，胃胀，腹泻，打嗝，消化不良</View>
                                            </View>
                                            <View className='subdesc'>坐诊时间：18:00-21:00，周一至周五</View>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={1}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
                    </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default SumbitOrder
