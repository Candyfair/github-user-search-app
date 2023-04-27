import PropTypes from 'prop-types';

const Icon = ({ icon, size }) => (
  <svg width={size} height={size}>
    <path d={icon} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Icon;
