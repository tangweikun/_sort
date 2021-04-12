function _sort(list) {
  const firstEle = list.slice(0, 1)[0];
  const lastEle = list.slice(-1)[0];

  // Decide whether to ascend or descend
  const lastMinusFirst = lastEle - firstEle;

  const res = list.map((n) => Math.pow(n, 2));

  for (let i = 1; i < res.length; i++) {
    const temp = res[i];
    let j = i;

    while (lastMinusFirst >= 0 ? res[j - 1] > temp : res[j - 1] < temp) {
      res[j] = res[j - 1];
      j--;
    }
    res[j] = temp;
  }

  return res;
}

module.exports = _sort;
