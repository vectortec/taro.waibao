import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.module.scss";

class DirectoryList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      menuDatas: [],
      show: null
    };
    this.listDomKnob = ref => {this.listDom = ref};
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
    // crtMenuData.rotate = !crtMenuData.rotate
    this.setState({show: crtMenuData})
    if (process.env.TARO_ENV === 'weapp') {
      // 这里 this.refs.input 访问的时候通过 `wx.createSeletorQuery` 取到的小程序原生组件
    } else if (process.env.TARO_ENV === 'h5') {
      // 这里 this.refs.input 访问到的是 `@tarojs/components` 的 `Input` 组件实例
      // const {_rendered} = this.listDom;
      console.log(this.listDom.vnode, 'dm')
    }
  }

  render() {
    var crtCmp = this;
    var menusDataDom = this.state.menuDatas.map((crtMenuData, key) => {
      let list = null;
      if (crtMenuData.children) {
        list = crtMenuData.children.map((currentLiData) => {
          return (
            <View
              key={crtMenuData.rotate}
              // ref={(knob) => {this.listPanKnob  = knob}}
              // ref={this.listDomKnob}
              // style={key == this.state.show ? "max-height: 300px" : ""}
              // style={crtMenuData.rotate ? "display: block" : "display: none"}
              // className={crtMenuData.rotate ? styles.knobList : styles.knobListNo}
              // className='knobList'
            >
              {/* 节列表 */}
              <View className='knob'>
                <Text className='knobName'>{currentLiData.id}</Text>
                <Text className='knobTag'>试看</Text><Text className={[`iconfont iconlock-line`, styles.knobIcon]}></Text>
                <Text className='knobTime'>40:25</Text>
              </View>
            </View>
          );
        });
        list = 
        <View ref={this.listDomKnob} style={key == this.state.show ? "max-height: 300px" : ""} className='knobList'>{1}</View>;
      }
      return (
        <View className='chapter' key={crtMenuData.rotate}>
          <View
            className='chapterBox'
            onClick={crtCmp.clickHandler.bind(this, key)}
          >
            <View className='chapterNameBox'>
              <Text className='chapterName'>
                第一章 如何做好商业海报
              </Text>
              <Text className={[`iconfont iconbottom`, styles.chapterIcon, key == this.state.show ? styles.iconRotate : '']}></Text>
            </View>
          </View>
          {list ? list : ""}
        </View>

      );
    });
    return <View className='directoryList'>{menusDataDom}</View>;
  }
}

export default DirectoryList;

