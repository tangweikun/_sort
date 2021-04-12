function _sort(list) {
  return square(basicSort(list));
}

function square(list) {
  return list.map((n) => Math.pow(n, 2));
}

function basicSort(list) {
  const firstEle = list.slice(0, 1)[0];
  const lastEle = list.slice(-1)[0];

  // Decide whether to ascend or descend
  const isAsc = lastEle - firstEle >= 0;

  // Time Complicity: O(n)
  // ascending sort, all non-negative integers
  // descending sort, all non-negative integers
  if ((isAsc && firstEle >= 0) || (!isAsc && lastEle >= 0)) {
    return list;
  }

  // Time Complicity: O(n)
  // ascending sort, all non-positive integers
  // descending sort, all non-positive integers
  if ((isAsc && lastEle <= 0) || (!isAsc && firstEle <= 0)) {
    const res = [];
    for (let i = list.length - 1; i >= 0; i--) {
      res.push(list[i]);
    }
    return res;
  }

  // Time Complicity: O(n ^ 2)
  const res = [...list];
  for (let i = 1; i < res.length; i++) {
    const temp = Math.abs(res[i]);
    let j = i;

    while (isAsc ? Math.abs(res[j - 1]) > temp : Math.abs(res[j - 1]) < temp) {
      res[j] = res[j - 1];
      j--;
    }
    res[j] = temp;
  }

  return res;
}

module.exports = _sort;
