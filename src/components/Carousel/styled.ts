import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`

`;

export const Content = styled.div`
  
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Thumbnail = styled.div`
  flex: 1;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => rgba(theme.colors.black, 0.15)};
  
  &:last-child {
    border-right: 0;
  }
`;

export const Pagination = styled.div`
  display: flex;
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.black, 0.15)};
  overflow: hidden;
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    outline: none;
    background: none;
    border: 0;
    border-right: 1px solid ${({ theme }) => rgba(theme.colors.black, 0.15)};
    cursor: pointer;
    
    &:last-child {
      border-right: 0;
    }
  }
`;
