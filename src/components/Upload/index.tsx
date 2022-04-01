import * as React from 'react';
import classnames from 'classnames';
import { prefixClass } from '../../config/prefixClass';
import './index.less';

const prefixCls = `${prefixClass}-upload`;

export interface UploadProps
  extends Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'accept' | 'multiple' | 'capture' | 'id' | 'name'
    >,
    Pick<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  className?: string;
  style?: React.CSSProperties;
  block?: boolean;
  onChange?: (files: FileList | null) => void;
}

const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ className, style, block, onChange, children, ...restProps }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    React.useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.files);
    };

    return (
      <span
        className={classnames(prefixCls, { [`${prefixCls}-block`]: block }, className)}
        style={style}
        role="button"
      >
        <input
          type="file"
          {...restProps}
          onChange={handleChange}
          style={{ display: 'none' }}
          ref={inputRef}
        />
        <div className={`${prefixCls}-trigger`} onClick={handleClick}>
          {children}
        </div>
      </span>
    );
  }
);

Upload.displayName = 'Upload';

export default Upload;
