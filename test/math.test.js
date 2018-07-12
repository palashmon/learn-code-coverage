import { add, multiply, subtract } from '../src/math';
import { assert } from 'chai';

describe('Test Math JS file', function() {
  it('Test Add feature', () => {
    assert.equal(add(1, 2), 3);
  });

  it('Test Multiply feature', () => {
    assert.equal(multiply(3, 5), 15);
  });

  it('Test Subtract feature', () => {
    assert.equal(subtract(5, 3), 2);
  });
});
