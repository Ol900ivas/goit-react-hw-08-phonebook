import PropTypes from 'prop-types';
import { GeneralWrap } from './Wrap.styled';

const Wrap = ({ children }) => {
  return <GeneralWrap>{children}</GeneralWrap>;
};

Wrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrap;
