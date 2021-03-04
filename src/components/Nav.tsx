import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';
/**
 * import money from 'icons/money.svg';
   console.log(money);
   这里使用import导入money，如果不写console.log，就没有地方用到money，
   此时react 为了优化（TreeShaking），会把那行代码删掉，所以必须要用一下导入进来的money下面的svg才能显示
   为了避免无意义的代码，这里使用require将svg引进来
 */

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      flex: 1;
      text-align: center;
      padding: 4px;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.active {
          color: red;
          .icon {
            fill: red;
          }
        }
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="active">
            <Icon name="tag" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="active">
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="active">
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
