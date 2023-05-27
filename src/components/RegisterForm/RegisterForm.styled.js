import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FormLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  color: inherit;
  &:hover {
    filter: drop-shadow(0px 4px 10px rgba(81, 219, 28, 0.9));
  }
`;
