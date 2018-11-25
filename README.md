### 使用 React 开发简书。

实现 react 项目从 0 到 1 的开发。

整个项目使用的是 styled-components 来管理全局的 css 样式。

使用的是 react-redux 来做全局的状态管理。

文字图标则是使用了阿里的 iconfont 文字图标。

添加 Redux DevTools extension 来做 Redux 的调试的调试工具。

使用 redux 的 combineReducers 来管理模块下的 reducer，而不是整个项目的 reducer 都放在一起。增加代码可读性、项目目录清晰。

使用 immutable 保护数据，避免不小心改变 state 里面的数据。

使用 redux-thunk 来做异步 action 操作。

### styled-components 是什么？

- styled-components 是一个常用的 css in js 类库。和所有同类型的类库一样，通过 js 赋能解决了原生 css 所不具备的能力，比如变量、循环、函数等。

#### 收获：

- <b> styled-components </b> 的使用。
- <b> box-sizing: border-box </b> 的使用。 //盒模型的改变
- <b> iconfont </b> 字体图标的时候用。
- <b> react-redux </b> 项目全局状态管理。
- <b> Redux DevTools extension </b> redux 调试工具。
- <b> combineReducers </b> 全局项目管理 reducer。
- <b> immutable </b> 保护数据。
- <b> axios </b> 获取异步数据。
- <b> redux-thunk </b> 在action函数页面进行业务逻辑封装。