const age = 20;

if (age >= 20) {
  console.log("お酒飲めます");
} else {
  console.log("お酒飲めません");
}
// ↓三項演算子に書き換え可能
console.log(age >= 20 ? "お酒飲めます" : "お酒飲めません");

if (age < 20) {
  console.log("10代です。");
} else if (age < 30) {
  console.log("20代です。");
} else {
  console.log("30代以上です。");
}


console.log(
  age < 20 ? 
    "10代です。" : 
    age < 30 ? 
      "20代です。" : 
      "30代以上です。"
);

const text =
  age >= 20 && sex === "female" ?
    "成人女性です" :
     "未成年もしくは男性です";


