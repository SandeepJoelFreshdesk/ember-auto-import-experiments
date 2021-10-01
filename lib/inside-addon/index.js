/* eslint-env node */
'use strict';

module.exports = {
  name: 'inside-addon',

  isDevelopingAddon() {
    return true;
  },

  // treeForAddonTestSupport(tree) {
  //   // intentionally not calling _super here
  //   // so that can have our `import`'s be
  //   // import { addFeatures } from '@freshdesk/test-helpers';

  //   const Funnel = require('broccoli-funnel');

  //   let namespacedTree = new Funnel(tree, {
  //     srcDir: '/',
  //     destDir: `/${this.moduleName()}`,
  //     annotation: `Addon#treeForTestSupport (${this.name})`,
  //   });

  //   return this.preprocessJs(namespacedTree, '/', this.name, {
  //     registry: this.registry,
  //   });

  // },

  // options: {
  //   autoImport: {
  //     webpack: {
  //       optimization: {
  //         splitChunks: {
  //           chunks: 'async'
  //         }
  //       }
  //     }
  //   }
  // }
  // included(app, parentAddon) {
  // // let target = (parentAddon || app);
  // // target.options = target.options || {};
  // // target.options.babel = target.options.babel || { includePolyfill: true };
  //   return this._super.included.apply(this, arguments);
  // }
};
