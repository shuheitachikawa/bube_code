const cats = [
  { name: 'ぶべ', age: 2 },
  { name: 'くろ', age: 3 },
  { name: 'たま', age: 1 },
];

// すべての猫の年齢が2歳以上かどうかを判定する
const isAllCatsOverTwo = cats.every(cat => cat.age >= 2);
// -> false

// すべての猫の名前がひらがな表記かどうかを判定する
const isAllCatsNameHiragana = cats.every(cat => cat.name.match(/^[ぁ-んー]*$/));
// -> true

/* 
  応用🐱
*/
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [5, 7, 6];
const arr3 = [5, 8, 7];

// arr2 は arr1 の部分集合かどうかを判定する
const isSubset2 = arr2.every((element) => array1.includes(element));
// -> true ※5, 7, 6 は arr1 の要素である

// arr3 は arr1 の部分集合かどうかを判定する
const isSubset3 = arr3.every((element) => array1.includes(element));
// -> false ※8 は arr1 の要素でない
