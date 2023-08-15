const openOrSenior = require('./openOrSenior');

describe('openOrSenior', () => {
  it("[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]] should return ['Open', 'Senior', 'Open', 'Senior']", () => {
    expect(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]])).toStrictEqual(["Open", "Open", "Senior", "Open", "Open", "Senior"]);
  });

  it("[[45, 12],[55, 21],[19, -2],[104, 20]] should return ['Open', 'Senior', 'Open', 'Senior']", () => {
    expect(openOrSenior([[45, 12],[55, 21],[19, -2],[104, 20]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
  });

  it("[[3, 12],[55, 1],[91, -2],[53, 23]] should return ['Open', 'Open', 'Open', 'Open']", () => {
    expect(openOrSenior([[3, 12],[55, 1],[91, -2],[53, 23]])).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
  });

  it("[[59, 12],[55, -1],[12, -2],[12, 12]] should return ['Senior', 'Open', 'Open', 'Open']", () => {
    expect(openOrSenior([[59, 12],[55, -1],[12, -2],[12, 12]])).toStrictEqual(['Senior', 'Open', 'Open', 'Open']);
  });
});
