import React from "react";
import { connect } from "react-redux";
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

const Header = props => {
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
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            className={props.focused ? "focused" : ""}
          />
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
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
};

const mapStateToProps = state => {
  return {
    focused: state.header.focused
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFocus() {
      const action = {
        type: "search_foucus"
      };
      dispatch(action);
    },
    onBlur() {
      const action = {
        type: "search_Blur"
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
