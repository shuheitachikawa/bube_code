// 1歳の黒猫かどうかを判定する
const isAge1BlackCat = (cat) => {
  if (cat.age === 1) {
    if (cat.color === "黒") {
      return true
    }
  } else {
    return false
  }
}

const catA = { age: 1, color: "黒" };
isAge1BlackCat(catA); // true

const catB = { age: 1, color: "白" };
isAge1BlackCat(catB); // false

