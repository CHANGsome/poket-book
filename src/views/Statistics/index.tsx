import Layout from 'components/Layout';
import useRecords from 'hooks/useRecords';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MoneyProps } from 'views/Money';
import CategorySection, {
  CategoryType,
} from 'views/Money/components/CategorySection';
import dayjs from 'dayjs';
import useTags from 'hooks/useTags';

const CategoryWrapper = styled.div`
  background-color: #fff;
`;
const Time = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 16px 16px;
`;
const Item = styled.div`
  background-color: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  .note {
    color: #999;
    margin-left: 16px;
  }
`;
const Statistics: React.FC = () => {
  const [category, setCategory] = useState<CategoryType>('-');
  const { records } = useRecords();
  const { findTag } = useTags();
  const selectedRecords = records.filter((r) => r.category === category);
  let hash: { [key: string]: MoneyProps[] } = {};
  selectedRecords.forEach((r) => {
    const key = dayjs(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const recordsList = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {
      return 0;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          category={category}
          onChange={(category) => {
            setCategory(category);
          }}
        />
      </CategoryWrapper>
      {recordsList.map(([date, record], index) => {
        return (
          <div key={index}>
            <Time>{date}</Time>
            {record &&
              record.map((r) => {
                return (
                  <Item key={r.createdAt}>
                    <div className="tags one-line">
                      {r.tagIds.map((id) => findTag(id)?.name).join(', ')}
                      {r.note && <span className="note">{r.note}</span>}
                    </div>
                    <div>{'¥ ' + r.amount}</div>
                  </Item>
                );
              })}
          </div>
        );
      })}
    </Layout>
  );
};
export default Statistics;
