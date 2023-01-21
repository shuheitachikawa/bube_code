const cats = [
  { name: 'ぶべ', age: 2 },
  { name: 'くろ', age: 3 },
  { name: 'たま', age: 1 },
];

// いずれかの猫の年齢が2歳以上かどうかを判定する
const isAnyCatsOverTwo = cats.some(cat => cat.age >= 2);
// -> true

// いずれかの猫の名前に”犬”が含まれるかどうかを判定する
const isAnyCatsIncludesDog = cats.some(cat => cat.name.includes("犬"));
// -> false

/* 
  存在チェックの関数を作ってみる
*/
const isExist = (array, keyword) => {
  return array.some((element) => element === keyword);
}

isExist(cats, "ぶべ");
// -> true

isExist(cats, "ぽち");
// -> false

