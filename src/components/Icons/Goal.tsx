import * as React from 'react';

import { theme } from '../../styled';

import { IconType } from './types';

export const Goal: React.FC<IconType> = ({ width, height, fill, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 18" {...props}>
      <g fill={fill} strokeWidth="1" fillRule="evenodd">
        <path
          d="M6.9719,17.4766 C4.0019,17.4766 1.5859,15.0606 1.5859,12.0896 C1.5859,9.1206 4.0019,6.7046 6.9719,6.7046 C9.9429,6.7046 12.3589,9.1206 12.3589,12.0896 C12.3589,15.0606 9.9429,17.4766 6.9719,17.4766"
        />
        <polygon
          points="13.842 0.0508 8.075 0.0508 7.377 1.6568 9.091 5.9178 11.291 5.9178"
        />
        <polygon
          points="8.3176 5.8662 2.5506 5.8662 0.0006 0.0002 5.7666 0.0002"
        />
      </g>
    </svg>
  );
};

Goal.defaultProps = {
  width: '14px',
  height: '18px',
  fill: theme.colors.white,
};
