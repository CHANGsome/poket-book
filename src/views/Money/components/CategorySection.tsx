import { useState } from 'react';
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

const CategorySection: React.FC = () => {
  const categoryMap = { '-': '支出', '+': '收入' };
  type Keys = keyof typeof categoryMap; // {'-':string;'+':string}
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const [category, setCategory] = useState<string>('-');
  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={c === category ? 'selected' : ''}
            key={c}
            onClick={() => {
              setCategory(c);
            }}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default CategorySection;
