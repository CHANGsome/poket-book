import useTags from 'hooks/useTags';
import styled from 'styled-components';

const Wrapper = styled.section`
  flex-grow: 1;
  padding: 10px;
  background-color: #fefefe;
  flex-shrink: 1;
  overflow: auto;
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
  const { tags, addTag } = useTags();
  const { tagIds: selectedTagIds, onChange: setSelectedTags } = props;
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
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};
export default TagsSection;
