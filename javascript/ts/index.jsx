const StatuText = ({ statu }) => {
  switch (statu) {
    case 1:
      return <div className="text-gray">準備中</div>
    case 2:
      return <div className="text-blue">実行中</div>
    case 3:
      return <div className="text-green">完了</div>
    default:
      return <div className="text-red">エラー</div>
  }
}

return (
  <StatuText status={1} />
);





