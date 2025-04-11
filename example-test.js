import { setupTest } from 'my-app-name/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | flash-messages', function(hooks) {
  setupTest(hooks);

  test('should be able to buffer messages', function(assert) {
    let service = this.owner.lookup('service:flash-messages');

    service.add('Hello');
    service.add('World!');

    assert.deepEqual(service.get('messages'), ['Hello', 'World!']);
  });
});