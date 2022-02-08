import * as React from 'react';
import { Image } from 'mobile-more';

function Demo() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
      height={128}
      border="dashed"
      preview
      fit="cover"
    />
  );
}

export default Demo;
