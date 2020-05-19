import styled from 'styled-components';
import { rgba } from 'polished';

import { Icons } from '../../../../components';

export const Container = styled.div<{ sport: string }>`
  display: flex;
  flex-direction: row;
  background-color: ${({ sport, theme }) => theme.reviews.colors[sport]};
`;

const Row = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
`;

export const Left = styled(Row)`

`;

export const Right = styled(Row)`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 30px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Label = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const Goal = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const GoalIcon = styled(Icons.Goal)`
  margin-right: 3px;
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => rgba(theme.colors.white, 0.5)};
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.div`
  margin-top: auto;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
`;

export const RIcon = styled(Icons.R)`
  position: absolute;
  right: -65px;
  bottom: 0;
  opacity: 0.05;
`;

export const VideoIcon = styled(Icons.Video)`
  margin-right: 17px;
  cursor: pointer;
`;

export const More = styled.button<{ sport: string }>`
  align-self: flex-start;
  height: 40px;
  margin-top: 20px;
  padding: 10px 16px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: 0;
  cursor: pointer;
  
  &:hover {
    color: ${({ sport, theme }) => theme.reviews.colors[sport]};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
