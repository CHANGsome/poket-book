import useTags from 'hooks/setTags';
import styled from 'styled-components';
import createId from 'utils/createId';

const Wrapper = styled.section`
  flex-grow: 1;
  padding: 10px;
  > ol {
    > li {
      display: inline-block;
      line-height: 30px;
      background-color: #ccc;
      border-radius: 18px;
      padding: 0 20px;
      margin: 10px;
      &.selected {
        background-color: #f60;
      }
    }
  }
  > button {
    margin: 10px;
    border: none;
    color: #999;
    font-size: 16px;
    border-bottom: 1px solid #111;
    letter-spacing: 1px;
  }
`;
type TagsProps = {
  tagIds: number[];
  onChange: (tags: number[]) => void;
};
const TagsSection: React.FC<TagsProps> = (props) => {
  const { tags, setTags } = useTags();
  const { tagIds: selectedTagIds, onChange: setSelectedTags } = props;
  const onAddTags = () => {
    const newTag = window.prompt('新的标签名为');
    if (newTag !== null) {
      setTags([...tags, { id: createId(), name: newTag }]);
    }
  };
  const onToggleTags = (tagId: number) => {
    if (selectedTagIds.indexOf(tagId) >= 0) {
      setSelectedTags(selectedTagIds.filter((item: number) => item !== tagId));
    } else {
      setSelectedTags([...selectedTagIds, tagId]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              onToggleTags(tag.id);
            }}
            className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={onAddTags}>新增标签</button>
    </Wrapper>
  );
};
export default TagsSection;
