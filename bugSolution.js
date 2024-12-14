function foo(a, b) {
  if (a === null || b === null || a === 0 || b === 0 || a === false || b === false || a === '' || b === '') {
    return null; 
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(0, 2)); // null
console.log(foo(1, 0)); // null
console.log(foo(false, 2));// null
console.log(foo(1, false)); // null
console.log(foo('',2)); // null
console.log(foo(1,'')); // null