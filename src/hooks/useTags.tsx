import { useState } from 'react';
import createId from 'utils/createId';

const defaultTags = [
  { id: createId(), name: '衣' },
  { id: createId(), name: '食' },
  { id: createId(), name: '住' },
  { id: createId(), name: '行' },
];
export type TagType = {
  id: number;
  name: string;
};
const useTags = () => {
  const [tags, setTags] = useState<TagType[]>(defaultTags);
  const findTag = (id: number) => tags.filter((item) => item.id === id)[0];
  return { tags, setTags, findTag };
};
export default useTags;
