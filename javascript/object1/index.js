const name = "ぶべ"; // 年齢

const age = "2"; // 年齢

// 私の猫
const myCat = {
  name: "ぶべ",
  age: 2,
  favoriteFood: "魚",
  color: "black"
};

// ドットアクセス
console.log(myCat.name); // "ぶべ"

// keyアクセス
console.log(myCat["name"]) // "ぶべ"

// 私の猫
const myCat2 = {
  name: "ぶべ",
  age: 2,
  favoriteFoods: ["魚", "チーズ", "チュール"],
  greet: function() {
    console.log("にゃー");
  }
};

console.log(myCat2.favoriteFoods[0]); // "魚"

myCat2.greet(); // "にゃー"


// 私の猫
const me = {
  name: "ぶべコード",
  cat: {
    name: "ぶべ",
    age: 2,
    favoriteFood: {
      name: "ちゅーる",
      price: 100
    }
  }
};

// 私の猫の一番好きな食べ物の値段
console.log(me.cat.favoriteFood.price); // 100

