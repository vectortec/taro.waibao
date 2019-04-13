import { add, asyncAdd, minus } from '@/actions/counter';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Taro, { Component } from '@tarojs/taro'
import { AtSearchBar, AtGrid } from 'taro-ui';
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
        <AtSearchBar placeholder='搜索症状，医生'></AtSearchBar>
        <View className='grid_wrap'></View>
        <AtGrid className='grid-wrap' mode='square' columnNum={4} hasBorder={false} data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '德国骨科'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '玄学科'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '妇科'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '小儿科'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '眼科'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '内科'
            }
          ]
        }
        />
      </View>
    )
  }
}

export default SumbitOrder
