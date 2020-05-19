import * as React from 'react';

import { ReviewType } from './types';

import { Carousel } from '../../components';

import { Review, Thumbnail } from './components';

import { Container, Header, Title, Pagination } from './styled';

type ReviewsPropsType = {
  reviews: ReviewType[],
};

export const Reviews: React.FC<ReviewsPropsType> = ({ reviews }) => {
  return (
    <Container>
      <Header>
        <Title>Отзывы</Title>
        <Pagination id="pagination" />
      </Header>
      <Carousel
        items={reviews}
        paginationSelector="#pagination"
        renderItem={(review) => <Review review={review} />}
        renderThumbnail={(review, active) => <Thumbnail review={review} active={active}/>}
      />
    </Container>
  );
};
