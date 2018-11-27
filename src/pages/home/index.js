import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { connect } from "react-redux";

import Topic from "./component/Topic";
import Recommend from "./component/Recommend";
import Writer from "./component/Writer";
import List from "./component/List";

class Home extends Component {
  render() {
    const NewList = this.props.topicList.toJS();
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            alt="img"
            src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic NewList={NewList} />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    topicList: state.getIn(["home", "topicList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
