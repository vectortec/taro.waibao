import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from "taro-ui";
import CourseIntroducton from "../courseIntroduction/index";
import DirectoryList from "../directoryList/index";
import ReviewComponent from "../review/index";
import NoComments from "../noComments/index"
import './index.scss'

export default class TabComponent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
    };
  }
  handleClick(value) {
    this.setState({
      current: value
    });
  }
  render() {
    const tabList = [
      {
        title: "课程介绍"
      },
      {
        title: "目录"
      },
      {
        title: "评论"
      }
    ];
    return (
     <View className='tab'>
        {/* 选项卡 */}
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <CourseIntroducton> </CourseIntroducton>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <DirectoryList> </DirectoryList>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <ReviewComponent> </ReviewComponent>
            {/* <NoComments></NoComments> */}
          </AtTabsPane>
        </AtTabs>
     </View>
    )
  }
}