# 行家移动端项目
小程序&h5一套代码

项目框架：[Tarojs](https://nervjs.github.io/taro/docs/README.html)
预编译语言：[scss](https://www.sass.hk/guide/)

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

在taro中scss中资源的引入方式，没具体研究，但是将'~@'指向了src目录，还有相对路径的引入方式永远ok的

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


