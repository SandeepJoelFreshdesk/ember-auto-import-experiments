'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
    autoImport: {
      // added below configuration because of -> https://github.com/ef4/ember-auto-import/issues/133
      webpack: {
        optimization: {
          splitChunks: {
            chunks: 'async'
          }
        }
      }
    }
  }
};
