import { defineConfig } from 'dumi';
import pkg from './package.json';

function fileTypeLoader(config: any) {
  config.module
    .rule('file-type')
    .test(/.(docx?|mp3|mp4|ofd|pdf|xlsx?|zip)$/)
    .use('file-type-loader')
    .loader('file-loader');
}

const isDev = process.env.NODE_ENV === 'development';

const MajorVersionNumber = Number(pkg.version.split('.')[0]);
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;

const preMajorVersionNumber = MajorVersionNumber - 1;
const preVersionSiteRoot = `refs/heads/v${preMajorVersionNumber}`;

const version = process.env.BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const serverRootDirect = !isDev ? `https://doly-dev.github.io/${pkg.name}/` : '/';
const logo = 'https://doly-dev.github.io/logo.png';
const favicon = 'https://doly-dev.github.io/favicon.png';

const publicPath = serverRootDirect + version + '/';

const prodConfig: any = {};

if (!isDev) {
  prodConfig.headScripts = [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-Z3NN7XXV9E'
    },
    {
      content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Z3NN7XXV9E');
    `
    },
    {
      src: 'https://cdn.bootcdn.net/ajax/libs/vConsole/3.13.0/vconsole.min.js'
    },
    {
      content: 'var vConsole = new window.VConsole();'
    }
  ];
  prodConfig.chunks = ['vendors', 'umi'];
  prodConfig.chainWebpack = function (config) {
    fileTypeLoader(config);
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true
            }
          }
        }
      }
    });
  };
}

export default defineConfig({
  title: pkg.name,
  publicPath,
  logo,
  favicon,
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash'
  },
  hash: true,

  // esbuild: isDev,
  nodeModulesTransform: {
    type: isDev ? 'none' : 'all'
  },
  targets: {
    ie: 11
  },
  polyfill: {
    imports: ['element-remove', 'core-js']
  },
  navs: [
    {
      title: '指南',
      path: '/guide'
    },
    {
      title: '组件',
      path: '/components'
    },
    {
      title: '更多场景',
      path: '/scenes'
    },
    // {
    //   title: `v${preMajorVersionNumber}.x`,
    //   path: `https://doly-dev.github.io/${pkg.name}/${preVersionSiteRoot}/index.html`
    // },
    {
      title: 'GitHub',
      path: `https://github.com/doly-dev/${pkg.name}`
    },
    {
      title: '更新日志',
      path: `https://github.com/doly-dev/${pkg.name}/releases`
    }
  ],
  chainWebpack(config) {
    fileTypeLoader(config);
  },
  ...prodConfig
  // more config: https://d.umijs.org/config
});
