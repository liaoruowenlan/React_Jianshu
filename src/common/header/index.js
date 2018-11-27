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
    const {
      focused,
      list,
      page,
      totalPage,
      onMouseEnter,
      onMouseLeave,
      mouseIn,
      getPageList
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => getPageList(page, totalPage)}>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focused, onFocus, onBlur, list } = this.props;
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
              onFocus={() => onFocus(list)}
              onBlur={onBlur}
              className={focused ? "focused" : ""}
            />
            <i className={focused ? "focused iconfont" : "iconfont"}>
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
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    onBlur() {
      dispatch(actionCreators.searchBlue());
    },
    onMouseEnter() {
      dispatch(actionCreators.onMouseEnter());
    },
    onMouseLeave() {
      dispatch(actionCreators.onMouseLeave());
    },
    getPageList(page, totalPage) {
      page < totalPage
        ? dispatch(actionCreators.changePage(page + 1))
        : dispatch(actionCreators.changePage(1));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
