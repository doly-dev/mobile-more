import { CSSProperties } from 'react';

export interface CSSPropertiesWithVariable extends CSSProperties {
  [key: `--${string}`]: string | number;
}
