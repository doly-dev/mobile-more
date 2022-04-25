import * as React from 'react';
import Icon, { IconProps } from 'doly-icons';

const IconNotice: React.FC<Omit<IconProps, 'component'>> = (props) => {
  return (
    <Icon
      component={
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
        >
          <path
            d="M640 954.026667a130.133333 130.133333 0 0 1-68.693333-20.053334L243.626667 725.333333H128a128 128 0 0 1-128-128v-170.666666a128 128 0 0 1 128-128h115.626667l327.68-208.64a128 128 0 0 1 96.426666-17.066667A128 128 0 0 1 747.946667 128 128 128 0 0 1 768 197.973333v628.053334a128 128 0 0 1-128 128z m-341.333333-294.826667l318.293333 202.666667a42.666667 42.666667 0 0 0 23.04 6.826666 42.666667 42.666667 0 0 0 42.666667-42.666666V197.973333a39.253333 39.253333 0 0 0-6.826667-22.613333 42.666667 42.666667 0 0 0-26.453333-18.773333 42.666667 42.666667 0 0 0-32.426667 5.546666L298.666667 364.8zM128 384a42.666667 42.666667 0 0 0-42.666667 42.666667v170.666666a42.666667 42.666667 0 0 0 42.666667 42.666667h85.333333V384z m853.333333 384a45.653333 45.653333 0 0 1-14.933333-2.56L853.333333 725.333333a42.666667 42.666667 0 0 1-28.16-40.106666 35.413333 35.413333 0 0 1 2.986667-14.506667 42.666667 42.666667 0 0 1 54.613333-25.173333l113.92 42.666666A42.666667 42.666667 0 0 1 1024 725.333333a45.653333 45.653333 0 0 1-2.56 14.933334A42.666667 42.666667 0 0 1 981.333333 768z m0-213.333333h-113.92a42.666667 42.666667 0 0 1 0-85.333334H981.333333a42.666667 42.666667 0 0 1 0 85.333334z m-113.92-170.666667a42.666667 42.666667 0 0 1-39.68-27.733333 38.826667 38.826667 0 0 1-2.986666-14.933334 42.666667 42.666667 0 0 1 28.586666-40.106666l113.92-42.666667a42.666667 42.666667 0 0 1 55.04 25.173333A42.666667 42.666667 0 0 1 1024 298.666667a42.666667 42.666667 0 0 1-27.733333 40.106666l-113.92 42.666667a35.84 35.84 0 0 1-14.933334 2.56z"
            fill="currentColor"
          />
        </svg>
      }
      {...props}
    />
  );
};

export default IconNotice;
