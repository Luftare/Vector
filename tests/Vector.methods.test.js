const Vector = require('../Vector');

describe('Vector setters', () => {
  it('add', () => {
    const a = new Vector(5, 5);
    const b = new Vector(-2, 2);

    a.add(b);

    expect(a).toEqual({ x: 3, y: 7 });
  });

  it('subtract', () => {
    const a = new Vector(8, 5);
    const b = new Vector(1, 2);

    a.subtract(b);

    expect(a).toEqual({ x: 7, y: 3 });
  });
})