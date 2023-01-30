// // 私の猫
// const myCat = {
//   name: "ぶべ",
//   age: 2,
//   favoriteFood: "魚",
//   color: "黒"
// };

// const { name, age, ...restParameters } = myCat;

// console.log(restParameters);
// => { favoriteFood: '魚', color: '黒' }

// 3
// const { name, ...restParameters } = myCat;

// console.log(restParameters);
// // => { age: 2, favoriteFood: '魚', color: 'black' }

// 4 // 別名をつける
// const {
//   name: catName,
//   age: catAge,
//   favoriteFood: catFavoriteFood,
//   color: catColor
// } = myCat;

// console.log(catAge); // => 2


// 5
// const cats = ["ぶべ", "くろ", "たま"];

// const [cat1, cat2, cat3] = cats;

// console.log(cat1); // => ぶべ
// console.log(cat2); // => くろ
// console.log(cat3); // => たま

// 6
// const cats = ["ぶべ", "くろ"];

// const [cat1, cat2, cat3] = cats;
// console.log(cat3) // => undefined

// 6
// const cats = ["ぶべ", "くろ", "たま"];

// const [cat1, ...restCats] = cats;
// console.log(restCats) // => [ 'くろ', 'たま' ]

// 7

// const fullName = "山田 太郎";

// const [familyName, firstName] = fullName.split(' ');

// console.log(familyName); // => 山田
// console.log(firstName); // => 太郎


// フルネームを苗字と名前に分割して管理できるようにする
const fullNames = [
  "山田 太郎",
  "高橋 花子",
  "山口 次郎",
  "佐藤 三郎"
];

const splitNames = fullNames.map(fullName => {
  const [familyNmae, firstName] = fullName.split(' ');
  return { familyNmae, firstName };
});

console.log(splitNames);
// => [
//   { familyNmae: '山田', firstName: '太郎' },
//   { familyNmae: '高橋', firstName: '花子' },
//   { familyNmae: '山口', firstName: '次郎' },
//   { familyNmae: '佐藤', firstName: '三郎' }
// ]


