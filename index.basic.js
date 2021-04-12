// Time Complicity: O(n ^ 2)

function _sort(list) {
  const firstEle = list.slice(0, 1)[0];
  const lastEle = list.slice(-1)[0];

  // Decide whether to ascend or descend
  const isAscending = lastEle - firstEle >= 0;

  // generate a new list
  const res = [...list];

  for (let i = 1; i < res.length; i++) {
    const temp = Math.abs(res[i]);
    let j = i;

    while (isAscending ? Math.abs(res[j - 1]) > temp : Math.abs(res[j - 1]) < temp) {
      res[j] = res[j - 1];
      j--;
    }
    res[j] = temp;
  }

  return res.map((n) => Math.pow(n, 2));
}

module.exports = _sort;
