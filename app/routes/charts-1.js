import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this._super(...arguments);
    return import('highcharts').then((module) => {
      window.Highcharts = module.default;
    });
  }
});
