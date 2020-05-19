import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  padding: 50px 0;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center; 
  margin-bottom: 22px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Pagination = styled.div`
  margin-left: auto;
`;
