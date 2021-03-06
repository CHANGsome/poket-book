import Layout from 'components/Layout';
import React, { useState } from 'react';
import TagsSection from './components/TagsSection';
import NotesSection from './components/NotesSection';
import CategorySection, { CategoryType } from './components/CategorySection';
import NumberPadSection from './components/NumberPadSection';
import styled from 'styled-components';

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type MoneyProps = {
  tags: string[];
  note: string;
  category: CategoryType;
  amount: number;
};
const Money: React.FC = () => {
  const [selectedData, setSelectedData] = useState<MoneyProps>({
    tags: [],
    note: '',
    category: '-',
    amount: 0,
  });
  const onChangeData = (obj: Partial<MoneyProps>) => {
    setSelectedData({
      ...selectedData,
      ...obj,
    });
  };
  return (
    <MoneyLayout>
      <TagsSection
        tags={selectedData.tags}
        onChange={(tags) => {
          onChangeData({ tags });
        }}
      />
      <NotesSection
        note={selectedData.note}
        onChange={(note) => onChangeData({ note })}
      />
      <CategorySection
        category={selectedData.category}
        onChange={(category) => {
          onChangeData({ category });
        }}
      />
      <NumberPadSection
        amount={selectedData.amount}
        onChange={(amount) => {
          onChangeData({ amount });
        }}
      />
    </MoneyLayout>
  );
};
export default Money;
