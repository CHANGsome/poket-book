import styled from 'styled-components';

const Wrapper = styled.section`
  > ul {
    display: flex;
    background-color: #bbb;
    font-size: 18px;
    line-height: 60px;
    > li {
      flex: 1;
      text-align: center;
      &.selected::after {
        content: '';
        display: block;
        width: 100%;
        background-color: #333;
        height: 2px;
      }
    }
  }
`;

const CategorySection = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  );
};
export default CategorySection;
