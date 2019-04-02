# 行家移动端项目
小程序&h5一套代码

* 项目框架：[Tarojs](https://nervjs.github.io/taro/docs/README.html)
* 预编译语言：[scss](https://www.sass.hk/guide/)
* 项目结构：[tree](./tree.md)

# alias-别名
配置了如下几个别名：
```javascript
{
  ...
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    'utils': path.resolve(__dirname, '..', 'src/utils'),
    'components': path.resolve(__dirname, '..', 'src/components'),
    'api': path.resolve(__dirname, '..', 'src/api'),
    'styles': path.resolve(__dirname, '..', 'src/styles'),
  }
}
```
# 资源文件引入路径问题
总结过一篇vue中的资源文件引入路径[由'~'路径问题对webpack项目资源文件处理的探究 #8](https://github.com/alowkeyguy/zgtBlog/issues/8)

在taro中style里面资源的引入方式，没具体研究，但是将'~@'指向了src目录，还有相对路径的引入方式永远ok的

react的资源引入方式
```javascript
import xxx from './xxx.png'
...
<Image src={xxx} />
// 或者
<Image src={require('./xxx.png')} />
```
# 模块结构
只有这个模块需要的资源，全部放在该目录下
```
── loading
   ├── index.js
   ├── index.module.scss
   └── loading.gif
```
# 环境判断
[taro环境判断](https://nervjs.github.io/taro/docs/env.html)

根据不同环境引入不同组件
```javascript
import WeComponent from './we-component'
import WebComponent from './web-component'

render() {
  return (
    Taro.getEnv() === Taro.ENV_TYPE.WEAPP ? <WeComponent /> : <WebComponent />
  )
}
// 不要这样
Taro.getEnv() === "WEAPP"
```
# css modules
[写法及注意点](./src/pages/demo/README.md)
# js书写规范
请务必看完：[JavaScript 书写规范](https://nervjs.github.io/taro/docs/spec-for-taro.html#javascript-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)
# 开发过程中可能会遇到的问题
* [组件的外部样式和全局样式](https://nervjs.github.io/taro/docs/component-style.html)
* [最佳实践](https://nervjs.github.io/taro/docs/best-practice.html)
* run dev报错
  1.  taro不是命令的问题，全局安装taro。`$ npm install -g @tarojs/cli`
  2.  `npm i`后，提示缺少包。cd .rn_temp，提示缺什么，在里面装什么

# 开发
建议：开发页面过程中，用`npm run dev:h5`调试，一个模块ok后，再`npm run dev:weapp`看小程序有没有问题，没问题再提交。

原因：taro实现了一套和微信小程序一致的components，我们每个标签（这块内容需要同时再h5和小程序中显示的话）都要使用taro实现的组件，如果我们忘记引入，就会默认时用的小程序的组件，我们的h5就没法生成了
# issues
开发过程中出现问题，在左边`问题`栏提出，我们共同讨论给出解决方案
