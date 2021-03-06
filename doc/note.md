## 开始的配置

- 1. 新建.env 文件，添加代码`BROWSER=none`，这样运行 yarn start 不会自动在浏览器打开一个窗口
- 2. .gitignore 文件下添加 /.vscode
- 3. 支持 scss，运行命令: yarn add node-sass@npm:dart-sass
- 4. 为了方便引用文件，在 tsconfig.json 文件的 compilerOptions 配置项里添加配置： "baseUrl": "src"
     此时引用路径可以直接写 dir/comp.tsx ，这个路径相当于 src/dir/comp.tsx
- 5. 安装 react router：npm i @types/react-router-dom -D
- 6. 安装 styled-components：
     npm install --save styled-components
     npm i --save-dev @types/styled-components
     运行 styled-components 相关代码报错，需要安装相关 babel：
     npm install --save-dev babel-plugin-styled-components
     配置 babel：新建 babel.config.json 文件，添加配置：
     ```javascript
          {
          "plugins": ["babel-plugin-styled-components"]
          }
     ```
     安装完后 sass 报错，解决方案：
     npm cache clear --force
     npm install sass
- 7. 安装支持 styled-components 语法的 vscode 插件：vscode-styled-components
- 8. 配置 react-router：
     安装 react-router：npm install react-router-dom
     安装 react-router 的 ts 声明文件：npm i @types/react-router-dom -D
- 9. 引入 svg：
     首先需要把 react 的配置文件弄出来：运行 npm run eject（这个命令是不可逆的，eject 了这些配置文件后就回不去了）
     此时会产生 webpack 配置文件：config/webpack.config.js
     安装 svg loader：
     npm install svg-sprite-loader -D
     npm install svgo-loader -D
     在 webpack.config.js 里面添加 svg 的配置项：
     ```javascript
     {
          test: /\.svg$/,
          use: [
               { loader: 'svg-sprite-loader', options: {} },
               { loader: 'svgo-loader', options: {} },
          ],
     },
     ```

## 笔记：

- 1. 底部导航固定，顶部内容撑开怎么设置?
     用 fix 布局，在手机端会有问题，这里用 flex 布局可以解决

```javascript
     <div className="container">
          <div className="content">...</div>
          <div className="nav">...</div>
     </div>

     .container{
          display: flex;
          min-height: 100vh;
          > .content{
               flex-grow: 1;
          }
     }
```

2. HTML 和 React 中的 input 标签 onChange 事件触发时机不一样

- HTML onChange：在鼠标移走的时候触发，早于 onBlur
- React onChange：在输入一个字的时候就触发

## 项目部署

- 1. 运行 yarn build，得到 build 目录
- 2. 新建分支 build，将 build 目录的内容上传到新分支
- 3. 在 package.json 里添加 homepage

## 添加脚本：每次修改的时候重新 build 很麻烦，写一个脚本将命令都写进去，重新部署的时候执行脚本就好了

- 在 scripts 目录下建立脚本 deploy.sh
- 在脚本文件 deploy.sh 里添加 shebang：#!/usr/bin/env bash
- 将命令都写到脚本里，命令与命令之间用&&分隔，保证上一个命令成功再执行下一个
- 给脚本文件添加可执行权限：chmod -X script/deploy.sh
- 运行脚本：sh scripts/deploy.sh
