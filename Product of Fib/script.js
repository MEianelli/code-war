function productFib(prod) {
  let fib = [0, 1];
  while (fib[fib.length - 1] < prod) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  for (let i = 1; i < fib.length; i += 1) {
    if (prod / fib[i] === fib[i + 1]) {
      return [fib[i], fib[i + 1], true];
    }
    if (prod / fib[i] < fib[i + 1]) {
      return [fib[i], fib[i + 1], false];
    }
  }

  return;
}

console.log(productFib(5895));

/*
  
  Test.assertSimilar(productFib(4895), [55, 89, true])
Test.assertSimilar(productFib(5895), [89, 144, false])
Test.assertSimilar(productFib(74049690), [6765, 10946, true])
Test.assertSimilar(productFib(84049690), [10946, 17711, false])
Test.assertSimilar(productFib(193864606), [10946, 17711, true])
Test.assertSimilar(productFib(447577), [610, 987, false])
Test.assertSimilar(productFib(602070), [610, 987, true])
  */
