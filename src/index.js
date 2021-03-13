const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

// eslint-disable-next-line func-names
const chainWebpack = function (ctx, chain) {
  const rule = chain.module.rule('md')
    .test(/\.md$/)
    .pre();

  rule.use('v-loader')
    .loader('vue-loader')
    .options({
      productionMode: ctx.prod,
      compilerOptions: {
        preserveWhitespace: false,
      },
      transformAssetUrls: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href',
      },
    });

  rule.use('ware-loader')
    .loader('ware-loader')
    .options({
      raw: true,
      middleware(source) {
        // use markdown-it to render the markdown file to html, then
        // surround the output of that that with Vue template syntax
        // so it can be processed by the 'vue-loader'
        return `<template><div>${md.render(source)}</div></template>`;
      },
    });
};
