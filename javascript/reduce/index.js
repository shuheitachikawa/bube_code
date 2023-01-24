const numbers = [1, 2, 3, 4, 5];

// 合計値を算出する
const sum = numbers.reduce((total, number) => {
  return total + number;
});

console.log(sum); // 15



const numbers2 = [1, 2, 3, 4, 5];

// 合計値を算出する(初期値を10に設定)
const sum2 = numbers.reduce((total, number) => {
  return total + number;
}, 10);

console.log(sum); // 25

