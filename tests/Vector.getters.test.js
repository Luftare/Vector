const Vector = require('../Vector');

describe('Vector getters', () => {
  it('angle', () => {
    const vector = new Vector(8, 5);

    const angle = vector.angle;

    expect(angle).toBeCloseTo(0.5585993153435624, 5);
  });

  it('length', () => {
    const vector = new Vector(8, 5);

    const length = vector.length;

    expect(length).toBeCloseTo(9.433981132056603, 5);
  });

  it('lengthSq', () => {
    const vector = new Vector(8, 5);

    const lengthSq = vector.lengthSq;

    expect(lengthSq).toBeCloseTo(89, 5);
  });

  it('normal', () => {
    const vector = new Vector(8, 5);

    const normal = vector.normal;

    expect(normal).toEqual({ x: 5, y: 8 });
  });
})