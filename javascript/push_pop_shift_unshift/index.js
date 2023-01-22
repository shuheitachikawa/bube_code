// push (末尾に要素を追加)
const catsA = ["くろ", "ぶべ", "たま"];
catsA.push("ぽち");
console.log(catsA); // ["くろ", "ぶべ", "たま", "ぽち"]

// pop (末尾の要素を削除)
const catsB = ["くろ", "ぶべ", "たま"];
catsB.pop();
console.log(catsB); // ["くろ", "ぶべ"]

// shift (先頭の要素を削除)
const catsC = ["くろ", "ぶべ", "たま"];
catsC.shift();
console.log(catsC); // ["ぶべ", "たま"]

// unshift (先頭に要素を追加)
const catsD = ["くろ", "ぶべ", "たま"];
catsD.unshift("ぽち");
console.log(catsD); // ["ぽち", "くろ", "ぶべ", "たま"]


// 私の猫たち
const myCats = [];

// あなたの猫たち
const yourCats =[
  { name: "くろ", color: "黒"},
  { name: "ぶべ", color: "白"},
  { name: "たま", color: "茶"},
];

// 黒い猫が欲しいのでさがす
const blackCat = yourCats.find((cat) => {
  return cat.color === "黒";
});

// 黒い猫がいない場合、returnで処理を終了する
if (blackCat === undefined) return;

// 黒い猫を見つけたので、myCatsに追加する
myCats.push(blackCat);

console.log(myCats); // [{ name: "くろ", color: "黒"}]


const catsE = ["くろ", "ぶべ"];
catsE.push("たま");
console.log(catsE);
// ["くろ", "ぶべ", "たま"] ->書き変わってしまっている

// 回避策1 -> concatを使う
const catsF = ["くろ", "ぶべ"];
const catsG = catsF.concat("たま");
console.log(catsG); // ["くろ", "ぶべ", "たま"]
console.log(catsF); // ["くろ", "ぶべ"] ->書き変わらない

// 回避策2 -> スプレッド構文を使う
const catsI = [...catsF, "たま"];
console.log(catsI); // ["くろ", "ぶべ", "たま"]
console.log(catsF); // ["くろ", "ぶべ"] ->書き変わらない

