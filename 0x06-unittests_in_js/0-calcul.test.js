const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two rounded numbers', function() {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should round the numbers and return the sum', function() {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should handle decimal inputs and return the sum of rounded numbers', function() {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should handle decimal inputs and return the sum of rounded numbers', function() {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });
});
