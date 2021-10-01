import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
// import * as Highcharts from 'highcharts';
import { setupHighCharts } from 'inside-addon/test-support';
// import { setupHighCharts } from 'inside-addon';

module('Integration | Component | show-chart', function(hooks) {
  setupRenderingTest(hooks);
  // window.Highcharts = Highcharts
  setupHighCharts(hooks);

  test('it renders', async function(assert) {
    this.set('chartOptions', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      }
    })
    this.set('chartData', [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }])
    await render(hbs`{{show-chart chartOptions=chartOptions chartData=chartData }}`);
    assert.includes(this.element.textContent.trim(), 'Created with Highcharts');
  });
});
