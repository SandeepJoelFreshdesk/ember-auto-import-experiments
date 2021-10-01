import * as Highcharts from 'highcharts';
/**
 * Setup highcharts for your unit and integration tests.
 *
 * @param {Object} hooks
 */
const setupHighCharts = function (hooks) {
  hooks.beforeEach(function () {
    window.Highcharts = Highcharts;
  });

  hooks.afterEach(function () {
    window.Highcharts = null;
  });
};

export { setupHighCharts };
