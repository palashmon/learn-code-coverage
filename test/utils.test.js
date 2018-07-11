import { clone } from '../src/utils';
import { assert } from 'chai';

describe('Test Utils JS file', function() {
  it('Test Clone feature', () => {
    assert.deepEqual(clone(), undefined);
    assert.deepEqual(clone('palash'), 'palash');
    assert.deepEqual(clone([1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(clone({ id: 23, active: true }), { id: 23, active: true });
  });
});
