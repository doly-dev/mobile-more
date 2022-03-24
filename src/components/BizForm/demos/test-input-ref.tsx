import * as React from 'react';

type InputRef = {
  focus: () => void;
  element: HTMLInputElement | null;
};

const Input = React.forwardRef<InputRef, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(
      ref,
      () => ({
        focus: () => inputRef.current?.focus(),
        element: inputRef.current
      }),
      []
    );

    return <input type="text" ref={inputRef} {...props} />;
  }
);

Input.displayName = 'Input';

function Demo() {
  const ref = React.useRef<InputRef>(null);

  React.useEffect(() => {
    console.log(ref.current); // 可以获取到element
  }, []);

  return <Input ref={ref} />;
}

export default Demo;
