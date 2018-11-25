import React, { Component, Fragment } from "react";
import Header from "./common/header";
import { GlobalStyle } from "./style";
import store from "./store/index";
import { Provider } from "react-redux";

import { Icon } from "./statics/iconfont/iconfont";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Icon />
          <Header />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
