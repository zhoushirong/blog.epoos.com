---
layout: default
title: webpack学习
date: 2016/12/26
category: 工具
tag: webpack
---

## {{page.title}}

最近准备入手小游戏，队友们的技术栈用到了gulp+webpack+es6，这里学习一下这些技术。
webpack是一个前端资源加载以及打包工具。只需要简单的配置即可实现前端各种工程化的操作。
webpack还可以与gulp等其它工程化工具结合使用。


### webpack的loader：

处理样式，转成css，如：less-loader, sass-loader

图片处理，如: url-loader, file-loader。两个都必须用上。否则超过大小限制的图片无法生成到目标文件夹中

处理js，将es6或更高级的代码转成es5的代码。如： babel-loader，babel-preset-es2015，babel-preset-react

将js模块暴露到全局，如果expose-loader

### webpack的plugin

代码热替换, HotModuleReplacementPlugin

生成html文件，HtmlWebpackPlugin

将css成生文件，而非内联，ExtractTextPlugin

报错但不退出webpack进程，NoErrorsPlugin

代码丑化，UglifyJsPlugin，开发过程中不建议打开

多个 html共用一个js文件(chunk)，可用CommonsChunkPlugin

清理文件夹，Clean

调用模块的别名ProvidePlugin，例如想在js中用$，如果通过webpack加载，需要将$与jQuery对应起来


通过DefinePlugin可以定义一些全局的变量，我们可以在模块当中直接使用这些变量，无需作任何声明
















