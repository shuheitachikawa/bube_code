const a = 2;
const fn1 = () => {
  const b = 1;
  const fn2 = () => {
    const c = 3;
    console.log(b);
  };
  fn2();
};
fn1();
