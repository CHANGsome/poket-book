require('icons/money.svg');
require('icons/tag.svg');
require('icons/chart.svg');
type PropsType = {
  name: string;
};

const Icon = (props: PropsType) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name} />
    </svg>
  );
};

export default Icon;
