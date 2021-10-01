import Component from '@ember/component';
import layout from '../templates/components/dash-wrapper';
// import * as Highcharts from 'highcharts';
// console.log('highcharts', window.Highcharts = Highcharts);

export default Component.extend({
  layout,
  didInsertElement() {
    this._super(...arguments);
    // return import('highcharts').then((module) => {
      // window.Highcharts = module.default;
    // });
  }
});
