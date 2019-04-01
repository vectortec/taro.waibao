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

scss中url等的引入，与上文总结的一致，react中图片的引入方式
```javascript
import xxx from './xxx.png'
...
<Image src={xxx} />
// 或者
<Image src={require('./xxx.png')} />
```
# 模块结构
```
── loading
   ├── index.js
   ├── index.module.scss
   └── loading.gif
```
# 环境判断
[taro环境判断](https://nervjs.github.io/taro/docs/env.html)


