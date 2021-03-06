import useTags from 'hooks/setTags';
import styled from 'styled-components';

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
  tags: string[];
  onChange: (tags: string[]) => void;
};
const TagsSection: React.FC<TagsProps> = (props) => {
  const { tags, setTags } = useTags();
  const { tags: selectedTags, onChange: setSelectedTags } = props;
  const onAddTags = () => {
    const newTag = window.prompt('新的标签名为');
    if (newTag !== null) {
      setTags([...tags, newTag]);
    }
  };
  const onToggleTags = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter((item: string) => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag, index) => (
          <li
            key={index}
            onClick={() => {
              onToggleTags(tag);
            }}
            className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTags}>新增标签</button>
    </Wrapper>
  );
};
export default TagsSection;
