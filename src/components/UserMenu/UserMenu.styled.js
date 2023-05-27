import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  // margin: -20px;
`;

export const Text = styled.p`
  // text-decoration: none;
  color: var(--dark-text-color);
  font-size: 20px;
  // font-style: bold;
`;

export const Name = styled.span`
  // text-decoration: none;
  color: var(--dark-text-color);
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
`;

export const Btn = styled.button`
  display: block;
  font-size: 1em;
  padding: 10px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid #59b969;
  box-shadow: 0 1px 0 0 #60bd49 inset;
  background-image: linear-gradient(to bottom, #63e651, #42753e);
  :hover {
    background-image: linear-gradient(to bottom, #51db1c, #6ba061);
  }
`;
