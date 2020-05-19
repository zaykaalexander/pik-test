import * as React from 'react';

import { theme } from '../../styled';

import { IconType } from './types';

export const CaretRight: React.FC<IconType> = ({ width, height, fill, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 492 492" {...props}>
      <path
        fill={fill}
        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
      />
    </svg>
  );
};

CaretRight.defaultProps = {
  width: '14px',
  height: '14px',
  fill: theme.colors.black,
};
