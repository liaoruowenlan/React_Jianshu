import React, { Component, Fragment } from "react";
import Header from "./common/header";
import { GlobalStyle } from "./style";

import { Icon } from "./statics/iconfont/iconfont";
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Icon />
        <Header />
      </Fragment>
    );
  }
}

export default App;
