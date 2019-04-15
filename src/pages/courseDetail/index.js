import Taro, { Component } from "@tarojs/taro";
import { View, Text, Video, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { add, minus, asyncAdd } from "@/actions/counter";
import Loading from "@/components/loading";
import TabComponent from "./components/tab/index";
import ShareComponent from './components/share/index'

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
      listLoadding: true,
      isImage: false,
      collect: false,
      shareShow: false,
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

  // 播放视频
  play() {
    const video = Taro.createVideoContext("video");
    video.play();
  }

  // 收藏
  collectClick() {
    console.log("收藏了");
    this.setState({
      collect: !this.state.collect
    });
  }

  // 分享
  shareClick() {
    console.log("分享了");
    this.setState({
      shareShow: true
    });
  }

  render() {
    if (this.state.listLoadding) {
      return <Loading />;
    }
    return (
      <View className={styles.courseDetail}>
        
        <View className={styles.detailsTop}>
          {/* 先隐藏Video组建,显示背景图;点击背景图再调用播放视频接口 */}
          {this.state.isImage ? (
            <Image className={styles.img}> </Image>
          ) : (
            <View className={styles.videoBox}>
              <Video
                className={styles.video}
                controls={false}
                // src={require("./video.mp4")}
              >
              </Video>
              <View className={styles.imgBox}>
                <Image
                  className={styles.poster}
                  // src={require("./lake.jpg")}
                  onClick={this.play}
                />
              </View>
            </View>
          )}
          <Text onClick={this.collectClick.bind(this)} className={`iconfont iconshoucang ${this.state.collect?styles.collectIconRed:styles.collectIcon}`}></Text>
          <Text onClick={this.shareClick.bind(this)} className={`iconfont iconfenxiang ${styles.shareIcon}`}></Text>
        </View>

        {/* 选项卡 */}
        <TabComponent></TabComponent>  

        {/* 底部固定栏 */}
        <View className={styles.bottBar}>
          <View className={styles.bottBarCounsel}>
            <Text className={`iconfont iconxiaoxi ${styles.counselIcon}`}></Text>
            <Text className={styles.bottBarCounselText}> 咨询 </Text>
          </View>
          <View className={styles.bottBarBtn}>
            <Text className={styles.bott_bar_btn_text}> 立即学习 </Text>
          </View>
        </View>
        {/* 分享 */}
        <ShareComponent name={this.state.shareShow}></ShareComponent>
      </View>
    );
  }
}

export default CourseDetail;
