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
