import { add, asyncAdd, minus } from '@/actions/counter';
import { View, Icon, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Taro, { Component } from '@tarojs/taro'
import { AtAvatar, AtList, AtListItem, AtFab, AtButton } from 'taro-ui';
import './index.scss';


@connect(state => state.counter, { add, minus, asyncAdd })
class SumbitOrder extends Component {
    config = {
        navigationBarTitleText: '轻问诊'
    }

    state = {
    }

    // 慎用
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentDidMount() {
    }
    render() {
        return (
            <View className='kc_inquiry'>
                <View className='at-row headInfo'>
                    <View className='at-col at-col-4 avatar'>
                        <AtAvatar size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
                    </View>
                    <View className='at-col at-col-8 textDesc'>
                        <View className='name'>刘永信</View>
                        <View className='title'>消化内科 主任医师</View>
                        <View className='department'>广州医学院第一附属医院</View>
                    </View>
                </View>
                <View className='zone-wrap'>
                    <View className='zone'>
                        <View className='title'>擅长：</View>
                        <Text>胃痛，胃胀，腹泻，打嗝，消化不良</Text>
                    </View>
                    <View className='zone'>
                        <View className='title'>坐诊时间</View>
                        <Text>18:00-21:00，周一至周五</Text>
                    </View>
                    <View className='zone articla'>
                        <View className='title'>发表文章：</View>
                        <AtList hasBorder={false}>
                            <AtListItem note='描述信息' hasBorder={false} title='标题文字' arrow='right' />
                            <AtListItem note='描述信息' hasBorder={false} title='标题文字' arrow='right' />
                        </AtList>
                    </View>
                </View>
                <View className='fab'><AtFab>关注</AtFab></View>
                <View className='button-wrap'>
                    <View className='at-row'>
                        <View className='at-col at-col-6'>
                            <AtButton full type='primary' size='normal'>预约时间</AtButton>
                        </View>
                        <View className='at-col at-col-6'>
                            <AtButton full type='secondary' size='normal'>问诊</AtButton>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default SumbitOrder
