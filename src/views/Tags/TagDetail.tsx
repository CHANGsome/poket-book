import Button from 'components/Button';
import Center from 'components/Center';
import Icon from 'components/Icon';
import Input from 'components/Input';
import Layout from 'components/Layout';
import useTags from 'hooks/useTags';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  line-height: 24px;
  padding: 16px;
  background-color: #fff;
  color: #777;
  > span {
    margin: 0 auto;
    position: relative;
    left: -24px;
  }
  > .icon {
    width: 24px;
    height: 24px;
  }
`;
const InputWrapper = styled.div`
  background-color: #fff;
  margin-top: 8px;
`;
type PramasType = {
  id: string;
};
const TagDetail: React.FC = () => {
  const { id } = useParams<PramasType>();
  const { findTag, updatTag, deleteTag } = useTags();
  const currentTag = findTag(parseInt(id));
  const history = useHistory();
  return (
    <Layout>
      <Header>
        <Icon
          name="left"
          onClick={() => {
            history.goBack();
          }}
        />
        <span>编辑标签</span>
      </Header>
      <InputWrapper>
        <Input
          label="标签名"
          value={currentTag?.name || ''}
          placeholder="标签名"
          onChange={(e) => {
            updatTag(currentTag.id, e.target.value);
          }}
        />
      </InputWrapper>
      <Center>
        <Button
          onClick={() => {
            deleteTag(currentTag!.id);
            window.history.back();
          }}
        >
          删除标签
        </Button>
      </Center>
    </Layout>
  );
};
export default TagDetail;
