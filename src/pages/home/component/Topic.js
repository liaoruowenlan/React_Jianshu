import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";

class Topic extends Component {
  componentDidMount() {
    console.log(this.props.NewList, "aaa");
  }

  getTopicItem = () => {
    return this.props.NewList.map(item => (
      <TopicItem key={item.title}>
        <img className="topic-pic" alt={item.imgUrl} src={item.imgUrl} />
        {item.title}
      </TopicItem>
    ));
  };

  render() {
    return <TopicWrapper>{this.getTopicItem()}</TopicWrapper>;
  }
}

export default Topic;
