import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  > .output {
    padding: 0 20px;
    line-height: 70px;
    text-align: right;
    font-size: 38px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    > button {
      float: left;
      border: none;
      width: 25%;
      height: 64px;
      font-size: 16px;
      outline: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12),
      &:nth-child(14) {
        background: #9a9a9a;
      }
    }
  }
`;

const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState<string>('0');
  const setOutput = (text: string) => {
    if (text.length <= 20) {
      _setOutput(text);
    } else {
      _setOutput(text.slice(0, 20));
    }
  };
  const handleClickButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent || '';
    if ('0123456789'.indexOf(text) >= 0) {
      if (output === '0') {
        setOutput(text);
      } else {
        setOutput(output + text);
      }
    } else {
      switch (text) {
        case '.':
          if (output.indexOf('.') < 0) {
            setOutput(output + text);
          }
          break;
        case '删除':
          setOutput(output.slice(0, -1) || '0');
          break;
        case '清空':
          setOutput('0');
          break;
        case 'OK':
          console.log('ok');
      }
    }
  };

  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfloat" onClick={handleClickButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};
export default NumberPadSection;
