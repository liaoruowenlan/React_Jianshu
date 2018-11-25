import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  HeaderStyle,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

class Header extends Component {
  getListArea = () => {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
          {
            this.props.list.map((item)=>{
              return(
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              )
            })
          }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
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
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
              className={this.props.focused ? "focused" : ""}
            />
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>
              &#xe60b;
            </i>
            {this.getListArea()}
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
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    onBlur() {
      dispatch(actionCreators.searchBlue());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
