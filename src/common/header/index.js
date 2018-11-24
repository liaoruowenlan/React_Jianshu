import React, { Component } from "react";
import {
  HeaderStyle,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button
} from "./style";
class index extends Component {
  render() {
    return (
      <HeaderStyle>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch />
        </Nav>
        <Addtion>
          <Button className="reg">注册</Button>
          <Button className="writting">写文章</Button>
        </Addtion>
      </HeaderStyle>
    );
  }
}

export default index;
