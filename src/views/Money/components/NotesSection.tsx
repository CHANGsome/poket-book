import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  background-color: #eee;
  padding: 20px 0;
  align-items: center;
  font-size: 15px;

  > .label {
    padding: 0 20px;
  }
  > input {
    border: none;
    background-color: inherit;
    flex: 1;
    padding: 5px;
  }
`;
type NoteProps = {
  note: string;
  onChange: (note: string) => void;
};
const NotesSection: React.FC<NoteProps> = (props) => {
  const { note, onChange: setNote } = props;
  return (
    <Wrapper>
      <div className="label">标签</div>
      <input
        placeholder="请填写备注"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />
    </Wrapper>
  );
};
export default NotesSection;
