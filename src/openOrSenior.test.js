const openOrSenior = require('./openOrSenior');

describe('openOrSenior', () => {
  it("[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]] should return ['Open', 'Senior', 'Open', 'Senior']", () => {
    expect(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
  });
});
