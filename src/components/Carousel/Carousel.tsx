import * as React from 'react';

import { usePortal } from '../../hooks';

import { Icons } from '../Icons';

import { Container, Content, Thumbnails, Thumbnail, Pagination } from './styled';

type CarouselPropsType<T> = {
  items: T[];
  paginationSelector?: string,
  renderItem: (item: T) => React.ReactNode,
  renderThumbnail: (item: T, active: boolean) => React.ReactNode,
};

export function Carousel<T extends object>({ items, renderItem, paginationSelector, renderThumbnail }: CarouselPropsType<T>) {
  const [active, setActive] = React.useState(0);

  const setActiveItem = (index) => () => setActive(index);

  const prevItem = () => setActive(active === 0 ? items.length - 1 : active - 1);
  const nextItem = () => setActive(active === items.length - 1 ? 0 : active + 1);

  const paginationButtons = usePortal(
    <Pagination>
      <button type="button" onClick={prevItem}>
        <Icons.CaretLeft />
      </button>
      <button type="button" onClick={nextItem}>
        <Icons.CaretRight />
      </button>
    </Pagination>,
    paginationSelector,
  );


  return (
    <Container>
      <Content>
        {renderItem(items[active])}
      </Content>
      <Thumbnails>
        {items.map((item, index) => (
          <Thumbnail key={index} onClick={setActiveItem(index)}>
            {renderThumbnail(item, active === index)}
          </Thumbnail>
        ))}
      </Thumbnails>
      {paginationButtons}
    </Container>
  );
}
