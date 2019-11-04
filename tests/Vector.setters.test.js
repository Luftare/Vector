const Vector = require('../Vector');

describe('Vector setters', () => {

  it('length', () => {
    const vector = new Vector(8, 5);

    vector.length = 100;

    expect(vector.x).toBeCloseTo(84.7998304005088, 5);
    expect(vector.y).toBeCloseTo(52.999894000318, 5);
  });
})