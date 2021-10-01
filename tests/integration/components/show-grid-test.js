import { module, test } from 'qunit';
// import { GridStack } from 'gridstack';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | show-grid', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{show-grid}}`);

    assert.includes(this.element.textContent.trim(), 'We shall solve this');
  });
});
