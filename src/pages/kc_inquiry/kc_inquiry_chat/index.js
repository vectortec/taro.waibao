import { add, asyncAdd, minus } from '@/actions/counter';
import { View, Input, MovableArea, MovableView } from '@tarojs/components';
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
        x: 30,
        y: 30
    }

    // 慎用
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentDidMount() {
    }
    render() {
        return (
            <View className='chat'>
                <MovableArea className='fab-wrap'>
                    <View className='left_user user'>
                        <View className='at-row'>
                            <View className='at-col at-col-2'>
                                <AtAvatar circle></AtAvatar>
                            </View>
                            <View className='at-col at-col-10'>
                                <View className='buble_left'>Sure. Any industry you prefer?</View>
                            </View>
                        </View>
                    </View>
                    <View className='right_user user'>
                        <View className='at-row'>
                            <View className='at-col at-col-10'>
                                <View className='buble_right'>I am looking for product manager roles in Bangalore.</View>
                            </View>
                            <View className='at-col at-col-2'>
                                <AtAvatar circle></AtAvatar>
                            </View>
                        </View>
                    </View>
                    <View className='input_wrap'>
                        <View className='at-row at-row__justify--between'>
                            <View className='at-col at-col-10'>
                                <View className='input_container'>
                                    <Input></Input>
                                </View>
                            </View>
                            <View className='at-col at-col-2'>
                                <AtButton size='small' circle type='primary'>发送</AtButton>
                            </View>
                        </View>
                    </View>
                    <MovableView className='fab'
                      x={this.x}
                      y={this.y}
                      direction='all'
                    >
                    <AtFab>开药</AtFab>
                    </MovableView>
                </MovableArea>
            </View>
        )
    }
}

export default SumbitOrder
