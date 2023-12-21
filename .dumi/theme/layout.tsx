// .dumi/theme/layout.tsx(本地主题) 或 src/layout.tsx(主题包)
import React from 'react';
import type { IRouteComponentProps } from '@umijs/types';
import Layout from 'dumi-theme-default/src/layout';
import { usePrefersColor } from 'dumi/theme';

export default ({ children, ...props }: IRouteComponentProps) => {
  const [theme] = usePrefersColor();

  React.useEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      theme !== 'dark' ? 'light' : 'dark'
    );
  }, [theme]);

  return <Layout {...props}>{children}</Layout>;
};
