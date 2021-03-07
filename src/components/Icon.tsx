import classnames from 'classnames';
require('icons/money.svg');
require('icons/tag.svg');
require('icons/chart.svg');
require('icons/right.svg');
require('icons/left.svg');

type PropsType = {
  name: string;
} & React.SVGAttributes<SVGElement>;

const Icon = (props: PropsType) => {
  const { name, children, className, ...rest } = props;
  return (
    <svg className={classnames('icon', className)} {...rest}>
      <use xlinkHref={'#' + name} />
    </svg>
  );
};

export default Icon;
