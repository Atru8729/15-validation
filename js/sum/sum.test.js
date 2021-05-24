const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 0.2 + 0.7 to equal 0.9', () => {
    expect(sum(0.2, 0.7)).toBeCloseTo(0.9, 5);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});