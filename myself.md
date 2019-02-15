## webpack 安装
安装本地webpack
- npm install webpack webpack-cli -D
-D 表示development  开发环境 
创建src和dist文件
mkdir src 和mkdir dist
在src下建a.js和index.js
## 手动配置webpack 
- 创建一个webpack.config.js
- 默认配置文件的名字是webpack.config.js
--webpack 是node写出来的 

## 配置脚本 package.json 
- "build": "webpack --config webpack.config.js",
- "dev": "webpack-dev-server"
"scripts": {
    "build": "webpack --config webpack.config.js",
    "dev": "webpack-dev-server"
  },

 - 运行 npx webpack
   dist下产生main.js
在dist下建index.html 引入main.js
例：<script src="./main.js"></script>
（双击index。html查看后台）
## 配置入口出口及打包环境(webpack.config.js)
- entry 入口 可以说相对路径
- output 出口 输出
  - path 输出路径 必须是绝对路径
  - filename 输出的名字
- 这样就可以通过npm run build执行相关的命令
```
- mode 的值 一般是2个值 development和production
1. development开发环境
2. production生产环境 如果不配置，默认是生产环境
```
- npm run build

自主生成 bundle.js
##开发服务器配置
- 运行 yarn add webpack-dev-server -D
-继续在webpack.config.js的module.exports中配置
- port:3000, #端口号
- progress:true, #显示进度条
- contentBase:'./dist', #目录
- compress:true  #是否开启gzip压缩
执行 npm run dev