# 性能优化
[性能优化实践](https://nervjs.github.io/taro/docs/optimized-practice.html#taropurecomponent)
# 解决问题的思路
[taro](https://github.com/NervJS/taro)

# 目前阶段可以探讨的问题点
1.  [😓h5端 怎么上传图片和预览 #1322](https://github.com/NervJS/taro/issues/1322)
  * 微信：wx.chooseImage(OBJECT), [参考](https://www.jianshu.com/p/c4a2ecb050e9)
  * webapp: type=file,[FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects) 
2.  [视频播放怎么搞](https://axhub.im/pro/d6d34d32ef86cc54/#g=1&p=%E8%AF%BE%E7%A8%8B%E8%AF%A6%E6%83%85%E5%AD%A6%E4%B9%A0%E9%A1%B5)
  * 小程序[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)使用限制：
    > 由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：
      * 原生组件的层级是最高的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。
      * 后插入的原生组件可以覆盖之前的原生组件。
      * 原生组件还无法在 \<picker-view\> 中使用。
      * 基础库 2.4.4 以下版本，原生组件不支持在 \<scroll-view\>、\<swiper\>、\<movable-view\> 中使用。
      * 部分CSS样式无法应用于原生组件，例如：
        * 无法对原生组件设置 CSS 动画
        * 无法定义原生组件为 position: fixed
        * 不能在父级节点使用 overflow: hidden 来裁剪原生组件的显示区域
# [iconfont](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1106710&keyword=)

# 好的文章
* [京东 Taro 框架深度实践](https://www.infoq.cn/article/C4vtejo64SAS5jN5_HSy)