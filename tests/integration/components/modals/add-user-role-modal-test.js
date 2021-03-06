import { module, test } from 'qunit';
import { setupIntegrationTest } from 'open-event-frontend/tests/helpers/setup-integration-test';
import hbs from 'htmlbars-inline-precompile';
import { render } from '@ember/test-helpers';

module('Integration | Component | modals/add user role modal', function(hooks) {
  setupIntegrationTest(hooks);

  test('it renders', async function(assert) {
    this.set('isOpen', false);
    await render(hbs`{{modals/add-user-role-modal isOpen=isOpen}}`);
    assert.ok(this.element.innerHTML.trim().includes('Add Role'));
  });
});
