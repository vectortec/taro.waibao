import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

class DirectoryList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      menuDatas: []
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  componentDidMount() {
    this.setState({
      menuDatas: [
        {
          id: 1,
          rotate: false,
          label: "ANIMAL",
          children: [
            { id: "011"},
            { id: "012"},
            { id: "013"}
          ]
        },
        {
          id: 2,
          rotate: false,
          label: "TRAFFIC",
          children: [
            { id: "021"},
            { id: "022"},
            { id: "023"}
          ]
        },
        {
          id: 3,
          rotate: false,
          label: "MOBILE",
          children: [
            { id: "031"},
            { id: "032"}
          ]
        }
      ]
    })
  }

  clickHandler(crtMenuData) {
    crtMenuData.rotate = !crtMenuData.rotate
    this.setState({})
    console.log(crtMenuData, 'crt');
  }

  render() {
    var crtCmp = this;
    var menusDataDom = this.state.menuDatas.map(function(crtMenuData) {
      let list = null;
      if (crtMenuData.children) {
        list = crtMenuData.children.map(function(currentLiData) {
          return (
            <View
              key={crtMenuData.rotate}
              style={crtMenuData.rotate ? "display: block" : "display: none"}
              // className={
              //   key == crtCmp.state.expandId ? styles.knobList : styles.knobListNo
              // }
              className={styles.knobList}
            >
              {/* 节列表 */}
              <View className={styles.knob}>
                <Text className={styles.knobName}>{currentLiData.id}</Text>
                <Text className={styles.knobTag}>试看</Text><Text className={`iconfont iconlock-line ${styles.knobIcon}`}></Text>
                <Text className={styles.knobTime}>40:25</Text>
              </View>
            </View>
          );
        });
        list = <View>{list}</View>;
      }
      return (
        <View className={styles.chapter} key={crtMenuData.rotate}>
          <View
            className={styles.chapterBox}
            onClick={crtCmp.clickHandler.bind(this, crtMenuData)}
          >
            <View className={styles.chapterNameBox}>
              <Text className={styles.chapterName}>
                第一章 如何做好商业海报
              </Text>
              <Text className={`iconfont iconbottom ${styles.chapterIcon} ${crtMenuData.rotate ? styles.iconRotate : ''}`}></Text>
            </View>
          </View>
          {list ? list : ""}
        </View>

      );
    });
    return <View className={styles.directoryList}>{menusDataDom}</View>;
  }
}

export default DirectoryList;
