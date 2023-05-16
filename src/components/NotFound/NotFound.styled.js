import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundWrap = styled.div``;

export const Img = styled.img`
  margin: 40px auto;
`;

export const Message = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

export const Div = styled.div`
  width: 100px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  width: 100px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-weight: 500;
  background-color: #f3efc3df;
  border-color: rgba(0, 0, 0, 0.3);
  font: inherit;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    background-color: #336fb3df;
  }
`;

export const Span = styled.span`
  text-align: center;
  font-weight: bold;
`;
