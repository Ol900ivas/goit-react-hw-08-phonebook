import styled from '@emotion/styled';

// export const Header = styled.header`
//   display: flex;
// `;
export const Header = styled.header`
  // z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 40px;

  box-shadow: 0 5px 4px -4px rgba(0, 0, 0, 0.3),
    0px 1px 1px -4px rgba(0, 0, 0, 0.14);

  > nav {
    display: flex;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
