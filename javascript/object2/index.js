
yourCat = {
  name: myCat.name,
  age: myCat.age,
  color: myCat.color,
  favoriteFood: myCat.favoriteFood
};

const myCat = { name: "ぶべ", age: 2 };

yourCat = { ...myCat, name: "くろ" };

console.log(myCat.name); // ぶべ
console.log(yourCat.name); // くろ

const myCats = ["ぶべ", "くろ", "たま"];

const yourCats = [...myCats];

yourCats.push("ぽち");

console.log(myCats); // ["ぶべ", "くろ", "たま"]
console.log(yourCats); // ["ぶべ", "くろ", "たま", "ぽち"]

