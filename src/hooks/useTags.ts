import { useEffect, useState } from 'react';
import createId from 'utils/createId';
import useUpdate from './useUpdate';

export type TagType = {
  id: number;
  name: string;
};
const useTags = () => {
  const [tags, setTags] = useState<TagType[]>([]);

  useEffect(() => {
    let initTag = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    if (initTag.length === 0) {
      initTag = [
        { id: createId(), name: '衣' },
        { id: createId(), name: '食' },
        { id: createId(), name: '住' },
        { id: createId(), name: '行' },
      ];
    }
    setTags(initTag);
  }, []); // 组件挂载时执行
  useUpdate(() => {
    window.localStorage.setItem('tagList', JSON.stringify(tags));
  }, tags);
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
