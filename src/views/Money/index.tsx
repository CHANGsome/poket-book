import Layout from 'components/Layout';
import React from 'react';
import TagsSection from './components/TagsSection';
import NotesSection from './components/NotesSection';
import CategorySection from './components/CategorySection';
import NumberPadSection from './components/NumberPadSection';
import styled from 'styled-components';

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
export default function Money() {
  return (
    <MoneyLayout>
      <TagsSection />
      <NotesSection />
      <CategorySection />
      <NumberPadSection />
    </MoneyLayout>
  );
}
