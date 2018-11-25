import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderStyle = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  transition: all 0.3s;
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  margin-top: 9px;
  margin-left: 20px;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Addtion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  cursor: pointer;
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  transition: all;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  cursor: auto;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  :hover{
    color: #333;
    border-color: #b4b4b4;
  }
`;
