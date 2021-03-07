import Button from 'components/Button';
import Center from 'components/Center';
import Icon from 'components/Icon';
import Layout from 'components/Layout';
import useTags from 'hooks/useTags';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ol`
  background-color: #fff;
  > li {
    margin-left: 16px;
    padding-right: 16px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > .icon {
      width: 24px;
      height: 24px;
    }
  }
`;

const Tags: React.FC = () => {
  const { tags } = useTags();
  return (
    <Layout>
      <List>
        {tags.map((tag, index) => (
          <li key={index}>
            <Link to={`/tags/${tag.id}`}>
              <span className="one-line">{tag.name} </span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </List>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
};
export default Tags;
