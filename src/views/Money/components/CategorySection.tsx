import { useState } from 'react';
import styled from 'styled-components';

const CategoryUl = styled.ul`
  display: flex;
  background-color: inherit;
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
`;
export type CategoryType = '-' | '+';
type CategoryProps = {
  category: CategoryType;
  onChange: (category: CategoryType) => void;
};
const CategorySection: React.FC<CategoryProps> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' };
  // type Keys = keyof typeof categoryMap; // {'-':string;'+':string}
  const [categoryList] = useState<CategoryType[]>(['-', '+']);
  const { category, onChange: setCategory } = props;
  return (
    <CategoryUl>
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
    </CategoryUl>
  );
};
export default CategorySection;
