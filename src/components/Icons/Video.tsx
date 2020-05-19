import * as React from 'react';

import { theme } from '../../styled';

import { IconType } from './types';

export const Video: React.FC<IconType> = ({ width, height, fill, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 91 70" {...props}>
      <g stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd">
        <path
          d="M20.8358578,2.95802889 C10.8070356,2.95802889 2.64674667,11.1183178 2.64674667,21.14714 L2.64674667,49.0492956 C2.64674667,59.0695622 10.79848,67.2298511 20.8170356,67.2384067 L70.0032356,67.2880289 C80.0303467,67.2880289 88.1906356,59.12774 88.1906356,49.0989178 L88.1906356,21.14714 C88.1906356,11.1183178 80.0303467,2.95802889 70.0015244,2.95802889 L20.8358578,2.95802889 Z M20.8136133,69.8854956 C9.33719111,69.8752289 -0.000342222222,60.5274289 -0.000342222222,49.0492956 L-0.000342222222,21.14714 C-0.000342222222,9.65874 9.34745778,0.31094 20.8358578,0.31094 L70.0015244,0.31094 C81.4899244,0.31094 90.8377244,9.65874 90.8377244,21.14714 L90.8377244,49.0989178 C90.8377244,60.5873178 81.4899244,69.9351178 70.0015244,69.9351178 L20.8136133,69.8854956 Z"
        />
        <path
          d="M20.9729178,8.77820222 C14.1010956,8.77820222 8.51089556,14.3684022 8.51089556,21.2385133 L8.51089556,48.9592911 C8.51089556,55.8208467 14.0942511,61.4127578 20.9592289,61.4196022 L69.8665178,61.4675133 C76.7366289,61.4675133 82.3268289,55.8773133 82.3268289,49.0072022 L82.3268289,21.2385133 C82.3268289,14.3684022 76.7366289,8.77820222 69.8648067,8.77820222 L20.9729178,8.77820222 Z M69.8648067,64.1146022 L20.9558067,64.0666911 C12.6346733,64.0564244 5.86551778,57.2804244 5.86551778,48.9592911 L5.86551778,21.2385133 C5.86551778,12.9088244 12.6415178,6.13111333 20.9729178,6.13111333 L69.8648067,6.13111333 C78.1962067,6.13111333 84.9722067,12.9088244 84.9722067,21.2385133 L84.9722067,49.0072022 C84.9722067,57.3368911 76.7962067,64.1146022 68.4648067,64.1146022 L69.8648067,64.1146022 Z"
        />
        <path
          d="M21.2268467,14.6551844 C17.5017578,14.6551844 14.47138,17.6855622 14.47138,21.4106511 L14.47138,48.7857844 C14.47138,52.5074511 17.4983356,55.53954 21.2200022,55.5429622 L68.20198,55.5908733 L69.6105356,55.5908733 C71.4140467,55.5908733 73.1080467,54.8893178 74.3845356,53.6162511 C75.6627356,52.3397622 76.3660022,50.6406289 76.3660022,48.8354067 L76.3660022,21.4106511 C76.3660022,17.6855622 73.3356244,14.6551844 69.6088244,14.6551844 L21.2268467,14.6551844 Z M21.2182911,58.18834 C16.0387578,58.1849178 11.8260022,53.9670289 11.8260022,48.7857844 L11.8260022,21.4106511 C11.8260022,16.2259844 16.0438911,12.0080956 21.2268467,12.0080956 L69.6088244,12.0080956 C74.7934911,12.0080956 79.01138,16.2259844 79.01138,21.4106511 L79.01138,48.8354067 C79.01138,51.3473178 78.0326244,53.7103622 76.25478,55.4864956 C74.4803578,57.2609178 72.1190244,58.2379622 69.6105356,58.2379622 L21.2182911,58.18834 Z"
        />
        <path
          d="M41.8701733,26.9601111 L41.8701733,42.5962444 L54.5580622,34.2100889 L41.8701733,26.9601111 Z M39.2230844,47.5156889 L39.2230844,22.4 L59.60584,34.0492444 L39.2230844,47.5156889 Z"
        />
      </g>
    </svg>
  );
};

Video.defaultProps = {
  width: '91px',
  height: '70px',
  fill: theme.colors.white,
};
