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
  const addTag = () => {
    const newTag = window.prompt('新的标签名为');
    if (newTag !== null && newTag !== '') {
      setTags([...tags, { id: createId(), name: newTag }]);
    }
  };
  const updatTag = (id: number, name: string) => {
    setTags(tags.map((tag) => (tag.id === id ? { id, name } : tag)));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  return { tags, setTags, findTag, addTag, updatTag, deleteTag };
};
export default useTags;
