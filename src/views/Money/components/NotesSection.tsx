import Input from 'components/Input';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #eee;
  padding: 8px 0;
`;
type NoteProps = {
  note: string;
  onChange: (note: string) => void;
};
const NotesSection: React.FC<NoteProps> = (props) => {
  const { note, onChange: setNote } = props;
  return (
    <Wrapper>
      <Input
        label="标签"
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
