const cats = ["ぶべ", "くろ", "たま"];

// 例1) 配列を結合して文字列に変換する
const catsString = cats.join("と、");
// -> "ぶべと、くろと、たま"

// 例2) 文字列を分割して配列に変換する
const catsArray = catsString.split("と、");
// -> ["ぶべ", "くろ", "たま"]

/*
  実用例
  Instagramの投稿URLから、投稿IDを取得する
*/
// フィードのURL
const url = "https://www.instagram.com/p/Cnq42skN7rM/";

const urlPartArr = url.split("/");
// -> ["https:", "", "www.instagram.com", "p", "Cnq42skN7rM", ""]

const postId = urlPartArr[4];
// -> "Cnq42skN7rM"

