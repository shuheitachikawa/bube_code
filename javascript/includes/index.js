// p.1
const catsA = ["くろ", "ぶべ", "たま"];

console.log(catsA.includes("くろ")); // true

console.log(catsA.includes("ぽち")); // false

// p.2
const catsB = ["くろ", "ぶべ", "たま"];

console.log(catsB.find((cat) => cat === "くろ"));
// "くろ"

console.log(catsB.includes("くろ"));
// true

// p.3
const catsC = ["くろ", "ぶべ", "たま"];

console.log(catsA.includes("くろ")); // true

console.log(catsA.includes("くろ", 2)); // false

// p.4
const catA = "わたしはぶべ猫です。"

console.log(cat.includes("ぶべ猫")); // true

console.log(cat.includes("くろ猫")); // false

// p.5
const catB = "My name is BUBENEKO."

console.log(catB.includes("BUBENEKO"));
// true

console.log(catB.includes("bubeneko"));
// false

console.log(catB.toLowerCase().includes("bubeneko"));
// true

