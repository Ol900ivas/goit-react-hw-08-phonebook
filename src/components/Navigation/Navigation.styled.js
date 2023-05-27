import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  color: #2a363b;
  &.active {
    color: #3fa417;
  }
  &:hover {
    filter: drop-shadow(0px 4px 10px rgba(81, 219, 28, 0.9));
  }
`;

export const Nav = styled.nav`
  gap: 8px;
`;
