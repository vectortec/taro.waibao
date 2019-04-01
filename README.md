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
<img src={xxx} />
// 或者
<img src={require('./xxx.png')} />
```

项目中，以文件名为模块，该模块全部文件（index.scss）， js（index.js），资源（图片）等都在该模块内，以相对路径引用，对模块外的资源 以绝对路径引用

