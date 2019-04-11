import Taro, { Component } from "@tarojs/taro";
import { View, Text, Video, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { add, minus, asyncAdd } from "@/actions/counter";
import Loading from "@/components/loading";
import { AtIcon, AtTabs, AtTabsPane, AtActionSheet } from "taro-ui";
import CourseIntroducton from "./components/courseIntroduction/index";
import DirectoryList from "./components/directoryList/index";
import ReviewComponent from "./components/review/index";

import "taro-ui/dist/style/index.scss";

import styles from "./index.module.scss";

@connect(
  state => state.counter,
  {
    add,
    minus,
    asyncAdd
  }
)
class CourseDetail extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      listLoadding: true,
      isImage: false,
      collect: true,
      show: false
    };
  }

  config = {
    navigationBarTitleText: "商品详情页"
  };

  // 慎用
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentDidMount() {
    let timer = setTimeout(_ => {
      this.setState({
        listLoadding: false
      });
      this.getBannar();
      clearTimeout(timer);
    }, 1000);
  }

  // 视频or图片
  getBannar() {
    console.log("isVideo");
  }

  handleClick(value) {
    this.setState({
      current: value
    });
  }

  // 播放视频
  play() {
    const video = Taro.createVideoContext("video");
    video.play();
  }

  // 收藏
  collectClick() {
    console.log("收藏了");
    this.setState({
      collect: false
    });
  }

  // 分享
  shareClick() {
    console.log("分享了");
    this.setState({
      show: true
    });
  }

  render() {
    if (this.state.listLoadding) {
      return <Loading />;
    }
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
      <View className={styles.courseDetail}>
        <View className={styles.details_top}>
          {" "}
          {/* 先隐藏Video组建,显示背景图;点击背景图再调用播放视频接口 */}{" "}
          {this.state.isImage ? (
            <Image className={styles.img}> </Image>
          ) : (
            <View className={styles.videoBox}>
              <Video
                className={styles.video}
                controls={false}
                // src={require("./video.mp4")}
              >
                {" "}
              </Video>{" "}
              <View className={styles.imgBox}>
                <Image
                  className={styles.poster}
                  // src={require("./lake.jpg")}
                  onClick={this.play}
                />{" "}
              </View>{" "}
            </View>
          )}{" "}
          <Text className={styles.back}>
            <AtIcon
              onClick={this.collectClick.bind(this)}
              value="chevron-left"
              size="20"
              color={this.state.collect ? "#fff" : "red"}
            >
              {" "}
            </AtIcon>{" "}
          </Text>{" "}
          <Text className={styles.collect}>
            {" "}
            <AtIcon
              onClick={this.collectClick.bind(this)}
              value="heart"
              size="20"
              color={this.state.collect ? "#fff" : "red"}
            >
              {" "}
            </AtIcon>{" "}
          </Text>{" "}
          <Text className={styles.share}>
            {" "}
            <AtIcon
              onClick={this.shareClick.bind(this)}
              value="share"
              size="20"
              color="#fff"
            >
              {" "}
            </AtIcon>{" "}
          </Text>{" "}
        </View>{" "}
        {/* 选项卡 */}
        <View className={styles.tabs}>
          <AtTabs
            current={this.state.current}
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane current={this.state.current} index={0}>
              {/* 课程接手 */} <CourseIntroducton> </CourseIntroducton>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              {/* 目录 */} <DirectoryList> </DirectoryList>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              {/* 评论 */} <ReviewComponent> </ReviewComponent>
            </AtTabsPane>
          </AtTabs>
        </View>
        <View className={styles.bottBar}>
          <View className={styles.bottBarCounsel}>
            <AtIcon value="message" size="20" color="#999" />
            <Text className={styles.bottBarCounselText}> 咨询 </Text>{" "}
          </View>{" "}
          <View className={styles.bottBarBtn}>
            <Text className={styles.bott_bar_btn_text}> 立即学习 </Text>{" "}
          </View>{" "}
        </View>{" "}
        <AtActionSheet
          className={styles.shareModel}
          isOpened={this.state.show}
          cancelText="取消"
          title="分享到"
        >
          <View className={styles.shareModelBox}>
            {" "}
            {/* <View className={styles.share_btn_wx styles.share_btn}><Text>微信分享</Text></View>
                                <View className={(styles.share_btn_qq) (styles.share_btn)}><Text>QQ分享</Text></View>
                                <View className={(styles.share_btn_wb) (styles.share_btn)}><Text>微博分享</Text></View>
                                <View className={(styles.share_btn_copy) (styles.share_btn)}><Text>复制链接</Text></View> */}{" "}
          </View>{" "}
        </AtActionSheet>{" "}
      </View>
    );
  }
}

export default CourseDetail;
