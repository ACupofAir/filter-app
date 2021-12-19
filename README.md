### 编译这个项目

- 首先我使用的 node 版本和 npm 版本如下，如果不同可能会编译失败，建议使用 nvm 来控制一下 node 版本

  ```shell
  ❯ node --version
  v16.13.1

  ❯ npm --version
  8.1.2
  ```

- 在项目根目录下执行
  ```shell
  npm install
  npm start
  ```
- 关闭 devtool

  为了方便调试，我默认开启了 devtool，在`main.js`中注释掉这行即可,若要在运行时开启点击顶部菜单栏view->toggle devtool，默认快捷键为`Ctrl+Shift+i`

  ```javascript
  mainWindow.webContents.openDevTools();
  ```
