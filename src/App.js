import React, { Component, Fragment } from "react";
import Header from "./common/header";
import { GlobalStyle } from "./style";
import store from "./store/index";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Icon } from "./statics/iconfont/iconfont";

import Home from "./pages/home";
import Detail from "./pages/detail";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Icon />
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
