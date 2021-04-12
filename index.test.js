// const _sort = require('./index.basic');
const _sort = require('.');

describe('_sort', () => {
  it('should be defined', () => {
    expect(_sort).toBeDefined();
  });

  it('empty list, should equal []', () => {
    const originList = [];
    expect(_sort(originList)).toEqual([]);
  });

  it('only have one element, should equal [4]', () => {
    const originList = [-2];
    expect(_sort(originList)).toEqual([4]);
  });
});

describe('All elements are positive integers', () => {
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

  it('ascending sort, should equal [0, 1, 4, 16, 25, 36]', () => {
    const originList = [-6, -5, -4, 0, 1, 2];
    expect(_sort(originList)).toEqual([0, 1, 4, 16, 25, 36]);
  });

  it('ascending sort, should equal [0, 1, 4, 16, 25, 36]', () => {
    const originList = [-6, -5, -4, 0, 1, 2];
    expect(_sort(originList)).toEqual([0, 1, 4, 16, 25, 36]);
  });

  it('ascending sort, should equal [0, 1, 16, 25, 36, 49]', () => {
    const originList = [-6, -4, 0, 1, 5, 7];
    expect(_sort(originList)).toEqual([0, 1, 16, 25, 36, 49]);
  });

  it('ascending sort, should equal [0, 1, 4, 16, 25, 36]', () => {
    const originList = [7, 2, 1, 0, -4, -5, -6];
    expect(_sort(originList)).toEqual([49, 36, 25, 16, 4, 1, 0]);
  });
});
