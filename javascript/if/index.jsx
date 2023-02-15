// 等価演算子
1 == 1 // true
1 == 2 // false
1 == "1" // true

// 厳密等価演算子
1 === 1 // true
1 === 2 // false
1 === "1" // false (ここが違う)

// ログイン中ステータスを表示するコンポーネント
const LoginStatusText = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    // ログイン中の場合、以下を描画
    return <p>ログイン中です</p>
  }
  
  // ログインしていない場合、以下を描画
  return <p>ログインしていません</p>
};

LoginStatusText({ isLoggedIn: true })
// -> <p>ログイン中です</p>

LoginStatusText({ isLoggedIn: false })
// -> <p>ログインしていません</p>


