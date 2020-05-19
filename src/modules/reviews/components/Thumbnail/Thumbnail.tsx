import * as React from 'react';

import { ReviewType } from '../../types';

import { Container, Avatar, Info, Sport, Name } from './styled';

type ThumbnailPropsType = {
  review: ReviewType,
  active: boolean,
};

export const Thumbnail = React.memo<ThumbnailPropsType>(({ review: { author, sport, short_review }, active }) => {
  return (
    <Container active={active} sport={sport.name}>
      <Avatar src={author.avatar} alt={`${author.last_name} ${author.first_name}`} />
      <Info>
        <Sport active={active} sport={sport.name}>{sport.name}</Sport>
        <Name>
          <span>{author.last_name}</span>
          <span>{author.first_name}</span>
        </Name>
      </Info>
    </Container>
  );
});
