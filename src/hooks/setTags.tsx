import { useState } from 'react';
import createId from 'utils/createId';

export type TagType = {
  id: number;
  name: string;
};
const useTags = () => {
  const [tags, setTags] = useState<TagType[]>([
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行' },
  ]);
  return { tags, setTags };
};
export default useTags;
