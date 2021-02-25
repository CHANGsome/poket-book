## 开始的配置

- 1. 新建.env 文件，添加代码`BROWSER=none`，这样运行 yarn start 不会自动在浏览器打开一个窗口
- 2. .gitignore 文件下添加 /.vscode
- 3. 支持 scss，运行命令: yarn add node-sass@npm:dart-sass
- 4. 为了方便引用文件，在 tsconfig.json 文件的 compilerOptions 配置项里添加配置： "baseUrl": "src"
     此时引用路径可以直接写 dir/comp.tsx ，这个路径相当于 src/dir/comp.tsx
