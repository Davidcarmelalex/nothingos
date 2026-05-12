describe('Product validation', () => {
  const validateProduct = (p: any) => !!p.name && typeof p.price === 'string';

  it('valid product passes', () => {
    expect(validateProduct({ name: 'Nothing Band X1', price: '$149' })).toBe(true);
  });
  it('missing name fails', () => {
    expect(validateProduct({ price: '$149' })).toBe(false);
  });
  it('missing price fails', () => {
    expect(validateProduct({ name: 'Nothing Band X1' })).toBe(false);
  });
});
