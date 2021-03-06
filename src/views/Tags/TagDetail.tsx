import useTags from 'hooks/useTags';
import { useParams } from 'react-router';

type PramasType = {
  id: string;
};
const TagDetail: React.FC = () => {
  const { id } = useParams<PramasType>();
  const { findTag } = useTags();
  const currentTag = findTag(parseInt(id));
  return <div>{currentTag.name}</div>;
};
export default TagDetail;
