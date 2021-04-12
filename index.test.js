const _sort = require('./index.basic');

describe('All elements are positive integers', () => {
  it('should be defined', () => {
    expect(_sort).toBeDefined();
  });

  it('ascending sort, should equal [1, 4, 9]', () => {
    const originList = [1, 2, 3];
    expect(_sort(originList)).toEqual([1, 4, 9]);
  });

  it('ascending sort, should equal [4, 4, 4]', () => {
    const originList = [2, 2, 2];
    expect(_sort(originList)).toEqual([4, 4, 4]);
  });

  it('descending sort, should equal [9, 4, 1]', () => {
    const originList = [3, 2, 1];
    expect(_sort(originList)).toEqual([9, 4, 1]);
  });
});

describe('All elements are negative integers', () => {
  it('descending sort, should equal [9, 4, 1]', () => {
    const originList = [-1, -2, -3];
    expect(_sort(originList)).toEqual([9, 4, 1]);
  });

  it('ascending sort, should equal [4, 4, 4]', () => {
    const originList = [-2, -2, -2];
    expect(_sort(originList)).toEqual([4, 4, 4]);
  });

  it('ascending sort, should equal [1, 4, 9]', () => {
    const originList = [-3, -2, -1];
    expect(_sort(originList)).toEqual([1, 4, 9]);
  });
});

describe('The list contains all integers', () => {
  it('descending sort, should equal [9, 4, 1, 0]', () => {
    const originList = [0, -1, -2, -3];
    expect(_sort(originList)).toEqual([9, 4, 1, 0]);
  });

  it('ascending sort, should equal [0, 1, 4, 9]', () => {
    const originList = [0, 1, 2, 3];
    expect(_sort(originList)).toEqual([0, 1, 4, 9]);
  });

  it('ascending sort, should equal [1, 1, 4, 9]', () => {
    const originList = [-3, -2, -1, 1];
    expect(_sort(originList)).toEqual([1, 1, 4, 9]);
  });

  it('ascending sort, should equal [0, 1, 1, 4, 9]', () => {
    const originList = [-3, -2, -1, 0, 1];
    expect(_sort(originList)).toEqual([0, 1, 1, 4, 9]);
  });
});
