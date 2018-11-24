import React, { Component } from "react";
import {
  HeaderStyle,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper
} from "./style";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  render() {
    return (
      <HeaderStyle>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              className={this.state.focused ? "focused" : ""}
            />
            <i className={this.state.focused ? "focused iconfont" : "iconfont"}>
              &#xe60b;
            </i>
          </SearchWrapper>
        </Nav>
        <Addtion>
          <Button className="reg">注册</Button>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>写文章
          </Button>
        </Addtion>
      </HeaderStyle>
    );
  }
  onFocus = () => {
    this.setState(() => ({ focused: true }));
  };
  onBlur = () => {
    this.setState(() => ({ focused: false }));
  };
}

export default index;
