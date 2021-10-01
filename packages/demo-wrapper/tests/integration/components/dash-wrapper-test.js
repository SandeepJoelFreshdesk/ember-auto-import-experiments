import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
// import * as Highcharts from 'highcharts';

module('Integration | Component | dash-wrapper', function(hooks) {
  setupRenderingTest(hooks);
  // window.Highcharts = Highcharts;

  test('Using highcharts test helpers inside addon', async function(assert) {
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
    await render(hbs`{{high-charts chartOptions=chartOptions content=chartData}}`);

    assert.includes(this.element.textContent.trim(), 'Created with Highcharts');

    // Template block usage:
    // await render(hbs`
    //   {{#dash-wrapper}}
    //     template block text
    //   {{/dash-wrapper}}
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
