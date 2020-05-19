import styled from 'styled-components';

export const Container = styled.div<{ sport: string, active: boolean }>`
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 5px solid ${({ sport, theme }) => theme.reviews.colors[sport]};
  color: ${({ active, theme }) => active ? theme.colors.white : theme.reviews.colors.title};
  background-color: ${({ sport, active, theme }) => active && theme.reviews.colors[sport]};
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 50%;
`;

export const Info = styled.div`

`;


export const Sport = styled.div<{ sport: string, active: boolean }>`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ active, sport, theme }) => active ? theme.colors.white : theme.reviews.colors[sport]};
`;


export const Name = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.25;
`;
