import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      flex: 1;
      text-align: center;
      padding: 16px;
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;