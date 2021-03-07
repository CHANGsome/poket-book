import styled from 'styled-components';

const InputWrapper = styled.label`
  display: flex;
  align-items: center;

  > .label {
    padding: 0 20px;
  }
  > input {
    border: none;
    background-color: inherit;
    flex: 1;
    height: 44px;
    padding: 5px;
  }
`;
type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<InputProps> = (props) => {
  const { label, children, ...rest } = props;
  return (
    <InputWrapper>
      <div className="label">{label}</div>
      <input {...rest} />
    </InputWrapper>
  );
};
export default Input;
