const BABEL_COMMON_CONFIG = {
  // extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true
};

export default [
  {
    esm: {
      type: 'babel',
      importLibToEs: true
    },
    ...BABEL_COMMON_CONFIG
  },
  {
    cjs: {
      type: 'babel',
      lazy: true
    },
    ...BABEL_COMMON_CONFIG
  }
  // {
  //   extraExternals: ['react', 'react-dom'],
  //   extractCSS: true,
  //   umd: {
  //     globals: {
  //       react: 'window.React',
  //       'react-dom': 'window.ReactDOM'
  //     },
  //     minFile: true,
  //     file: 'high',
  //     name: 'high',
  //     sourcemap: true
  //   }
  // }
];
