import Layout from 'components/Layout';
import React, { useState } from 'react';
import TagsSection from './components/TagsSection';
import NotesSection from './components/NotesSection';
import CategorySection, { CategoryType } from './components/CategorySection';
import NumberPadSection from './components/NumberPadSection';
import styled from 'styled-components';
import useRecords from 'hooks/useRecords';

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

export type MoneyProps = {
  tagIds: number[];
  note: string;
  category: CategoryType;
  amount: number;
  createdAt?: string;
};
const defaultRecord: MoneyProps = {
  tagIds: [],
  note: '',
  category: '-',
  amount: 0,
};
const Money: React.FC = () => {
  const [selectedData, setSelectedData] = useState<MoneyProps>(defaultRecord);
  const { addRecord } = useRecords();
  const onChangeData = (obj: Partial<MoneyProps>) => {
    setSelectedData({
      ...selectedData,
      ...obj,
    });
  };
  const submit = () => {
    if (selectedData.amount <= 0) {
      return alert('不能为0');
    }
    if (selectedData.tagIds.length === 0) {
      return alert('一定要选标签');
    }
    addRecord({ ...selectedData, createdAt: new Date().toISOString() });
    alert('保存成功');
    setSelectedData(defaultRecord);
  };
  return (
    <MoneyLayout>
      {JSON.stringify(selectedData)}
      <TagsSection
        tagIds={selectedData.tagIds}
        onChange={(tagIds) => {
          onChangeData({ tagIds });
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
        onOk={submit}
      />
    </MoneyLayout>
  );
};
export default Money;
