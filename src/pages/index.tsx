import * as React from 'react';
import { NextPage } from 'next';

import { Reviews, ReviewType } from '../modules/reviews';

import reviewsData from '../reviews.json';

type IndexPageProps = {
  reviews: ReviewType[],
}

const IndexPage: NextPage<IndexPageProps> = ({ reviews }) => {
  return <Reviews reviews={reviews} />;
};

IndexPage.getInitialProps = () => {
  return {
    reviews: reviewsData as ReviewType[],
  };
};

export default IndexPage;
