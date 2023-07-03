function fib(n) {
  result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      result.push(i);
    } else {
      let nextNumber = result[i - 1] + result[i - 2];
      result.push(nextNumber);
    }
  }

  return result;
}

function fibRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibRec(n - 1) + fibRec(n - 2);
  }
}

console.log(fibRec(7));
