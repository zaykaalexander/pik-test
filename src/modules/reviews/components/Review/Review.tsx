import * as React from 'react';

import { ReviewType } from '../../types';

import {
  Container,
  Left,
  Right,
  Image,
  Label,
  Name,
  Goal,
  GoalIcon,
  Caption,
  RIcon,
  VideoIcon,
  Text,
  More,
} from './styled';

type ReviewPropsType = {
  review: ReviewType,
};

export const Review = React.memo<ReviewPropsType>(({ review: { author, sport, image, video, short_review } }) => {
  return (
    <Container sport={sport.name}>
      <Left>
        <Image src={image} alt={`${author.last_name} ${author.first_name}`} />
        <Label>
          {video && <VideoIcon />}
          <Name>
            <span>{author.last_name}</span>
            <span>{author.first_name}</span>
          </Name>
        </Label>
      </Left>
      <Right>
        <Goal>
          <Caption>
            <GoalIcon />
            Цель
          </Caption>
          {sport.goal}
        </Goal>
        <Text>{short_review}</Text>
        <More sport={sport.name} onClick={() => {}}>Читать целиком</More>
        <RIcon />
      </Right>
    </Container>
  )
});
