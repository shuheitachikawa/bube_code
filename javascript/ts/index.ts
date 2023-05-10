/** aとbを足した値を返却する関数 */
function sum(a: number, b: number): number {
  return a + b;
}

// ①
console.log(sum(1, 2)); // 3と表示される

// ②
console.log(sum(1, "hoge")); // エラーで実行されない

