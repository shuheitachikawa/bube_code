// const name = "ぶべ"; // 年齢

// // const age = "2"; // 年齢

// // 私の猫
// // const myCat = {
// //   name: "ぶべ",
// //   age: 2,
// //   favoriteFood: "魚",
// //   color: "black"
// // };

// // ドットアクセス
// console.log(myCat.name); // "ぶべ"

// // keyアクセス
// console.log(myCat["name"]) // "ぶべ"

// // 私の猫
// // const myCat2 = {
// //   name: "ぶべ",
// //   age: 2,
// //   favoriteFoods: ["魚", "チーズ", "チュール"],
// //   greet: function() {
// //     console.log("にゃー");
// //   }
// // };

// console.log(myCat2.favoriteFoods[0]); // "魚"

// myCat2.greet(); // "にゃー"


const myCat = {
  name: "ぶべ",
  age: 2,
};

// key名のリストを配列として取得
Object.keys(myCat); // ["name", "age"]

// valueのリストを配列として取得
Object.values(myCat); // ["ぶべ", 2]

// keyとvalueのリストを配列として取得
Object.entries(myCat); // [["name", "ぶべ"], ["age", 2]]

// スプレッド構文を使った値の取得
const { name, age } = myCat;
console.log(age); // 2

